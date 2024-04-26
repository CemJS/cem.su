import { Cemjsx, Fn, front } from "cemjs-all";
import logo from "@svg/logo.svg";
import menu from "@json/menu";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

const RenderMenu = function ({ menu }) {
  return (
    <ul class="md:flex gap-x-4 items-center hidden">
      {menu.map((item: any) => {
        return (
          <li
            class="cursor-pointer"
            onclick={async () => {
              Fn.linkChange(`${item.url}`, { item: 5, test: 7, t: "hhh" });
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
    <div
      class="wrapper"
      init={($el) => {
        front.Variable.$el.header = $el;
      }}
    >
      <div class="flex items-center justify-between">
        <nav class="flex gap-x-4">
          <a
            href="/"
            onclick={Fn.link}
            class="h-16"
          >
            <img
              class="h-full"
              src={logo}
              alt="Crypto Emergency"
            />
          </a>
          <RenderMenu menu={menu} />
        </nav>

        <div class="flex items-center gap-x-4">
          <div
            class="cursor-pointer md:flex items-center gap-2 hidden"
            onclick={() => Fn.initOne("modalLanguage", { title: "Выбор основного языка" })}
          >
            <span>Русский</span>
            <i class="i i-globe-alt text-xl"></i>
          </div>

          {front.Variable.Auth ? (
            // <div
            //   class="cursor-pointer"
            //   onclick={() => {
            //     Fn.linkChange(`/user/${front.Variable.myInfo?.nickname}`)
            //   }}>
            //   Profile</div>
            <div
              // onclick={(e) => {
              //   e.stopPropagation();
              //   Fn.link(e);
              // }}
              // href={`/user/Annyshka`}
              onclick={() => {
                Fn.linkChange(`/user/${front.Variable.myInfo?.nickname}`)
              }}
              class="relative hidden lg:inline-flex h-auto w-auto ml-2 cursor-pointer"
            >
              <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] min-w-[2.9375rem]">
                <img
                  class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
                  // src={avatarDefault}
                  src={front.Variable.myInfo?.avatar}
                />
                <img
                  class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
                  src={frameDefault}
                />
                {5 < 0 ? (
                  <img
                    class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                    src={teamLogo}
                  />
                ) : (
                  <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                    <div class="relative flex h-full w-full items-center justify-center">
                      <img class="h-full" src={leveGray} />
                      <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                        12
                      </span>
                      <div
                        class={[
                          "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                          5 > 0
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
            <div class="flex items-center gap-2 cursor-pointer">
              <span onclick={() => Fn.initOne("modalAuthtorization", {})}>Вход</span>
              <button
                class="btn"
                onclick={() => Fn.initOne("modalRegistration", {})}>
                Регистрация
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
