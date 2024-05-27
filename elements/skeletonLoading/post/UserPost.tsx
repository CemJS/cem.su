import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";

export default function () {
  return (
    <a class="relative inline-flex h-auto w-auto items-center gap-4">
      <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
        <div class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] bg-slate-700 object-cover [transform:translateX(-50%)_translateY(-50%)]"></div>
        <img
          class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
          src={defaultGray}
        />
      </div>
      <div class="h-3 w-20 rounded bg-slate-700 text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]"></div>
    </a>
  );
}
