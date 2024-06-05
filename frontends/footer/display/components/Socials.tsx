import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import discord from "@images/social_networks/discord.png";
import facebook from "@svg/social_networks/facebook.svg";
import github from "@images/social_networks/github.png";
import instagram from "@images/social_networks/instagram.png";
import linkedin from "@images/social_networks/linkedin.png";
import telegram from "@images/social_networks/telegram.png";
import tiktok from "@images/social_networks/tiktok.png";
import twitter from "@images/social_networks/twitter.png";
import vk from "@images/social_networks/vk.png";
import youtube from "@images/social_networks/youtube.png";

const socials = [
  {
    logo: instagram,
    name: "Instagram",
    url: "https://www.instagram.com/cryptoemergencyrussia/?hl=ru",
    urlENG: "https://www.instagram.com/cryptoemergency/?hl=ru",
  },
  {
    logo: telegram,
    name: "Telegram",
    url: "https://t.me/cryptoemergencychat",
    urlENG: "https://t.me/emergencycrypto",
  },

  {
    logo: youtube,
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/",
    urlENG: "https://www.youtube.com/channel/UCdDWOveIuvqkyusDK1gv4ig/",
  },
  {
    logo: tiktok,
    name: "Tiktok",
    url: "https://www.tiktok.com/@cryptoemergencyrussia",
    urlENG: "https://www.tiktok.com/@cryptoemergency",
  },
  {
    logo: vk,
    name: "Vkontakte",
    url: "https://vk.com/cryptoemergency",
  },
  {
    logo: linkedin,
    name: "Linkedin",
    url: "https://www.linkedin.com/company/86302977",
  },
  {
    logo: twitter,
    name: "Twitter",
    url: "https://twitter.com/cryptoemergency",
  },
  {
    logo: discord,
    name: "Discord",
    url: "https://discord.com/invite/Qdm7W8DjYc",
  },
  {
    logo: github,
    name: "Github",
    url: "https://github.com/CryptoEmergency",
  },
];

Static.activeState = false;
Static.indx = -1;
const sand = (e: any) => {
  // e.target.classList.toggle("active");
};
export default function () {
  return (
    <div class="flex flex-col items-center justify-center px-[.625rem] py-0">
      <ul class="flex list-none flex-wrap items-center justify-center gap-[.3125rem] p-0 @550:flex @550:gap-[.9375rem]">
        {socials.map((item, index) => {
          return (
            <li class="group z-[1] hover:z-[5]">
              {item.urlENG ? (
                <div
                  class={[
                    "relative inline-block h-[3rem] w-[3rem] cursor-pointer rounded-[50%] bg-[#3b2d4a] bg-[center] bg-no-repeat p-[0.125rem] text-[#000] decoration-[none] shadow-[0_0.25rem_0.25rem_#0000004d] outline-[0_solid] [transition:all_0.3s_ease-out] before:absolute before:bottom-[-100%] before:left-[50%] before:whitespace-nowrap before:rounded-[2rem] before:bg-[#3b2d4a] before:text-[0.8rem] before:text-[white] before:opacity-0 before:shadow-[0_0.5em_0.5em_#00000066] before:!content-[attr(aria-label)] before:[padding:0.5em_0.7em_0.4em] before:[transform:translate(-50%,_-180%)_scale(0.7)] before:[transition:0.3s] group-hover:bg-[currentColor] group-hover:shadow-[0_0.5em_0.5em_#00000066] group-hover:outline-[0_solid] group-hover:[transform:scale(1.12)] group-hover:before:opacity-[1] group-hover:before:[transform:translate(-50%,_-70%)_scale(1)]",
                    item.name === "Instagram"
                      ? "text-[#ff007a]"
                      : item.name === "Youtube"
                        ? "text-[#c00]"
                        : item.name === "Telegram"
                          ? "text-[#27a0d9]"
                          : "",
                  ]}
                  style={`background-image: url(${item.logo});`}
                  aria-label={item.name}
                  onclick={(e: any) => {
                    Static.activeState = true;
                    Static.indx = index;
                    setTimeout(() => {
                      Static.activeState = false;
                      Static.indx = -1;
                    }, 1500);
                  }}
                >
                  <span class="hidden">{item.name}</span>
                  <div
                    class={[
                      "group absolute left-0 top-[-.3125rem] flex items-center justify-between gap-[.625rem] rounded-[1rem] bg-[#3b2d4a] px-[.625rem] py-[.3125rem] [transform:translate(-20%,_-100%)] [transition:all_0.2s_ease-in-out]",
                      Static.activeState && Static.indx === index
                        ? "opacity-1 pointer-events-auto"
                        : "pointer-events-none opacity-0",
                    ]}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      // onclick={sand}
                      class="text-[#ffffff]"
                    >
                      RU
                    </a>
                    <a
                      href={item.urlENG}
                      target="_blank"
                      // onclick={sand}
                      class="text-[#ffffff]"
                    >
                      EN
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  href={item.url}
                  class={[
                    "relative inline-block h-[3rem] w-[3rem] cursor-pointer rounded-[50%] bg-[#3b2d4a] bg-[center] bg-no-repeat p-[0.125rem] text-[#000] decoration-[none] shadow-[0_0.25rem_0.25rem_#0000004d] outline-[0_solid] [transition:all_0.3s_ease-out] before:absolute before:bottom-[-100%] before:left-[50%] before:whitespace-nowrap before:rounded-[2rem] before:bg-[#3b2d4a] before:text-[0.8rem] before:text-[white] before:opacity-0 before:shadow-[0_0.5em_0.5em_#00000066] before:!content-[attr(aria-label)] before:[padding:0.5em_0.7em_0.4em] before:[transform:translate(-50%,_-180%)_scale(0.7)] before:[transition:0.3s] group-hover:bg-[currentColor] group-hover:shadow-[0_0.5em_0.5em_#00000066] group-hover:outline-[0_solid] group-hover:[transform:scale(1.12)] group-hover:before:opacity-[1] group-hover:before:[transform:translate(-50%,_-70%)_scale(1)]",
                    item.name === "Vkontakte"
                      ? "text-[#4c75a3]"
                      : item.name === "Linkedin"
                        ? "text-[#00388d]"
                        : item.name === "Twitter"
                          ? "text-[#37a7df]"
                          : item.name === "Discord"
                            ? "text-[#5865f2]"
                            : item.name === "Github"
                              ? "text-[#4a2779]"
                              : "",
                  ]}
                  style={`background-image: url(${item.logo});`}
                  aria-label={item.name}
                  onclick={Fn.link}
                >
                  <span hidden>{item.name}</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
