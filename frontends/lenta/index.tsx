import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}
// ========
front.func.playAndPause = (video: any) => {
    video.paused ? video.play() : video.pause()
    return
}

front.func.timeUpdate = (e) => {
    let { currentTime, duration } = e.target
    let percent = (currentTime / duration) * 100
    Static.currentTime = currentTime
    Ref.progressBar.style.width = `${percent}%`
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
// ========
front.loader = () => {
    Static.video
    Static.display

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