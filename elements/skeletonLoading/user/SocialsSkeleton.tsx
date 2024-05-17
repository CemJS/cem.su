import { Cemjsx } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";

const RenderEl = function () {
  return (
    <div class="relative grid animate-pulse rounded-[.5rem] p-[.125rem] [border:solid_1px_#334155]">
      <div class="flex h-full w-full flex-row items-center rounded-[.4375rem] bg-[#3341551f] px-[.625rem] py-[.3125rem] @680:flex-col @680:px-[.9375rem] @680:py-[.625rem]">
        <a
          // href={item?.url + item?.name}
          class="flex h-[3.75rem] min-h-[3.75rem] w-[3.75rem] min-w-[3.75rem] items-center justify-center rounded-[50%] bg-slate-700 [&_img]:h-full [&_img]:max-h-[60%] [&_img]:w-full [&_img]:max-w-[60%]"
        ></a>
        <div class="max-@680:ml-[.625rem] @680:flex @680:flex-col @680:items-center">
          <p class="@680:mt-[1.25rem] mb-[.1875rem] mt-[0.5rem] h-[.625rem] w-[6.75rem] rounded bg-slate-700 pl-[.625rem] max-@680:w-[8.75rem]">
            {/* name */}
          </p>
          <p class="mt-[.5rem] h-[.625rem] w-[9.25rem] rounded bg-slate-700 pl-[.625rem] text-left text-[.75rem] max-@680:w-[6.875rem] @680:text-center @680:text-[.875rem]">
            {/* description */}
          </p>
        </div>
        <div class="absolute right-[1.25rem] top-[.625rem] cursor-pointer">
          <div class="relative z-[2] ml-[.625rem] h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default function () {
  return <RenderEl />;
}
