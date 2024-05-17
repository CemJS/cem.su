import { Cemjsx } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";

const RenderEl = function () {
  return (
    <div class="relative mx-auto min-h-[auto] w-full max-w-full animate-pulse rounded-[.3125rem] bg-[#3341551f] px-[1.5625rem] py-[1.875rem] [border:1px_solid_#52586A] max-@522:flex max-@522:text-left max-@420:flex max-@420:flex-col max-@420:items-center max-@420:text-center @522:min-h-[22.6875rem] @522:max-w-[13.75rem] @522:p-[1.9375rem_2.8125rem_1.5625rem] @522:text-center">
      <img
        src={defaultGray}
        class="left-[1.5rem] top-[1.75rem] h-[2.3125rem] w-[2.125rem] max-@522:hidden @522:absolute"
      />
      <img
        src={defaultGray}
        class="mb-[2.1875rem] h-[5.375rem] @522:h-[8.125rem]"
      />
      <div class="user-awards__description flex flex-col items-center max-@522:px-[1.25rem] max-@522:py-0">
        <p class="mb-[1rem] mt-0 h-[1rem] w-[6.25rem] rounded bg-slate-700">
          {/* name */}
        </p>
        <p class="mb-[1rem] h-[0.7rem] w-[7.5rem] rounded bg-slate-700 max-@522:mb-[2.5rem]">
          {/* description */}
        </p>
        <p class="mb-[1rem] mt-0 h-[1rem] w-[6.25rem] rounded bg-slate-700">
          {/* Получено */}
        </p>
        <div class="h-[1rem] w-[5.625rem] rounded bg-slate-700" />
      </div>
    </div>
  );
};

export default function () {
  return <RenderEl />;
}
