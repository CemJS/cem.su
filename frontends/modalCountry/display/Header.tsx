import { Cemjsx, Func } from "cemjs-all";

export default function () {
  return (
    <header class="mb-[1.2rem] flex items-center justify-between">
      <h2 class="m-0 text-balance text-[clamp(1.2rem,_3vw,_1.5rem)] leading-[125%] text-inherit">
        Выбрать страну
      </h2>
      <button class="btn bg-none" onclick={Func.close}>
        <i class="i-cancel !font-['cemicons'] normal-case [-webkit-font-smoothing:antialiased] [font-style:normal] [font-variant:normal] [font-weight:normal]"></i>
      </button>
    </header>
  );
}
