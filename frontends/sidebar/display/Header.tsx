import { Cemjsx, Static, Func, Ref } from "cemjs-all"

export default function () {
  return (
    <header class="sidebar-header">
      <div
        class="lang"
        onclick={() => {
          Ref.sidebarLang.classList.toggle('sidebar-content-lang_active')
        }}
      >
        Русский<i class="i i-right"></i>
      </div>
      <button class="btn btn_close" onclick={Func.close}>
        <i class="i i-cancel"></i>
      </button>
    </header>
  )
}