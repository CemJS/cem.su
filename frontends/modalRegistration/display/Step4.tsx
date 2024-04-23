import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all"
import done from "@svg/icons/done.svg";

export default function () {
  return (
    <div class="w-1/4 transition-all">
      <div class="modalReg_form">
        <h3 class="modalReg_page-title text-center">
          Поздравляем, Вы успешно зарегистрированы!
        </h3>
        <div class="modalReg_success">
          <img src={done} alt="Пользователь успешно зарегистрирован" />
        </div>
        <div class="f-center modalReg_btns">
          <button
            class="btn btn_timing"
            onclick={() => {
              Fn.linkChange(`/user/${front.Variable.myInfo.nickname}`);
              Func.close();
            }}
          >
            Перейти в личный кабинет
          </button>
        </div>
      </div>
    </div>
  )
}