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
    playPauseBtn: any
    progressIndicator: any
    currentTime: any
    progressBar: any
    duration: any

    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // чтобы видеть содержимое тега в браузере
        this.render();
        this.initializeAudio();
        this.attachEvents()
    }


    initializeAudio() {
        this.audioContext = new AudioContext();
        this.track = this.audioContext.createMediaElementSource(this.audio)

        this.track
            .connect(this.audioContext.destination)
    }

    attachEvents() {
        this.playPauseBtn.addEventListener('click', this.toggleAudio.bind(this))
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
        }
    }


    render() {
        this.shadowRoot.innerHTML = `
            <div class="audio">
                <audio src="/contents/audio/test.mp3" controls></audio>
                <button class="btn btn_audio" type="button">play</button>
                <div class="audio-indicator">
                    <span class="audio-indicator__currentTime">0:00</span>
                    <input type="range" max="100" value="0"  class="audio-indicator__progress">
                    <span class="audio-indicator__duration">0:00</span>
                </div>
            </div>
        `;

        this.audio = this.shadowRoot.querySelector('audio')
        this.playPauseBtn = this.shadowRoot.querySelector('btn_audio')
        this.progressIndicator = this.shadowRoot.querySelector('audio-indicator')
        this.currentTime = this.progressIndicator.children[0]
        this.progressBar = this.progressIndicator.children[1]
        this.duration = this.progressIndicator.children[2]
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