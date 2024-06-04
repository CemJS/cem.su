import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"
import done from "@svg/icons/done.svg";

export default function () {
  return (
    <div class="w-1/4 transition-all">
      <div class="flex flex-col h-full justify-between gap-7">
        <h3 class="text-lg font-semibold max-@600:text-base text-center">
          {front.Variable?.words?.form?.happyRegistered}
        </h3>
        <div class="flex justify-center items-center">
          <img class="w-[min(50%,100px)]" src={done} alt="Пользователь успешно зарегистрирован" />
        </div>
        <div class="flex justify-center items-center gap-5">
          <button
            class="btn btn_timing"
            onclick={() => {
              Fn.linkChange(`/user/${front.Variable.myInfo.nickname}`);
              Func.close();
            }}
          >
            {front.Variable?.words?.tools?.goOverPersonalAccount}
          </button>
        </div>
      </div>
    </div>
  )
}