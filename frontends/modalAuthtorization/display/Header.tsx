import { Cemjsx, Static, Func, Ref } from "cemjs-all"

export default function () {
  return (
    <header class="modal-header">
      <h2 class="modal-header__title">Авторизация</h2>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-cancel"></i>
      </button>
    </header>
  )
}