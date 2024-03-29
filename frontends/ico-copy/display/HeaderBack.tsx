import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  return (
    <div class="back">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
            onclick={() => {
              Fn.linkChange("/list-icostartups");
              if (front.Variable.$el.header) {
                front.Variable.$el.header.classList.remove("hide");
                Static.record = null;
              }
            }}
          >
            <i class="i i-arrow-left"></i>
          </span>

          <h5 class="back-title">Ico</h5>

          <span
            class="back-ellipsis"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  );
}
