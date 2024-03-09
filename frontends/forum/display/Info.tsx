import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import metis from "@images/forum/metis.png";
import racib from "@images/forum/racib.png";
import logo from "@svg/logo.svg";
import schedule3 from "@images/forum/schedule3.png";
import schedule4 from "@images/forum/schedule4.png";

export default function () {
  return (
    <section class="forum__info forum__info_margin">
      <div class="wrapper wrapper_padding">
        <div class="forum__info-wrapper">
          <div class="forum__info-invite">
            <div class="forum__text">
              Команда <span class="forum__text_green">Crypto Emergency</span>{" "}
              рада пригласить тебя на второй ежегодный криптофорум{" "}
              <span class="forum__text_green">Crypto Юг 2023</span>, который
              состоится 3 и 4 июня в г. Новороссийске.
            </div>
          </div>
          <div class="forum__info-sponsor">
            <h3 class="forum__info-title">Организатор</h3>
            <img src={logo} alt="Crypto Emergency" />
          </div>
          <div class="forum__info-sponsor">
            <h3 class="forum__info-title">Спонсор After party</h3>
            <img src={metis} alt="Metis" />
          </div>
          <div class="forum__info-sponsor">
            <h3 class="forum__info-title">При поддержке</h3>
            <img src={racib} alt="РАКИБ" />
          </div>
          <div class="forum__info-schedules">
            <h3 class="forum__info-title">Расписание форума</h3>
            <div class="forum__info-cover">
              <img
                onclick={() => {
                  Fn.initOne("modalGallery", { schedule: 1 });
                }}
                src={schedule3}
                alt="Расписание 3 июня"
                class="forum__info-schedule"
              />
              <img
                src={schedule4}
                alt="Расписание 4 июня"
                class="forum__info-schedule"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
