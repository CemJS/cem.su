import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/socials";

const RenderSidebarMenu = function ({ menu }) {
  return (
    <div
      // class="sidebar-menu"
      class="w-full"
    >
      {menu.map((item) => {
        return (
          <div
            // class="sidebar-menu__item"
            class="relative cursor-pointer transition-all"
          >
            <span
              class="font-medium text-slate-300 text-lg no-underline p-4 flex items-center gap-4 transition-all cursor-pointer hover:bg-[#1d2029] hover:text-white"
              onclick={() => {
                Func.close()
                Fn.linkChange(`${item.link}`);
              }}
            >
              <i class={["i", `i-${item.icon}`]}></i>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const RenderSidebarSubmenu = function ({ submenu }) {
  return (
    <div
      // class="sidebar-menu"
      class="w-full"
    >
      {submenu.map((item) => {
        return (
          <div
            // class="sidebar-menu__item"
            class="font-medium text-slate-300 text-lg no-underline p-4 flex items-center gap-4 transition-all cursor-pointer hover:bg-[#1d2029] hover:text-white"
            onclick={(e: any) => {
              e.currentTarget.classList.toggle("bg-[#1d2029]", "hover:text-white");
            }}
          >
            <div class="sidebar-menu__item-btn">
              {
                item.icon ?
                  <i class={["i", `i-${item.icon}`]}></i> :
                  <i class={["i", "i-chevron-down"]}></i>
              }
              {item.name}
              {/* <i class="i i-chevron-down"></i> */}
            </div>
            <div class="sidebar-submenu">
              {item.options.map((element) => {
                return (
                  element.target ?
                    <div class="sidebar-submenu__item">
                      <a
                        href={element.link}
                        target="_blank"
                      >
                        {element.name}
                      </a>
                    </div> :
                    <div class="sidebar-submenu__item">
                      <span
                        onclick={() => {
                          Func.close()
                          Fn.linkChange(`${element.link}`);
                        }}
                      >
                        {element.name}
                      </span>
                    </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const RenderSocials = function ({ socials }) {
  return (
    <div class="sidebar-socials">
      {socials.map((item) => {
        return (
          <div>
            <a
              class="sidebar-socials__item"
              href={item.url}
              target="_blank"
            >
              <i class={["i", `i-${item.icon}`]}></i>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default function () {
  return (
    <main class="sidebar-content">
      <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#434954]">
        Разделы
      </span>
      <RenderSidebarMenu menu={Static.sections} />
      {front.Variable.Auth ?
        <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#434954]">
          Меню
        </span>
        : null}
      {front.Variable.Auth ? <RenderSidebarMenu menu={Static.menu} /> : null}

      <span
        class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#434954]"
      >
        Crypto Emergency
      </span>
      <RenderSidebarSubmenu submenu={Static.submenu} />
      <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#434954]">
        Социальные сети
      </span>
      <div
        // class="sidebar-downloads"
        class="grid grid-cols-2 p-4 pb-0 gap-2"
      >
        <a
          href="https://apps.apple.com/ru/app/crypto-emergency/id1635628021"
          onclick={Fn.link}
        >
          <img
            src={appStore}
            alt="AppStore"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.cryptoemergency"
          onclick={Fn.link}
        >
          <img
            src={playMarket}
            alt="PlayMarket"
          />
        </a>
      </div>
      <RenderSocials socials={socials} />
      <p class="text-center p-4 text-slate-300">{`©2020-${Static.currentYear} Crypto Emergency`}</p>
    </main>
  );
}
