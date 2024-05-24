import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import AwardCreateDate from "./AwardCreateDate";
import AwardsSkeleton from "@elements/skeletonLoading/user/AwardsSkeleton";

export default function () {
  if (Static.record?.awards &&  Static.nameCategory === "awards") {
    Func.activeBlocksProfile();
  } else Static.showComp = false;
  
  return (
    <div class="relative m-0 w-full min-w-[auto] px-[.625rem] py-0 pb-[1.25rem] pt-[.625rem] @1024:mb-[2.5rem]">
      <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(15px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
        Полученные награды
      </h2>
      <div class="m-auto mt-0 w-full">
        <div class="max-@900:grid-grid-cols-2 mt-0 grid gap-[1rem] max-@1240:grid-cols-3 max-@620:grid-cols-1 max-@522:grid-cols-[100%] @1240:grid-cols-4">
        {/* <AwardsSkeleton /> */}
          {Static.showComp
            ? Static.record?.awards?.map((item: any, key: number) => {
                return (
                  <div
                    key={key}
                    class="relative mx-auto min-h-[auto] w-full max-w-full rounded-[.3125rem] bg-[#33394A] px-[1.5625rem] py-[1.875rem] [border:1px_solid_#52586A] max-@522:flex max-@522:text-left max-@420:flex max-@420:flex-col max-@420:items-center max-@420:text-center @522:min-h-[22.6875rem] @522:max-w-[13.75rem] @522:p-[1.9375rem_2.8125rem_1.5625rem] @522:text-center"
                  >
                    <img
                      src={`/contents/svg/personalAwards/${item?.icon}`}
                      class="left-[1.5rem] top-[1.75rem] h-[2.3125rem] w-[2.125rem] max-@522:hidden @522:absolute"
                    />
                    <img
                      src={`/contents/svg/personalAwards/${item?.icon}`}
                      class="mb-[2.1875rem] h-[5.375rem] @522:h-[8.125rem]"
                    />
                    <div class="user-awards__description max-@522:px-[1.25rem] max-@522:py-0">
                      <p class="mb-[1rem] mt-0 text-[1.25rem] font-semibold leading-[1.25rem] text-[--white]">
                        {item?.name}
                      </p>
                      <p class="mb-[1rem] text-[1rem] font-medium leading-[1.25rem] text-[#9CA3B8] max-@522:mb-[2.5rem]">
                        {item?.description}
                      </p>
                      <p class="mb-[1rem] mt-0 text-[.875rem] font-bold uppercase leading-[1.25rem] text-transparent ![-webkit-background-clip:text] [background:linear-gradient(89.03deg,_#2c66b8_0.54%,_#8859ec_97.66%)]">
                        Получено
                      </p>
                      <AwardCreateDate item={item} key={key} />
                    </div>
                  </div>
                );
              })
            : Array.from(
                {
                  length: 1
                },
                (_, index) => <AwardsSkeleton key={index} />,
              )}
        </div>
      </div>
    </div>
  );
}
