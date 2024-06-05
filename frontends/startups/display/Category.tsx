import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
let x1,
  y1 = null;
export default function ({ items }) {
  return (
    <ul
      class="z-[1] m-0 grid grid-flow-col grid-cols-[auto] gap-[0.625rem] overflow-hidden overflow-x-scroll scroll-smooth p-[0.625rem_0.3125rem] @767:gap-[0.9375rem] @767:p-[1.25rem_0] [&.dragging]:scroll-auto [&.dragging]:[scroll-snap-type:none] [&.dragging_.category-item]:cursor-grab [&.dragging_.category-item]:select-none"
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
              "relative z-[1] flex h-[1.875rem] w-full cursor-pointer items-center justify-center rounded-[3.125rem] border-none bg-[#363b4b] p-[0_0.7375rem] text-[0.875rem] font-semibold leading-[18] [transition:0.7s] @464:h-[2.125rem] @464:text-[1rem] @464:leading-[1.125rem] [&:hover_#bg]:opacity-100",
              Static.catActive == item.name
                ? "!border-[0.125rem] ![background:none] [&_#bg]:opacity-100"
                : null,
            ]}
            onclick={() => {
              if (Static.catActive == item.name) {
                return;
              }

              Static.catActive = item.name;
              front.Services.functions.sendApi("/api/startups", {
                category: Static.catActive == "Все" ? "All" : Static.catActive,
              });
            }}
          >
            <span class="whitespace-nowrap text-[--text-grey]">
              {item.name}
            </span>
            <div
              id="bg"
              class="absolute left-0 top-0 z-[-1] h-full w-full rounded-[3.125rem] opacity-0 [background:var(--darkBlueGradient)] [transition:1s]"
            ></div>
          </li>
        );
      })}
    </ul>
  );
}
