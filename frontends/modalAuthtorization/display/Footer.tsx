import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"

export default function () {
  return (
    <header class="modal-header">
      <div class="g-colEqual-2 mt-15">
        <button
          // class="btn w100"
          class={[
            "btn", "w100",
            // Static.form.isValid ? null : "btn_passive"
          ]}
          onclick={() => {
            Func.checkForm()
            // let answer = await front.Services.functions.sendApi(`/api/Auth`, { 
            //   email: Static.form.email.value, 
            //   password: Static.form.pass.value 
            // })

            // //проверку на ответ
            // if (answer.error) {
            //   alert("Wrong")
            //   return
            // }
            // Func.close()
          }}>
          Вход
        </button>
        <div
          class="btn_border-wrap"
          onclick={() => { Fn.initOne("modalRegistration", {}) }}
        >
          <button class="btn_border w100 h100">РЕГИСТРАЦИЯ</button>
        </div>
      </div>
    </header>
  )
}