import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = async () => {

    let url = front.Services.functions.makeUrlEvent("/api/events/Course", { live: true })
    let listener = [{
        type: "update",
        fn: ({ data }) => {
            // console.log('=f2590b=', data)
        },
    }]

    Events.course = await Fn.event(url, listener)
    return
}

front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }