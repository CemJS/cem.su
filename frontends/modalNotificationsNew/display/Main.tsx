import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/socials";



export default function () {
  return (
    <main class="relative overflow-hidden">
      {/* <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-solid border-[#363C50]">
        Разделы
      </span> */}

      <div class="rounded mt-3 shadow">
        <div>
          <i class="i i-information-circle"></i>
          <span>Задан новый вопрос!</span>
        </div>
        <p>10 часов назад</p>
      </div>


      <p class="text-center p-4 text-slate-300">{`©2020-${Static.currentYear} Crypto Emergency`}</p>
    </main>
  );
}
