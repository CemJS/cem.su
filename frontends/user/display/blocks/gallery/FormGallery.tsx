import { Cemjsx, Fn, Func, front, Static } from "cemjs-all";
import discord from "@images/social_networks/discord.png";
import facebook from "@images/social_networks/facebook.png";
import github from "@images/social_networks/github.png";
import twitch32 from "@images/social_networks/twitch32.png";
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
    url: "https://www.instagram.com/",
  },
  {
    logo: telegram,
    name: "Telegram",
    url: "https://t.me/",
  },

  {
    logo: youtube,
    name: "Youtube",
    url: "https://www.youtube.com/",
  },
  {
    logo: twitch32,
    name: "Twitch",
    url: "https://www.twitch.tv/",
  },

  {
    logo: facebook,
    name: "Facebook",
    url: "http://facebook.com/",
  },
  {
    logo: tiktok,
    name: "Tiktok",
    url: "https://www.tiktok.com/",
  },
  {
    logo: vk,
    name: "Vkontakte",
    url: "https://vk.com/",
  },
  {
    logo: linkedin,
    name: "Linkedin",
    url: "https://www.linkedin.com/",
  },
  {
    logo: twitter,
    name: "Twitter",
    url: "https://twitter.com/",
  },
  {
    logo: discord,
    name: "Discord",
    url: "https://discord.com/",
  },
  {
    logo: github,
    name: "Github",
    url: "https://github.com/",
  },
];

Static.activeState = false;
Static.indx = -1;
let data = {
  url: "",
  name: "",
  description: "",
  channel: "",
};

async function addSocial() {
  Static.record?.socials?.push(data);
  let res = await Func.sendAuth(`/api/users/update`, {
    social: Static.record?.socials,
  });
  if (res?.status === 200) {
    data = {
      url: "",
      name: "",
      description: "",
      channel: "",
    };
    Fn.init();
    Static.showForm = false;
  }
}

export default function () {
  return (
    <div class="mb-[1.25rem] max-w-[25rem] rounded-[.9375rem] bg-[--black-gray] p-[1.25rem] [border:1px_solid_#353c50]">
      <ul class="flex w-full flex-wrap justify-center [grid-gap:10px]">
        {socials.map((item, index) => {
          return (
            <li class="group z-[1]">
              <div
                class={[
                  "relative my-[10px] inline-block h-[2.8rem] w-[2.8rem] cursor-pointer rounded-[50%] bg-[#3b2d4a] bg-[center] bg-no-repeat p-[0.125rem] text-[#000] decoration-[none] shadow-[0_0.25rem_0.25rem_#0000004d] outline-[0_solid] [transition:all_0.3s_ease-out] before:absolute before:bottom-[-100%] before:left-[50%] before:whitespace-nowrap before:rounded-[2rem] before:bg-[#3b2d4a] before:text-[0.8rem] before:text-[white] before:opacity-0 before:shadow-[0_0.5em_0.5em_#00000066] before:!content-[attr(aria-label)] before:[padding:0.2em_0.5em_0.3em] before:[transform:translate(-50%,_-180%)_scale(0.7)] before:[transition:0.3s] group-hover:bg-[currentColor] group-hover:shadow-[0_0.5em_0.5em_#00000066] group-hover:outline-[0_solid] group-hover:[transform:scale(1.12)] group-hover:before:opacity-[1] group-hover:before:[transform:translate(-50%,_-70%)_scale(1)]",
                  item.name === "Vkontakte"
                    ? "text-[#4c75a3]"
                    : item.name === "Linkedin" || item.name === "Facebook"
                      ? "text-[#00388d]"
                      : item.name === "Twitter" || item.name === "Telegram"
                        ? "text-[#37a7df]"
                        : item.name === "Discord"
                          ? "text-[#5865f2]"
                          : item.name === "Github"
                            ? "text-[black]"
                            : item.name === "Twitch"
                              ? "text-[#4a2779]"
                              : item.name === "Youtube"
                                ? "text-[#f70100]"
                                : item.name === "Instagram"
                                  ? "text-[#f8468d]"
                                  : "",
                ]}
                style={
                  item.name === "Twitch"
                    ? `background-image: url(${item.logo}); background-size:23px`
                    : `background-image: url(${item.logo})`
                }
                aria-label={item.name}
                onclick={() => {
                  data.url = item.url;
                  data.channel = item.name.toLocaleLowerCase();
                  Fn.init();
                }}
              ></div>
            </li>
          );
        })}
      </ul>
      <div class="mx-0 my-[.9375rem]">
        <input
          class="mb-[.625rem] h-[2.5rem] w-full rounded-[.625rem] bg-[#313543] pl-[.625rem] text-[#F9F8F8] [border:1px_solid_#44495c] [outline:none]"
          value={data?.url}
          // disabled={!data?.url} блокировка если нет url, чтобы руками не писали всякую дичь
          placeholder="Выберите соц сеть"
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            data.url = target.value;
            Fn.init();
          }}
        />
        <input
          class="mb-[.625rem] h-[2.5rem] w-full rounded-[.625rem] bg-[#313543] pl-[.625rem] text-[#F9F8F8] [border:1px_solid_#44495c] [outline:none]"
          value={data?.name}
          placeholder="Введите название"
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            data.name = target.value;
            Fn.init();
          }}
        />
        <input
          class="mb-[.625rem] h-[2.5rem] w-full rounded-[.625rem] bg-[#313543] pl-[.625rem] text-[#F9F8F8] [border:1px_solid_#44495c] [outline:none]"
          value={data?.description}
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            data.description = target.value;
            Fn.init();
          }}
          placeholder="Краткое описание"
        />
      </div>
      <button
        disabled={data?.url === "" || data?.name === "" ? true : false}
        onclick={front.Services.functions.throttle(addSocial, 2000)}
        class={[
          "relative z-[1] mr-0 flex h-[3.125rem] w-full flex-grow-[1] items-center justify-center overflow-hidden rounded-[.375rem] px-[1.25rem] py-0 text-center text-[.875rem] font-semibold uppercase leading-[110%] tracking-[1px] text-[--white] no-underline after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.125rem] after:w-[93.75rem] after:translate-x-[-5rem] after:content-['']  ",
          data?.url === "" || data?.name === ""
            ? "after:[background:linear-gradient(45deg,_#d3d3d3_0%,_#9e9e9e_45%,_#898989_57%,_#272727_70%)]"
            : "after:[background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] after:[transition:transform_400ms_ease-in] hover:after:translate-x-[.3125rem]",
        ]}
      >
        Добавить
      </button>
    </div>
  );
}
