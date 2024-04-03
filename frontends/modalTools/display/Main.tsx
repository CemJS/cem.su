import { Cemjsx, Static, Func, Ref, front } from "cemjs-all";

export default function () {
  return (
    <div class="bottomSheet-overlay" ref="bottomSheetOverlay">
      <div class="bottomSheet-content" ref="bottomSheetContent">
        <div class="bottomSheet-content__header">
          <div
            class="bottomSheet-content__header_drag-icon"
            onmouseup={() => {
              Func.dragStop;
            }}
            onmousedown={(e) => {
              Func.dragStart(e);
            }}
            onmousemove={(e) => {
              Func.dragging(e);
            }}
          >
            <span></span>
          </div>
        </div>
        <div class="bottomSheet-content__body">
          {/* <h2 class="bottomSheet-title">Tools</h2> */}
          <ul class="bottomSheet-list" role="list">
            <li
              class="bottomSheet-list__item"
              onclick={() => {
                Func.share();
              }}
            >
              Поделиться
            </li>

            {Static.records.map((item, index) => {
              return (
                <li
                  onclick={() => {
                    item.func();
                    Func.close();
                  }}
                  class={[
                    "bottomSheet-list__item",
                    item.type == "danger" ? "text-red-600" : null,
                  ]}
                >
                  {item.name}
                </li>
              );
            })}

            <li
              class="bottomSheet-list__item mt-[15px]"
              onclick={() => {
                Func.close();
              }}
            >
              Отмена
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
