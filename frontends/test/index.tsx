import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    Static.state = {
        button: {

        }
    }
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