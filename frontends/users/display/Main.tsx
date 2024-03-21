import { Cemjsx, Fn, Static, front } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import Filters from "./Filters/Filters";
import defaultGray from "@svg/lenta/defaultGray.svg";

export default function () {
  return (
    <div class="wrapper ml-auto mr-auto w-[calc(100%_-_60px)] pb-[6.25rem] pt-[3.125rem] @1200:ml-auto @1200:mr-auto @1240:w-full">
      <h1 class="text-balance text-center">Пользователи</h1>
      <Filters />
      <div class="users-list gap @950:grid-cols-[calc(50%_-_8px)_calc(50%_-_8px)] relative grid min-h-[12.5rem] grid-cols-[100%] [grid-gap:.75rem] @1200:grid-cols-[calc(33.3%_-_8px)_calc(33.3%_-_8px)_calc(33.3%_-_8px)]">
        {Static.records?.map((item: any, index: number) => {
          return (
            <div
              class="users-item relative rounded-[.6875rem] border-transparent bg-[--prestige-blue] p-0 [box-shadow:_0px_5px_44px_0px_rgba(29,_33,_45,_0.8)] @1200:p-[1.875rem]"
              init={($el: any) => {
                if (index === Static.records?.length - 1) {
                  front.func.showMore(".users-item", $el);
                }
              }}
              // init={($el: any) => {
              //   if (index === Static.records?.length - 1) {
              //     const observer = new IntersectionObserver((entries) => {
              //       entries.forEach(async entry => {
              //         if (entry.isIntersecting) {
              //           observer.unobserve($el)
              //           let res = await front.Services.functions.sendApi("/api/Users", {
              //             ...Static.makeFilter,
              //             "action": "skip",
              //             "skip": Static.records?.length,
              //           })
              //         }
              //       })
              //     })
              //     observer.observe($el)
              //   }
              // }}
            >
              <div class="card-top max-[1200px]:flex max-[1200px]:items-center max-[1200px]:rounded-[11px_11px_0_0] max-[1200px]:bg-[#3B4255] max-[1200px]:p-[.3125rem]">
                <div class="item-header h-[6.25rem] rounded-[.6875rem]">
                  <a
                    class="user-avatar relative flex h-auto w-full justify-center text-inherit no-underline"
                    onclick={async () => {
                      const getUser = {
                        action: "getInfo",
                        nickname: item?.nickname,
                        uuid: `${localStorage?.uuid}`,
                      };
                      let userContent = await front.Services.functions.sendApi(
                        "/api/Users/profile",
                        getUser,
                      );
                      //проверка на error
                      Static.contentUser = userContent?.result;
                      Fn.linkChange(`/user/${item?.nickname}`);
                    }}
                  >
                    <div class="avatar-icon relative z-[1] ml-[10px] h-[6.25rem] w-[6.25rem] min-w-[2.9375rem]">
                      <img
                        class="avatar__photo absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)-translateY(-50%)]"
                        src={
                          item.avatar?.name
                            ? `/assets/upload/avatar/${item.avatar?.name}`
                            : avatarDefault
                        }
                      />
                      <img
                        class="avatar-frame absolute left-[50%] top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
                        src={
                          item.frame?.name
                            ? `/contents/images/lenta/${item.frame?.name}`
                            : defaultGray
                        }
                      />
                      {item.status?.team ? (
                        <img
                          class="avatar-team absolute bottom-[.4375rem] right-[.4375rem] z-[2] h-[1.55rem] w-[1.55rem] rounded-[50%] bg-[--white] p-[.1875rem]"
                          src={item.status?.team ? teamLogo : null}
                        />
                      ) : (
                        <div>
                          <div class="avatar-level absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.9rem]">
                            <img class="h-full" src={leveGray} />
                            <span class="absolute left-[50%] top-[50%] text-[.75rem] font-bold tracking-[.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)] ">
                              {item.statistic.level}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </a>
                </div>
                <div class="user-name mx-0 my-[.625rem] text-center text-[clamp(1.30rem,_3vw,_1.40rem)] font-medium">
                  <span>
                    {item.nickname?.length > 15
                      ? item.nickname?.slice(0, 15) + "..."
                      : item.nickname}
                  </span>
                  <div class="user-status -webkit-box-orient: vertical mx-auto my-0 overflow-hidden text-center text-[clamp(.625rem,_2vw,_.8125rem)] text-[#bfc4ce] [-webkit-line-clamp:2]">
                    {item.information.speciality == ""
                      ? "(не указана)"
                      : item.information.speciality}
                  </div>
                </div>
              </div>
              <div class="user-badge flex items-center justify-center pt-[.9375rem]">
                {item?.awards?.slice(0, 5)?.map((award: any, key: number) => {
                  return (
                    <div class="relative mr-[.5625rem] cursor-pointer">
                      <div class="user-badge-description hover:!block top-[3.375rem} absolute left-[50%] z-[100] hidden min-h-[5rem] w-[10rem] rounded-[.4375rem] bg-[--prestige-blue] p-[.9375rem] [transform:translateX(-50%)] [border:2px_solid_#232733] [box-shadow:-1px_1px_5px_#000000]">
                        <p class="text-center mb-[.3125rem] text-[clamp(.625rem,_3vw,_.75rem)] font-bold tracking-[.0437rem] leading-[1rem]">{award?.name}</p>
                        <span>{award?.description}</span>
                      </div>
                      <img src={`contents/svg/personalAwards/${award?.icon}`} />
                    </div>
                  );
                })}
              </div>

              <div class="users__item_statistic">
                <div class="users__item_info">
                  <span>{item?.statistic?.answer}</span>
                  <span>ответов</span>
                </div>
                <div class="users__item_info">
                  <span>{item.statistic.subscribe}</span>
                  <span>подписчиков</span>
                </div>
                <div class="users__item_info">
                  <span>{item.statistic.view}</span>
                  <span>просмотров</span>
                </div>
              </div>
              <div class="users__item_buttons">
                <button class="users_btn-padding btn btn_gradient mt-10">
                  Написать
                </button>
                <button class="users_btn-padding btn btn_gradient mt-10">
                  Подписаться
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
