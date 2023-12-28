import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all"
import Navigation from "./navigation"

front.degubStatic = true
front.InitIgnore.push("test")

front.listener.finish = () => {
    return
}

front.loader = async () => {
    Static.color = "purple"
    Static.doneTimeout = null
    Static.resetTimeout = null
    Static.t = 0
    Static.records = []
    let url = front.Services.functions.makeUrlEvent("CoinsCourses", { live: true })
    let listener = [
        {
            type: "add",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records = json
            },
        },
        {
            type: "update",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records.forEach((item, index) => {
                    if (item._id == json._id) {
                        Static.records[index] = json
                    }
                })
            },
        }
    ]

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