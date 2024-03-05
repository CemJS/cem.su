import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import previewImg from "@images/careerBg.png";

import yan from "@images/about/team/team1.png";
import anya from "@images/about/team/team2.png";
import dima from "@images/about/team/team3.png";
import igor from "@images/about/team/team4.png";
import logo from "@svg/about/cryptoEmergency.svg";

const team = [
  {
    image: yan,
    name: "Ян Кривоносов",
    post: "CEO и Founder",
    link: "/user/Yan_Krivonosov",
  },
  {
    image: igor,
    name: "Игорь Еньшин",
    post: "Технический директор",
    link: "/user/Betarost",
  },
  {
    image: anya,
    name: "Анна Рыжкова",
    post: "Руководитель дизайн отдела",
    link: "/user/Anyaryzhkova",
  },
  {
    image: dima,
    name: "Дмитрий Белов",
    post: "Управляющий директор",
    link: "/user/Dmitrii_Belov",
  },
];

export default function () {
  return (
    <div>
      <h2 class="my-6 text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-[1.5] text-white">
        Команда
      </h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((item) => {
          return (
            <div>
              <div class="relative px-20 py-40 [transform-style:preserve-3d] [transition:transform_1.5s] hover:[transform:rotateY(180deg)]">
                <div
                  class={`[backface-visibility: hidden] [transform-style: preserve-3d] [background-blend-mode: overlay] [background-image: url(${item.image})] absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-end bg-[rgba(23,27,39,0.2588235294)] bg-contain bg-no-repeat p-4 [background-position:center_20px] xl:bg-cover`}
                >
                  <div class="team_item_title">
                    <h2>{item.name}</h2>
                  </div>
                  <div class="team_item_post">
                    <p>{item.post}</p>
                  </div>
                </div>

                <div
                  class="team_item_back"
                  style={`background-image: url(${item.image});`}
                >
                  <a
                    href={item.link}
                    class="btn btn_timing"
                    onclick={this.Fn.link}
                  >
                    <span>Перейти в профиль</span>
                    <img src={logo} alt="Присоединиться к телеграм каналу" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
