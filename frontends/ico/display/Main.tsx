import { Cemjsx, Static, Ref, Fn, front } from "cemjs-all";
import CategoryLine from "./CategoryLine";
import calendar from "@svg/icons/calendar.svg";
import notFound from "@svg/icon/notFound.svg";

const states = [
  {
    name: "Active",
  },
  {
    name: "Upcoming",
  },
  {
    name: "Last",
  },
];

const RenderItems = function ({ items }) {
  Fn.log("=f60085=", items);
  return (
    <div class="pb-20">
      <div class="fixed left-1/2 top-1/2 h-[25rem] w-[25rem] blur-[15.625rem] [background:var(--mainGradient)] [transform:translate(-50%,-50%)]"></div>
      <div id="inner">
        <div
          class="relative m-[0.9375rem_0] flex gap-[0.9375rem] rounded-[--borderR] @767:gap-[1.75rem]"
          ref="tabs"
        >
          {states.map((item, index) => {
            return (
              <div
                ref="tabsItem"
                class={[
                  "relative z-[1] flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-[--borderR] ease-in-out [background:rgba(255,255,255,0.09)] [transition:all_0.35s] [&.active_#active]:opacity-100 [&.active_span]:font-bold [&:hover_span]:font-bold",
                  Static.activeIndex == index ? "active" : null,
                ]}
                onclick={() => {
                  if (Static.makeFilter.active == item.name) {
                    return;
                  }
                  Static.makeFilter.active = item.name;
                  // fn("addEvent");
                  front.Services.functions.sendApi("/api/icos", {
                    category:
                      Static.makeFilter.cat == "Все"
                        ? "All"
                        : Static.makeFilter.cat,
                    type: Static.makeFilter.active,
                  });
                  Static.activeIndex = index;
                  // Ref.tabsSlider.style.left = `${Ref.tabsItem.offsetWidth * Static.activeIndex}px`;
                  Ref.icoList.classList.add("animated");
                  setTimeout(() => {
                    Ref.icoList.classList.remove("animated");
                  }, 500);
                  // init();
                }}
              >
                <div
                  id="active"
                  class="absolute left-0 top-0 z-[-1] h-full w-full opacity-0 ease-in-out [background:var(--darkBlueGradient)] [transition:all_0.35s]"
                ></div>
                <span class="text-[clamp(1rem,2vw,1.125rem)] [transition:all_0.35s_ease-in-out]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
        {!items.length ? (
          <div class="notFound">
            <img src={notFound} alt={front.Variable?.words?.notFoundRecords} />
            {front.Variable?.words?.notFoundRecords}
          </div>
        ) : null}
        <div
          class="grid grid-cols-1 grid-rows-[auto] gap-[--borderR] @992:grid-cols-2"
          ref="icoList"
        >
          {!items.length
            ? null
            : items.map((item: any, index: number) => {
                // Fn.log("=91648e=", items);
                return (
                  <a
                    class="relative grid cursor-pointer grid-cols-[17%_83%] gap-[--borderR] overflow-hidden rounded-[--borderR] p-[--borderR] [background:rgba(255,255,255,0.09)] [border:0.0625rem_solid_transparent] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [grid-template-areas:_'img_info'_'date_date'] [transition:0.5s] hover:[background:transparent] hover:[border:0.0625rem_solid_var(--border)] hover:[transform:scale(0.98)] @767:grid-cols-[20%_80%]"
                    href={`/list-icostartups/show/${item.id}`}
                    onclick={(e) => {
                      Static.record = item;
                      Fn.link(e);
                    }}
                    isVisible={() => {
                      if (index == items.length - 3) {
                        Static.moreid = items[items.length - 1].id;
                        // fn("addEvent");
                      }
                    }}
                    init={($el: any) => {
                      if (index == Static.records?.length - 1) {
                        const observer = new IntersectionObserver((entries) => {
                          entries.forEach(async (entry) => {
                            // Fn.log("=6ba7c1=111111", entry.isIntersecting, entry);
                            if (entry.isIntersecting) {
                              // Fn.log("=2a3c8e=", 6666666);
                              observer.unobserve($el);
                              let res = front.Services.functions.sendApi(
                                "/api/icos",
                                {
                                  category:
                                    Static.makeFilter.cat == "Все"
                                      ? "All"
                                      : Static.makeFilter.cat,
                                  type: Static.makeFilter.active,
                                  skip: Static.records.length,
                                },
                              );
                              // Fn.log("=e26cda=", res);
                            }
                          });
                        });
                        observer.observe($el);
                      }
                    }}
                  >
                    <div class="relative inline-block [grid-area:_img]">
                      <img
                        class="w-full min-w-10 bg-[--light-gray-2]"
                        src={`/assets/upload/worldPress/${item.icon}`}
                        alt="ICO Rating"
                      ></img>
                      <span class="text-[0.875rem] font-medium uppercase text-[--light-gray-3]">
                        {item.category}
                      </span>
                    </div>

                    <div class="[grid-area:info]">
                      <h5 class="m-[0_0_0.625rem_0] text-[1.125rem] @464:m-[0_0_0.9375rem_0] @464:text-[1.375rem] @464:font-bold">
                        {item.title}
                      </h5>
                      <p class="m-0 mr-[0.9375rem] line-clamp-3 text-[0.875rem] leading-[1.5rem] @464:text-[1rem] @1050:text-[1.125rem]">
                        {item.description}
                      </p>
                      <p class="m-0 !mt-[0.625rem] mr-[0.9375rem] line-clamp-3 text-[0.875rem] font-bold leading-[1.5rem] text-[#cbd3eb] @464:text-[1rem] @1050:text-[1.125rem]">
                        <span class="!bg-clip-text text-[clamp(1rem,2vw,1.125rem)] font-bold leading-[1.375rem] [-webkit-text-fill-color:transparent] [background:var(--mainGradient)]">
                          ${item.nowMoney ? item.nowMoney : 0}
                        </span>{" "}
                        / ${item.targetMoney ? item.targetMoney : 0}
                        <span class="ml-[0.625rem] text-[1.25rem] text-[--white] @464:text-[1.375rem] @1050:text-[1.5rem]">
                          {item.targetMoney
                            ? item.targetMoney <= 0
                              ? "0"
                              : Math.round(
                                  ((item.nowMoney && item.nowMoney > 0
                                    ? item.nowMoney
                                    : 0) *
                                    100) /
                                    item.targetMoney,
                                )
                            : "0"}
                          %
                        </span>
                      </p>
                    </div>

                    {item.dateIsKnow ? (
                      <span class="absolute bottom-[0.625rem] right-[0.625rem] flex items-center justify-center tracking-[0.05em]">
                        <img
                          class="mr-[0.3125rem] w-[0.9375rem]"
                          src={calendar}
                          alt="Date"
                        ></img>
                        TBA
                      </span>
                    ) : (
                      <div class="mr-[0.9375rem] flex justify-between text-[0.875rem] [grid-area:date]">
                        <span>
                          {front.Services.functions.timeStampToDate(
                            item.dateCreate,
                            ".",
                          )}
                        </span>
                        <span>
                          {front.Services.functions.timeStampToDate(
                            item.dateUpdate,
                            ".",
                          )}
                        </span>
                      </div>
                    )}
                  </a>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default function () {
  Fn.log("=74e4f1=", Static.records);
  return (
    <section>
      <div class="wrapper">
        <CategoryLine
          items={Static.categories}
          active={Static.makeFilter.cat}
        />

        <RenderItems items={Static.records} />
      </div>
    </section>
  );
}
