import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import AwardCreateDate from "./AwardCreateDate";

export default function () {
  return (
    <div class="relative m-0 w-full min-w-[auto] px-[.625rem] py-0 pb-[1.25rem] pt-[.625rem] @1024:mb-[2.5rem]">
      <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(15px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
        Полученные награды
      </h2>
      <div class="m-auto mt-0 w-full">
        <div class="max-@522:grid-cols-[100%] max-@620:grid-cols-1 max-@900:grid-grid-cols-2 max-@1540:grid-cols-4 mt-0 grid gap-[1rem] max-@1240:grid-cols-3">
          {Static.record?.awards?.map((item: any, key: number) => {
            return (
              <div
                key={key}
                class="max-@420:text-center max-@420:block max-@522:text-left max-@522:flex @522:max-w-[13.75rem] @522:min-h-[22.6875rem] @522:text-center @522:p-[1.9375rem_2.8125rem_1.5625rem] relative mx-auto min-h-[auto] w-full max-w-full rounded-[.3125rem] bg-[#33394A] px-[1.5625rem] py-[1.875rem] [border:1px_solid_#52586A]"
              >
                <img
                  src={`/contents/svg/personalAwards/${item?.icon}`}
                  class="user-awards__small-badge"
                />
                <img
                  src={`/contents/svg/personalAwards/${item?.icon}`}
                  class="user-awards__badge"
                />
                <div class="user-awards__description">
                  <p class="user-awards__title">{item?.name}</p>
                  <p class="user-awards__text">{item?.description}</p>
                  <p class="user-awards__progress-bar-label">Получено</p>
                  <AwardCreateDate item={item} key={key} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
