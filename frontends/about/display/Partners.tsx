import { Cemjsx, Static, front } from "cemjs-all";
import b4 from "@images/partners/b4.png";
import bein from "@images/partners/bein.png";
import crypto from "@images/partners/crypto.png";
import cryptomania from "@images/partners/cryptomania.png";
import cryptosummit from "@images/partners/cryptosummit.png";
import digitit from "@images/partners/digitit.png";
import life from "@images/partners/life.png";
import plus from "@images/partners/plus.png";
import sber from "@images/partners/sber.png";
import sk from "@images/partners/sk.png";
import tech from "@images/partners/tech.png";
import mining from "@images/partners/mining.png";

const partners = [
  {
    logo: b4,
  },
  {
    logo: bein,
  },
  {
    logo: crypto,
  },
  {
    logo: cryptomania,
  },
  {
    logo: cryptosummit,
  },
  {
    logo: mining,
  },
  {
    logo: digitit,
  },
  {
    logo: life,
  },
  {
    logo: plus,
  },
  {
    logo: sber,
  },
  {
    logo: sk,
  },
  {
    logo: tech,
  },
];

Static.startPartners = partners.slice(0, partners.length / 2);
Static.endPartners = partners.slice(partners.length / 2);

export default function () {
  return (
    <div class="partners">
      <h2 class="z-[10] mx-0 text-balance py-[1.5625rem] text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        {front.Variable?.words?.chapters?.infoPartners}
      </h2>
      <div
        class="relative z-[1] mx-auto my-0 w-screen overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:h-full before:w-[5rem] before:bg-[linear-gradient(to_right,_var(--back-color)_0%,_transparent_100%)] before:content-[''] before:@600:w-[10rem] @1240:w-[1240px]"
        ref="marqueeStart"
      >
        <ul
          class="mx-0 my-[.4375rem] flex h-full list-none gap-[.625rem] [animation:scrolling_40s_linear_infinite_normal_none_running] hover:[animation-play-state:_paused]"
          ref="marqueeContentStart"
        >
          {Static.startPartners?.map((item: any) => {
            return (
              <li class="z-[1] flex w-[calc(100vw_/_3)] flex-shrink-[0] items-center justify-center whitespace-nowrap rounded-[1rem] bg-[#ffffff17] p-[.9375rem] text-[clamp(0.9rem,_3vw,_1.3rem)] font-semibold uppercase [transition:0.3s_ease-in-out] hover:border-[#ffffff17] hover:bg-transparent hover:[transform:scale(0.98)] @700:w-[calc(100vw_/_4)] @1240:w-[calc(100vw_/_6)]">
                <img
                  class="m-[.9375rem] w-full object-contain"
                  src={item.logo}
                  alt={front.Variable?.words?.user?.partner}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        class="@1100: relative z-[1] mx-auto my-0 w-screen overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:h-full before:w-[5rem] before:bg-[linear-gradient(to_right,_var(--back-color)_0%,_transparent_100%)] before:content-[''] before:@600:w-[10rem] @1240:w-[1240px]"
        ref="marqueeEnd"
      >
        <ul
          class="mx-0 my-[.4375rem] flex h-full list-none gap-[.625rem] pt-[.625rem] [animation:scrolling_45s_linear_infinite_reverse] hover:[animation-play-state:_paused]"
          ref="marqueeContentEnd"
        >
          {Static.endPartners?.map((item: any) => {
            return (
              <li class="z-[1] flex w-[calc(100vw_/_3)] flex-shrink-[0] items-center justify-center whitespace-nowrap rounded-[1rem] bg-[#ffffff17] p-[.9375rem] text-[clamp(0.9rem,_3vw,_1.3rem)] font-semibold uppercase [transition:0.3s_ease-in-out] hover:border-[#ffffff17] hover:bg-transparent hover:[transform:scale(0.98)] @700:w-[calc(100vw_/_4)] @1240:w-[calc(100vw_/_6)]">
                <img
                  class="m-[.9375rem] w-full object-contain"
                  src={item.logo}
                  alt={front.Variable?.words?.user?.partner}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
