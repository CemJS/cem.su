import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all"
import Navigation from "./navigation"
import Category from "./display/Category"

front.listener.finish = async () => {
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


front.loader = async () => {
    Static.isDragging = false
    Static.activeItem = "all"

    Static.news = []
    let url = front.Services.functions.makeUrlEvent("news", {
        lang: front.Variable.words?.code,
        category: Static.activeItem,
        skip: 0
    })
    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Fn.log('=0b636f=', "Static.news", "get", json)
                Static.news = json
            },
        },
        {
            type: "message",
            fn: ({ data }) => {
              let json = front.Services.functions.strToJson(data);
              if (!json) {
                return;
              }
        
              Static.news = json;
            },
          },
        {
            type: "add",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.news.push(...json)
            },
        },
        // skip
        {
            type: "skip",
            fn: ({ data }) => {
            let json = front.Services.functions.strToJson(data);
            if (!json) {
                return;
            }
            Static.news = [...Static.news, ...json];
            },
        },
    ]
    Events.news = await Fn.event(url, listener)

    if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
        let url = front.Services.functions.makeUrlEvent(`news/${front.Variable.DataUrl[2]}`,);

        Static.newListener = [
            {
                type: "getById",
                fn: ({ data }) => {
                    let json = front.Services.functions.strToJson(data);
                    if (!json) {
                        return;
                    }
                    Static.record = json;
                },
            },
        ];
        Events.news = await Fn.event(url, Static.newListener);
    }

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