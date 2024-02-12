import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"

export default function () {
  return (
    <header class="sidebar-header">
      <div
        class="btn btn_dark"
        onclick={() => {
          Func.close()
          Fn.initOne("modalServices", {})
        }}
      >
        Сервисы
      </div>
      <div
        class="btn btn_dark"
        onclick={() => { Ref.slideSection.style.marginLeft = `-50%` }}
      >
        {front.Variable.Lang}<i class="i i-arrow-right"></i>
      </div>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-cancel"></i>
      </button>
    </header>
  )
}