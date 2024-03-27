import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import introImg from "@images/forum/Crypto.png";

export default function () {
  return (
    <section class="relative pb-10 pt-[0.625rem] md:pb-[6.25rem] md:pt-[8.3125rem]">
      <div class="wrapper">
        <div class="relative z-[unset] mx-auto flex max-h-[42.1875rem] max-w-[75rem] items-center justify-center gap-[5%] rounded-[2.8125rem] px-[0.625rem] py-5 [background:--greenGradient]">
          <div class="z-[3] min-w-[50%] max-w-[44.125rem] grow-0 basis-1/2">
            <img class="w-full" src={introImg} alt="Crypto ЮГ 2023" />
          </div>
          <div class="z-[3]">
            <h2 class="mb-4 max-w-[350px] text-[clamp(0.9rem,4vw,2.8125rem)] leading-[clamp(0.9rem,4vw,3.8813rem)]">
              Ежегодный криптовалютный форум
            </h2>
            <p class="whitespace-nowrap text-[clamp(1rem,2vw,2.4375rem)] font-light leading-[1.2]">
              3-4 июня
              <br />
              г. Новороссийск
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
