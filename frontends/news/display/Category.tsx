import { Cemjsx, Func, Static, Ref, Events, front, Fn } from "cemjs-all"
import category from '@json/category'

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
              // if (Static.activeItem == "all") return
              Static.activeItem = "all"
              // Events.news.change(front.Services.functions.makeUrlEvent("News", { lang: "ru" }))
              front.Services.functions.sendApi("/api/events/News", {
                action: "category",
                category: Static.activeItem,
                lang: "ru",
              });
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
                    // if (Static.activeItem == item.name) return

                    Static.activeItem = item.name.replace(/ +/g, '').trim()
                    front.Services.functions.sendApi("/api/events/News", {
                      action: "category",
                      category: Static.activeItem,
                      lang: "ru",
                    });

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
            <i class="i i-right"></i>
          </span>
        </div>
      </div>
    </div>
  )
}