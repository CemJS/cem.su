import { Cemjsx, Fn, Static, front } from "cemjs-all";
import resetFilters from "@svg/users/reset_filter.svg";

export default function () {
  console.log("Static.checkBox.basic", Static.checkBox.basic);

  return (
    <div class="mx-0 my-[20px] flex items-center justify-center max-[650px]:flex-col max-[650px]:items-start">
      <div class="flex">
        <input
          type="checkbox"
          class="hidden"
          id="basic"
          ref="basic"
          value={Static.checkBox?.basic}
          checked={Static.checkBox?.basic}
          onclick={(e: any) => {
            Static.checkBox.basic = !Static.checkBox?.basic;
            front.func.updateFilter();
          }}
        />
        <label
          class={[
            "relative cursor-pointer select-none pl-[35px] pr-[20px] text-[15px] font-semibold leading-[32px] [-webkit-user-select:none] before:absolute before:left-0 before:top-[5px] before:z-[1] before:block before:h-[24px] before:w-[24px] before:rounded-[4px] before:content-[''] before:[border:2px_solid_#dfdfdf] before:[transition:0.1s_linear,_border_0.1s_linear] after:absolute after:left-[3px] after:top-[9px] after:z-[2] after:block after:h-[24px] after:w-[24px] after:content-[''] after:[transition:opacity_0.1s_linear]",
            Static.checkBox.basic === true
              ? "before:[background:linear-gradient(56.57deg,_#2973FF_0%,_#8846D3_51.56%,_#FF22AC_105.28%)] after:opacity-[1] after:![background-size:1.125rem_1rem] after:[background:url('/contents/svg/checked.svg')_no-repeat]"
              : "before:bg-[#ffffff] after:opacity-0",
          ]}
          for="basic"
        >
          Пользователи
        </label>
      </div>

      <div class="flex">
        <input
          type="checkbox"
          class="hidden"
          id="creator"
          ref="creator"
          value={Static.checkBox?.creator}
          checked={Static.checkBox?.creator}
          onclick={(e: any) => {
            Static.checkBox.creator = !Static.checkBox?.creator;
            front.func.updateFilter();
          }}
        />
        <label
          class={[
            "relative cursor-pointer select-none pl-[35px] pr-[20px] text-[15px] font-semibold leading-[32px] [-webkit-user-select:none] before:absolute before:left-0 before:top-[5px] before:z-[1] before:block before:h-[24px] before:w-[24px] before:rounded-[4px] before:content-[''] before:[border:2px_solid_#dfdfdf] before:[transition:0.1s_linear,_border_0.1s_linear] after:absolute after:left-[3px] after:top-[9px] after:z-[2] after:block after:h-[24px] after:w-[24px] after:content-[''] after:[transition:opacity_0.1s_linear]",
            Static.checkBox.creator === true
              ? "before:[background:linear-gradient(56.57deg,_#2973FF_0%,_#8846D3_51.56%,_#FF22AC_105.28%)] after:opacity-[1] after:![background-size:1.125rem_1rem] after:[background:url('/contents/svg/checked.svg')_no-repeat]"
              : "before:bg-[#ffffff] after:opacity-0",
          ]}
          for="creator"
        >
          Создатели контента
        </label>
      </div>

      <div class="flex">
        <input
          type="checkbox"
          class="hidden"
          id="expert"
          ref="expert"
          value={Static.checkBox?.expert}
          checked={Static.checkBox?.expert}
          onclick={(e: any) => {
            Static.checkBox.expert = !Static.checkBox?.expert;
            front.func.updateFilter();
          }}
        />
        <label
          class={[
            "relative cursor-pointer select-none pl-[35px] pr-[20px] text-[15px] font-semibold leading-[32px] [-webkit-user-select:none] before:absolute before:left-0 before:top-[5px] before:z-[1] before:block before:h-[24px] before:w-[24px] before:rounded-[4px] before:content-[''] before:[border:2px_solid_#dfdfdf] before:[transition:0.1s_linear,_border_0.1s_linear] after:absolute after:left-[3px] after:top-[9px] after:z-[2] after:block after:h-[24px] after:w-[24px] after:content-[''] after:[transition:opacity_0.1s_linear]",
            Static.checkBox.expert === true
              ? "before:[background:linear-gradient(56.57deg,_#2973FF_0%,_#8846D3_51.56%,_#FF22AC_105.28%)] after:opacity-[1] after:![background-size:1.125rem_1rem] after:[background:url('/contents/svg/checked.svg')_no-repeat]"
              : "before:bg-[#ffffff] after:opacity-0",
          ]}
          for="expert"
        >
          Эксперты
        </label>
      </div>
      <button
        class="@650:mt-0 relative z-[1] mr-[10px] mt-[.9375rem] flex h-[3.125rem] cursor-pointer items-center justify-center overflow-hidden rounded-[.375rem] bg-transparent px-[1.25rem] py-0 text-center text-[.875rem] font-semibold uppercase leading-[110%] tracking-[.0625rem] text-[--white] no-underline [font-family:'Montserrat'] after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.125rem] after:w-[93.75rem] after:content-[''] after:[background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] after:[transform:translateX(-80px)] after:[transition:transform_400ms_ease-in]"
        onclick={() => {
          Static.search = "";
          if (Static.lang?.code?.length || Static.lang?.origName) {
            Static.lang.code = "ru";
            Static.lang.origName = "Русский";
          }
          if (Static.country?.code?.length || Static.country?.origName) {
            Static.country.code = "ru";
            Static.country.origName = "Россия";
          }
          front.func.updateFilter();
        }}
      >
        <img src={resetFilters} width="30" height="30" />
      </button>
    </div>
  );
}
