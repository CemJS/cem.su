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


    // Fn.initAuto("records")

    // Static.records = []
    Static.test = 6
    let url = front.Services.functions.makeUrlEvent("CoinsCourses", { live: true })
    let listener = [
        {
            type: "add",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records = json
                // Fn.init()
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
                // for (let item of Static.records) {
                //     if (item._id == json._id) {
                //         console.log('=4c44ea=', 1244444444)
                //         item = json
                //     }
                // }
                // Fn.init()
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