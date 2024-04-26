import { Cemjsx, Static, Fn, Func } from "cemjs-all";
import notFound from "@svg/notFound.svg";

// const RenderSearch = function () {
//   return (
//     <div
//       class={[
//         "modalWindow_field",
//         Static.searchText ? "modalWindow_field__valid" : null,
//       ]}
//     >
//       <input
//         type="text"
//         autocomplete="off"
//         oninput={(e: any) => {
//           Static.searchText = e.target.value.toLowerCase();
//           Static.recordsAll = Static.records.filter((item) => {
//             if (item.engName.toLowerCase().includes(Static.searchText)) {
//               return true;
//             }
//           });
//         }}
//       />
//       <div class="modalWindow_field_labelLine">
//         <i class="i i-user"></i>
//         <span>Поиск</span>
//       </div>
//     </div>
//   );
// };

const RenderListLanguages = function ({ languages }) {
  interface LangObject {
    active: boolean;
    code: string;
    dateCreate: number;
    dateUpdate: number;
    engName: string;
    id: string;
    origName: string;
  }

  return (
    <ul
      class="m-0 h-[30rem] max-h-[30rem] list-none overflow-y-scroll p-0"
      role="list"
    >
      {languages[0]?.map((item: LangObject, index: number) => {
        return (
          <li
            class="mx-[.3125rem] my-0 flex cursor-pointer items-center gap-[.625rem] rounded-[--borderR] bg-[#ffffff12] px-[0.9rem] py-[0.6rem] [border:1px_solid_#474c5a] [box-shadow:1px_6px_0px_-4px_rgba(0,_0,_0,_0.15),_3px_4px_4px_-1px_rgba(0,_0,_0,_0.15)] [transition:_background-color_0.3s_ease-in-out,_border_0.3s_ease-in-out,_transform_0.3s_ease-in-out] hover:scale-[1.01] hover:bg-transparent hover:[border:1px_solid_rgba(150,_150,_150,_0.5)] [&:not(:last-child)]:mb-[0.5rem]"
            onclick={() => {
              Static.callback(item);
              Func.close();
            }}
          >
            {Static.full ? null : (
              <img
                class="w-[2rem]"
                src={`/contents/svg/flags/${item?.code}.svg`}
                alt={item?.origName}
              />
            )}
            <span>{item?.engName}</span>
          </li>
        );
      })}
    </ul>
  );
};

const RenderNotFound = function () {
  return (
    <div class="notFound">
      <img src={notFound} alt="Not found" />
      <span>Не найдено</span>
    </div>
  );
};

export default function () {
  return (
    <main class="modal-main w-[80ch] max-w-full">
      {/* {Static.full ? <RenderSearch /> : null} */}
      <div class="mt-[15px]">
        {/* {Static.full ? (
          Static.recordsAll ? (
            <RenderListLanguages languages={Static.recordsAll[0]} />
          ) : (
            <RenderNotFound />
          )
        ) : ( */}
        <RenderListLanguages languages={Static.languages} />
        {/* )} */}
      </div>
    </main>
  );
}
