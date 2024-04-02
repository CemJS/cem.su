import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
import { Display } from "@elements/GallerySlider";
import { DisplaySchedule } from "@elements/GallerySchedule";
import { DisplayImages } from "@elements/GalleryForumImages";

export default function () {
  console.log("=eff4de=", Static);
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === Ref.modalBody) {
          setTimeout(() => {
            Fn.clearData();
            front.Variable.$el.body.classList.remove("activeModal");
            front.Variable.$el.body.style.overflow = "auto";
          }, 5);
        }
      }}
    >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content modalWindow_content_gallery">
          <main class="modalWindow_main">
            <div class="modalGallery_carousel">
              {Static.records ? <Display items={Static.records} /> : null}
              {Static.schedule ? (
                <DisplaySchedule items={Static.schedule} />
              ) : null}
              {Static.images ? <DisplayImages items={Static.images} /> : null}
              {/* <img src={`/assets/upload/worldPress/${Static.records[Static.activeIndex].name}`} /> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
