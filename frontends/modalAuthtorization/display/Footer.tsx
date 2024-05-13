import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";

export default function () {
  return (
    <footer class="flex justify-center items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-4 w-full">
        <button
          class={["btn", "w-full", Static.form.isValid ? null : "btn_passive"]}
          onclick={async () => {
            if (!Static.form.isValid) return;

            let answer = await front.Services.functions.sendApi(`/api/users/login`, {
              email: Static.form.email.value,
              password: Static.form.pass.value,
            });

            if (answer.error) {
              Ref.email.value = ""
              Ref.pass.value = ""

              Static.form.email.error = true;
              Static.form.pass.error = true;
              Static.form.isValid = false;
              Static.form.error = "Неверно введены данные!";

              return;
            }
            // Fn.log("=139d14=", answer);
            Fn.initAll()
            Func.close();
          }}
        >
          Вход
        </button>
        <div
          class="btn_border-wrap w-full h-[3.2rem]"
          onclick={() => {
            Func.close();
            Fn.initOne("modalRegistration", {});
          }}
        >
          <button class="btn_border w-full h-full">РЕГИСТРАЦИЯ</button>
        </div>
      </div>
    </footer>
  );
}
