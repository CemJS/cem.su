import { Cemjsx, Fn, front, Func, Events, Static } from "cemjs-all";
import logo from "@svg/logo.svg";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

const RenderMenu = function ({ menu }) {
  return (
    <ul class="hidden items-center gap-x-4 md:flex">
      {menu.map((item: any) => {
        return (
          <li
            class="cursor-pointer whitespace-nowrap"
            onclick={async () => {
              Fn.linkChange(`${item.url}`);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default function () {
  return (
    <div class="wrapper">
      <div class="flex items-center justify-between">
        <nav class="flex gap-x-4">
          <a href="/" onclick={Fn.link} class="h-12 sm:h-16">
            <img class="h-full" src={logo} alt="Crypto Emergency" />
          </a>
          <RenderMenu menu={Static.menu} />
        </nav>

        <div class="flex items-center gap-x-4">
          <div
            class="btn btn_dark hidden sm:flex"
            onclick={() =>
              Fn.initOne("modalLanguage", {
                title: front.Variable.words?.language,
                callback: (item) => {
                  localStorage.setItem("lang", item.code);
                  localStorage.setItem("origLang", item.origName);
                  front.Variable.languageCode = item.code;
                  front.Variable.Lang = item.origName;
                },
              })
            }
          >
            <i class="i i-globe-alt text-xl"></i>
            <span>
              {front.Variable.lang
                ? front.Variable.lang
                : front.Variable.words?.language}
            </span>
            <i class="i i-chevron-right text-xl"></i>
          </div>

          {front.Variable?.myInfo?.auth ? (
            <div class="relative ml-2 inline-flex h-auto w-auto cursor-pointer">
              <div
                class="mr-2 flex items-center justify-center"
                onclick={() => Fn.initOne("modalNotifications", {})}
              >
                <i class="i i-bell-alert text-2xl"></i>
              </div>
              <div
                class="relative mr-2 flex items-center justify-center"
                onclick={() => Fn.initOne("modalNotificationsNew", {})}
              >
                <i class="i i-bell text-2xl"></i>
                <div class="absolute right-[-6px] top-[4px] flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-solid border-[#363C50] bg-[#1d2029] shadow">
                  <span class="text-[10px]">
                    {front.Variable.myInfo?.statistics?.level}
                  </span>
                </div>
              </div>
              <div
                class="relative z-[1] h-[3.5rem] w-[3.1875rem] min-w-[2.9375rem]"
                onclick={() => {
                  Func.showUser(
                    `users/${front.Variable.myInfo?.nickname}/profile`,
                    `/user/${front.Variable.myInfo?.nickname}`,
                  );
                }}
              >
                <img
                  class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
                  src={
                    front.Variable.myInfo?.avatar?.name
                      ? `/assets/upload/avatar/${front.Variable.myInfo?.avatar?.name}`
                      : avatarDefault
                  }
                />
                <img
                  class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
                  src={
                    front.Variable.myInfo?.frame?.name
                      ? `/contents/images/lenta/${front.Variable.myInfo?.frame?.name}`
                      : frameDefault
                  }
                />
                {front.Variable.myInfo?.status?.team ? (
                  <img
                    class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                    src={front.Variable.myInfo?.status?.team ? teamLogo : null}
                  />
                ) : (
                  <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                    <div class="relative flex h-full w-full items-center justify-center">
                      <img class="h-full" src={leveGray} />
                      <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                        {front.Variable.myInfo?.statistic?.level}
                      </span>
                      <div
                        class={[
                          "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                          front.Variable.myInfo?.online
                            ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                            : null,
                        ]}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div class="flex cursor-pointer items-center gap-2">
              <span onclick={() => Fn.initOne("modalAuthtorization", {})}>
                {front.Variable.words?.input}
              </span>
              <button
                class="btn"
                onclick={() => Fn.initOne("modalRegistration", {})}
              >
                {front.Variable.words?.registration}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
