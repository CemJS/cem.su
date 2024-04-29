import { Cemjsx, Fn, Func, Static } from "cemjs-all";
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
export default function () {
  return (
    <div class="mb-[1.25rem] max-w-[25rem] rounded-[.9375rem] bg-[--black-gray] p-[1.25rem] [border:1px_solid_#353c50]">
      <ul class="grid list-none grid-cols-5 gap-[.3125rem] p-0 @550:gap-[.9375rem]">
        {socials.map((item, index) => {
          return (
            <li class="group z-[1] mb-[.7813rem] mt-[.7813rem]">
     
                <div
                  class={[
                    "relative my-[10px] inline-block h-[3rem] w-[3rem] cursor-pointer rounded-[50%] bg-[#3b2d4a] bg-[center] bg-no-repeat p-[0.125rem] text-[#000] decoration-[none] shadow-[0_0.25rem_0.25rem_#0000004d] outline-[0_solid] [transition:all_0.3s_ease-out] before:absolute before:bottom-[-100%] before:left-[50%] before:whitespace-nowrap before:rounded-[2rem] before:bg-[#3b2d4a] before:text-[0.8rem] before:text-[white] before:opacity-0 before:shadow-[0_0.5em_0.5em_#00000066] before:!content-[attr(aria-label)] before:[padding:0.5em_0.7em_0.4em] before:[transform:translate(-50%,_-180%)_scale(0.7)] before:[transition:0.3s] group-hover:bg-[currentColor] group-hover:shadow-[0_0.5em_0.5em_#00000066] group-hover:outline-[0_solid] group-hover:[transform:scale(1.12)] group-hover:before:opacity-[1] group-hover:before:[transform:translate(-50%,_-70%)_scale(1)]",
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
                </div>
           
            </li>
          );
        })}
      </ul>
    </div>
  );
}
