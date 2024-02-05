import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import { Display } from "@elements/GallerySlider";

export default function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === Ref.modalBody) {
          setTimeout(() => {
            Fn.clearData();
          }, 5);
        }
      }}
    >
      <div
        class="modalWindow_body"
        ref="modalBody"
      >
        <div class="modalWindow_content modalWindow_content_gallery">
          <button
            class="modalWindow_button_close"
            onclick={(e) => {
              setTimeout(() => {
                Fn.clearData();
              }, 5);
              Ref.modalWindow.classList.remove("activeModal");
              Static.body.classList.remove("activeModal");
              Static.body.style.overflow = "auto";
            }}
          >
            X
          </button>

          <main class="modalWindow_main">
            <div class="modalGallery_carousel">
              <Display items={Static.records} />
              {/* <img src={`/assets/upload/worldPress/${Static.records[Static.activeIndex].name}`} /> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
