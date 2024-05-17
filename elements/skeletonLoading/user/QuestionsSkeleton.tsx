import { Cemjsx, Static, Fn, Func, front } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";

const RenderEl = function () {
  return (
    <div class="relative z-[1] block max-h-[17rem] animate-pulse px-[1.5625rem] py-[1.875rem] pt-[.9375rem] first:rounded-t-[.9375rem] odd:bg-[#323746] @767:grid @767:max-h-[7.3125rem] @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:50%_10%_15%_20%_5%]">
      <div class="relative top-0 cursor-pointer">
        <a class="mx-[45px] text-inherit no-underline">
          <div class="h-2 max-w-[15.625rem] rounded bg-[#3341551f] text-[1.125rem] max-@767:mr-[1.25rem]"></div>
        </a>
        <div>
          <div class="relative mt-[.4375rem] h-2 max-w-[6.25rem] rounded bg-slate-700 max-@767:mb-[.625rem] @767:mt-[.625rem]"></div>
        </div>
      </div>
      <div class="relative text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] max-@767:inline-block @767:text-center">
        <span class="relative top-0 inline h-2 rounded bg-slate-700 pl-[45px] max-@767:pr-[.625rem] @767:absolute @767:top-[2.75rem] @767:hidden"></span>
        <span class="relative top-0 h-2 w-[2rem] rounded bg-slate-700 max-@767:text-[.9375rem] max-@767:font-bold @767:absolute @767:top-[2.75rem]"></span>
      </div>
      <div class="relative text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] max-@767:inline-block @767:text-center">
        <span class="relative top-0 h-2 rounded bg-slate-700 pl-[85px] max-@767:inline max-@767:pr-[.625rem] @767:absolute @767:top-[2.75rem] @767:hidden"></span>
        <span class="relative top-0 h-2 w-[2rem] rounded bg-slate-700 max-@767:text-[.9375rem] max-@767:font-bold @767:absolute @767:top-[2.75rem]"></span>
      </div>
      <div class="flex items-end max-@767:mb-[1rem] max-@767:pr-[3.125rem]">
        <a
          class={[
            "left-[-.9375rem] w-[5rem] pl-0 text-inherit no-underline",
            "flex justify-center",
          ]}
        >
          <div class="relative z-[1] ml-[.625rem] mt-[.625rem] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-slate-700 object-cover" />

            <img
              class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
              src={defaultGray}
            />
            <div></div>
          </div>
        </a>
        <div class="relative top-[-15px]">
          <p class="mb-[1rem] ml-[1.5625rem] mt-0 h-2 w-[3rem] rounded bg-slate-700 first:text-[.875rem] first:font-medium first:leading-[1.25rem]"></p>
        </div>
      </div>
      <div class="relative box-border">
        <div class="relative top-[50%] translate-y-[-10%] cursor-pointer">
          <div
            class="relative top-[50%] h-[2rem] w-[2rem] translate-y-[-20%] rounded-full border-[black] bg-slate-700"
            // src={open_question}
          />
        </div>
      </div>
    </div>
  );
};

export default function ({ countQuestions }) {
  return (
    <div>
      {Array.from({ length: Math.min(countQuestions, 5) }, (_, index) => (
        <RenderEl key={index} />
      ))}
    </div>
  );
}
