import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  // Fn.log('=f24bd3=',Static.titleHead)
  return (
    <div class="bg-[#1d2029] border-b border-[#2d3243] fixed w-full py-2 z-10 top-0 left-0">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center">
          <span
            class="cursor-pointer flex justify-center items-center"
            onclick={() => Fn.linkChange("/")}
          >
            <i class="i-arrow-left font-['cemicons'] not-italic font-normal normal-case leading-4 text-[1.3rem] bg-clip-text"></i>
          </span>

          <h5 class="back-title">О нас</h5>

          <span
            class="back-ellipsis"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  );
}
