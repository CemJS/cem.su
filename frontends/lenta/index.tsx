import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}
// ======== videoplayer start ========
front.func.playAndPause = (video: any) => {
    // video.paused ? video.play() : video.pause()
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }

    return
}

front.func.timeUpdate = (e) => {
    let { currentTime, duration } = e.target
    let percent = (currentTime / duration) * 100
    Static.currentTime = currentTime
    Ref.progressBar.style.width = `${percent}%`
    return
}

front.func.formatTime = (time) => {
    let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600)

    seconds = seconds < 10 ? Number(`0${seconds}`) : seconds
    minutes = minutes < 10 ? Number(`0${minutes}`) : minutes
    hours = hours < 10 ? Number(`0${hours}`) : hours

    if (hours == 0) {
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }
    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

front.func.draggableProgressBar = (e: any) => {
    let timeLineWidth = Ref.videoTimeLine.clientWidth
    Ref.progressBar.style.width = `${e.offsetX}px`
    Ref.video.currentTime = (e.offsetX / timeLineWidth) * Ref.video.duration
    return
}
// ======== videoplayer end ========

// ======== audio player ========

class AudioPlayer extends HTMLElement {
    playing: boolean = false
    audioContext: any
    audio: any
    track: any
    gainNode: any
    analyzerNode: any
    playPauseBtn: any
    progressIndicator: any
    progressBar: any
    currentTimeEl: any
    durationEl: any
    volumeEl: any
    canvas: any
    canvasContext: any
    titleEl: any

