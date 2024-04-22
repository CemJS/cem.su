import { Cemjsx, Static, Func, Ref, front } from "cemjs-all"


export default function () {
  return (
    <div class="w-1/4 transition-all" ref="slidePage">
      <div class="flex flex-col">
        <h3 class="mb-4 text-lg font-semibold max-@600:text-base">
          Подтвердите адрес электронной почты
        </h3>


        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <i class="i i-envelope text-xl"></i>
          </div>
          <input
            type="email"
            class="bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5"
            placeholder="name@flowbite.com"
            oninput={(e: any) => {
              Static.form.email.value = e.target.value;
              front.Services.functions.formEmail(Static.form.email);
              Func.checkForm();
            }}
          />
        </div>

        {/* <div
          class={[
            "w-full relative h-12 leading-10",
            Static.form.email.value.length ? "modalWindow_field__valid" : null,
            Static.form.email.error ? "modalWindow_field__error" : null,
            Static.form.email.valid ? "modalWindow_field__success" : null,
            Static.form.email.disable ? "modalWindow_field__disabled" : null,
          ]}
        >
          <input
            class="h-12 absolute w-full outline-none text-base px-7 rounded-2xl border-solid border-[#5f479b] border-[1px] bg-[transparent] transition-all z-[3px] text-white"
            type="email"
            required
            autocomplete="off"
            oninput={(e: any) => {
              Static.form.email.value = e.target.value;
              front.Services.functions.formEmail(Static.form.email);
              Func.checkForm();
            }}
          />
          <div class="absolute text-base px-2 mx-5 bg-[#202432] transition-all flex items-center gap-2">
            <i class="i i-user"></i>
            <span>{Static.form.email.placeholder}</span>
          </div>
          <p class="modalWindow_field__status" style="color:#E84142">
            {Static.form.email.error}
          </p>

          {Static.form.email.disable ? (
            <span
              class="modalWindow_field__edit"
              onclick={() => {
                Func.changeEmail();
              }}
            >
              <i class="i i-edit"></i>
            </span>
          ) : null}
        </div> */}
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
                {/* <p class="modalReg_timer__text pl-10"></p> */}
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
        <div class="flex justify-center mt-4">
          <button
            class={["btn", Static.form.isValid ? null : "btn_passive"]}
            onclick={async () => {
              if (!Static.form.isValid) {
                return;
              }
              console.log('=6fcaea=', Static.waitCode)
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