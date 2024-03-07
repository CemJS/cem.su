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
       grid !grid-cols-1 !gap-5 @464:!grid-cols-2 @992:!grid-cols-4 @992:!gap-4"
      >
        {goals.map((item: any) => {
        // console.log("item", item);
        
          return (
            <div
              style="backdrop-filter: blur(10px);"
              class={[
                "goal_item relative h-[265px] overflow-hidden rounded-[1.25rem] border-[0.0625rem] border-solid border-[#ffffff0d] bg-[#ffffff05] duration-[0.5s] ease-in-out before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#A87FFF] before:opacity-50 before:transition-all before:content-[''] after:absolute after:bottom-[10%] after:left-[-15%] after:text-[7rem] after:font-extrabold after:italic after:text-[#ff22ac0d] @464:h-[20rem] @992:h-[28.125rem]",
                { ""
                  // item.classItem === "crypto" ? "after:content-['Crypto']" 
                  // : item.classItem === "unite" ? "after:content-['Unite'] after:left-0-[-6%]"
                  // : item.classItem === "access" ? "after:content-['Access'] after:left-0-[-15%]"
                  // : item.classItem === "meta" ? "after:content-['Meta'] after:left-0-[-3%]"
                  : null
               }        
                    ]}
            >
              <div class="goal_img">
                <img src={item.img}></img>
              </div>
              <div class="goal_content">
                <h4>{item.title}</h4>
                <div class="goal_content__desc">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
