import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import introImg from "@images/forum/Crypto.png";

export default function () {
  return (
    <section class="relative pb-10 pt-[0.625rem] md:pb-[6.25rem] md:pt-[8.3125rem]">
      <div class="wrapper">
        <div class="relative z-[unset] mx-auto flex max-h-[42.1875rem] max-w-[75rem] items-center justify-center gap-[5%] rounded-[2.8125rem] px-[0.625rem] py-5 [background:--greenGradient]">
          <div class="forum__intro-img">
            <img src={introImg} alt="Crypto ЮГ 2023" />
          </div>
          <div class="forum__intro-right">
            <h2 class="forum__intro-title">Ежегодный криптовалютный форум</h2>
            <p class="forum__intro-subtitle">
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
