import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";
import languages from "@json/languages";

const RenderHeaderLang = () => {
  return (
    <div class="p-4 flex items-center justify-between border-b-[1px] border-solid border-[#434954]">
      <div
        class="btn btn_dark"
        onclick={() => {
          Ref.slideSection.style.marginLeft = `0`;
        }}
      >
        <i class="i i-chevron-left"></i> {front.Variable.words?.chapters?.menu}
      </div>
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark"></i>
      </button>
    </div>
  )
}

const RenderListLang = () => {
  return (
    <div>
      {languages.map((item) => {
        return (
          <div
            class={[
              "font-medium text-slate-300 text-lg p-4 flex items-center gap-4 transition-all cursor-pointer hover:bg-[#1d2029] hover:text-white",
              front.Variable.Lang == item.orig_name
                ?
                "bg-[#1d2029] text-white"
                : null,
            ]}
            onclick={() => {
              front.Variable.Lang = item.orig_name;
              Fn.initAll();
            }}
          >
            <img
              class="w-8"
              src={`/contents/svg/flags/${item.code}.svg`}
              alt={item.orig_name}
            />
            <span>{item.orig_name}</span>
          </div>
        );
      })}
    </div>
  )
}

export default function () {
  return (
    <div>
      <RenderHeaderLang />
      <RenderListLang />
    </div>
  );
}
