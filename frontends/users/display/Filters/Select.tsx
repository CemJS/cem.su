import { Cemjsx, Fn, Static, front } from "cemjs-all";

export default function () {
  return (
    <div class="mx-0 my-[1.25rem] flex items-center justify-center max-[550px]:flex-col">
      <div
        class="users__lang max-[550px]:!p-0 py-0 px-[.625rem] relative max-[550px]:mb-[.9375rem] max-[650px]:flex max-[650px]:w-full max-[650px]:justify-center"
        onclick={() =>
          Fn.initOne("modalLanguage", {
            filterLang: Static.lang,
            callback: async (filterLangFromModal: "") => {
              let data: any = filterLangFromModal;
              Static.lang = data;
              front.func.updateFilter();
              if (!filterLangFromModal.length) {
                return;
              }
            },
          })
        }
      >
        <input
        class="flex items-center w-full h-[3.5625rem] pt-0 pr-[4.375rem] pb-0 pl-[1.875rem] bg-[--prestige-blue] "
          type="text"
          readonly="true"
          value={Static.lang?.orig_name ? Static.lang?.orig_name : "Язык"}
        />
      </div>

      <div
        class="users__lang"
        onclick={() =>
          Fn.initOne("modalCountry", {
            selectCountry: Static.country,
            callback: async (selectCountryFromModal: "") => {
              let data: any = selectCountryFromModal;
              Static.country = data;
              front.func.updateFilter();

              if (!selectCountryFromModal.length) {
                return;
              }
            },
          })
        }
      >
        <input
          type="text"
          readonly="true"
          value={Static.country ? Static.country.orig_name : "Страна"}
        />
      </div>
    </div>
  );
}
