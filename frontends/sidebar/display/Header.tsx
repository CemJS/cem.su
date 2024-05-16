import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";

export default function () {
  return (
    <header class="p-4 flex items-center justify-between border-b-[1px] border-solid border-[#363C50]">
      <div
        class="btn btn_dark"
        onclick={() => {
          Func.close();
          Fn.initOne("modalServices", {});
        }}
      >
        Сервисы
      </div>
      <div
        class="btn btn_dark"
        onclick={() => {
          Ref.slideSection.style.marginLeft = `-50%`;
        }}
      >
        {front.Variable.Lang}
        <i class="i i-chevron-right"></i>
      </div>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark"></i>
      </button>
    </header>
  );
}
