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
  return (
    <div class="ico">
      <div class="ico_inner">
        <div
          class="ico__tabs"
          ref="tabs"
        >
          {states.map((item, index) => {
            return (
              <div
                ref="tabsItem"
                class={["ico__tabs-item", Static.activeIndex == index ? "ico__tabs-item_active" : null]}
                onclick={() => {
                  if (Static.makeFilter.active == item.name) {
                    return;
                  }
                  Static.makeFilter.active = item.name;
                  // fn("addEvent");
                  front.Services.functions.sendApi("/api/events/Icos", {
                    action: "get",
                    category: Static.makeFilter.cat == "Все" ? "All" : Static.makeFilter.cat,
                    type: Static.makeFilter.active,
                  });
                  Static.activeIndex = index;
                  Ref.tabsSlider.style.left = `${Ref.tabsItem.offsetWidth * Static.activeIndex}px`;
                  Ref.icoList.classList.add("animated");
                  setTimeout(() => {
                    Ref.icoList.classList.remove("animated");
                  }, 500);
                  // init();
                }}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
          <div
            class="ico__tabs-slider"
            ref="tabsSlider"
          ></div>
        </div>
        {!items.length ? (
          <div class="notFound">
            <img
              src={notFound}
              alt="Нет записей"
            />
            Нет записей
          </div>
        ) : null}
        <div
          class="ico__list"
          ref="icoList"
        >
          {!items.length
            ? null
            : items.map((item: any, index: number) => {
                // Fn.log("=91648e=", items);
                return (
                  <a
                    class="ico__list-item"
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
                              let res = front.Services.functions.sendApi("/api/events/Icos", {
                                action: "skip",
                                category: Static.makeFilter.cat == "Все" ? "All" : Static.makeFilter.cat,
                                type: Static.makeFilter.active,
                                skip: Static.records.length,
                              });
                              // Fn.log("=e26cda=", res);
                            }
                          });
                        });
                        observer.observe($el);
                      }
                    }}
                  >
                    <span class="category">{item.category}</span>
                    <div class="ico__list-item-image">
                      <img
                        src={`/assets/upload/worldPress/${item.icon}`}
                        alt="ICO Rating"
                      ></img>
                    </div>

                    <div class="ico__list-item-info">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <p class="ico__list-item-finance pt_15">
                        <span class="text_important">${item.nowMoney ? item.nowMoney : 0}</span> / ${item.targetMoney ? item.targetMoney : 0}
                        <span class="pl_15 ico__percent">
                          {item.targetMoney ? (item.targetMoney <= 0 ? "0" : Math.round(((item.nowMoney && item.nowMoney > 0 ? item.nowMoney : 0) * 100) / item.targetMoney)) : "0"}%
                        </span>
                      </p>
                    </div>

                    {item.dateIsKnow ? (
                      <span class="ico__tba">
                        <img
                          src={calendar}
                          alt="Date"
                        ></img>
                        TBA
                      </span>
                    ) : (
                      <div class="ico__list-item-date">
                        <span>{front.Services.functions.timeStampToDate(item.dateCreate, ".")}</span>
                        <span>{front.Services.functions.timeStampToDate(item.dateUpdate, ".")}</span>
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
