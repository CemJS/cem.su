// ======== audio player ========

export class AudioPlayer extends HTMLElement {
  playing: boolean = false;
  audioContext: any;
  audio: any;
  track: any;
  gainNode: any;
  analyzerNode: any;
  playPauseBtn: any;
  playPauseBtnIcon: any;
  progressIndicator: any;
  progressBar: any;
  currentTimeEl: any;
  durationEl: any;
  volumeEl: any;
  canvas: any;
  canvasContext: any;
  titleEl: any;

  currentTime: any = 0;
  duration: any = 0;
  volume: any = 50;
  bufferLength: any;
  dataArray: any;
  initialized = false;
  title = "untitled";

  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // чтобы видеть содержимое тега в браузере
    this.render();
    this.firstFillWaves();
  }

  // атрибуты, которые я заинтересована видеть в просмотре источника
  static get observedAttributes() {
    return ["src", "title", "muted", "crossorigin", "loop", "preload"];
  }

  // прослушиватель жизненного цикла изменения атрибута
  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src") {
      if (this.playing) {
        await this.toggleAudio();
      }

      this.initialized = false;
      this.render();
    } else if (name === "title") {
      this.title = newValue;

      if (this.titleEl) {
        this.titleEl.textContent = this.title;
      }
    }

    for (let i = 0; i < this.attributes.length; i++) {
      const attr = this.attributes[i];

      if (attr.specified && attr.name !== "title") {
        this.audio.setAttribute(attr.name, attr.value);
      }
    }

    if (!this.initialized) {
      this.initializeAudio();
    }
  }

  initializeAudio() {
    if (this.initialized) return;
    this.initialized = true;

    this.audioContext = new AudioContext();
    this.track = this.audioContext.createMediaElementSource(this.audio);
    // gainNode даст контроль над громкостью звука, с помощью узла усиления подключаюсь и источнику
    // gainNode - узел усиления
    this.gainNode = this.audioContext.createGain();
    // узел анализатора, для получения волн
    this.analyzerNode = this.audioContext.createAnalyser();
    // длина буффера с количеством интервалов частоты
    this.analyzerNode.fftSize = 2048;
    this.bufferLength = this.analyzerNode.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
    this.analyzerNode.getByteFrequencyData(this.dataArray);

    this.track
      .connect(this.gainNode)
      .connect(this.analyzerNode)
      .connect(this.audioContext.destination);

    this.attachEvents();
  }

  firstFillWaves() {
    // this.canvasContext.fillStyle = 'rgba(0, 0, 0, 0)'
    // this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height)

    // ширина столбца
    const barWidth = 1;
    // расстояние между столбцами
    const gap = 1;
    // количество столбцов для отображения
    const barCount = 1000 / (barWidth + gap - gap);
    // x - координата х, положение х каждого столбца
    let x = 0;

    for (let i = 0; i < barCount; i++) {
      // расчёт высоты полосы, исп индекс для доступа к частоте
      // 255 -> максимальное значние частоты, 0 -> минимальное значение частоты
      const h = Math.floor(Math.random() * 25);

      // окрасим каждый столбец
      this.canvasContext.fillStyle = `rgb(0, 0, 0)`;
      this.canvasContext.fillRect(x, this.canvas.height - h, barWidth, h);
      x += barWidth + gap;
    }
  }

  updateFrequency() {
    if (!this.playing) return;
    this.analyzerNode.getByteFrequencyData(this.dataArray);

    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasContext.fillStyle = "rgba(0, 0, 0, 0)";
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // ширина столбца
    const barWidth = 1;
    // расстояние между столбцами
    const gap = 1;
    // количество столбцов для отображения
    const barCount = this.bufferLength / (barWidth + gap - gap);
    // x - координата х, положение х каждого столбца
    let x = 0;

    for (let i = 0; i < barCount; i++) {
      // расчёт высоты полосы, исп индекс для доступа к частоте
      // 255 -> максимальное значние частоты, 0 -> минимальное значение частоты
      const per = (this.dataArray[i] * 100) / 255;
      const h = (per * this.canvas.height) / 100;

      // окрасим каждый столбец
      this.canvasContext.fillStyle = `rgba(${this.dataArray[i]}, 100, 255, 1)`;
      this.canvasContext.fillRect(x, this.canvas.height - h, barWidth, h);
      x += barWidth + gap;
    }

    // снова вызов функции с той же скоростью
    requestAnimationFrame(this.updateFrequency.bind(this));
  }

  attachEvents() {
    this.playPauseBtn.addEventListener(
      "click",
      this.toggleAudio.bind(this),
      false,
    );

    this.progressBar.addEventListener(
      "input",
      () => {
        this.seekTo(this.progressBar.value);
      },
      false,
    );

    this.volumeEl.addEventListener(
      "input",
      this.volumeChange.bind(this),
      false,
    );

    this.audio.addEventListener("loadedmetadata", () => {
      this.duration = this.audio.duration;
      this.progressBar.max = this.duration;

      const sec = parseInt(`${this.duration % 60}`, 10);
      const min = parseInt(`${(this.duration / 60) % 60}`, 10);

      this.durationEl.textContent = `${min}:${sec}`;
    });

    this.audio.addEventListener("timeupdate", () => {
      this.updateAudioTime(this.audio.currentTime);
    });

    this.audio.addEventListener("ended", () => {
      this.playing = false;
      this.playPauseBtnIcon.src = "/contents/audio/play.svg";
    });
  }

  async toggleAudio() {
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
      // возобновляет ход времени в аудиоконтексте, который ранее был приостановлен
      // проверяем статус аудио
    }

    if (this.playing) {
      await this.audio.pause();
      this.playing = false;
      this.playPauseBtnIcon.src = "/contents/audio/play.svg";
    } else {
      await this.audio.play();
      this.playing = true;
      this.playPauseBtnIcon.src = "/contents/audio/pause.svg";
      this.updateFrequency();
    }
  }

  seekTo(value: any) {
    this.audio.currentTime = value;
  }

  updateAudioTime(time: any) {
    this.currentTime = time;
    this.progressBar.value = this.currentTime;

    const sec = `${parseInt(`${time % 60}`, 10)}`.padStart(2, "0");
    const min = parseInt(`${(time / 60) % 60}`, 10);

    this.currentTimeEl.textContent = `${min}:${sec}`;
  }

  truncateText = (str: string, length = 5) => {
    const ending = "...";
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  stylePlayer() {
    return `
            <style>
                :host{
                    width: 100%;
                    max-width: 700px;
                    font-family: sans-serif;
                }

                :host *{
                    box-sizing: border-box;
                }

                .audio{
                    background: #24283a;
                    border-radius: 0.6rem;
                    margin: 0;
                    max-width: 700px;
                    padding: 0.8rem 1rem;
                }

                .audio__name{
                    font-weight: 600;
                    text-transform: capitalize;
                    letter-spacing: 0.5px;
                    font-size: 0.8rem;
                    margin-bottom: 0.3rem;
                    color: #cbd5e1;
                    width: 20%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .audio-body{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                @media(max-width: 700px){
                    .audio-body{
                      justify-content: space-between;
                    }
                }

                .audio-icon{
                    width: 3.5rem;
                    height: 3.5rem;
                    background-color: #303545;
                    border-radius: 0.6rem;
                    color: #909cbf;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .audio-btn{
                    border-radius: 50%;
                    background-color: #303545;
                    border: none;
                    outline: none;
                    width: 3rem;
                    height: 3rem;
                    cursor: pointer;
                    padding: 0;
                }

                .audio-btn__icon{
                    width: 1.3rem;
                    height: 1.3rem;
                }

                .audio-waves{
                    flex: 1;
                    position: relative;
                    height: 3.5rem;
                }
                @media(max-width: 700px){
                    .audio-waves{
                      display: none;
                    }
                }

                .audio-waves__canvas{
                    position: absolute;
                    bottom: 5px;
                    left: 0;
                    width: 100%;
                    height: 25px;
                }

                .audio-indicator, .audio-indicator__progress{
                    width: 100%;
                }

                .audio-indicator{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 5px;
                }

                .audio-indicator__currentTime, .audio-indicator__duration{
                    font-size: 0.8rem;
                    color: #cbd5e1;
                }

                .audio-indicator__progress{
                    flex: 1;
                }

                .audio-volume__progress{
                    width: 4.5rem;
                }
                @media(max-width: 700px){
                  .audio-volume{
                    margin-left: auto;
                  }
                }

                input[type="range"]{
                    margin: 0;
                    -webkit-appearance: none;
                    overflow: hidden;
                    height: 4px;
                    background-color: rgba(255, 255, 255, 0.6);
                }
                input[type="range"]:hover{
                    cursor: ew-resize;
                }

                input[type='range']::-webkit-slider-runnable-track {
                    height: 10px;
                    -webkit-appearance: none;
                    color: #5f479b;
                    margin-top: -1px;
                }

                input[type='range']::-webkit-slider-thumb {
                    width: 5px;
                    -webkit-appearance: none;
                    height: 5px;
                    cursor: ew-resize;
                    background: #5f479b;
                    box-shadow: -900px 0 0 900px #5f479b;
                    position: relative;
                }
                
                input[type="range"]::-moz-range-progress {
                    background-color: #5f479b; 
                }
                input[type="range"]::-moz-range-track {  
                    background-color: #5f479b;
                }
                input[type="range"]::-ms-fill-lower {
                    background-color: #5f479b; 
                }
                input[type="range"]::-ms-fill-upper {  
                    background-color: #5f479b;
                }
                
            </style>
        `;
  }

  volumeChange() {
    this.volume = this.volumeEl.value / 100;
    this.audio.volume = this.volume;
  }

  render() {
    this.shadowRoot.innerHTML = `
            ${this.stylePlayer()}
            <figure class="audio">
                <audio style="display: none;"></audio>
                <div class="audio-body">
                    <div class="audio-icon">
                        <img src="/contents/audio/music.svg" alt="Аудиофайл" />
                    </div>
                    <div class="audio-waves">
                        <figcaption class="audio__name">${this.truncateText(this.title)}</figcaption>
                        <canvas class="audio-waves__canvas"></canvas>
                    </div>
                    <div class="audio-volume">
                        <input class="audio-volume__progress" type="range" min="0" max="100" step="0.01" value="${this.volume}">
                    </div>
                    <button class="audio-btn" type="button">
                        <img class="audio-btn__icon" src="/contents/audio/play.svg" alt="Play and pause mediafile" />
                    </button>
                </div>
                <div class="audio-indicator">
                    <span class="audio-indicator__currentTime">0:00</span>
                    <input class="audio-indicator__progress" type="range" max="100">
                    <span class="audio-indicator__duration">0:00</span>
                </div>
            </figure>
        `;

    this.audio = this.shadowRoot.querySelector("audio");
    this.canvas = this.shadowRoot.querySelector("canvas");
    this.playPauseBtn = this.shadowRoot.querySelector(".audio-btn");
    this.playPauseBtnIcon = this.shadowRoot.querySelector(".audio-btn__icon");
    this.titleEl = this.shadowRoot.querySelector(".audio__name");
    this.progressIndicator = this.shadowRoot.querySelector(".audio-indicator");
    this.currentTimeEl = this.progressIndicator.children[0];
    this.progressBar = this.progressIndicator.children[1];
    this.durationEl = this.progressIndicator.children[2];
    this.volumeEl = this.shadowRoot.querySelector(".audio-volume__progress");

    this.canvasContext = this.canvas.getContext("2d");

    // this.volumeEl.value = 50;
    this.volumeEl.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
    });
    this.progressBar.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
    });
  }
}

// ======== audio player ========
