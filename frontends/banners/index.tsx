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
    let url = front.Services.functions.makeUrlEvent("Banners", { lang: "ru" })

    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records = json
            },
        },
        {
            type: "add",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                Static.records = json
                Fn.init()
            },
        },
    ]

    Events.banners = await Fn.event(url, listener)
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