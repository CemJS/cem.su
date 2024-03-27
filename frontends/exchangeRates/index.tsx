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
    let url = front.Services.functions.makeUrlEvent("coins-courses", {})

    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                // Fn.log('=2efb55= get', json)
                Static.records = json
            },
        },
        {
            type: "update",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                // Fn.log('=2efb55= update', json)

                for (let item of Static.records) {
                    if (item.coin == json.coin) {
                        item.price = json.price
                    }
                }
                Fn.log('=06e685=', Static.records)
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