import { Cemjsx, Static, Ref, Fn } from "cemjs-all";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/socials";

const RenderSidebarMenu = function ({ menu }) {
  return (
    <div class="sidebar-menu">
      {menu.map((item) => {
        return (
          <div class="sidebar-menu__item">
            <a href={item.link}>
              <i class={["i", `i-${item.icon}`]}></i>
              {item.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const RenderSidebarSubmenu = function ({ submenu }) {
  return (
    <div class="sidebar-menu">
      {submenu.map((item) => {
        return (
          <div
            class="sidebar-menu__item"
            onclick={(e: any) => {
              e.currentTarget.classList.toggle("sidebar-menu__item_active");
            }}
          >
            <div class="sidebar-menu__item-btn">
              <i class={["i", `i-${item.icon}`]}></i>
              {item.name}
              <i class="i i-arrow-down1 i_dropdown"></i>
            </div>
            <div class="sidebar-submenu">
              {item.options.map((element) => {
                return (
                  <div class="sidebar-submenu__item">
                    <a
                      href={element.link}
                      onclick={Fn.link}
                    >
                      {element.name}
                    </a>
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
              onclick={Fn.link}
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
      <span class="sidebar-subtitle">Разделы</span>
      <RenderSidebarMenu menu={Static.sections} />
      <span class="sidebar-subtitle">Меню</span>
      <RenderSidebarMenu menu={Static.menu} />
      <span class="sidebar-subtitle">Crypto Emergency</span>
      <RenderSidebarSubmenu submenu={Static.submenu} />
      <span class="sidebar-subtitle">Социальные сети</span>
      <div class="sidebar-downloads">
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
      <p class="sidebar-footer">©2020-2024 Crypto Emergency</p>
    </main>
  );
}
