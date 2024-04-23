import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";

export default function () {
  return (
    <div class="w-1/4 transition-all">
      <div class="modalReg_form">
        <div class="f-col">
          <h3 class="modalReg_page-title">Заполните информация о себе</h3>
          <div
            class={[
              "modalWindow_field",
              Static.form.nickName.value.length
                ? "modalWindow_field__valid"
                : null,
              Static.form.nickName.error ? "modalWindow_field__error" : null,
              Static.form.nickName.valid ? "modalWindow_field__success" : null,
              Static.form.nickName.disable
                ? "modalWindow_field__disabled"
                : null,
            ]}
          >
            <input
              type="text"
              required
              autocomplete="off"
              oninput={async (e: any) => {
                Static.form.nickName.value = e.target.value;
                front.Services.functions.formNickName(Static.form.nickName);
                if (Static.form.nickName.valid) {
                  if (Static.setTimeout) {
                    clearTimeout(Number(Static.setTimeout));
                  }
                  Static.setTimeout = Number(
                    setTimeout(async () => {
                      let answer = await front.Services.functions.sendApi(
                        `/api/Register`,
                        {
                          action: "checkNick",
                          step: Static.currentStep,
                          nickname: Static.form.nickName.value,
                        },
                      );

                      if (answer.error) {
                        Static.form.nickName.error = "Логин занят!";
                        Static.form.nickName.valid = false;
                      }
                      Func.checkForm();
                    }, 300),
                  );
                }
              }}
            />
            <div class="modalWindow_field_labelLine">
              <i class="i i-user"></i>
              <span>{Static.form.nickName.placeholder}</span>
            </div>
            <p class="modalWindow_field__status" style="color:#E84142">
              {Static.form.nickName.error}
            </p>
            <div class="modalWindow_field__tooltip">
              <div
                class="tooltip"
                onmouseover={() => {
                  Ref.tooltipContent.classList.add("tooltip-content__active");
                }}
                onmouseleave={() => {
                  Ref.tooltipContent.classList.remove(
                    "tooltip-content__active",
                  );
                }}
              >
                <div class="tooltip-content" ref="tooltipContent">
                  <p class="tooltip-content_text">
                    Логин не должен начинаться с цифр и спецсимволов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="g-colEqual-2 modalReg-choose">
          <div
            class={[
              "w-full",
              "btn",
              "btn_dark",
              "modalReg-choose_item",
              Static.form.mainLang.valid
                ? "modalReg-choose_item__success"
                : null,
            ]}
            onclick={() => {
              Fn.initOne("modalLanguage", {
                full: false,
                callback: (chooseLang) => {
                  if (!chooseLang) return;

                  Static.form.mainLang.nameOrig = chooseLang.orig_name;
                  Static.form.mainLang.value = chooseLang.code;

                  front.Services.functions.formLang(Static.form.mainLang);
                  Func.checkForm();
                },
              });
            }}
          >
            <span>
              {Static.form.mainLang.nameOrig
                ? Static.form.mainLang.nameOrig
                : Static.form.mainLang.placeholder}
            </span>
            <i class="i i-arrow-right"></i>
          </div>

          <div
            class={[
              "w-full",
              "btn",
              "btn_dark",
              "modalReg-choose_item",
              Static.form.country.valid
                ? "modalReg-choose_item__success"
                : null,
            ]}
            onclick={() => {
              Fn.initOne("modalCountry", {
                callback: (chooseCountry) => {
                  if (!chooseCountry) return;

                  Static.form.country.nameOrig = chooseCountry.orig_name;
                  Static.form.country.value = chooseCountry.code;

                  front.Services.functions.formCountry(Static.form.country);
                  Func.checkForm();
                },
              });
            }}
          >
            <span>
              {Static.form.country.nameOrig
                ? Static.form.country.nameOrig
                : Static.form.country.placeholder}
            </span>
            <i class="i i-arrow-right"></i>
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
                  lang: Static.form.mainLang.value,
                  country: Static.form.country.value,
                  action: "checkNick",
                  email: Static.form.email.value,
                  nickName: Static.form.nickName.value,
                },
              );
              if (answer.error) {
                Fn.log("=error=", answer.error);
                return;
              }
              Func.clickNext();
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