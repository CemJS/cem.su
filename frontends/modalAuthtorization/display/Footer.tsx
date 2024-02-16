import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"
import success from "@svg/icons/success.svg";

export default function () {
  return (
    <footer class="modal-footer">
      <div class="g-colEqual-2 mt-15 w100 modal-footer_auth">
        <button
          // class="btn w100"
          class={[
            "btn", "w100",
            Static.form.isValid ? null : "btn_passive"
          ]}
          onclick={async () => {
            if (!Static.form.isValid) return

            let answer = await front.Services.functions.sendApi(`/api/Auth`, {
              email: Static.form.email.value,
              password: Static.form.pass.value
            })

            if (answer.error) {
              // Ref.email.value = ""
              // Ref.pass.value = ""

              // Static.form = {
              //   email: {
              //     value: "",
              //     valid: false,
              //     error: false,
              //     placeholder: "Email",
              //     view: false,
              //     disable: false
              //   },
              //   pass: {
              //     value: "",
              //     valid: false,
              //     error: false,
              //     placeholder: "Введите пароль:",
              //     view: false,
              //     disable: false
              //   },
              //   isValid: false,
              //   error: false
              // }
              Static.form.isValid = false
              Static.form.error = "Неверно введены данные!"

              return
            }
            Fn.log('=139d14=', answer)

            // Fn.initOne("alert", {
            //   icon: success,
            //   title: "Спасибо!",
            //   text: "Скоро с Вами свяжется наш менеджер!",
            // });

            Func.close()
          }}>
          Вход
        </button>
        <div
          class="btn_border-wrap w100"
          onclick={() => {
            Func.close()
            Fn.initOne("modalRegistration", {})
          }}
        >
          <button class="btn_border w100 h100">РЕГИСТРАЦИЯ</button>
        </div>
      </div>
    </footer>
  )
}