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
    Ref.progressBar.style.width = `${percent}%`
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