import Filter from "@elements/ui/Filter";
import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function () {
  return (
    <button
      class="btn btn_dark bg-[--light-gray]"
      onclick={async (e) => {
        Fn.initOne("modalLanguage", {
          // full: true,
          callback: (chooseLanguage) => {
            Static.langPosts = chooseLanguage.origName;
            Static.languageCode = chooseLanguage.code;
            Func.updateFilter();
          },
        });
      }}
    >
      {Static.langPosts}
      <i class="i i-arrow-right"></i>
    </button>
  );
}
