import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  // Fn.log('=f24bd3=',Static.titleHead)
  return (
    <div class="back bg-[#1d2029] border-b border-[#2d3243] fixed w-full py-2 z-10 top-0 left-0">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
            onclick={() => Fn.linkChange("/")}
          >
            <i class="i i-arrow-left"></i>
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
