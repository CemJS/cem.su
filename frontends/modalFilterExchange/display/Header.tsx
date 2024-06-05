import { Cemjsx, Func, front } from "cemjs-all";

export default function () {
  return (
    <header class="mb-[1.2rem] flex items-center justify-between">
      <h2 class="text-balance text-[clamp(1.2rem,_2vw,_1.5rem)] leading-[125%]">
        {front.Variable?.words?.filters?.chooseCoins}
      </h2>
      <button class="btn_dark btn" onclick={Func.close}>
        <i class="i-x-mark !font-['cemicons'] text-[0.85rem] normal-case leading-[1] [-webkit-font-smoothing:antialiased] [font-style:normal] [font-variant:normal] [font-weight:normal] before:content-['\e906']"></i>
      </button>
    </header>
  );
}
