import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/footerSocial";
import show from "@svg/icons/footerShow.svg";
import Socials from "./components/Socials";

export default function () {
  return (
    <footer
      init={($el) => {
        front.Variable.$el.footer = $el;
      }}
      class="relative z-0 mt-auto bg-[--noble_black] pb-20 pt-5 lg:pt-[4.1875rem]"
    >
      <div class="wrapper flex flex-col gap-[2.125rem] lg:gap-[4.125rem]">
        <div class="flex flex-col justify-between gap-[30px] sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {Static.footer.map((item, i) => {
            return (
              <div
                ref={`list${i}`}
                class="flex h-[1.5625rem] flex-col gap-3 overflow-hidden [transition:all_0.3s_ease-in-out] sm:!h-auto sm:gap-6 [&.active_.show]:rotate-180"
              >
                <h3
                  onclick={(e) => {
                    Ref[`list${i}`].classList.toggle("!h-28");
                    Ref[`list${i}`].classList.toggle("active");
                  }}
                  class="cursor-pointer select-none font-semibold text-[--white] sm:cursor-auto"
                >
                  {item.title}{" "}
                  <div
                    class={`show float-right h-5 w-5 [transition:all_0.2s_ease-in-out] sm:hidden`}
                  >
                    <img src={show} alt="Открыть" />
                  </div>
                </h3>
                <div class="flex flex-col gap-[0.75rem]">
                  {item.items.map((item, index) => {
                    return (
                      <li class="list-none text-[clamp(0.8rem,2vw,0.875rem)] font-light text-[--white] no-underline">
                        <a
                          class="relative block hover:!bg-clip-text hover:text-transparent hover:[background:--mainGradient]"
                          onclick={Fn.link}
                          target={
                            Static.footer[i].target
                              ? Static.footer[i].target[index]
                              : ""
                          }
                          href={Static.footer[i].href[index]}
                        >
                          <span>{item}</span>
                        </a>
                      </li>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div class="col-span-2 flex cursor-pointer flex-col gap-3 overflow-hidden [transition:all_0.3s_ease-in-out] sm:gap-[1.5rem] lg:col-span-1">
            <div class="mx-auto flex gap-3 lg:flex-col">
              <a
                class="list-none text-[clamp(0.8rem,2vw,0.875rem)] font-light text-[--white] no-underline"
                href="https://apps.apple.com/ru/app/crypto-emergency/id1635628021"
                onclick={Fn.link}
              >
                <img
                  class="w-full max-w-[12.5rem] [transition:all_0.2s_ease-in-out] lg:max-w-[9.375rem]"
                  src={appStore}
                  alt="AppStore"
                />
              </a>
              <a
                class="list-none text-[clamp(0.8rem,2vw,0.875rem)] font-light text-[--white] no-underline"
                href="https://play.google.com/store/apps/details?id=com.cryptoemergency"
                onclick={Fn.link}
              >
                <img
                  class="w-full max-w-[12.5rem] [transition:all_0.2s_ease-in-out] lg:max-w-[9.375rem]"
                  src={playMarket}
                  alt="PlayMarket"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between gap-7 py-5 [border-top:1px_solid_#353944]">
          <div class="order-1">©2020-2024 Crypto Emergency</div>
          <div class="flex flex-wrap justify-center gap-[0.9375rem]">
            {/* {socials.map((item, i) => {
              return (
                <a
                  href={!Array.isArray(item.href) ? item.href : ""}
                  onclick={(e) => {
                    if (!Array.isArray(item.href)) {
                      Fn.link(e);
                    } else {
                      e.preventDefault();
                      Ref[`lang${i}`].classList.add("opacity-100");
                      Ref[`lang${i}`].classList.add("pointer-events-auto");
                      if (!Static[`show${i}`]) {
                        Static[`show${i}`] = true;
                        setTimeout(() => {
                          Ref[`lang${i}`].classList.remove("opacity-100");
                          Ref[`lang${i}`].classList.remove(
                            "pointer-events-auto",
                          );
                          Static[`show${i}`] = false;
                        }, 1500);
                      }
                    }
                  }}
                  target={!Array.isArray(item.href) ? "_blank" : ""}
                  class="relative inline-flex h-8 w-8 items-center justify-center rounded-[--ellipse] [background:rgba(255,255,255,0.09)] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:all_0.3s_ease] hover:scale-110 hover:[background:transparent] hover:[border:0.0625rem_solid_var(--border)]"
                >
                  <img class="h-[0.7rem]" src={item.img} alt={item.alt} />
                  {Array.isArray(item.href) ? (
                    <div
                      ref={`lang${i}`}
                      class="pointer-events-none absolute left-0 top-[-5px] flex items-center justify-between gap-[0.625rem]    rounded-[--borderR] bg-[#3b2d4a] px-[0.625rem] py-[0.3125rem] opacity-0 [transition:all_0.2s_ease-in-out] [transform:translate(-30%,-100%)]"
                    >
                      {item.href.map((item) => {
                        return (
                          <a
                            href={item.href}
                            target="_blank"
                            onclick={Fn.link}
                            class="text-[--white]"
                          >
                            {item.lang}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </a>
              );
            })} */}
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
