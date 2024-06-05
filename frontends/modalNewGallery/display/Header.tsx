import { Cemjsx, Func, front } from "cemjs-all";

export default function () {
  return (
    <header class="modal-header absolute">
      <h2 class="text-[clamp(1.2rem,2vw,1.5rem)] leading-[125%]">
        {front.Variable?.words?.notices?.fileComplaint}
      </h2>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark"></i>
      </button>
    </header>
  );
}
