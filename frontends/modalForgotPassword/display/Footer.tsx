import { Cemjsx, Static, Func, Ref } from "cemjs-all"

export default function () {
  return (
    <footer class="modal-footer">
      <button class="btn w100" onclick={Func.close}>
        Восстановить
      </button>
    </footer>
  )
}