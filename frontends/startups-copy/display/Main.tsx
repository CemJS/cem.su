import { Cemjsx, Fn, Static, front } from "cemjs-all";
import notFound from "@svg/icon/notFound.svg";
import Category from "./Category";

const RenderItems = function ({ items }) {
  if (!items.length) {
    return (
      <div class="notFound">
        <img
          src={notFound}
          alt={front.Variable?.words?.notFoundRecords}
        />
        {front.Variable?.words?.notFoundRecords}
      </div>
    );
  }
  return (
    <section class="startaps">
      <div
        class="startaps_inner"
        ref="startapsList"
      >
        {!items.length ? (
          <p>not found</p>
        ) : (
          items.map((item, index) => {
            return (
              <a
                class="startaps__item"
                init={($el: any) => {
                  if (index == Static.records?.length - 1) {
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(async (entry) => {
                        if (entry.isIntersecting) {
                          observer.unobserve($el);
                          let res = front.Services.functions.sendApi("/api/events/Startups", {
                            action: "skip",
                            category: Static.catActive == "Все" ? "All" : Static.catActive,
                            skip: Static.records.length,
                          });
                        }
                      });
                    });
                    observer.observe($el);
                  }
                }}
                onclick={(e) => {
                  Static.record = item;
                  Fn.log("=af157b=", item);
                  Fn.linkChange(`/list-startups/show/${item.id}`);
                }}
                isVisible={() => {
                  if (index == items.length - 3) {
                    Static.moreid = items[items.length - 1].id;
                  }
                }}
              >
                {/* <span class="category">{item.category}</span> */}
                <div class="startaps__item-image">
                  <img src={`/assets/upload/worldPress/${item.icon}`}></img>
                </div>
                <div class="startaps__item-info">
                  <h5 class="startaps__item-info-title">{item.title}</h5>
                  <p class="startaps__item-info-text">{item.description}</p>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
};

export default function () {
  return (
    <section class="wrapper">
      <Category items={Static.categories} />
      <RenderItems items={Static.records} />
    </section>
  );
}
