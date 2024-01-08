import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.degubStatic = true

front.listener.finish = () => {
    return
}

front.func.dragging = (e) => {
    if (!Static.isDragging) return
    Ref.categoryLineList.classList.add("category-line__list_dragging")
    Ref.categoryLineList.scrollLeft -= e.movementX
    return
}

front.func.dragStop = () => {
    Static.isDragging = false
    Ref.categoryLineList.classList.remove("category-line__list_dragging")
    return
}

front.func.prevSlide = () => {
    let scrollVal = Ref.categoryLineList.scrollLeft
    Ref.categoryLineList.scrollLeft += -350

    setTimeout(() => {
        Ref.categoryPrev.style.display = scrollVal > 0 ? "flex" : "none"
    }, 50)

    return
}

front.func.nextSlide = () => {
    Ref.categoryLineList.scrollLeft += 350
    return
}

front.loader = () => {
    Static.isDragging = false
    return
}

front.display = () => {
    return (
        <div class="wrapper">
            <Navigation />
        </div>
    )
}

export { front }