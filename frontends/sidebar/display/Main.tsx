import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/socials";

const RenderSidebarMenu = function ({ menu }) {
  return (
    <div>
      {menu.map((item) => {
        return (
          <div class="relative cursor-pointer transition-all">
            <span
              class="font-medium text-slate-300 text-lg no-underline p-4 flex items-center gap-4 transition-all cursor-pointer hover:bg-[#1d2029] hover:text-white"
              onclick={() => {
                Func.close()
                Fn.linkChange(`${item.link}`);
              }}
            >
              <i class={["i", `i-${item.icon}`, 'text-2xl']}></i>
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
    <div>
      {submenu.map((item) => {
        return (
          <div
            class="relative cursor-pointer transition-all"
            onclick={() => {
              item.opened = !item.opened
            }}
          >
            <div
              class="font-medium text-slate-300 text-lg no-underline p-4 flex items-center gap-4 transition-all cursor-pointer hover:bg-[#1d2029] hover:text-white"
            >
              {
                item.icon ?
                  <i class={["i", `i-${item.icon}`]}></i> :
                  <i class={["i", 'transition-all', "i-chevron-down", 'text-2xl', item.opened ? "rotate-180" : null]}></i>
              }
              {item.name}
            </div>
            <div
              class={["bg-[#303545] overflow-hidden transition-[max-height_0.3s_ease-in-out;]", item.opened ? "max-h-[500px]" : "max-h-0"]}
            >
              {item.options.map((element) => {
                return (
                  element.target ?
                    <div>
                      <a
                        class="font-medium text-slate-300 flex items-center transition-all gap-4 cursor-pointer p-4 pl-10 text-base hover:bg-[#1d2029] hover:text-white"
                        href={element.link}
                        target="_blank"
                      >
                        {element.name}
                      </a>
                    </div> :
                    <div>
                      <span
                        class="font-medium text-slate-300 flex items-center transition-all gap-4 cursor-pointer p-4 pl-10 text-base hover:bg-[#1d2029] hover:text-white"
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
    <div class="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr));] gap-2 mx-8 mt-4">
      {socials.map((item) => {
        return (
          <div>
            <a
              class="rounded-full w-12 h-12 bg-[#3B2D4A] shadow-[0_0.25em_0.25em_rgba(0,0,0,0.3);] flex items-center justify-center text-white"
              href={item.url}
              target="_blank"
            >
              <i class={["i", `i-${item.icon}`, 'text-2xl']}></i>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default function () {
  return (
    <main class="relative overflow-hidden">
      <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-solid border-[#363C50]">
        Разделы
      </span>
      <RenderSidebarMenu menu={Static.sections} />
      {front.Variable.Auth ?
        <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#363C50]">
          Меню
        </span>
        : null}
      {front.Variable.Auth ? <RenderSidebarMenu menu={Static.menu} /> : null}

      <span
        class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#363C50]"
      >
        Crypto Emergency
      </span>
      <RenderSidebarSubmenu submenu={Static.submenu} />
      <span class="font-semibold text-lg p-4 w-full block bg-[#1d2029] border-b-[1px] border-t-[1px] border-solid border-[#363C50]">
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
