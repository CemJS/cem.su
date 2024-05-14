import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";

export default function () {
  return (
    <header class="p-4 flex items-center justify-between border-b-[1px] border-solid border-[#363C50]">
      <span class="font-semibold text-lg">Уведомления</span>
      
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark"></i>
      </button>
    </header>
  );
}
