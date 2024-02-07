import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"

export default function () {
  return (
    <header class="modal-header">
      <div class="g-colEqual-2 mt-15">
        <button class="btn w100"
          onclick={async () => {
            let answer = await front.Services.functions.sendApi(`/api/Auth`, { email: Static.form.email.value, password: Static.form.pass.value })

            //проверку на ответ
            if (answer.error) {
              alert("Wrong")
              return
            }
            Fn.clearData()
          }}>
          Вход
        </button>
        <div class="btn_border-wrap">
          <button class="btn_border w100 h100">РЕГИСТРАЦИЯ</button>
        </div>
      </div>
    </header>
  )
}