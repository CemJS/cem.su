import { Cemjsx, Static, Fn, Func } from "cemjs-all";
import notFound from "@svg/notFound.svg";

const RenderSearch = function () {
  return (
    <div class={["modalWindow_field", Static.searchText ? "modalWindow_field__valid" : null]}>
      <input
        type="text"
        autocomplete="off"
        oninput={(e: any) => {
          Static.searchText = e.target.value.toLowerCase();
          Static.recordsAll = Static.records.filter((item) => {
            if (item.engName.toLowerCase().includes(Static.searchText)) {
              return true;
            }
          });
        }}
      />
      <div class="modalWindow_field_labelLine">
        <i class="i i-user"></i>
        <span>Поиск</span>
      </div>
    </div>
  );
};

const RenderListLanguages = function ({ languages }) {
  return (
    <ul
      class="list modal_scroll"
      role="list"
    >
      {languages.map((item) => {
        return (
          <li
            class="list__item"
            onclick={() => {
              Static.callback(item);
              Func.close();
            }}
          >
            {Static.full ? null : (
              <img
                class="list__item-img"
                src={`/contents/svg/flags/${item.code}.svg`}
                alt={item.origName}
              />
            )}
            <span>{item.origName}</span>
          </li>
        );
      })}
    </ul>
  );
};

const RenderNotFound = function () {
  return (
    <div class="notFound">
      <img
        src={notFound}
        alt="Not found"
      />
      <span>Не найдено</span>
    </div>
  );
};

export default function () {
  return (
    <main class="modal_main">
      {/* {Static.full ? <RenderSearch /> : null} */}
      <div class="mt-15">{Static.full ? Static.recordsAll ? <RenderListLanguages languages={Static.recordsAll} /> : <RenderNotFound /> : <RenderListLanguages languages={Static.languages} />}</div>
    </main>
  );
}
