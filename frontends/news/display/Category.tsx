import { Cemjsx, Func, Static, Ref, Events, front } from "cemjs-all"
import category from '@json/category'


const lang = {
  category: {
    finince: "Финансы",
    blockchain: "Блокчейн"
  }
}
export default function () {
  return (
    <div class="wrapper mt-45">
      <div class="category-line">
        <div class="category-line__arrow hide" ref="categoryPrev">
          <span
            onclick={() => { Func.prevSlide() }}
          >
            <i class="i i-left"></i>
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
              Events.news.change(front.Services.functions.makeUrlEvent("News", {}))
            }}
          >
            Все
          </li>
          {
            category.map(item => {
              return (
                <li
                  class={["category-line__item",
                    Static.activeItem === item.name ? "category-line__item_active" : null
                  ]}
                  onclick={(e) => {
                    Static.activeItem = item.name.replace(/ +/g, '').trim()
                    Events.news.change(front.Services.functions.makeUrlEvent("News", {
                      action: "category",
                      category: Static.activeItem
                    }))
                    e.currentTarget.classList.toggle("category-line__item_active")
                    // e.currentTarget.scrollIntoView({
                    //     inline: "center"
                    // })
                  }}
                >
                  {item.name}
                  {/* {lang.category[item.name]} */}
                </li>
              )
            })
          }
        </ul>
        <div class="category-line__arrow" ref="categoryNext">
          <span onclick={Func.nextSlide}>
            <i class="i i-right"></i>
          </span>
        </div>
      </div>
    </div>
  )
}