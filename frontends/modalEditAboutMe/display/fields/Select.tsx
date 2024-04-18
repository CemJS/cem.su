import { Cemjsx, Static, front, Fn } from "cemjs-all";

export default function Select_Frame_App() {
  return (
    <div>
      <div class="relative">
        <input
          type="text"
          value={
            Static?.info?.country ? Static?.info?.country?.origName : "Страна"
          }
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            Static.info.country.origName = target.value;
          }}
          placeholder="Выберите из списка"
          class="mb-[1.25rem] h-[3.75rem] w-full cursor-pointer rounded-[.625rem] bg-[#313543] p-[1.375rem] pl-[3.125rem] text-[--white] outline-none [border:1px_solid_#44495C]"
          onclick={() =>
            Fn.initOne("modalCountry", {
              selectCountry: Static.country,
              callback: async (selectCountryFromModal: "") => {
                let data: any = selectCountryFromModal;
                console.log("data", data);

                Static.info.country.origName = data?.origName;
                Static.info.country.code = data?.code
                console.log("Static.country", Static.info.country.origName);
                if (!selectCountryFromModal.length) {
                  return;
                }
              },
            })
          }
        />

        <img
          class="absolute left-[1.25rem] top-[1.25rem]"
          src="/contents/icons/countryIconSelect.svg"
          alt=""
        />
      </div>
    </div>
  );
}
