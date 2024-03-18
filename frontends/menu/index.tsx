import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <div class="menu fixed left-0 bottom-0 w-full z-50">
            <Navigation />
        </div>
    )
}

export { front }