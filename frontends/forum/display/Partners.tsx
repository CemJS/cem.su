import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import partners from "@json/forum/forumPartners";

export default function () {
  return (
    <section class="forum__partners forum_z-index">
      <div class="wrapper wrapper_padding">
        <h2 class="forum__title mY-25">Партнеры</h2>
        <div class="forum__partners-list">
          {partners?.map((item) => {
            return (
              <a href={item.url} target="_blank" class="forum__partners-item">
                <img
                  src={`/contents/forum/partners/${item?.logo}`}
                  alt="Партнёр"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
