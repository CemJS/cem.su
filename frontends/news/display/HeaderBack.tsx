import { Cemjsx, Fn, front, Static, Events } from "cemjs-all"

export default function () {
  // Fn.log('=f24bd3=',Static.titleHead)
  return (
    <div class="back">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
          // onclick={Fn.linkChange(Static.urlHead)}
          >
            <i class="i i-left"></i>
          </span>

          <h5 class="back-title">Новости</h5>

          <span
            class="back-ellipsis"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  )
}