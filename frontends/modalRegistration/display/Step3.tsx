import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"


export default function () {
  return (
    <div class="w-1/4 transition-all">
      <div class="modalReg_form">
        <h3 class="modalReg_page-title">Придумайте пароль</h3>
        <div
          class={[
            "modalWindow_field",
            Static.form.pass.value.length ? "modalWindow_field__valid" : null,
            Static.form.pass.error ? "modalWindow_field__error" : null,
            Static.form.pass.valid ? "modalWindow_field__success" : null,
          ]}
        >
          <input
            type="password"
            required
            oninput={(e: any) => {
              Static.form.pass.value = e.target.value;
              front.Services.functions.formPassword(Static.form.pass);
              Func.checkForm();
            }}
          />
          <div class="modalWindow_field_labelLine">
            <i class="i i-lock"></i>
            <span>{Static.form.pass.placeholder}</span>
          </div>
          <p class="modalWindow_field__status" style="color:#E84142">
            {Static.form.pass.error}
          </p>
          <div class="modalWindow_field__tooltip">
            <div
              class="tooltip"
              onmouseover={() => {
                Ref.tooltipContentPass.classList.add("tooltip-content__active");
              }}
              onmouseleave={() => {
                Ref.tooltipContentPass.classList.remove(
                  "tooltip-content__active",
                );
              }}
            >
              <div class="tooltip-content" ref="tooltipContentPass">
                <p class="tooltip-content_text">
                  Пароль должен содержать спецсимволы !?&$
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class={[
            "modalWindow_field",
            Static.form.rePass.value.length ? "modalWindow_field__valid" : null,
            Static.form.rePass.error ? "modalWindow_field__error" : null,
            Static.form.rePass.valid ? "modalWindow_field__success" : null,
          ]}
        >
          <input
            type={Static.passType}
            required
            oninput={(e: any) => {
              Static.form.rePass.value = e.target.value;
              front.Services.functions.formConfirmPassword(
                Static.form.pass,
                Static.form.rePass,
              );
              Func.checkForm();
            }}
          />
          <div class="modalWindow_field_labelLine">
            <i class="i i-lock"></i>
            <span>{Static.form.rePass.placeholder}</span>
          </div>
          <p class="modalWindow_field__status" style="color:#E84142">
            {Static.form.rePass.error}
          </p>
          <div
            class="modalWindow_field__tooltip"
            onclick={() => {
              if (Static.passType == "password") {
                Static.passType = "text";
              } else {
                Static.passType = "password";
              }
            }}
          >
            <i class="i i-eye"></i>
            {/* <img
                            alt="Показать пароль"
                            class="modalWindow_field__eye"
                            // src={this.Static.passType == "password" ? eye : eyeSlash}
                            onclick={() => {
                                if (Static.passType == "password") {
                                    Static.passType = "text"
                                } else {
                                    Static.passType = "password"
                                }
                            }}
                        /> */}
          </div>
        </div>
        <div class="f-center modalReg_btns">
          <button
            class={[
              "btn",
              "btn_timing",
              Static.form.isValid ? null : "btn_passive",
            ]}
            onclick={async () => {
              if (!Static.form.isValid) {
                return;
              }

              let answer = await front.Services.functions.sendApi(
                `/api/Register`,
                {
                  step: Static.currentStep,
                  email: Static.form.email.value,
                  nickname: Static.form.nickName.value,
                  lang: Static.form.mainLang.value,
                  country: Static.form.country.value,
                  pass: Static.form.pass.value,
                  repass: Static.form.rePass.value,
                },
              );
              Fn.log("=a028de=", answer);

              if (answer.error === "already register") {
                Static.form.isValid = false;
                Func.clickPrev();
                front.Services.functions.formNickName(Static.form.nickName);
                front.Services.functions.formLang(Static.form.mainLang);
                front.Services.functions.formCountry(Static.form.country);
                Func.checkForm();

                Fn.log("=Static.form.isValid=", Static.form.isValid);

                if (!Static.form.isValid) {
                  return;
                }

                Func.checkLogin();

                return;
              }

              if (answer.error) {
                Static.form.isValid = false;
                Static.form.error = "Неверные данные";
                return;
              }

              Func.clickNext();
              Fn.log("=b02443=", front.Variable.myInfo);
              return;
            }}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  )
}