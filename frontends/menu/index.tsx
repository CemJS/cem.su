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
        <div class="fixed left-0 bottom-0 w-full z-50 bg-[#2B3040] border-solid border-[#363C50] border-t-[1px]">
            <Navigation />
        </div>
    )
}

export { front }