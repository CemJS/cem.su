import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.loader = () => {

    Static.listLetters = [
        {
            nickname: 'Annyshka',
            unread: 5,
            lastMessageDate: '12:30',

        }
    ]

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