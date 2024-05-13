import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Tiles from "./Tiles";
import Card from "./Card";

export default function () {
  // Fn.log('=dfbb06=', Static.record)
  return (
    <div class="block-one">
      <div class="feed-main-block">
        <div class="user-feed">
          <div class="user-feed__block">
            <div class="user-feed__header">
              <h2>
                {front.Variable.DataUrl[1] === front.Variable?.myInfo?.nickname
                  ? "Моя лента"
                  : "Лента пользователя"}{" "}
              </h2>
              <ul class="user-feed__toggles-view">
                <li
                  onclick={() => {
                    Static.feedState = false;
                  }}
                >
                  <a
                    class={
                      Static.feedState
                        ? "user-feed__toggles"
                        : "user-feed__toggles user-feed__toggles-active"
                    }
                  >
                    Список
                  </a>
                </li>
                <li
                  onclick={() => {
                    Static.feedState = true;
                  }}
                >
                  <a
                    class={
                      Static.feedState
                        ? "user-feed__toggles user-feed__toggles-tile user-feed__toggles-active"
                        : "user-feed__toggles user-feed__toggles-tile"
                    }
                  >
                    Плитка
                  </a>
                </li>
              </ul>
            </div>
            {Static.record?.feed ? (
              <div></div>
            ) : (
              <div class="mx-auto my-0 flex w-full flex-col items-center bg-[#313643] px-[4.375rem] py-[1.875rem] text-[#dfdfdf] [border:1px_solid_#474c5a] max-@1024:rounded-[0] max-@1024:border-x-0">
                <img src={`/contents/svg/feed/list.svg`} alt="list" />
                <p class="mb-0 mt-[.9375rem] text-[#D0D0D0]">
                  Записей не найдено
                </p>
              </div>
            )}
            {Static.feedState ? <Tiles /> : <Card />}
          </div>
        </div>
      </div>
    </div>
  );
}
