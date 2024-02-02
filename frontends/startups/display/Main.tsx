import { Cemjsx, Fn, Static, front } from "cemjs-all";
import CategoryLine from "./CategoryLine";
import Show from "./Show";

const RenderItems = function ({ items }) {
  if (!items.length) {
    return <div class="news__inner">нет записей</div>;
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
                // href={`/list-startups/show/${item.id}`}
                init={($el: any) => {
                  if (index == Static.records?.length - 1) {
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(async (entry) => {
                        // Fn.log("=6ba7c1=111111", entry.isIntersecting, entry);
                        if (entry.isIntersecting) {
                          // Fn.log("=2a3c8e=", 6666666);
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
                  // Static.record = item._id;
                  // let listener = [
                  //   {
                  //     type: "get",
                  //     fn: ({ data }) => {
                  //       let json = front.Services.functions.strToJson(data);
                  //       if (!json) {
                  //         return;
                  //       }
                  //       Static.record = json;
                  //     },
                  //   },
                  // ];
                  // Events.new = await Fn.event(
                  //   front.Services.functions.makeUrlEvent("News", {
                  //     action: "show",
                  //     id: item._id,
                  //   }),
                  //   listener
                  // );
                  // Events.news.change(front.Services.functions.makeUrlEvent("News", {
                  //     action: "show",
                  //     id: item._id
                  // }), listener)

                  Static.record = item;
                  Fn.log("=af157b=", item);
                  Fn.linkChange(`/list-startups/show/${item.id}`);

                  // Fn.log("=efa796=", item);
                  // Fn.link(e);
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
      <CategoryLine items={Static.categories} />
      <RenderItems items={Static.records} />
      {/* {Static.record ? <Show /> : null} */}
    </section>
  );
}
