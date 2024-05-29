import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";

export default function () {
  return (
    <header class="p-4 border-b-[1px] flex flex-col gap-6 border-solid border-[#363C50]">
      <div class="flex justify-between">
        <span class="font-semibold text-lg">Уведомления</span>

        <button class="btn btn_dark" onclick={Func.close}>
          <i class="i i-x-mark"></i>
        </button>
      </div>
      <div>
        <button class="btn" onclick={() => Fn.linkChange('/profile/notify')}>
          Все уведомления
        </button>
      </div>
      
    </header>
  );
}
