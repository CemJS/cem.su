import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    Func.lastMessageScroll('smooth')
    return
}

front.func.lastMessageScroll = (b) => {
    if (!Ref.scrollBottom) {
        return
    }
    Ref.scrollBottom.scrollIntoView({
        behavior: b || 'auto',
        block: 'end',
    });
    return
}

front.loader = async () => {

    Static.records = []
    let url = front.Services.functions.makeUrlEvent("chats", {})
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
                if (!json) { return }
                Static.records.push(...json)
            },
        }
    ]
    Events.chats = await Fn.event(url, listener)

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