import { Cemjsx, Static, Fn, Func } from "cemjs-all";

const RenderListCountries = function ({ countries }) {
  Fn.log("=95c41e=", countries);
  return (
    <ul class="max-h-[30rem] h-[30rem] overflow-y-scroll list-none p-0 m-0 " role="list">
      {countries[0].map((item:any) => {
        return (
          <li
            class="list__item"
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
