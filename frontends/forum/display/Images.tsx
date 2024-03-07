import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import { DisplayImages } from "@elements/ImagesForumSlider";
import images from "@json/forum/forumImages";

export default function () {
  return (
    <div class="forum__images">
      <DisplayImages
        items={images?.map((item: any) => {
          return (
            <div class="gallery_slide">
              <img
                onclick={() => {
                  Fn.initOne("modalGallery", {
                    images: images,
                  });
                }}
                ref="slide"
                class="forum__image"
                src={`/contents/forum/images/${item?.image}`}
                alt="img"
              />
            </div>
          );
        })}
        buttons={false}
        dots={false}
      />
    </div>
  );
}
