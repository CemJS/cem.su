import { Cemjsx } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";

const RenderEl = function () {
  return (
    <div class="relative box-border flex max-h-[9.125rem] animate-pulse rounded-[0] bg-[#3341551f] p-[.9375rem] [border:1px_solid_#363C50] max-@1024:border-x-0 max-@1024:border-b-[0] @1024:rounded-[.75rem]">
      <a
        // href={`/user/${item?.id}`}
        class="left-[-0.9375rem] w-[5rem] pl-0 text-inherit no-underline"
      >
        <div class="relative z-[1] ml-[.625rem] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
          {/* <img
            class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
            // src={avatarDefault}
          /> */}
         <img
              class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
              src={defaultGray}
            />
            <div></div>
        </div>
      </a>
      <div class="ml-[.3125rem] mt-[.625rem]">
        <p class="w-[9.375rem] h-[.625rem] pl-[.625rem] rounded bg-slate-500 mb-[.75rem] mt-[.375rem] text-[1.125rem] font-semibold leading-[1.375rem] text-[--white]">
          {/* nickname */}
        </p>
        <p class="w-[6.25rem] h-[.625rem] pl-[.625rem] rounded bg-slate-500 leading-[1.375rem] last:mt-[.125rem] last:break-words last:text-[.75rem] last:font-medium last:opacity-[0.9]">
          {/* fullName */}
        </p>
      </div>
      <div class="relative ml-auto h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"></div>
    </div>
  );
};

export default function () {
  return <RenderEl />;
}
