import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = async () => {
    return
}
// =============================
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
    Ref.categoryLineList.scrollLeft += -250
    setTimeout(() => {
        Ref.categoryPrev.style.display = scrollVal > 0 ? "flex" : "none"
    }, 50)
    return
}

front.func.nextSlide = () => {
    Ref.categoryLineList.scrollLeft += 250
    return
}

// front.func.scrollWheel = (e) => {
//     e.currentTarget.style.scrollBehavior = "auto"
//     e.currentTarget.scrollLeft += e.deltaY
//     return
// }

front.func.updateIcons = (e: any) => {
    Ref.categoryLineList.style.scrollBehavior = "smooth"
    Ref.categoryPrev.classList.toggle('hide', e.target.scrollLeft <= 1)
    Ref.categoryNext.classList.toggle('hide', e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth)
    return
}


// =============================

front.loader = async () => {
    Static.isDragging = false
    Static.activeItem = "all"
    // =======================

    Static.records = []
    let url = front.Services.functions.makeUrlEvent("News", { lang: "ru" })
    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Fn.log('=0b636f=', "Static.records", "get", json)

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
    Events.news = await Fn.event(url, listener)

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