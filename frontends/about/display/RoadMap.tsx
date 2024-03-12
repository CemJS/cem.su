import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import previewImg from "@images/careerBg.png";
import blockchain from "@images/about/main/blockchain.jpg";
import rocket from "@svg/about/roadmap/rocket.svg";
import wallet from "@svg/about/roadmap/wallet.svg";
import community from "@svg/about/roadmap/community.svg";
import univercity from "@svg/about/roadmap/university.svg";
import exchange from "@svg/about/roadmap/exchange.svg";
import network from "@svg/about/roadmap/network.svg";
import arrowUp from "@svg/about/roadmap/arrowUp.svg";

const roadmap = [
  {
    title: "Старт проекта",
    date: "15 июня 2021г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: rocket,
  },
  {
    title: "Собственный Блокчейн СЕМ",
    date: "19 мая 2022г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: blockchain,
  },
  {
    title: "Кошелёк Cem Wallet",
    date: "Сентябрь 2022г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: wallet,
  },
  {
    title: "Сообщество DAO",
    date: "Лето 2023г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: community,
  },
  {
    title: "Крипто Университет",
    date: "Осень 2023г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: univercity,
  },
  {
    title: "Собственная Биржа",
    date: "Начало 2024г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: exchange,
  },
  {
    title: "Новостная нейросеть",
    date: "Конец 2024г.",
    desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
    icon: network,
  },
];

const RenderRoadMap = function ({ items }) {
  return (
    <div class="roadmapNew">
      <h1 class="z-[1] mx-0 my-[1.5625rem] text-balance text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        Дорожная карта
      </h1>
      <div class="relative mx-auto my-[3.125rem] max-w-[1080px] px-[1.25rem] py-0 text-[#2B3040] ">
        <div class="absolute left-[2.5rem] top-[1.25rem] h-full w-[.25rem] bg-[white] [animation:moveline_5s_linear_forwards] [transform:translateX(-50%)] @772:left-[50%]">
          <div class="absolute bottom-[0] left-[50%] flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[50%] bg-[#f2f2f2] shadow-[0_0_0_4px_#fff,_inset_0_2px_0_#00000014,_0_3px_0_4px_#0000000d] [transform:translateX(-50%)]">
            <img class="w-[1.25rem]" src={arrowUp} alt="Иконка" />
          </div>
        </div>
        {items.map((item: any, index: number) => {
          return (
            <div
              class={[
                "roadmapNew_row justify-start[transition:all_1s_ease-in-out] invisible relative z-[3] flex opacity-0 max-[772px]:m-[1.875rem_0_.1875rem_3.75rem]",
                `roadmapNew_row_${index + 1}`,
              ]}
              init={($el: any) => observerRoadmap.observe($el)}
            >
              <section
                class="relative rounded-[1rem] [transition:all_0.5s_ease-in-out] top-[1.875rem] w-[calc(50%_-_2.5rem)] bg-[white] p-[20px]
              before:absolute before:top-[1.875rem] before:z-0 before:h-[.9375rem] before:w-[.9375rem] before:bg-[white] before:content-[''] before:[transform:rotate(45deg)]"
              >
                <div class="roadmapNew_icon absolute flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#f2f2f2] shadow-[0_0_0_4px_white,_inset_0_2px_0_#00000014,_0_3px_0_4px_#0000000d] max-[772px]:left-[-60px]">
                  <img class="w-[1.25rem]" src={item.icon} alt="Иконка" />
                </div>
                <div class="flex justify-between">
                  <span class="text-[clamp(22px,_5vw,_16px)] font-semibold">
                    {item.title}
                  </span>
                </div>
                <p class="mx-0 my-[.625rem] p-0 text-[clamp(18px,_5vw,_14px)] font-normal">
                  {item.desc}
                </p>
                <span class="text-[clamp(22px,_5vw,_16px)] font-semibold">
                  {item.date}
                </span>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const observerRoadmap = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    item.target.classList.toggle("in_view", item.isIntersecting);
  });
});

export default function () {
  return (
    <div>
      <RenderRoadMap items={roadmap}></RenderRoadMap>
    </div>
  );
}
