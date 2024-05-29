import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";
import type { Tab } from "..";

export default function () {
  return (
    <ul class="flex justify-between items-center bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#363C50] w-full">
      {
        (Static.tabs as Tab[]).map(item => {
          return(
            <li 
              class={[ "font-semibold text-lg p-4 w-full text-center hover:bg-[#3E4354] transition-all cursor-pointer", item.active ? "bg-[#3E4354] shadow-inner" : null, item?.border ? "border-l-[1px] border-r-[1px] border-solid border-[#363C50]" : null]}
              onclick={() => {
                Static.tabs.forEach((el)=>{ el.active = false });
                item.active = true;
                Func.replaceTabContent();
              }}
              >
              { item.name }
            </li>
          )
        })
      }
    </ul>
  );
}
