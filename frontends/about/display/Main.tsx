import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import Preview from "./Preview";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Faq from "./Faq";
import Goals from "./Goals";

import ecosystem from "@images/about/main/ecosystem.jpg";
import blockchain from "@images/about/main/blockchain.jpg";
import trading from "@images/about/main/trading.jpg";
import coin from "@images/about/main/cem.jpg";
import Partners from "./Partners";
import Socials from "./Socials";
import Developments from "./Developments";
import PreviewStandart from "./PreviewStandart";

const aboutSlides: any = [
  {
    cover: trading,
    name: front.Variable.words?.chapters?.career,
    desc: "Объединяя криптоэнтузиастов с профессионалами крипторынка, участников коммьюнити с проектами и стартапами, мы стремимся чтобы каждый пользователь экосистемы Crypto Emergency нашел свой выигрыш - мы реализовываем модель WIN/WIN. Соединение соискателей с работодателями, проекты с фрилансерами - это одна из стратегий этой модели. Мы поможем людям со всего мира найти работу в сфере криптоиндустрии и IT.",
    link: "/vacancies",
  },
  {
    cover: ecosystem,
    name: "Экосистема Crypto Emergency",
    desc: "Создаём надёжную и удобную цифровую экосистему, включающую в себя собственный блокчейн со смарт-контрактами, некастодиальным криптокошельком и разносторонней поддержкой стартапов криптоиндустрии, универсальную социальную сеть, поддерживающую все виды контента (текст, аудио, видео), информационно-образовательный портал, повышающий цифровую криптограмотность населения планеты,автоматизированную платформу для размещения вакансий и резюме.",
  },
  {
    cover: coin,
    name: "Социальная сеть Crypto Emergency",
    desc: "Первая в мире специализированная социальная сеть для взаимодействия всех участников международного крипто-рынка. На данный момент платформа поддерживает 60 языков, что дает практически безграничные возможности общения, поиска и размещения материалов. Социальная сеть Crypto Emergency поддерживает токенизированную модель Create-2-Earn (Создавай и зарабатывай). Полезные действия на платформе, а также создание контента будут вознаграждаются внутренними баллами платформы.",
  },
  {
    cover: blockchain,
    name: "Blockchain CEM",
    desc: "Блокчейн CEM - общедоступная блокчейн-платформа с открытым кодом, официально зарегистрированная на chainlist.org под номером 193. Один из надёжных алгоритмов подтверждения блоков- Proof of Authority. Высокая скорость подтверждения транзакций- 3 секунды. Одна из минимальных комиссий за газ. Лёгкий и удобный выпуск смарт-контрактов. Возможность выпуска NFT токенов. Простая интеграция с большинством популярных кошельков, в том числе Metamask, Trust Wallet, и собственный кошелёк CEM Wallet. ",
    link: "https://cemblockchain.com/",
  },
  {
    cover: ecosystem,
    name: "NFT на блокчейне",
    desc: "Творческие личности, наши коллаборации с онлайн-галереями искусства, а также собственное видение команды CryptoEmergency на использование NFT-токенов в реальных областях экономики и в цифровом мире позволят привнести на этот развивающийся рынок новые степени свободы и реализации. Публикация NFT-коллекций (NFT-маркет) и размещение на нашей платформе NFT-проектов будет реализовано в ближайшее время",
    link: "https://cemnft.com/",
  },
  {
    cover: blockchain,
    name: "Криптоуниверситет",
    desc: "Одной из наших миссий мы видим повышение крипто, цифровой и финансовой грамотности населения планеты. Создание этого раздела - приоритетная задача для нашей команды. В нашем университете каждый сможет получить знания - от самых простых до узкоспециализированных, одни повысят безопасность своих средств, другие - откроют для себя новые горизонты карьерного роста и развития. Мы планируем реализовать различные форматы обучения - от классических (видео-ролики, лонгриды) до онлайн-лекций в метавселенной.",
  },
];

const titleOptions = {
  name: "TitlePreview",
  mainClass: "about_main",
};

export default function () {
  return (
    <div class="relative overflow-hidden bg-[#232733]">
      <PreviewStandart />
      {/* <Preview
        items={aboutSlides}
        options={titleOptions}/> */}
      <div class="wrapper !max-w-[78rem] z-[100]">
        <Goals />
        <Faq />
        <Team />
        <RoadMap />
        <Partners />
        <Developments />
        <Socials />
      </div>
    </div>
  );
}
