import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import leveGray from "@svg/lenta/level_gray.svg";
import defaultGray from "@svg/lenta/defaultGray.svg";

export default function () {
  return (
    <div class="pointer-events-none relative h-auto w-full animate-pulse rounded-[1rem] bg-[#3341551f] p-5 [border:_1px_solid_#363C50] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:0.5s] @767:w-[48.6%] @767:max-w-none @767:p-[1.875rem] @1024:w-[49%] @1240:w-full @1240:max-w-[25rem] @1240:p-[1.25rem] @1240:!pt-[0.625rem]">
      <div class="relative">
        <a class="relative inline-flex h-auto w-auto">
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <div class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] bg-slate-700 object-cover [transform:translateX(-50%)_translateY(-50%)]"></div>
            <img
              class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
              src={defaultGray}
            />
          </div>
          <div class="absolute left-20 top-5 mb-2 block leading-[24px]">
            <div class="h-3 w-20 rounded bg-slate-700  text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]"></div>
          </div>
        </a>
        <div class="absolute right-0 top-0 h-6 !w-[4.6rem] cursor-default rounded-[--btnR] bg-slate-700"></div>
      </div>
      <div
        class={[
          "mt-[0.625rem] flex h-[4.6875rem] min-w-full max-w-[20.625rem] cursor-pointer flex-col overflow-hidden text-ellipsis text-[1.125rem] font-medium @1240:min-w-[auto] [&:hover_span]:!bg-clip-text [&:hover_span]:[-webkit-text-fill-color:transparent] [&:hover_span]:[background:linear-gradient(56.57deg,#2973ff_0%,#8846d3_51.56%,#ff22ac_105.28%)]",
        ]}
      >
        <div class="mb-4 h-3 w-24 rounded bg-slate-700"></div>
        <div class="h-3 w-24 rounded bg-slate-700"></div>
      </div>
      <div class="flex h-[3.875rem] items-center justify-around text-[0.8125rem] text-[#838ba3] [&_span]:inline-flex [&_span]:gap-[0.625rem]">
        <div class="h-4 w-6 rounded bg-slate-700"></div>
        <div class="h-4 w-6 rounded bg-slate-700"></div>
        <div class="h-4 w-14 rounded bg-slate-700"></div>
      </div>
      <div class="mx-auto h-10 w-full max-w-48 rounded bg-slate-700"></div>
    </div>
  );
}
