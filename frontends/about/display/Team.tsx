import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
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
    post: front.Variable?.words?.positions?.founder,
    link: "/user/Yan_Krivonosov",
  },
  {
    image: igor,
    name: "Игорь Еньшин",
    post: front.Variable?.words?.positions?.techDirector,
    link: "/user/Betarost",
  },
  {
    image: anya,
    name: "Анна Рыжкова",
    post: front.Variable?.words?.positions?.designDirector,
    link: "/user/Anyaryzhkova",
  },
  {
    image: dima,
    name: "Дмитрий Белов",
    post: front.Variable?.words?.positions?.managingDirector,
    link: "/user/Dmitrii_Belov",
  },
];

export default function () {
  return (
    <div>
      <h2 class="z-[1] mx-0 my-[1.5625rem] text-balance text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        {front.Variable?.words?.team}
      </h2>
      <div class="grid grid-cols-1 gap-[1.25rem] @600:grid-cols-2 @1100:grid-cols-4">
        {team.map((item) => {
          return (
            <div class="team_item group">
              <div class="z-[10] relative px-[5rem] py-[10rem] [transform-style:preserve-3d] [transition:transform_1.5s] group-hover:[transform:rotateY(180deg)]">
                <div
                  class="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-end bg-[#171b2742] bg-contain bg-no-repeat p-4 bg-blend-overlay [transform-style:preserve-3d] [backface-visibility:hidden] [background-position:center_1.25rem] before:absolute before:inset-[1rem] before:content-[''] before:[border:3px_solid_var(--akebi-purple)] before:[transform:translateZ(2rem)] @1100:bg-cover"
                  style={`background-image: url(${item.image});`}
                >
                  <div class="w-[98%] bg-[#31354180] p-[0.5rem] [transform:translateZ(2rem)]">
                    <h2 class="m-0 text-balance text-[1.2rem] font-semibold leading-[1.1]">
                      {item.name}
                    </h2>
                  </div>
                  <div class="w-[98%] bg-[#ffffff80] p-[0.5rem] [transform:translateZ(2rem)]">
                    <p class="m-0 text-[0.9rem] font-semibold text-[#000000]">
                      {item.post}
                    </p>
                  </div>
                </div>

                <div
                  class="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end bg-contain bg-no-repeat p-4 bg-blend-overlay [transform-style:preserve-3d] [backface-visibility:hidden] [background-position:center_1.25rem] @1100:bg-cover [transform:rotateY(180deg)] gap-[0.5rem] items-center"
                  style={`background-image: url(${item.image});`}
                >
                  <a
                    href={item.link}
                    class="btn hover:bg-right p-[.625rem] flex gap-[.625rem] justify-between items-center w-fit [transform:translateZ(2.4rem)]"
                    onclick={this.Fn.link}
                  >
                    <span class="h-full block">{front.Variable?.words?.user?.goToProfile}</span>
                    <img class="w-[1.375rem]" src={logo} alt={front.Variable?.words?.tools?.goOver} />
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
