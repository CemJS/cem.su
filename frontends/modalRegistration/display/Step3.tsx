import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"


export default function () {
  return (
    <div class="w-1/4 transition-all">
      <div class="flex flex-col h-full justify-between gap-7">
        <h3 class="text-lg font-semibold max-@600:text-base">Придумайте пароль</h3>
        {/* ---------------------------- */}
        <div class="relative">
          <div class="absolute top-2 left-4 pointer-events-none">
            <i class="i i-lock-closed text-xl"></i>
          </div>
          <input
            type="password"
            required
            autocomplete="off"
            placeholder={Static.form.pass.placeholder}
            disabled={Static.form.pass.disable}
            class={["bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block  disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700",
              Static.form.pass.error ? "border-red-400 focus:border-red-400" : null,
              Static.form.pass.valid ? "valid:[&:not(:placeholder-shown)]:border-green-500" : null
            ]}
            oninput={(e: any) => {
              Static.form.pass.value = e.target.value;
              front.Services.functions.formPassword(Static.form.pass);
              Func.checkForm();
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
                  Пароль должен содержать спецсимволы !?&$
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------- */}
        <div class="relative">
          <div class="absolute top-2 left-4 pointer-events-none">
            <i class="i i-lock-closed text-xl"></i>
          </div>
          <input
            type={Static.passType}
            required
            autocomplete="off"
            placeholder="Логин"
            disabled={Static.form.rePass.disable}
            class={["bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block  disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700",
              Static.form.rePass.error ? "border-red-400 focus:border-red-400" : null,
              Static.form.rePass.valid ? "valid:[&:not(:placeholder-shown)]:border-green-500" : null
            ]}
            oninput={async (e: any) => {
              Static.form.rePass.value = e.target.value;
              front.Services.functions.formConfirmPassword(
                Static.form.pass,
                Static.form.rePass,
              );
              Func.checkForm();
            }}
          />
          <div
            class="absolute right-4 top-0 h-full z-10 flex items-center gap-2 cursor-pointer"
            onclick={() => {
              if (Static.passType == "password") {
                Static.passType = "text";
              } else {
                Static.passType = "password";
              }
            }}
          >
            <i class={["i", "transition-all", "text-xl", Static.passType == "password" ? "i-eye" : "i-eye-slash"]}></i>

          </div>
        </div>

        <div class="flex justify-center items-center">
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
                `/api/users/register`,
                {
                  step: Static.currentStep,
                  email: Static.form.email.value,
                  nickname: Static.form.nickName.value,
                  lang: Static.form.mainLang.value,
                  country: Static.form.country.value,
                  code: Static.form.code.value,
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