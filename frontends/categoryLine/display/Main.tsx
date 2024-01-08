import { Cemjsx, Func, Static } from "cemjs-all"
import category from '@json/category'

export default function () {
    return (
        <div class="category-line">
            <div
                class="category-line__arrow"
                ref="categoryPrev"
                onclick={Func.prevSlide}
            >
                <span class="i i-arrow-left"></span>
            </div>
            <ul
                class="category-line__list"
                ref="categoryLineList"
                onmousedown={() => Static.isDragging = true}
                onmousemove={(e: any) => Func.dragging(e)}
                onmouseup={Func.dragStop}
            >
                {
                    category.map(item => {
                        return (
                            <li class="category-line__item">{item.name}</li>
                        )
                    })
                }
            </ul>
            <div class="category-line__arrow" onclick={Func.nextSlide}>
                <span class="i i-arrow-right"></span>
            </div>
        </div>
    )
}