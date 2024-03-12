import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import metis from "@images/forum/metis.png";
import racib from "@images/forum/racib.png";
import logo from "@svg/logo.svg";
import schedule3 from "@images/forum/schedule3.png";
import schedule4 from "@images/forum/schedule4.png";

export default function () {
  return (
    <section class="relative z-[2] mb-[4.375rem]">
      <div class="wrapper wrapper_padding">
        <div class="flex flex-col items-center gap-[2.5rem] text-center">
          <div class="w-[70%] max-w-[53.125rem]">
            <div class="text-[clamp(0.9rem,3vw,2.8125rem)] leading-[1.3]">
              Команда{" "}
              <span class="font-bold text-[--green]">Crypto Emergency</span>{" "}
              рада пригласить тебя на второй ежегодный криптофорум{" "}
              <span class="font-bold text-[--green]">Crypto Юг 2023</span>,
              который состоится 3 и 4 июня в г. Новороссийске.
            </div>
          </div>
          <div class="text-[clamp(2rem, 2vw, 3.25rem)] mb-[1.875rem] flex flex-col items-center gap-[2.1875rem]">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              Организатор
            </h3>
            <img
              class="@1000:max-w-[15.625rem] w-full max-w-[9.375rem]"
              src={logo}
              alt="Crypto Emergency"
            />
          </div>
          <div class="text-[clamp(2rem, 2vw, 3.25rem)] mb-[1.875rem] flex flex-col items-center gap-[2.1875rem]">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              Спонсор After party
            </h3>
            <img
              class="@1000:max-w-[15.625rem] w-full max-w-[9.375rem]"
              src={metis}
              alt="Metis"
            />
          </div>
          <div class="text-[clamp(2rem, 2vw, 3.25rem)] mb-[1.875rem] flex flex-col items-center gap-[2.1875rem]">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              При поддержке
            </h3>
            <img
              class="@1000:max-w-[15.625rem] w-full max-w-[9.375rem]"
              src={racib}
              alt="РАКИБ"
            />
          </div>
          <div class="flex flex-col gap-5">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              Расписание форума
            </h3>
            <div
              onclick={() => {
                Fn.initOne("modalGallery", { schedule: 1 });
              }}
              class="flex w-full flex-col items-center gap-5 @500:flex-row"
            >
              <img
                src={schedule3}
                alt="Расписание 3 июня"
                class="@1000:max-w-[18.625rem] w-full max-w-[9.375rem]"
              />
              <img
                src={schedule4}
                alt="Расписание 4 июня"
                class="@1000:max-w-[18.625rem] w-full max-w-[9.375rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
