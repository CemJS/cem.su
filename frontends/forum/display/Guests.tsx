import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import guests from "@json/forum/forumGuests";

export default function () {
  return (
    <section class="forum__guests forum_z-index">
      <h2 class="forum__title forum__title_margin">Гости Crypto Emergency</h2>
      <div class="forum__guests-list">
        {guests.map((item) => {
          return (
            <a href={item.href} target="_blank" class="forum__guest mx-auto">
              <div class="forum__guest-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  class="forum__guest-img"
                />
              </div>

              <h4 class="forum__guest-name">{item.name}</h4>
              <p class="forum__guest-desc">{item.desc}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
