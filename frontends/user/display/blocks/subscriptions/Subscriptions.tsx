import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dots from "@svg/questions/dots.svg";
import SubscribersSkeleton from "@elements/skeletonLoading/user/SubscribersSkeleton";

export default function () {
  if (Static.record?.subscriptions && Static.subscriptions) {
    Func.activeBlocksProfile();
  } else Static.showComp = false;

  return (
    <div class="relative m-0 w-full min-w-full px-[.625rem] py-0 pb-[1.25rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)] @1200:pt-[.625rem]">
      <div class="mb-[.3125rem] flex items-center justify-between pb-[.9375rem] pt-[.625rem] @1024:mt-[1.5625rem]">
        <h2 class="mx-0 my-0 mb-0 mt-[1.25rem] self-start text-balance text-[clamp(17px,_3vw,_20px)] font-bold leading-[115%] text-[--white] max-@1024:px-[.9375rem]">
          Мои подписки
        </h2>
      </div>
      <div class="mt-0 grid grid-cols-[100%] gap-0 @680:grid-cols-[calc(50%_-_5px)_calc(50%_-_5px)] @680:gap-[.625rem] @970:grid-cols-[calc(33.3%_-_6.6px)_calc(33.3%_-_6.6px)_calc(33.3%_-_6.6px)] @970:gap-[.625rem] @1370:mt-[1.875rem] @1370:grid-cols-[calc(25%_-_7.5008px)_calc(25%_-_7.5008px)_calc(25%_-_7.5008px)_calc(25%_-_7.5008px)]">
        {Static.showComp
          ? Static.record?.subscriptions?.map((item: any, key: number) => {
              // Fn.log('=9aa675=', item)
              return (
                <div class="relative box-border flex max-h-[9.125rem] rounded-[0] bg-[--black-gray] p-[.9375rem] [border:1px_solid_#363C50] max-@1024:border-x-0 max-@1024:border-b-[0] @1024:rounded-[.75rem]">
                  <a
                    href={`/user/${item?.id}`}
                    class="left-[-0.9375rem] w-[5rem] pl-0 text-inherit no-underline"
                  >
                    <div class="relative z-[1] ml-[.625rem] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
                      <img
                        class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
                        src={
                          item?.avatar?.name
                            ? `/assets/upload/avatar/${item?.avatar?.name}`
                            : avatarDefault
                        }
                      />
                      <img
                        class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
                        src={
                          item?.frame?.name
                            ? `/contents/images/lenta/${item?.frame?.name}`
                            : defaultGray
                        }
                      />
                      <div>
                        <div class="absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.75rem]">
                          <img class="h-full" src={leveGray} />
                          <span class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[.75rem] font-bold tracking-[.6px] text-[--white]">
                            {item?.statistics?.level}
                          </span>
                        </div>
                        <div
                          class={[
                            "absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [border:3px_solid_#ffffff]",
                            item?.online
                              ? "[background:linear-gradient(225deg,_#72FFB6_0,_#10D194_100%)]"
                              : "[background:linear-gradient(225deg,_#FF7272_0%,_#D93030_100%)]",
                          ]}
                        ></div>
                      </div>
                    </div>
                  </a>
                  <div class="ml-[.3125rem] mt-[.625rem]">
                    <p class="mb-0 mt-[.375rem] text-[1.125rem] font-semibold leading-[1.375rem] text-[--white]">
                      {item?.nickname}
                    </p>
                    <p class="leading-[1.375rem] last:mt-[.125rem] last:break-words last:text-[.75rem] last:font-medium last:opacity-[0.9]">
                      {item?.fullName}
                    </p>
                  </div>
                  {/* <div class="relative ml-auto h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]">
                <div class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img src={dots} />
                </div>
              </div> */}
                </div>
              );
            })
          : Array.from(
              {
                length: Math.min(Static.record?.statistics?.subscribe, 18),
              },
              (_, index) => <SubscribersSkeleton key={index} />,
            )}
      </div>
    </div>
  );
}
