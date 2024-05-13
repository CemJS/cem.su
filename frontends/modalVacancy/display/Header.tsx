import { Cemjsx, Static, Func, Ref } from "cemjs-all";

export default function () {
  return (
    <header class="modal-header">
      <h2 class="text-[clamp(1.2rem,2vw,1.5rem)] leading-[125%]">
        Отликнуться на вакансию
      </h2>

      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark"></i>
      </button>
    </header>
  );
}
