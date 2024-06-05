import { Cemjsx, Fn, Static, front } from "cemjs-all";

export default function () {
  return (
    <div id="lang" class="mb-4 flex items-center gap-4">
      <label class="text-[16px] font-medium text-[#9ca2b5]">{front.Variable?.words?.language}:</label>
      <span
        class="cursor-pointer underline"
        onclick={() => {
          Fn.initOne("modalLanguage", {
            callback: (lang) => {
              Static.data.languageCode = lang.code;
              Static.origName = lang.origName;
            },
          });
        }}
      >
        {Static.origName}
      </span>
    </div>
  );
}
