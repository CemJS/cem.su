import { Cemjsx, Func, Static, Ref } from "cemjs-all"
import category from '@json/category'

export default function () {
    return (
        <div class="category-line">
            <div class="category-line__arrow hide" ref="categoryPrev">
                <span
                    onclick={() => { Func.prevSlide() }}
                >
                    <i class="i i-chevron-left"></i>
                </span>
            </div>
            <ul
                class="category-line__list"
                ref="categoryLineList"
                onmousedown={() => Static.isDragging = true}
                onmousemove={(e: any) => Func.dragging(e)}
                onmouseup={Func.dragStop}
                onscroll={(e: any) => { Func.updateIcons(e) }}
            // onwheel={(e) => { Func.scrollWheel(e) }}
            >
                <li
                    class={["category-line__item",
                        Static.activeItem === "all" ? "category-line__item_active" : null
                    ]}
                    onclick={() => {
                        Static.activeItem = "all"
                    }}
                >
                    Все
                </li>
                {
                    category.map(item => {
                        return (
                            <li
                                class={["category-line__item",
                                    Static.activeItem == item.name ? "category-line__item_active" : null
                                ]}
                                onclick={(e) => {
                                    e.currentTarget.classList.toggle("category-line__item_active")
                                    Static.activeItem = item.name
                                    // e.currentTarget.scrollIntoView({
                                    //     inline: "center"
                                    // })
                                    // Func.requestNews(item.name)
                                }}
                            >
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
            <div class="category-line__arrow" ref="categoryNext">
                <span onclick={Func.nextSlide}>
                    <i class="i i-arrow-right"></i>
                </span>
            </div>
        </div>
    )
}