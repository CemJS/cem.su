import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import previewImg from "@images/careerBg.png";

export default function () {
  return (
    <div class="relative before:absolute before:left-[-27.125rem] before:top-[-11.1875rem] before:z-[-1] before:h-[61.8125rem] before:w-[61.8125rem] before:blur-[17.75rem] before:content-[''] before:[background:radial-gradient(41.76%_41.76%_at_50%_50%,#915dff_0%,rgba(191,9,255,0)_100%)]">
      <div
        style="background: var(--lightBlueGradient)"
        class="absolute left-[-27.1rem] top-[-11.18rem] z-[-1] h-[61.81rem] w-[61.81rem] blur-[17.75rem]"
      ></div>
      <div class="relative flex justify-between ">
        <div class="w-full pb-[6.5rem] pt-[1.875rem] text-center md:w-1/2 md:pb-[17.5rem] md:pt-[8.75rem] md:text-left">
          <h1 class="mb-[1.875rem] text-[clamp(2.5rem,6vw,4.375rem)] font-bold">
            Карьера в Crypto Emergency
          </h1>
          <p class="text-[clamp(1rem,3vw,1.25rem)] font-medium text-[--textGray]">
            Присоединяйтесь к нашей команде.
          </p>
        </div>
        <img
          style="filter: drop-shadow(5.625rem 3.625rem 7.5rem rgba(255,70,12,0.44))"
          src={previewImg}
          alt="Карьера в Crypto Emergency"
          class="md:translate-x-[calc(4%) - 1.25rem] absolute left-1/2 top-0 hidden w-full object-contain md:block md:h-[40.625rem] md:max-w-[32.81rem] xl:h-[47.25rem] xl:max-w-[57.375rem]"
        />
      </div>
    </div>
  );
}
