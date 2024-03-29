import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
let x1,
  y1 = null;
export default function ({ items }) {
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
        Ref.categoryCarousel.scrollLeft =
          Static.startScrollLeft - (e.pageX - Static.startX);
      }}
      onmouseup={(e) => {
        Static.isDrag = false;
        Ref.categoryCarousel.classList.remove("dragging");
      }}
      onscroll={() => {
        if (Ref.categoryCarousel.scrollLeft === 0) {
          // Ref.categoryCarousel.classList.remove("category-wrap_shadow-left");
        } else if (
          Ref.categoryCarousel.scrollLeft ===
          Ref.categoryCarousel.scrollWidth - Ref.categoryCarousel.offsetWidth
        ) {
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
            class={[
              "category__item",
              Static.catActive == item.name ? "category__item_active" : null,
            ]}
            onclick={() => {
              if (Static.catActive == item.name) {
                return;
              }

              Static.catActive = item.name;
              // Fn.log("=0cf81d=", Static.catActive);
              front.Services.functions.sendApi("/api/startups", {
                category: Static.catActive == "Все" ? "All" : Static.catActive,
              });
            }}
          >
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
