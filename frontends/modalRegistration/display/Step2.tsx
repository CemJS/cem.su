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
              placeholder={Static.form.nickName.placeholder}
              disabled={Static.form.nickName.disable}
              class={["bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block  disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700",
                Static.form.nickName.error ? "border-red-400 focus:border-red-400" : null,
                Static.form.nickName.valid ? "valid:[&:not(:placeholder-shown)]:border-green-500" : null
              ]}
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
                        `/api/users/register`,
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

            {/* modalWindow_field__tooltip */}
            <div class="absolute right-4 top-0 h-full z-10 flex items-center gap-2 cursor-pointer">
              <div
                class="w-[30px] h-[30px] rounded-full relative bg-[rgba(255,255,255,0.1)] transition-all hover:bg-[rgba(255,255,255,0.15);] hover:text-white before:content-['?'] before:absolute before:top-2/4 before:left-2/4 before:-translate-x-1/2 before:-translate-y-1/2 before:text-[#8d9098] before:text-base before:font-bold before:transition-all"
                onmouseover={() => {
                  console.log('=7af2f5=', "over")
                  Ref.tooltipContent.classList.remove("invisible", "opacity-0");
                  Ref.tooltipContent.classList.add("visible", "opacity-1");
                }}
                onmouseleave={() => {
                  console.log('=7af2f5=', "leave")
                  Ref.tooltipContent.classList.remove("visible", "opacity-1");
                  Ref.tooltipContent.classList.add("invisible", "opacity-0");
                }}
              >
                <div class="w-[250px] shadow-[1px_6px_0px_-4px_rgba(0,0,0,0.15),3px_4px_4px_-1px_rgba(0,0,0,0.15);] bg-[#202432] border border-solid border-[#474c5a] invisible opacity-0 absolute top-[10px] right-[-75px] -translate-x-2/4 -translate-y-2/4 translate-z-[10px] p-3 rounded-md  transition-all before:absolute before:w-[15px] before:h-[15px] before:z-[-1] before:border-t-[1px] before:border-t-solid before:border-t-[#474c5a] before:border-r-[1px] before:border-r-solid before:border-r-[#474c5a] before:bg-[#202432] before:top-1/2 before:right-0 before:translate-x-1/2 before:rotate-[45deg]" ref="tooltipContent">
                  <p class="text-sm font-medium leading-5 translate-z-[20px]">
                    Логин не должен начинаться с цифр и спецсимволов
                  </p>
                </div>
              </div>
            </div>
          </div>

          {Static.form.nickName.error ? <span class="text-sm text-red-500">{Static.form.nickName.error}</span> : null}

        </div>

        <div class="grid grid-cols-2 gap-6">
          <div
            class={[
              "w-full py-4 px-8",
              "btn",
              "btn_dark",
              Static.form.mainLang.valid
                ? "border border-solid border-green-500"
                : null,
            ]}
            onclick={() => {
              Fn.initOne("modalLanguage", {
                full: false,
                callback: (chooseLang) => {
                  if (!chooseLang) return;

                  Static.form.mainLang.nameOrig = chooseLang.origName;
                  Static.form.mainLang.value = chooseLang.code;
                  front.Services.functions.formLang(Static.form.mainLang);
                  Func.checkForm();
                },
              });
            }}
          >
            <span class="font-medium text-base">
              {Static.form.mainLang.nameOrig
                ? Static.form.mainLang.nameOrig
                : Static.form.mainLang.placeholder}
            </span>
            <i class="i i-chevron-right"></i>
          </div>

          <div
            class={[
              "w-full py-4 px-8",
              "btn",
              "btn_dark",
              Static.form.country.valid
                ? "border border-solid border-green-500"
                : null,
            ]}
            onclick={() => {
              Fn.initOne("modalCountry", {
                callback: (chooseCountry) => {
                  if (!chooseCountry) return;
                  Static.form.country.nameOrig = chooseCountry.engName;
                  Static.form.country.value = chooseCountry.code;
                  front.Services.functions.formCountry(Static.form.country);
                  Func.checkForm();
                },
              });
            }}
          >
            <span class="font-medium text-base">
              {Static.form.country.nameOrig
                ? Static.form.country.nameOrig
                : Static.form.country.placeholder}
            </span>
            <i class="i i-chevron-right"></i>
          </div>
        </div>

        <div class="flex justify-center items-center gap-5">
          <button
            class={["btn", Static.form.isValid ? null : "pointer"]}
            onclick={async () => {
              if (!Static.form.isValid) {
                return;
              }

              let answer = await front.Services.functions.sendApi(`/api/users/register`,
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