import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";
import done from "@svg/icons/done.svg";

const RenderSteps = function ({ steps, current }) {
  return (
    <div class="steps">
      {steps.map((item) => {
        return (
          <span
            class={[
              "steps_circle",
              item <= current ? "steps_circle__active" : null,
            ]}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
      <div class="steps_progress">
        <div class="steps_indicator" ref="indicator"></div>
      </div>
    </div>
  );
};

const Step1 = function () {
  return (
    <div class="modal-recover__page" ref="slidePage">
      <div class="f-col">
        <h3 class="modalReg_page-title">Восстановление пароля</h3>
        <div
          class={[
            "modalWindow_field",
            Static.form.emailOrNickName.value.length
              ? "modalWindow_field__valid"
              : null,
            Static.form.emailOrNickName.error
              ? "modalWindow_field__error"
              : null,
            Static.form.emailOrNickName.valid
              ? "modalWindow_field__success"
              : null,
          ]}
        >
          <input
            type="text"
            required
            autocomplete="off"
            oninput={(e: any) => {
              Static.form.emailOrNickName.value = e.target.value;
              front.Services.functions.formEmailOrNickName(
                this.Static.form.emailOrNickName,
              );
              // Func.checkForm()
            }}
          />
          <div class="modalWindow_field_labelLine">
            <i class="i i-user"></i>
            <span>{Static.form.emailOrNickName.placeholder}</span>
          </div>
          <p class="modalWindow_field__status" style="color:#E84142">
            {Static.form.emailOrNickName.error}
          </p>

          {Static.form.emailOrNickName.disable ? (
            <span
              class="modalWindow_field__edit"
              onclick={() => {
                Func.changeEmail();
              }}
            >
              <i class="i i-edit"></i>
            </span>
          ) : null}
        </div>
      </div>

      {this.Static.waitCode ? (
        <div
          class={[
            "modalReg-confirmCode",
            Static.waitCode ? "modalReg-confirmCode__active" : null,
          ]}
        >
          <div class="modalReg-code">
            {Static.code.map((item: number, index: number) => {
              return (
                <input
                  ref={`code${index + 1}`}
                  type="number"
                  class={["modalReg-code_input"]}
                  oninput={(e) => {
                    if (e.data == null && e.target.value.length > 1) {
                      let arr = e.target.value.trim().split("");
                      if (arr.length > 6) {
                        arr = arr.slice(0, 6);
                      }
                      let arrElements = e.target.parentElement.children;
                      arr.forEach((item, index) => {
                        Static.code[index] = item;
                        arrElements[index].value = item;
                        arrElements[index].focus();
                      });
                    } else {
                      e.target.value = e.data;
                      Static.code[index] = e.target.value;
                      let arrElements = e.target.parentElement.children;
                      if (
                        index < Static.code.length - 1 &&
                        Static.code[index] != ""
                      ) {
                        arrElements[index + 1].focus();
                      }

                      if (index != 0 && Static.code[index] == "") {
                        arrElements[index - 1].focus();
                      }
                    }
                    Static.form.code.value = Number(Static.code.join(""));
                    front.Services.functions.formCode(Static.form.code);
                    Func.checkForm();
                  }}
                />
              );
            })}
          </div>

          {Static.form.code.error ? (
            <span class="modalReg-code__error">{Static.form.code.error}</span>
          ) : null}

          <div class="modalReg_timer">
            {Static.time > 0 ? (
              <div>
                <p class="modalReg_timer__text">
                  Запросить новый код подтверждения можно через{" "}
                  <span class="pl-10">
                    {Static.time < 10
                      ? `0 : 0${Static.time}`
                      : `0 : ${Static.time}`}
                  </span>
                </p>
              </div>
            ) : (
              <button
                class="btn btn_timing"
                onclick={() => {
                  Func.sendCode();
                  return;
                }}
              >
                Запросить код снова
              </button>
            )}
          </div>
        </div>
      ) : (
        <div class="d-flex jcc pt-35">
          <button
            class={["btn", Static.form.isValid ? null : "btn_passive"]}
            onclick={async () => {
              if (!Static.form.isValid) {
                return;
              }

              Func.sendCode();
              return;
            }}
          >
            <span>Получить код подтверждение</span>
          </button>
        </div>
      )}
    </div>
  );
};

const Step2 = function () {
  return (
    <div class="modal-recover__page">
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
              // Func.checkForm()
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
              // Func.checkForm()
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

              // let answer = await front.Services.functions.sendApi(`/api/Register`, {
              //     step: Static.currentStep,
              //     email: Static.form.email.value,
              //     nickname: Static.form.nickName.value,
              //     lang: Static.form.mainLang.value,
              //     country: Static.form.country.value,
              //     pass: Static.form.pass.value,
              //     repass: Static.form.rePass.value,
              // })
              // Fn.log('=a028de=', answer)

              // if (answer.error) {
              //     Static.form.isValid = false
              //     Static.form.error = "Неверные данные"
              //     return
              // }

              // Func.clickNext()
              // return
            }}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

const Step3 = function () {
  return (
    <div class="modal-recover__page">
      <div class="modalReg_form">
        <h3 class="modalReg_page-title text-center">
          Поздравляем, Вы успешно сменили пароль!
        </h3>
        <div class="modalReg_success">
          <img src={done} alt="Пользователь успешно зарегистрирован" />
        </div>
        <div class="f-center modalReg_btns">
          <button
            class="btn btn_timing"
            onclick={() => {
              Func.close();
              Fn.initOne("modalAuthtorization", {});
            }}
          >
            Авторизоваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default function () {
  return (
    <main class="modal_main">
      <RenderSteps steps={Static.steps} current={Static.currentStep} />
      <div class="w100 overflow-hidden">
        <div class="modal-recover__line mt-[25px]">
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </div>
    </main>
  );
}
