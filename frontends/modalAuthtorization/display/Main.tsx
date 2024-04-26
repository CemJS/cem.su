import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";

export default function () {
  return (
    <main class="relative">
      <span class=" text-sm text-red-500 font-bold">
        {Static.form.error ? Static.form.error : null}
      </span>

      <div class="relative">
        <div class="absolute top-2 left-4 pointer-events-none">
          <i class="i i-envelope text-xl"></i>
        </div>
        <input
          type="email"
          class={["bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500 disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700",
            Static.form.email.error ? "border-red-400 focus:border-red-400" : null,
            Static.form.email.valid ? "valid:[&:not(:placeholder-shown)]:border-green-500" : null
          ]}
          disabled={Static.form.email.disable}
          placeholder="name@flowbite.com"
          autocomplete="off"
          required
          oninput={(e: any) => {
            Static.form.email.value = e.target.value;
            Static.form.error = false;
            front.Services.functions.formEmail(this.Static.form.email);
            Func.checkForm();
          }}
        />
        <span class="mt-2 hidden text-sm text-red-500 font-bold">{Static.form.email.error}</span>
      </div>

      <div class="relative mt-4 mb-2">
        <div class="absolute top-2 left-4 pointer-events-none">
          <i class="i i-lock-closed text-xl"></i>
        </div>
        <input
          type={Static.passType}
          required
          autocomplete="off"
          class={["bg-[#202432] border-[1px] border-solid border-[#5f479b] text-white text-base rounded-lg focus:border-[#5f479b] focus:outline-0 block w-full ps-10 p-2.5 [&:not(:placeholder-shown):not(:focus):invalid~span]:block  disabled:opacity-75 disabled:border-slate-700 disabled:bg-gray-700",
            Static.form.pass.error ? "border-red-400 focus:border-red-400" : null,
            Static.form.pass.valid ? "valid:[&:not(:placeholder-shown)]:border-green-500" : null
          ]}
          oninput={(e: any) => {
            Static.form.pass.value = e.target.value;
            Static.form.error = false;
            front.Services.functions.formPassword(Static.form.pass);
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

      {Static.form.pass.error ? <span class="text-sm font-bold text-red-500">{Static.form.pass.error}</span> : null}


      <p class="mt-4">
        При использовании платформы вы соглашаетесь с{" "}
        <span
          class="link"
          onclick={() => {
            Func.close();
            Fn.linkChange("/terms-of-service");
          }}
        >
          поликикой сайта.
        </span>
      </p>

      <span
        class="link"
        onclick={() => {
          Func.close();
          Fn.initOne("modalForgotPassword", {});
        }}
      >
        Забыли пароль?
      </span>
    </main>
  );
}
