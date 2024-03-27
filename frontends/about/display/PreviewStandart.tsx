import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import lines from "@svg/lines.svg";

export default function () {
  return (
    <div
      class="abouts
      relative 
      flex
      items-center
      justify-center
      bg-cover 
      bg-no-repeat 
      pb-[10.25rem] 
      pt-[6.375rem]
      text-center
      max-sm-[599px]:pb-[3.75rem]
      max-sm-[599px]:pt-[3.125rem]"
      style={`background-image: url(${"/contents/background/71fb4fe9899634886318.jpg"})`}
    >
      <div class="max-w-7xl px-[1.875rem] @374:pt-auto pt-[4rem]">
        <img class="absolute left-0 z-[1]" src={lines} />
        <h2
          class="relative 
          z-[3]
          my-6 
          text-center 
          text-[clamp(1.875rem,3vw,2.75rem)] 
          font-bold 
          leading-[115%] 
        text-[#FFFFFF]"
        >
          Crypto Emergency
        </h2>
        <p
          class="@374:leading-[2.4rem] 
           relative
           z-[1]
           mx-auto 
           max-w-[54.0625rem] 
           text-[clamp(.95rem,3vw,1.25rem)] 
           font-normal 
           text-[#FFFFFF]"
        >
          Объединяем криптоэнтузиастов всего мира на единой многофункциональной
          платформе Crypto Emergency, которая даст им все необходимые
          инструменты для общения, обучения, заработка и создания собственного
          контента.
        </p>
      </div>
      <div
        style="background: linear-gradient(0deg, #232733 2.22%, rgba(35, 39, 51, 0) 177.88%);}"
        class="absolute top-[.0625rem] h-full w-full"
      ></div>
    </div>
  );
}
