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
        <header class="font-medium py-2 bg-[#24283a] z-10 border-solid border-[#2d3243] border-b-[1px]">
            <Navigation />
        </header>
    )
}

export { front }