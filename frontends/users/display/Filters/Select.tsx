import { Cemjsx, Fn, Static, front } from "cemjs-all";

export default function () {
  return (
    <div class="mx-0 my-[1.25rem] flex items-center justify-center max-[550px]:flex-col">
      <div
        class="relative px-[.625rem] py-0 max-[650px]:flex max-[650px]:w-full max-[650px]:justify-center max-[550px]:mb-[.9375rem] max-[550px]:!p-0"
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
          style="background-image: url('/contents/svg/select_arrow.svg')"
          class="focus:[outline:none] flex h-[3.5625rem] w-full items-center bg-[--prestige-blue] pb-0 pl-[1.875rem] pr-[4.375rem] pt-0 bg-no-repeat [background-position:_bottom_calc(50%_-_0rem)_right_.9375rem] text-[--white] [border:1px_solid_#474c5a] rounded-[.625rem] text-[1rem] font-semibold cursor-pointer @550:w-[15.625rem]"
          type="text"
          readonly="true"
          value={Static.lang?.origName ? Static.lang?.origName : "Язык"}
        />
      </div>

      <div
        class="relative px-[.625rem] py-0 max-[650px]:flex max-[650px]:w-full max-[650px]:justify-center max-[550px]:mb-[.9375rem] max-[550px]:!p-0"
        onclick={() =>
          Fn.initOne("modalCountry", {
            selectCountry: Static.country,
            callback: async (selectCountryFromModal: "") => {
              let data: any = selectCountryFromModal;
              console.log("data", data);
              
              Static.country = data;
              console.log("Static.country", Static.country);

              front.func.updateFilter();

              if (!selectCountryFromModal.length) {
                return;
              }
            },
          })
        }
      >
        <input
          style="background-image: url('/contents/svg/select_arrow.svg')"
          class="focus:[outline:none] flex h-[3.5625rem] w-full items-center bg-[--prestige-blue] pb-0 pl-[1.875rem] pr-[4.375rem] pt-0 bg-no-repeat [background-position:_bottom_calc(50%_-_0rem)_right_.9375rem] text-[--white] [border:1px_solid_#474c5a] rounded-[.625rem] text-[1rem] font-semibold cursor-pointer @550:w-[15.625rem]"
          type="text"
          readonly="true"
          value={Static.country ? Static.country?.origName : "Страна"}
        />
      </div>
    </div>
  );
}
