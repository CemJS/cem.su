import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Tiles from "./Tiles";

export default function () {
  return (
    <div class="w-full pb-5 pt-3">
      <div class="mx-auto flex flex-col items-center">
        <div class="m-auto w-full text-white">
          <div class="mx-auto flex w-full max-w-full flex-col items-center px-3 pt-4">
            <div class="user-feed__header">
              <h2>Моя лента</h2>
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
            {/* {Static.feedState ? <Tiles /> : <Card />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
