import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";

export default function () {
  return (
    <div class="w-1/4 transition-all">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-semibold max-@600:text-base">Заполните информация о себе</h3>

          <div class="relative">
            <div class="absolute top-2 left-4 pointer-events-none">
              <i class="i i-user text-xl"></i>
            </div>
            <input
              type="text"
              required
              autocomplete="off"
              class="bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500 disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700"
              placeholder="Логин"
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