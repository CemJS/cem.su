import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  // Fn.log('=f24bd3=',Static.titleHead)
  return (
    <div class="back">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
            onclick={() => Fn.linkChange("/")}
          >
            <i class="i i-arrow-left"></i>
          </span>

          <h5 class="back-title">Пользовательское соглашение</h5>

          <span
            class="back-ellipsis"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  );
}