    currentTime: any = 0
    duration: any = 0
    volume: any = 50
    bufferLength: any
    dataArray: any
    initialized = false
    title = 'untitled'

    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // чтобы видеть содержимое тега в браузере
        this.render();
    }

    // атрибуты, которые я заинтересована видеть в просмотре источника
    static get observedAttributes() {
        return ['src', 'title', 'muted', 'crossorigin', 'loop', 'preload']
    }

    // прослушиватель жизненного цикла изменения атрибута
    async attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src') {

            if (this.playing) {
                await this.toggleAudio()
            }

            this.initialized = false
            this.render()
        } else if (name === 'title') {
            this.title = newValue

            if (this.titleEl) {
                this.titleEl.textContent = this.title
            }
        }

        for (let i = 0; i < this.attributes.length; i++) {
            const attr = this.attributes[i]

            if (attr.specified && attr.name !== "title") {
                this.audio.setAttribute(attr.name, attr.value)
            }
        }


        if (!this.initialized) {
            this.initializeAudio()
        }
    }

    initializeAudio() {
        if (this.initialized) return
        this.initialized = true

        this.audioContext = new AudioContext();
        this.track = this.audioContext.createMediaElementSource(this.audio)
        // gainNode даст контроль над громкостью звука, с помощью узла усиления подключаюсь и источнику 
        // gainNode - узел усиления
        this.gainNode = this.audioContext.createGain()
        // узел анализатора, для получения волн
        this.analyzerNode = this.audioContext.createAnalyser()
        // длина буффера с количеством интервалов частоты
        this.analyzerNode.fftSize = 2048
        this.bufferLength = this.analyzerNode.frequencyBinCount
        this.dataArray = new Uint8Array(this.bufferLength)
        this.analyzerNode.getByteFrequencyData(this.dataArray)


        this.track
            .connect(this.gainNode)
            .connect(this.analyzerNode)
            .connect(this.audioContext.destination)

        this.attachEvents()
    }

    updateFrequency() {
        if (!this.playing) return
        this.analyzerNode.getByteFrequencyData(this.dataArray)

        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.canvasContext.fillStyle = 'rgba(0, 0, 0, 0)'
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height)

        // ширина столбца
        const barWidth = 1
        // расстояние между столбцами
        const gap = 1
        // количество столбцов для отображения 
        const barCount = this.bufferLength / ((barWidth + gap) - gap)
        // x - координата х, положение х каждого столбца
        let x = 0


        for (let i = 0; i < barCount; i++) {
            // расчёт высоты полосы, исп индекс для доступа к частоте 
            // 255 -> максимальное значние частоты, 0 -> минимальное значение частоты
            const per = (this.dataArray[i] * 100) / 255
            const h = (per * this.canvas.height) / 100

            // окрасим каждый столбец
            this.canvasContext.fillStyle = `rgba(${this.dataArray[i]}, 100, 255, 1)`
            this.canvasContext.fillRect(x, this.canvas.height - h, barWidth, h)
            x += barWidth + gap
        }

        // снова вызов функции с той же скоростью
        requestAnimationFrame(this.updateFrequency.bind(this))
    }

    attachEvents() {
        this.playPauseBtn.addEventListener('click', this.toggleAudio.bind(this), false)

        this.progressBar.addEventListener('input', () => {
            this.seekTo(this.progressBar.value)
        }, false)

        this.volumeEl.addEventListener('input', this.volumeChange.bind(this), false)

        this.audio.addEventListener('loadedmetadata', () => {
            this.duration = this.audio.duration
            this.progressBar.max = this.duration

            const sec = parseInt(`${this.duration % 60}`, 10)
            const min = parseInt(`${(this.duration / 60) % 60}`, 10)

            this.durationEl.textContent = `${min}:${sec}`
        })

        this.audio.addEventListener('timeupdate', () => {
            this.updateAudioTime(this.audio.currentTime)
        })

        this.audio.addEventListener('ended', () => {
            this.playing = false
            this.playPauseBtn.textContent = 'play'
        })
    }

    async toggleAudio() {
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume()
            // возобновляет ход времени в аудиоконтексте, который ранее был приостановлен
            // проверяем статус аудио
        }

        if (this.playing) {
            await this.audio.pause()
            this.playing = false
            this.playPauseBtn.textContent = 'play'
        } else {
            await this.audio.play()
            this.playing = true
            this.playPauseBtn.textContent = 'pause'
            this.updateFrequency()
        }
    }

    seekTo(value: any) {
        this.audio.currentTime = value
    }

    updateAudioTime(time: any) {
        this.currentTime = time
        this.progressBar.value = this.currentTime

        const sec = `${parseInt(`${time % 60}`, 10)}`.padStart(2, '0')
        const min = parseInt(`${(time / 60) % 60}`, 10)

        this.currentTimeEl.textContent = `${min}:${sec}`
    }

    stylePlayer() {
        return `
            <style>
                :host{
                    width: 100%;
                    max-width: 400px;
                    font-family: sans-serif;
                }

                :host *{
                    box-sizing: border-box;
                }

                .audio{
                    background: #24283a;
                    border-radius: 0.6rem;
                    margin: 0.8rem 1rem;
                }
            </style>
        `
    }



    volumeChange() {
        this.volume = this.volumeEl.value;
        this.gainNode.gain.value = this.volume
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${this.stylePlayer()}
            <figure class="audio">
                <figcaption class="audio__name">${this.title}</figcaption>
                <audio style="display: none;"></audio>
                <div class="audio-icon">
                    <img src="./svg/icons/music.svg" alt="Аудиофайл" />
                </div>
                <button class="btn btn_audio" type="button">play</button>
                <canvas style="width: 100%; height: 50px"></canvas>
                <div class="audio-indicator">
                    <span class="audio-indicator__currentTime">0:00</span>
                    <input class="audio-indicator__progress" type="range" max="100" value="0">
                    <span class="audio-indicator__duration">0:00</span>
                </div>
                <div class="audio-volume">
                    <input class="audio-volume__progress" type="range" min="0" max="100" step="0.01" value="${this.volume}">
                </div>
            </figure>
        `

        this.audio = this.shadowRoot.querySelector('audio')
        this.canvas = this.shadowRoot.querySelector('canvas')
        this.playPauseBtn = this.shadowRoot.querySelector('.btn_audio')
        this.titleEl = this.shadowRoot.querySelector('.audio__name')
        this.progressIndicator = this.shadowRoot.querySelector('.audio-indicator')
        this.currentTimeEl = this.progressIndicator.children[0]
        this.progressBar = this.progressIndicator.children[1]
        this.durationEl = this.progressIndicator.children[2]
        this.volumeEl = this.shadowRoot.querySelector('.audio-volume__progress')

        this.canvasContext = this.canvas.getContext('2d')
    }

}

customElements.define('audio-player', AudioPlayer)

// ======== audio player ========

front.loader = () => {
    Static.videoDragStart = false

    Static.activeSpeed = 1
    Static.speedOptions = [
        {
            value: 2
        },
        {
            value: 1.5
        },
        {
            value: 0.75
        },
        {
            value: 0.5
        }
    ]
    return
}

front.display = () => {
    return (
        <div class="wrapper mt-25">
            <Navigation />
        </div>
    )
}

export { front }