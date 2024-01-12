import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = async () => {
    Static.newsItems = document.querySelectorAll('.news__item')
    Static.lastNewsItem = Static.newsItems[Static.newsItems.length - 1]

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target == Static.lastNewsItem) {
                console.log('=5cf1dd=', 123)
            }
        })
    })

    Static.newsItems.forEach((record: HTMLElement) => {
        observer.observe(record)
    })
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
    let url = front.Services.functions.makeUrlEvent("News", {})
    let listener = [
        {
            type: "add",
            fn: ({ data }) => {
                // console.log('=8265b8=', "fnfjkgfkjgjk", data)
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records = json
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