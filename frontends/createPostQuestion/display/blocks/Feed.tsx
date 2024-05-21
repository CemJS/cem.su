import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Posts from "./feedBlocks/Posts";
import GridGalleryPosts from "./feedBlocks/GridGalleryPosts";
import Questions from "./feedBlocks/Questions";
import GridGalleryQuestions from "./feedBlocks/GridGalleryQuestions";

export default function () {
  return (
    <div class="w-full pb-5 pt-3">
      <div class="mx-auto flex flex-col items-center">
        <div class="m-auto w-full text-white">
          <div class="mx-auto flex w-full max-w-full flex-col items-center px-3 pt-4">
            <div class="mb-1 flex w-full items-center justify-between">
              <h2 class="m-[20px_0] text-center text-[20px] font-bold leading-[115%] text-white">
                {Static.page == "posts" ? "Моя лента" : "Мои вопросы"}
              </h2>
              <ul class="m-0 flex list-none items-stretch gap-2 p-0 [&_li]:p-[7px_3px]">
                <li
                  onclick={() => {
                    !Static.feedState ? (Static.feedState = true) : 0;
                  }}
                >
                  <a
                    class={[
                      "block h-5 w-5 cursor-pointer rounded-[4px] text-[0] [border:2px_solid_#ffffff] [&.active]:cursor-default [&.active]:[border-color:#40f2d0_!important]",
                      Static.feedState && "active",
                    ]}
                  >
                    Список
                  </a>
                </li>
                <li
                  onclick={() => {
                    Static.feedState ? (Static.feedState = false) : 0;
                  }}
                >
                  <a
                    class={[
                      "relative block h-5 w-5 cursor-pointer rounded-[4px] text-[0] [border:2px_solid_#ffffff] [&.active]:cursor-default [&.active]:![border-color:#40f2d0] [&.active_#after]:!bg-[#40f2d0] [&.active_#before]:!bg-[#40f2d0]",
                      !Static.feedState ? "active" : "",
                    ]}
                  >
                    <div
                      id="before"
                      class="absolute left-1/2 top-1/2 h-[2px] w-full bg-white [transform:translate(-50%,-50%)]"
                    ></div>
                    Плитка
                    <div
                      id="after"
                      class="absolute left-1/2 top-1/2 h-full w-[2px] bg-white [transform:translate(-50%,-50%)]"
                    ></div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full">
              {Static.page == "posts" ? (
                Static.feedState ? (
                  <Posts />
                ) : (
                  <GridGalleryPosts />
                )
              ) : (
                ""
              )}
              {Static.page == "questions" ? (
                Static.feedState ? (
                  <Questions />
                ) : (
                  <GridGalleryQuestions />
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
