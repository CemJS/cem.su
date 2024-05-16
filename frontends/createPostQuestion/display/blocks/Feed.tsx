import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Tiles from "./Tiles";
import GridGallery from "./feedBlocks/GridGallery";

export default function () {
  return (
    <div class="w-full pb-5 pt-3">
      <div class="mx-auto flex flex-col items-center">
        <div class="m-auto w-full text-white">
          <div class="mx-auto flex w-full max-w-full flex-col items-center px-3 pt-4">
            <div class="mb-1 flex w-full items-center justify-between">
              <h2>Моя лента</h2>
              <ul class="m-0 flex list-none items-stretch gap-2 p-0 [&_li]:p-[7px_3px]">
                <li
                  onclick={() => {
                    Static.feedState = false;
                  }}
                >
                  <a
                    class={
                      Static.feedState
                        ? "block h-5 w-5 cursor-pointer rounded-[4px] text-[0] [border:2px_solid_#ffffff]"
                        : "user-feed__toggles-active block h-5 w-5 cursor-pointer rounded-[4px] text-[0] [border:2px_solid_#ffffff]"
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
                        ? "user-feed__toggles-tile user-feed__toggles-active block h-5 w-5 cursor-pointer rounded-[4px] text-[0] [border:2px_solid_#ffffff]"
                        : "user-feed__toggles-tile block h-5 w-5 cursor-pointer rounded-[4px] text-[0] [border:2px_solid_#ffffff]"
                    }
                  >
                    Плитка
                  </a>
                </li>
              </ul>
            </div>
            {Static.feedState ? <Tiles /> : <GridGallery />}
          </div>
        </div>
      </div>
    </div>
  );
}
