import { Cemjsx, Static, Ref, Fn, front } from "cemjs-all";
import CategoryLine from "./CategoryLine";
import calendar from "@svg/icons/calendar.svg";

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
          class="ico_tabs"
          ref="tabs"
        >
          {states.map((item, index) => {
            return (
              <div
                ref="tabsItem"
                class={["ico_tabs_item", Static.activeIndex == index ? "ico_tabs_item_active" : null]}
                onclick={() => {
                  if (Static.makeFilter.active == item.name) {
                    return;
                  }
                  Static.makeFilter.active = item.name;
                  // fn("addEvent");
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
            class="ico_tabs_slider"
            ref="tabsSlider"
          ></div>
        </div>
        <div
          class="ico_list"
          ref="icoList"
        >
          {!items.length ? (
            <p>not found</p>
          ) : (
            items.map((item, index) => {
              return (
                <a
                  class="ico_list_item"
                  href={`/ico/show/${item.id}`}
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
                >
                  <span class="category">{item.category}</span>
                  <div class="ico_list_item_image">
                    <img
                      src={`/assets/upload/worldPress/${item.icon}`}
                      alt="ICO Rating"
                    ></img>
                  </div>

                  <div class="ico_list_item_info">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <p class="ico_list_item_finance pt_15">
                      <span class="text_important">${item.nowMoney}</span> / ${item.targetMoney}
                      <span class="pl_15 ico_percent">{item.targetMoney <= 0 ? "0" : Math.round(((item.nowMoney && item.nowMoney > 0 ? item.nowMoney : 0) * 100) / item.targetMoney)}%</span>
                    </p>
                  </div>

                  {item.dateIsKnow ? (
                    <span class="ico_tba">
                      <img
                        src={calendar}
                        alt="Date"
                      ></img>
                      TBA
                    </span>
                  ) : (
                    <div class="ico_list_item_date">
                      <span>{front.Services.functions.timeStampToDate(item.dateCreate, "-")}</span>
                      <span>{front.Services.functions.timeStampToDate(item.dateUpdate, "-")}</span>
                    </div>
                  )}
                </a>
              );
            })
          )}
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
          active={Static.catActive}
        />

        <RenderItems items={Static.records} />
      </div>
    </section>
  );
}
