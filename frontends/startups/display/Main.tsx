import { Cemjsx, Fn, Static } from "cemjs-all";
import CategoryLine from "./CategoryLine";

const RenderItems = function ({ items }) {
  if (!items.length) {
    return <div class="news__inner">нет записей</div>;
  }
  return (
    <section class="startaps">
      <div class="wrapper">
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
                  class="startaps_item"
                  href={`/startups/show/${item._id}`}
                  onclick={(e) => {
                    Static.record = item;
                    Fn.link(e);
                  }}
                  isVisible={() => {
                    if (index == items.length - 3) {
                      Static.moreid = items[items.length - 1]._id;
                    }
                  }}
                >
                  <span class="category">{item.category}</span>
                  <div class="startaps_item_image">
                    <img src={`/assets/upload/worldPress/${item.icon}`}></img>
                  </div>
                  <div class="startaps_item_info">
                    <h5 class="startaps_item_info_title">{item.title}</h5>
                    <p class="startaps_item_info_text">{item.description}</p>
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default function () {
  return (
    <section class="wrapper">
      <CategoryLine items={Static.categories} />
      <div class="wrapper">
        <RenderItems items={Static.records} />
      </div>
    </section>
  );
}
