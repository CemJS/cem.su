import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = () => {
    return
}

let isDragging = false
let startY, startHeight

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('bottomSheet_active');
    }, 100);
}

front.func.close = function () {
    Ref.bottomSheet.classList.remove('bottomSheet_active');
    setTimeout(() => {
        Fn.clearData()
    }, 500)
}

front.func.dragStart = (e) => {
    isDragging = true
    startY = e.pageY
    startHeight = parseInt(Ref.bottomSheetContent.offsetHeight)
    Ref.bottomSheet.classList.add("dragging")
    return
}

front.func.dragging = (e) => {
    if (!Static.isDragging) return
    const delta = Static.startY - e.pageY
    const newHeight = startHeight + delta / window.innerHeight * 100
    Func.updateSheetHeight(newHeight)
    Ref.bottomSheetContent.style.height = `${e.pageY}vh`
    return
}

front.func.dragStop = () => {
    isDragging = false
    Ref.bottomSheet.classList.remove("bottomSheet_dragging")
    return
}

front.func.updateSheetHeight = (height) => {
    Ref.bottomSheetContent.style.height = `${height}px`
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <div
            ref="bottomSheet"
            class="bottomSheet"
            init={Func.show}
            onclick={(e: any) => {
                if (e.target === Ref.bottomSheetOverlay) {
                    Func.close()
                    Ref.bottomSheetContent.style.height = `50vh`
                }
            }}>
            <Navigation />
        </div>
    )
}

export { front }