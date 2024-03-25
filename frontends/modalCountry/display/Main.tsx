import { Cemjsx, Static, Fn, Func } from "cemjs-all";

const RenderListCountries = function ({ countries }) {
  interface CountriesObject {
    active: boolean;
    code: string;
    dateCreate: number;
    dateUpdate: number;
    engName: string;
    euro: boolean;
    id: string;
    origName: string;
    phone: number;
  }

  return (
    <ul
      class="m-0 h-[30rem] max-h-[30rem] list-none overflow-y-scroll p-0 "
      role="list"
    >
      {countries[0].map((item: CountriesObject) => {
        return (
          <li
            class="mx-[.3125rem] my-0 flex cursor-pointer items-center gap-[.625rem] rounded-[--borderR] bg-[#ffffff12] px-[0.9rem] py-[0.6rem] [border:1px_solid_#474c5a] [box-shadow:1px_6px_0px_-4px_rgba(0,_0,_0,_0.15),_3px_4px_4px_-1px_rgba(0,_0,_0,_0.15)] [transition:_background-color_0.3s_ease-in-out,_border_0.3s_ease-in-out,_transform_0.3s_ease-in-out] hover:scale-[1.01] hover:bg-transparent hover:[border:1px_solid_rgba(150,_150,_150,_0.5)] [&:not(:last-child)]:mb-[0.5rem]"
            onclick={() => {
              Static.callback(item);
              Func.close();
            }}
          >
            {/* <span>{item.orig_name}</span> */}
            <span>{item.engName}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default function () {
  // Fn.log('=dd00ae=', Static.records)
  return (
    <main class="modal_main w-[80ch] max-w-full">
      <div class="mt-[15px]">
        <RenderListCountries countries={Static.records} />
      </div>
    </main>
  );
}
