import { Cemjsx, Static, Ref, Fn, front } from "cemjs-all";

let x1,
  y1 = null;
export default function ({ items, active }) {
  return (
    <ul
      class="category-carousel"
      ref="categoryCarousel"
      onmousedown={(e) => {
        Static.isDrag = true;
        Ref.categoryCarousel.classList.add("dragging");
        Static.startX = e.pageX;
        Static.startScrollLeft = Ref.categoryCarousel.scrollLeft;
      }}
      onmousemove={(e) => {
        if (!Static.isDrag) return;
        e.preventDefault();
        Ref.categoryCarousel.scrollLeft = Static.startScrollLeft - (e.pageX - Static.startX);
      }}
      onmouseup={(e) => {
        Static.isDrag = false;
        Ref.categoryCarousel.classList.remove("dragging");
      }}
      onscroll={() => {
        if (Ref.categoryCarousel.scrollLeft === 0) {
          // Ref.categoryCarousel.classList.remove("category-wrap_shadow-left");
        } else if (Ref.categoryCarousel.scrollLeft === Ref.categoryCarousel.scrollWidth - Ref.categoryCarousel.offsetWidth) {
          Ref.categoryCarousel.classList.remove("category-wrap_shadow-right");
        }
        // init();
      }}
      onwheel={(e) => {
        if (e.deltaY < 0) {
          Ref.categoryCarousel.scrollLeft += Ref.categoryEl.offsetWidth + 15;
        } else if (e.deltaY > 0) {
          Ref.categoryCarousel.scrollLeft -= Ref.categoryEl.offsetWidth + 15;
        }
      }}
      onmouseenter={() => {
        Static.body.classList.add("disable_scroll");
      }}
      onmouseleave={() => {
        Static.body.classList.remove("disable_scroll");
      }}
      ontouchstart={(e) => {
        const firstTouch = e.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
      }}
      ontouchmove={(e) => {
        if (!x1 || !y1) return false;
        let x2 = e.touches[0].clientX;
        let y2 = e.touches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            Ref.categoryCarousel.scrollLeft -= Ref.categoryEl.offsetWidth + 15;
          } else {
            Ref.categoryCarousel.scrollLeft += Ref.categoryEl.offsetWidth + 15;
          }
        }
        x1 = null;
        y1 = null;
      }}
    >
      {items.map((item: any, index: number) => {
        return (
          <li
            ref="categoryEl"
            draggable="false"
            class={["category-item", active == item.name ? "category-item_active" : null]}
            onclick={() => {
              // Fn.log('=ac9ca7=', 12424)

              Static.catActive = item.name;

              if (Static.makeFilter.cat == item.name) {
                return;
              }
              Static.makeFilter.cat = item.name;

              Fn.log("=a16437=", Static.makeFilter.active);

              front.Services.functions.sendApi("/api/events/Icos", {
                action: "get",
                category: Static.catActive == "Все" ? "All" : Static.catActive,
                type: Static.makeFilter.active,
              });

              // Fn.log("=1ca9ec=", Static.makeFilter);

              //   fn("addEvent");
              // init()
            }}
          >
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
