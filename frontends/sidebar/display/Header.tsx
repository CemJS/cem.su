import { Cemjsx, Static, Func, Ref } from "cemjs-all"

export default function () {
  return (
    <header class="sidebar-header">
      <div
        class="btn btn_dark"
        onclick={() => { Ref.slideSection.style.marginLeft = `-50%` }}
      >
        Русский<i class="i i-arrow-right"></i>
      </div>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-cancel"></i>
      </button>
    </header>
  )
}