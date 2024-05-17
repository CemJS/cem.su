import { Cemjsx } from "cemjs-all";

const RenderEl = function () {
  return (
    <div class="text m-[.125rem] rounded-[.625rem] block aspect-square animate-pulse bg-[#3341551f]">
      <figure class="relative z-[1] m-0 h-full overflow-hidden">
        <div class="absolute right-[.4375rem] top-[.125rem] z-[10] h-[1.25rem] w-[1.25rem] text-[0]"></div>
      </figure>
    </div>
  );
};

export default function () {
  return <RenderEl />;
}
