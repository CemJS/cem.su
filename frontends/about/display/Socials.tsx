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

const sand = (e: any) => {
  e.target.classList.toggle("active");
};
export default function () {
  return (
    <div class="mb-[3.75rem] flex flex-col items-center justify-center px-[.625rem] py-0">
      <h2 class="z-[1] mx-0 my-[1.5625rem] text-balance text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        Социальные сети
      </h2>
      <ul class="grid list-none grid-cols-5 gap-[.3125rem] p-0 @550:flex @550:gap-[.9375rem]">
        {socials.map((item) => {
          return (
            <li class="z-[1] mb-[1.5625rem]">
              {item.urlENG ? (
                <div
                  class={[
                    "socials_link",
                    `socials_link_${item.name.toLocaleLowerCase()}`,
                  ]}
                  style={`background-image: url(${item.logo});`}
                  aria-label={item.name}
                  onclick={(e: any) => {
                    e.target.classList.toggle("active");
                    setTimeout(() => {
                      e.target.classList.toggle("active");
                    }, 1500);
                  }}
                >
                  <span>{item.name}</span>
                  <div class="socials_link_languages">
                    <a
                      href={item.url}
                      target="_blank"
                      onclick={sand}
                      class="socials_link_language"
                    >
                      RU
                    </a>
                    <a
                      href={item.urlENG}
                      target="_blank"
                      onclick={sand}
                      class="socials_link_language"
                    >
                      EN
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  href={item.url}
                  class={[
                    "socials_link",
                    `socials_link_${item.name.toLocaleLowerCase()}`,
                  ]}
                  style={`background-image: url(${item.logo});`}
                  aria-label={item.name}
                  onclick={Fn.link}
                >
                  <span>{item.name}</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <div class="max-w-[56.25rem]">
        <p class="z-[1] text-[clamp(.875rem,2vw,1rem)] italic font-medium pb-[1.5625rem] leading-[1.5] text-justify m-0">
          Присоединяйтесь к нашей уникальной социальной сети CryptoEmergency и
          получите доступ к самой актуальной информации о криптовалютах и
          блокчейне. Скачайте наше приложение и станьте частью нашей экосистемы.
          У нас вы сможете общаться с единомышленниками, делиться своими идеями
          и получать ценные советы от опытных трейдеров и инвесторов.
          Присоединяйтесь к нам прямо сейчас и не упустите возможность быть в
          курсе последних новостей и трендов в мире криптовалют. Скачайте
          приложение CryptoEmergency и станьте частью нашей успешной и
          инновационной экосистемы уже сегодня!
        </p>
      </div>
    </div>
  );
}
