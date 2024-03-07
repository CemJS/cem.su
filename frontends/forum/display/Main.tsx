import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import networking from "@svg/forum/networking.svg";
import communication from "@svg/forum/communication.svg";
import innovation from "@svg/forum/innovation.svg";
import inspiration from "@svg/forum/inspiration.svg";
import education from "@svg/forum/education.svg";
import crypto_emergency from "@svg/forum/crypto_emergency.svg";
import Intro from "./Intro";
import Info from "./Info";
import Opportunities from "./Opportunities";
import Confidence from "./Confidence";
import Images from "./Images";
import Speakers from "./Speakers";
import Stend from "./Stend";
import Guests from "./Guests";
import Theme from "./Theme";
import Partners from "./Partners";
import Destination from "./Destination";

interface Course {
  _id: string;
  nameCoin: string;
  currentCourse: number;
  change: number;
}

const contentAbout = [
  {
    img: crypto_emergency,
    title: "Crypto Юг 2023",
    text: "Прекрасная возможность провести время приятно и с пользой, открыть для себя новые возможности, повысить экспертность и увеличить доход.",
  },

  {
    img: education,
    title: "Образование",
    text: "Форум предоставляет доступ к содержательным беседам, семинарам и панельным дискуссиям о последних тенденциях и разработках в индустрии криптовалют.",
  },
  {
    img: communication,
    title: "Живое общение",
    text: "Возможность в живую пообщаться с любимым экспертом или с другими участниками и профессионалами крипторынка.",
  },
  {
    img: networking,
    title: "Нетворкинг",
    text: "Еесли вы ищите перспективные проекты для поддержки или участия, наш форум предоставляет отличную возможность встретиться и пообщаться с нужными людьми.",
  },
  {
    img: innovation,
    title: "Инновации",
    text: "Ты можешь ознакомиться с передовыми технологиями и инновационными решениями, которые формируют будущее индустрии криптовалют.",
  },
  {
    img: inspiration,
    title: "Вдохновение ",
    text: "На форуме выступают дальновидные спикеры, которые могут вдохновить тебя вывести собственные идеи и проекты на новый уровень.",
  },
];

export default function () {
  return (
    <div class="after:@2000:h-[1040px] relative [background:url(/assets/dotsBg-QUB4MMMU.png)_no-repeat_top_926px_left_calc(50%_+_570px)/1200px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-full before:content-[''] before:[background:url(/assets/bgImage1-BWHMVFCJ.png)_no-repeat_top_5319px_left_0/300px_auto,_url(/assets/bgImage2-RPDKL7S4.png)_no-repeat_top_4819px_right_0/860px_auto,_url(/assets/bgImage3-CHPTAVEA.png)_no-repeat_top_9392px_right_0/300px_auto,_url(/assets/bgImage4-4GEYHI22.png)_no-repeat_bottom_0_center/101%_auto] after:absolute after:left-[50%] after:right-0 after:top-[-1.3%] after:h-[6%] after:w-full after:max-w-[120rem] after:content-[''] after:[backround-image:url()] after:[transform:translateX(-50%)] after:md:h-[8%]">
      <Intro />
      <Info />
      <div class="wrapper wrapper_padding">
        <Opportunities />
        <Confidence />
        <Images />
        <Speakers />
        <Stend />
        <Guests />
      </div>

      <Theme />

      <Partners />

      <Destination />
    </div>
  );
}
