import { Cemjsx, Static, Fn, Func, front } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";

const RenderEl = function () {
  return (
    <div class="relative block animate-pulse rounded-[0] px-[1.5625rem] py-[1.875rem] pt-[.9375rem] odd:bg-[#323746] @767:grid @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:40%_10%_15%_30%_5%]">
      <div class="relative top-0 cursor-pointer @767:top-[1.25rem]">
        <div class="flex">
          <a
            class={[
              "left-[-.9375rem] mr-[5px] w-[5rem] pl-0 text-inherit no-underline",
              "flex justify-center",
            ]}
          >
            <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
              <img class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-slate-700 object-cover" />

              <img
                class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
                src={defaultGray}
              />
              <div></div>
            </div>
          </a>
          <div>
            <a class="text-inherit no-underline">
              <div class="mb-[.625rem] box-border h-4 w-[10rem] rounded bg-slate-700 text-[1.125rem] max-@767:pr-[1.25rem]"></div>
              <div class="mb-[.625rem] box-border h-4 w-[7rem] rounded bg-slate-700 text-[1.125rem] max-@767:pr-[1.25rem]"></div>
            </a>
            <div>
              <div class="relative mb-[.9375rem] mt-[.9375rem] box-border h-2 w-[5rem] rounded bg-slate-700 max-@767:mt-[.625rem] @767:mb-[.625rem]"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative box-border inline-block text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] @767:text-center">
        <span class="relative top-0 inline h-[.625rem] rounded bg-slate-700 pr-[5.5rem] @767:absolute @767:top-[2.1875rem] @767:hidden">
          {/* Комментариев */}
        </span>
        <span class="relative top-0 h-2 w-[2rem] rounded bg-slate-700 text-[.9375rem] font-bold @767:absolute @767:top-[2.1875rem]"></span>
      </div>
      <div class="relative box-border inline-block text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] @767:text-center">
        <span class="relative top-0 inline h-[10px] rounded bg-slate-700 pr-[4rem] @767:absolute @767:top-[2.1875rem] @767:hidden">
          {/* Рейтинг */}
        </span>
        <span class="relative top-0 h-2 w-[2rem] rounded bg-slate-700 text-[.9375rem] font-bold @767:absolute @767:top-[2.1875rem]"></span>
      </div>
      <div class="questions-table__avatar flex w-full items-end text-center max-@767:mb-[1.5625rem] max-@767:mr-[3.125rem]">
        <div class="relative mt-[1.25rem]">
          {Array.from({ length: 6 }, (_, index) => {
            const randomWidth = Math.floor(Math.random() * (15 - 10) + 10);
            return (
              <p
                style={`width: ${randomWidth}rem;`}
                key={index}
                class="mb-[1rem] mt-0 h-2 rounded bg-slate-700"
              ></p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function ({ countAnswers }) {
  return (
    <div>
      {Array.from({ length: Math.min(countAnswers, 5) }, (_, index) => (
        <RenderEl key={index} />
      ))}
    </div>
  );
}
