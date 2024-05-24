import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dots from "@svg/questions/dots.svg";
import { subscriberObject } from "./interface";
import SubscribersSkeleton from "@elements/skeletonLoading/user/SubscribersSkeleton";
import Avatar from "@elements/ui/Avatar";

export default function () {
  if (Static.record?.subscribers && Static.nameCategory === "subscribers") {
    Func.activeBlocksProfile();
  } else Static.showComp = false;

  return (
    <div class="relative m-0 w-full min-w-full px-[.625rem] py-0 pb-[1.25rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)] @1200:pt-[.625rem]">
      <div class="mb-[.3125rem] flex items-center justify-between pb-[.9375rem] pt-[.625rem] @1024:mt-[1.5625rem]">
        <h2 class="mx-0 my-0 mb-0 mt-[1.25rem] self-start text-balance text-[clamp(17px,_3vw,_20px)] font-bold leading-[115%] text-[--white] max-@1024:px-[.9375rem]">
          Подписчики
        </h2>
      </div>
      <div class="mt-0 grid grid-cols-[100%] gap-0 @680:grid-cols-[calc(50%_-_5px)_calc(50%_-_5px)] @680:gap-[.625rem] @970:grid-cols-[calc(33.3%_-_6.6px)_calc(33.3%_-_6.6px)_calc(33.3%_-_6.6px)] @970:gap-[.625rem] @1370:mt-[1.875rem] @1370:grid-cols-[calc(25%_-_7.5008px)_calc(25%_-_7.5008px)_calc(25%_-_7.5008px)_calc(25%_-_7.5008px)]">
        {Static.showComp
          ? Static.record?.subscribers?.map((item: subscriberObject) => {
              return (
                <div class="relative box-border flex max-h-[9.125rem] rounded-[0] bg-[--black-gray] p-[.9375rem] [border:1px_solid_#363C50] max-@1024:border-x-0 max-@1024:border-b-[0] @1024:rounded-[.75rem]">
                  <Avatar
                    avatarData={{
                      id: item?.id,
                      nickname: item?.nickname,
                      avatarName: item?.avatar?.name,
                      frameName: item?.frame?.name,
                      level: item?.statistics?.level,
                      online: item?.online,
                    }}
                  />
                  <div class="ml-[.3125rem] mt-[.625rem]">
                    <p class="mb-0 mt-[.375rem] text-[1.125rem] font-semibold leading-[1.375rem] text-[--white]">
                      {item?.nickname}
                    </p>
                    <p class="leading-[1.375rem] last:mt-[.125rem] last:break-words last:text-[.75rem] last:font-medium last:opacity-[0.9]">
                      {item?.fullName}
                    </p>
                  </div>
                  <div
                    class="relative ml-auto h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"
                    onclick={() => {
                      let records = [];
                      if (
                        front.Variable.myInfo.id != item?.id &&
                        front.Variable.Auth
                      ) {
                        records.push({
                          name: !item?.subscribed
                            ? "Подписаться"
                            : "Отписаться",
                          func: () => Func.follow(item),
                        });
                      }

                      Fn.initOne("modalTools", {
                        userId: item?.id,
                        records,
                      });
                    }}
                  >
                    <img
                      class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                      src={dots}
                    />
                  </div>
                </div>
              );
            })
          : Array.from(
              {
                length: Math.min(Static.record?.statistics?.follower, 18),
              },
              (_, index) => <SubscribersSkeleton key={index} />,
            )}
      </div>
    </div>
  );
}
