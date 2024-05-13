import { Cemjsx, Static, Func, Ref, front } from "cemjs-all"


export default function () {
  return (
    <div class="w-1/4 transition-all" ref="slidePage">
      <div class="flex flex-col">
        <h3 class="mb-4 text-lg font-semibold max-@600:text-base">
          Подтвердите адрес электронной почты
        </h3>

        <div class="relative">
          <div class="absolute top-2 left-4 pointer-events-none">
            <i class="i i-envelope text-xl"></i>
          </div>
          <input
            type="email"
            class={[
              "bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block  disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700",
              Static.form.email.error ? "border-red-400 focus:border-red-400" : null,
              Static.form.email.valid ? "valid:[&:not(:placeholder-shown)]:border-green-500" : null
            ]}
            disabled={Static.form.email.disable}
            placeholder="name@flowbite.com"
            autocomplete="off"
            required
            oninput={(e: any) => {
              Static.form.email.value = e.target.value;
              front.Services.functions.formEmail(Static.form.email);
              Func.checkForm();
            }}
          />
          {/* <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">{Static.form.email.error}</span> */}
          {Static.form.email.disable ? (
            <div
              class="absolute top-0 right-4 cursor-pointer h-full flex items-center transition-all z-10"
              onclick={() => {
                Func.changeEmail();
              }}
            >
              <i class="i i-pencil"></i>
            </div>
          ) : null}
        </div>

        <span class="mt-2 text-sm text-red-500 min-h-[20px]">{Static.form.email.error}</span>

      </div>

      {this.Static.waitCode ? (
        <div
          class={[
            "flex mt-2 flex-col justify-center items-center gap-4 transition-all",
            Static.waitCode ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none",
          ]}
        >
          <div class="flex justify-center items-center gap-4 relative">
            {Static.code.map((item: number, index: number) => {
              return (
                <input
                  ref={`code${index + 1}`}
                  type="number"
                  class={["bg-[#202432] border-[1px] border-solid text-base text-white w-[2.5rem] h-[2.5rem] flex items-center justify-center text-center rounded-lg focus:border-[#5f479b] focus:outline-0 p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    Static.form.code.error ? "border-red-500 focus:border-red-500" : "border-[#5f479b]"
                  ]}
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

          {Static.form.code.error ? <span class="font-semibold text-red-500">{Static.form.code.error}</span> : null}

          <div>
            {Static.time > 0 ? (
              <div>
                <p class="inline-block">
                  Запросить новый код подтверждения можно через{" "}
                  <span class="pl-3">
                    {Static.time < 10
                      ? `0 : 0${Static.time}`
                      : `0 : ${Static.time}`}
                  </span>
                </p>
              </div>
            ) : (
              <button
                class="btn"
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
        <div class="flex justify-center mt-4">
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
  )
}