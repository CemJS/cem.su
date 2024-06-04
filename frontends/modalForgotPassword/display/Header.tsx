import { Cemjsx, Static, Func, Ref, front } from "cemjs-all";

export default function () {
  return (
    <header class="flex justify-between items-center mb-5">
      <h2 class="text-2xl max-@464:text-lg font-bold">
        {front.Variable?.words?.form?.recoveryPassword}
      </h2>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark text-base sm:text-2xl"></i>
      </button>
    </header>
  );
}
