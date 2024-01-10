import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = async () => {
    Static.records = []
    let url = front.Services.functions.makeUrlEvent("News", { lang: "ru" })
    // let url = front.Services.functions.makeUrlEvent("News", { cat: "test" })
    let listener = [
        {
            type: "add",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records = json
            },
        }
    ]
    Events.news = await Fn.event(url, listener)

    return
}

front.display = () => {
    return (
        <div class="wrapper">
            <Navigation />
        </div>
    )
}

export { front }