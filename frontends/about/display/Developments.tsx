import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import logo_apple from "@images/social_networks/logo_apple.png";
import logo_android from "@images/social_networks/logo_android.png";
import cem_assist from "@images/social_networks/cem_assist.png";
import wallet_icon from "@images/social_networks/wallet_icon.png";
import crypto_emergency from "@images/social_networks/crypto_emergency.svg";

const developments = [
  {
    name: "CEM Assistant",
    logo: cem_assist,
    appStore: "https://apps.apple.com/ru/app/cem-assistant/id6448629326",
    playMarket:
      "https://play.google.com/store/apps/details?id=com.cemassistant&hl=ru",
    desc: front.Variable?.words?.developments?.assistantDesc,
  },
  {
    name: "CEM Wallet",
    logo: wallet_icon,
    appStore: "https://apps.apple.com/ru/app/cem-wallet/id1637300554",
    playMarket:
      "https://play.google.com/store/apps/details?id=com.cemwallet&hl=en&gl=US",
    desc: front.Variable?.words?.developments?.walletDesc,
  },
  {
    name: "Crypto Emergency",
    logo: crypto_emergency,
    appStore: "https://apps.apple.com/es/app/crypto-emergency/id1635628021",
    playMarket:
      "https://play.google.com/store/apps/details?id=com.cryptoemergency&hl=en&gl=US",
    desc: front.Variable?.words?.developments?.cemDesc,
  },
];

export default function () {
  return (
    <div class="flex flex-col items-center">
      <h2 class="z-[1] mx-0 my-[1.5625rem] text-balance text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        {front.Variable?.words?.chapters?.ourDevelopments}
      </h2>
      <div class="@700:grid @700:grid-cols-2 @700:[grid-template-areas:'emergency_emergency'_'assistant_wallet'] @700:gap-[1.5625rem] @1100:grid-cols-3 @1100:max-w-[68.75rem] contents">
        {developments.map((item, index) => {
          return (
            <div
              class={[
                "max-@700:m-[.625rem] relative z-[1] p-[clamp(10px,_2vw,_20px)_clamp(10px,_2vw,_20px)_0_clamp(10px,_2vw,_20px)] pb-[4.0625rem] [box-shadow:5px_10px_20px_#00000033] [transition:0.4s_ease-in-out] before:absolute before:left-0 before:top-0 before:h-full before:w-[75%] before:bg-[#ffffff33] before:[content:'']",
                `developments_item_${index + 1}`,
              ]}
            >
              <h3 class="mb-[clamp(5px,_2vw,_10px)] text-balance text-[clamp(16px,_5vw,_22px)] leading-[1.5] tracking-[.0625rem] [text-shadow:0px_0px_0_rgb(235,_235,_235),_-1px_0px_0_rgb(214,_214,_214),_-2px_0px_0_rgb(194,194,_194),_-3px_0px_2px_rgba(0,_0,_0,_0.35),_-3px_0px_1px_rgba(0,_0,_0,_0.5),_0px_0px_2px_rgba(0,_0,_0,_0.2)]">
                {item.name}
              </h3>
              <p class="mb-[clamp(5px,_2vw,_10px)] text-[clamp(14px,_2vw,_16px)] font-medium leading-[1.5] [transition:_0.8s_ease-in-out]">
                {item.desc}
              </p>
              <div class="absolute bottom-[.9375rem] flex gap-[1.5625rem]">
                <a
                  href={item.appStore}
                  onclick={this.Fn.link}
                  class="flex items-center justify-between gap-[.625rem] border-[.0625rem] border-[#ffffff] p-[.625rem]"
                >
                  <img src={logo_apple} alt="AppStore" class="w-[1.5625rem]" />
                  AppStore
                </a>
                <a
                  href={item.playMarket}
                  onclick={this.Fn.link}
                  class="flex items-center justify-between gap-[.625rem] border-[.0625rem] border-[#ffffff] p-[.625rem]"
                >
                  <img
                    src={logo_android}
                    alt="PlayMarket"
                    class="w-[1.5625rem]"
                  />
                  PlayMarket
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
