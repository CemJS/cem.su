import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import folder from "@svg/about/goal_1.svg";
import safe from "@svg/about/goal_2.svg";
import access from "@svg/about/goal_3.svg";
import pin from "@svg/about/goal_4.svg";

const goals = [
  {
    img: folder,
    title: "Поднять крипто грамотность населения",
    description:
      "Мы создали платформу, где любой желающий может найти ответ на свой вопрос, и обрести навыки инвестирования в криптовалюту.",
    classItem: "crypto",
  },
  {
    img: safe,
    title: "Объединить людей",
    description: "Создать мульти интернациональное комьюнити по всему миру.",
    classItem: "unite",
  },
  {
    img: access,
    title: "Бесплатный доступ",
    description:
      "Весь функционал на сайте не потребует от вас никаких вложений!",
    classItem: "access",
  },
  {
    img: pin,
    title: "Создание метавселенной",
    description: "Объединение всех продуктов компании в одной метавселенной.",
    classItem: "meta",
  },
];

export default function () {
  return (
    <div>
      <h2
        class="mb-[41px]
        mt-[25px]
        text-center
        text-[clamp(30px,5vw,44px)]
        font-bold 
        leading-6 text-[#FFFFFF] 
        max-sm:mb-[25px]"
      >
        Наши цели
      </h2>
      <div
        class="grid-rows-auto
       relative 
       z-10 
       mb-6 
       grid !grid-cols-1 !gap-5 @464:!grid-cols-2 @992:!grid-cols-4 @992:gap-4"
      >
        {goals.map((item: any) => {
          return (
            <div
              style="backdrop-filter: blur(10px);"
              class={[
                "hover:before:@767:[clip-path:circle(300px_at_80%_-65%)] group relative h-[265px] overflow-hidden rounded-[1.25rem] border-[0.0625rem] border-solid border-[#ffffff0d] bg-[#ffffff05] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#A87FFF] before:opacity-50 before:content-[''] before:[clip-path:circle(300px_at_80%_-70%)] before:[transition:0.5s_ease-in-out] after:absolute after:bottom-[10%] after:left-[-15%] after:text-[7rem] after:font-extrabold after:italic after:text-[#ff22ac0d] hover:before:[clip-path:circle(300px_at_80%_-40%)] @464:h-[20rem] hover:before:@464:[clip-path:circle(300px_at_80%_-60%)] @992:h-[28.125rem] before:@992:[clip-path:circle(300px_at_80%_-20%)] hover:before:@992:[clip-path:circle(300px_at_94%_-35%)]",

                item.classItem === "crypto"
                  ? "after:content-['Crypto']"
                  : item.classItem === "unite"
                    ? "after:left-0-[-6%] after:content-['Unite']"
                    : item.classItem === "access"
                      ? "after:left-0-[-15%] after:content-['Access']"
                      : item.classItem === "meta"
                        ? "after:left-0-[-3%] after:content-['Meta']"
                        : null,
              ]}
            >
              <div class="absolute top-0 z-[1000] h-[13.75rem] w-full translate-y-0 [transition:0.5s] @992:top-[50%] @992:translate-y-[-50%] group-hover:@992:top-0 group-hover:@992:translate-y-0">
                <img
                  class="@767:w-[3.8125rem] @767:top-[5%] @767:right-[5%] @767:translate-x-[-5] @767:translate-y-[-5%] absolute left-auto right-[5%] top-[10%] w-[4.375rem] translate-x-[-5%] translate-y-[-10%] @992:left-[50%] @992:top-[50%] @992:w-[100px] @992:translate-x-[-50%] @992:translate-y-[-50%]"
                  src={item.img}
                ></img>
              </div>
              {/* @:992:[transition:1s] @767:top-[33%] @767:bottom-auto @767:h-auto z-10 @464:top-[35%] @992:absolute @992:top-[45%] @992:w-full @992:text-center */}
              <div class="absolute z-10 w-full text-center [transition:1s] max-[998px]:top-[33%] max-[767px]:top-[33%] max-[464px]:top-[45%] @992:bottom-[0] @992:h-[100px] group-hover:@992:h-[210px]">
                <h4 class="@767:text-[1.25rem] relative m-0 px-[.625rem] py-0 text-[1.150rem] font-semibold tracking-[.0625rem] text-[#FFFFFF]">
                  {item.title}
                </h4>
                <div class="@767:visible @767:opacity-100 px-[1.25rem] py-[.625rem] text-[.875rem] leading-[1.125rem] [transition:0.3s] @464:text-[.75rem] @992:invisible @992:text-[.875rem] @992:opacity-0 group-hover:@992:visible group-hover:@992:opacity-100 group-hover:@992:delay-[0.5s]">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
