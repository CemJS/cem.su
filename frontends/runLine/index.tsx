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

    let url = front.Services.functions.makeUrlEvent("CoinsCourses", { line: true })
    let listener = [{
        type: "add",
        fn: ({ data }) => {
            let json = front.Services.functions.strToJson(data)
            Static.records = json
            Fn.init()
        },
    },
    {
        type: "update",
        fn: ({ data }) => {
            let json = front.Services.functions.strToJson(data)
            for (let item of Static.records) {
                if (item.name == json.name) {
                    item.price = json.price
                }
            }
            Fn.init()
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