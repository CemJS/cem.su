import { Cemjsx, Ref, Static } from "cemjs-all";
// import back from "@svg/icon/prev.svg";
// import next from "@svg/icon/next.svg";
// import up_arrow from "@svg/courseLine/up_arrow.svg";
// import networking from "@svg/forum/networking.svg";
// import communication from "@svg/forum/communication.svg";
// import innovation from "@svg/forum/innovation.svg";
// import inspiration from "@svg/forum/inspiration.svg";
// import education from "@svg/forum/education.svg";
// import crypto_emergency from "@svg/forum/crypto_emergency.svg";

// import bg4 from "@images/forum/bg4.png";
// import speaker1 from "@images/forum/speakers/speaker1.jpg";
// import speaker2 from "@images/forum/speakers/speaker2.jpg";
// import speaker3 from "@images/forum/speakers/speaker3.jpg";
// import speaker4 from "@images/forum/speakers/speaker4.jpg";
// import speaker5 from "@images/forum/speakers/speaker5.jpg";
// import speaker6 from "@images/forum/speakers/speaker6.jpg";
// import speaker7 from "@images/forum/speakers/speaker7.jpg";
// import speaker8 from "@images/forum/speakers/speaker8.png";
// import speaker9 from "@images/forum/speakers/speaker9.jpg";
// import speaker10 from "@images/forum/speakers/speaker10.jpg";
// import speaker11 from "@images/forum/speakers/speaker11.jpg";
// import speaker12 from "@images/forum/speakers/speaker12.jpg";
// import speaker13 from "@images/forum/speakers/speaker13.png";
// import speaker14 from "@images/forum/speakers/speaker14.jpg";
// import speaker15 from "@images/forum/speakers/speaker15.jpg";
// import speaker16 from "@images/forum/speakers/speaker16.jpg";
// import speaker17 from "@images/forum/speakers/speaker17.jpg";
// import speaker18 from "@images/forum/speakers/speaker18.jpg";
// import speaker19 from "@images/forum/speakers/speaker19.jpg";
// import speaker20 from "@images/forum/speakers/speaker20.jpg";
// import speaker21 from "@images/forum/speakers/speaker21.jpg";
// import speaker22 from "@images/forum/speakers/speaker22.jpg";
// import speaker23 from "@images/forum/speakers/speaker23.jpg";
// import speaker24 from "@images/forum/speakers/speaker24.jpg";
// import speaker25 from "@images/forum/speakers/speaker25.jpg";
// import speaker26 from "@images/forum/speakers/speaker26.jpg";
// import speaker27 from "@images/forum/speakers/speaker27.jpg";
// import speaker28 from "@images/forum/speakers/speaker28.jpg";
// import speaker29 from "@images/forum/speakers/speaker29.jpg";
// import speaker30 from "@images/forum/speakers/speaker30.jpg";

// import partner1 from "@images/forum/partners/partner1.png";
// import partner2 from "@images/forum/partners/partner2.svg";
// import partner3 from "@images/forum/partners/partner3.png";
// import partner4 from "@images/forum/partners/partner4.png";
// import partner5 from "@images/forum/partners/partner5.png";
// import partner6 from "@images/forum/partners/partner6.png";
// import partner7 from "@images/forum/partners/partner7.png";
// import partner8 from "@images/forum/partners/partner8.png";
// import partner9 from "@images/forum/partners/partner9.png";
// import partner10 from "@images/forum/partners/partner10.png";
// import partner11 from "@images/forum/partners/partner11.png";
// import partner12 from "@images/forum/partners/partner12.png";
// import partner13 from "@images/forum/partners/partner13.png";
// import partner14 from "@images/forum/partners/partner14.png";
// import partner15 from "@images/forum/partners/partner15.png";
// import partner16 from "@images/forum/partners/partner16.svg";
// import partner17 from "@images/forum/partners/partner17.png";
// import partner18 from "@images/forum/partners/partner18.png";
// import partner19 from "@images/forum/partners/partner19.png";
// import partner20 from "@images/forum/partners/partner20.png";
// import partner21 from "@images/forum/partners/partner21.png";
// import partner22 from "@images/forum/partners/partner22.png";
// import partner23 from "@images/forum/partners/partner23.png";
// import partner24 from "@images/forum/partners/partner24.png";
// import partner25 from "@images/forum/partners/partner25.png";
// import partner26 from "@images/forum/partners/partner26.png";
// import partner27 from "@images/forum/partners/partner27.png";

// const tabs = [
//   {
//     name: "CryptoЮГ2023",
//   },
//   {
//     name: "CryptoЮГ2022",
//   },
// ];

// interface Course {
//   _id: string;
//   nameCoin: string;
//   currentCourse: number;
//   change: number;
// }

// let howMutchSpeakers = 8;

// let arrFinish = [];

// const partners = [
//   {
//     url: "https://keine-exchange.com/?rid=29633",
//     logo: partner1,
//     visited: ["CryptoЮГ2022"],
//   },
//   {
//     url: "http://тц-черноморский.рф/",
//     logo: partner2,
//     visited: ["CryptoЮГ2022"],
//   },
//   {
//     url: "https://cryptoholding.ru/",
//     logo: partner3,
//     visited: ["CryptoЮГ2022"],
//   },
//   {
//     url: "https://racib.com/",
//     logo: partner4,
//     visited: ["CryptoЮГ2022"],
//   },
//   {
//     url: "https://carding.pro/",
//     logo: partner5,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://blockchain24.pro/",
//     logo: partner6,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://www.instagram.com/abrau1870/",
//     logo: partner7,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://www.instagram.com/barycoffee.nvr/",
//     logo: partner8,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://hginov.ru/",
//     logo: partner9,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://ti.turovinvest.ru/",
//     logo: partner10,
//     visited: ["CryptoЮГ2023"],
//   },
//   {
//     url: "https://cryptonews.net/ru/",
//     logo: partner11,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://ru.beincrypto.com/",
//     logo: partner12,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://cripta.games/",
//     logo: partner13,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://www.artemotiochain.ru/",
//     logo: partner14,
//     visited: ["CryptoЮГ2023"],
//   },
//   {
//     url: "https://duma.network/",
//     logo: partner15,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://pro-blockchain.com/crypto-news",
//     logo: partner16,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://miningmoon.ru/",
//     logo: partner17,
//     visited: ["CryptoЮГ2023"],
//   },
//   {
//     url: "https://t.me/MetisDAO_ru",
//     logo: partner18,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://getblock.net/how-it-works",
//     logo: partner19,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://web3space.io/bot",
//     logo: partner20,
//     visited: ["CryptoЮГ2023"],
//   },
//   {
//     url: "https://7winds.mobi/",
//     logo: partner21,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://t.me/channel_SoulMate",
//     logo: partner22,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://kollegiya-sokolov.ru/",
//     logo: partner23,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://daogogreen.com/",
//     logo: partner24,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://rossgram.ru/",
//     logo: partner25,
//     visited: ["CryptoЮГ2023", "CryptoЮГ2022"],
//   },
//   {
//     url: "https://altcoinlog.com/",
//     logo: partner26,
//     visited: ["CryptoЮГ2023"],
//   },
//   {
//     url: "https://t.me/unionclub_chat",
//     logo: partner27,
//     visited: ["CryptoЮГ2023"],
//   },
// ];

// speakers.forEach((item) => {
//   if (item.visited.includes("CryptoЮГ2023") && arrFinish.length < 8) {
//     arrFinish.push(item);
//   }
// });

// const contentAbout = [
//   {
//     img: crypto_emergency,
//     title: "Crypto Юг 2023",
//     text: "Прекрасная возможность провести время приятно и с пользой, открыть для себя новые возможности, повысить экспертность и увеличить доход.",
//   },

//   {
//     img: education,
//     title: "Образование",
//     text: "Форум предоставляет доступ к содержательным беседам, семинарам и панельным дискуссиям о последних тенденциях и разработках в индустрии криптовалют.",
//   },
//   {
//     img: communication,
//     title: "Живое общение",
//     text: "Возможность в живую пообщаться с любимым экспертом или с другими участниками и профессионалами крипторынка.",
//   },
//   {
//     img: networking,
//     title: "Нетворкинг",
//     text: "Еесли вы ищите перспективные проекты для поддержки или участия, наш форум предоставляет отличную возможность встретиться и пообщаться с нужными людьми.",
//   },
//   {
//     img: innovation,
//     title: "Инновации",
//     text: "Ты можешь ознакомиться с передовыми технологиями и инновационными решениями, которые формируют будущее индустрии криптовалют.",
//   },
//   {
//     img: inspiration,
//     title: "Вдохновение ",
//     text: "На форуме выступают дальновидные спикеры, которые могут вдохновить тебя вывести собственные идеи и проекты на новый уровень.",
//   },
// ];

// export default function () {
//   return (
//     <div class="forum effect_lines">
//       <section class="forum_preview">
//         <div class="wrapper">
//           <div class="forum_preview_about">
//             <h1>Crypto ЮГ</h1>
//           </div>
//         </div>
//       </section>
//       <div class="wrapper">
//         <div class="page">
//           <section class="about_section">
//             <div class="items_about">
//               {contentAbout.map((item, index) => {
//                 return (
//                   <div class="item_about">
//                     <div class="head">
//                       <img
//                         src={item.img}
//                         alt="img"
//                       />
//                       <h5>{item.title}</h5>
//                     </div>
//                     <p>{item.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </section>

//           {/* speakers tabs */}

//           <section class="event_section">
//             <h4>Спикеры</h4>
//             <div class="events_list">
//               <div class="tabs">
//                 {tabs.map((item, index) => {
//                   return (
//                     <span
//                       class="tab"
//                       ref="tabItem1"
//                       onclick={() => {
//                         Static.activeIndex = index;
//                         Ref.activeTab.style.left = `${Ref.tabItem1.offsetWidth * Static.activeIndex}px`;
//                         Static.speakersTabName = item.name;
//                         // fn("tab", speakers, arrFinish);
//                         Ref.speakersContent.classList.add("animated");
//                         setTimeout(() => {
//                           Ref.speakersContent.classList.remove("animated");
//                         }, 500);
//                       }}
//                     >
//                       {item.name}
//                     </span>
//                   );
//                 })}
//                 <div
//                   class="activeTab"
//                   ref="activeTab"
//                 ></div>
//               </div>

//               {/* speakers */}

//               <div
//                 class="speakers"
//                 ref="speakersContent"
//               >
//                 {speakers
//                   .filter((item) => item.visited.includes(Static.speakersTabName))
//                   .slice(0, Static.howMutchSpeakers)
//                   .map((item, index) => {
//                     return (
//                       <div class={["speaker"]}>
//                         <div class="photo">
//                           <img
//                             src={item.photo}
//                             alt="img"
//                           />
//                         </div>
//                         <div class="speaker_about">
//                           <h3>{item.speaker}</h3>
//                           <p>{item.about_speaker}</p>
//                         </div>
//                       </div>
//                     );
//                   })}

//                 {/* {

//                     (speakers.filter((item, index) => {
//                       if (item.visited.includes(Static.speakersTabName)) {
//                         return true
//                       }
//                       return false
//                     }).slice(0, Static.howMutchSpeakers)).map((item, index) => {
//                       return (

//                         <div class={["speaker",]}
//                         >
//                           <div class='photo'>
//                             <img src={item.photo} alt="img" />
//                           </div>
//                           <div class='speaker_about'>
//                             <h3>{item.speaker}</h3>
//                             <p>{item.about_speaker}</p>
//                           </div>
//                         </div>
//                       )
//                     })
//                   } */}
//                 {/* {

//                     arrFinish.map((item, index) => {
//                       return (

//                         <div class={["speaker",]}
//                         >
//                           <div class='photo'>
//                             <img src={item.photo} alt="img" />
//                           </div>
//                           <div class='speaker_about'>
//                             <h3>{item.speaker}</h3>
//                             <p>{item.about_speaker}</p>
//                           </div>
//                         </div>
//                       )
//                     })
//                   } */}
//               </div>
//             </div>

//             {/* speakers show_all button */}

//             <div
//               class="show_all"
//               ref="button"
//               onclick={() => {
//                 if (Static.howMutchSpeakers == 8) {
//                   Static.howMutchSpeakers = speakers.length;
//                   Ref.buttonSpan.innerText = "Скрыть";
//                 } else {
//                   Static.howMutchSpeakers = 8;
//                   Ref.buttonSpan.textContent = "Показать всех";
//                 }
//               }}
//             >
//               <span
//                 ref="buttonSpan"
//                 type="button"
//               >
//                 Показать всех
//               </span>
//             </div>
//           </section>

//           <div class="buttons">
//             {/* next */}
//             <button
//               ref="next"
//               class="nextBtn"
//               onclick={() => {
//                 let slidesNum = Ref.partners_content.children.length;
//                 let itemWidth = Ref.slide.offsetWidth + 10;
//                 if (Ref.partners_content.offsetWidth <= 520) {
//                   Static.maxSlidesPerShift = 2;
//                 } else if (Ref.partners_content.offsetWidth <= 736) {
//                   Static.maxSlidesPerShift = 3;
//                 } else if (Ref.partners_content.offsetWidth <= 958) {
//                   Static.maxSlidesPerShift = 4;
//                 } else {
//                   Static.maxSlidesPerShift = 5;
//                 }
//                 if (Static.currentSlide < slidesNum - Static.maxSlidesPerShift) {
//                   Static.currentSlide++;
//                   console.log(Static.currentSlide);
//                   console.log("=b57d25=", Ref.partners_content.offsetWidth);
//                 }

//                 Ref.partners_content.style.transform = `translateX(-${Static.currentSlide * itemWidth}px)`;
//               }}
//             >
//               <img
//                 src={next}
//                 alt=""
//               />
//             </button>
//             {/* back */}
//             <button
//               ref="back"
//               class="prevBtn"
//               onclick={() => {
//                 let itemWidth = Ref.slide.offsetWidth + 10;

//                 if (Static.currentSlide > 0) {
//                   Static.currentSlide--;
//                   console.log(Static.currentSlide);
//                 }

//                 Ref.partners_content.style.transform = `translateX(-${Static.currentSlide * itemWidth}px)`;
//               }}
//             >
//               <img
//                 src={back}
//                 alt=""
//               />
//             </button>

//             {/* partners tabs*/}
//             <section class="partners_section">
//               <h4>Партнеры</h4>

//               {/* <div class="tabs" ref="forumTabs">
//                 {
//                   tabs.map((item, index) => {
//                     return (
//                       <span
//                         class='tab'
//                         ref="tabItem2"
//                         onclick={() => {
//                           Static.activeIndex = index;
//                           Ref.activeTab2.style.left = `${Ref.tabItem2.offsetWidth * Static.activeIndex}px`;
//                           Static.partnersTabName = item.name;
//                           Ref.partners_content.classList.add('animated');
//                           setTimeout(() => {
//                             Ref.partners_content.classList.remove('animated');
//                           }, 500)
//                           Ref.partners_content.style.transform = null
//                           // console.log('=1b762b=',Ref.slide.offsetWidth)
//                           init();
//                         }}
//                       >
//                         {item.name}
//                       </span>
//                     )
//                   })
//                 }
//                 <div class="activeTab" ref="activeTab2"></div>
//               </div> */}
//               {/*partners  slider */}
//               {/* partners  */}
//               <div
//                 class="partners_list"
//                 ref="partners_content"
//               >
//                 {partners.map((item, index) => {
//                   return (
//                     <div
//                       ref="slide"
//                       target="_blank"
//                       href={item.url}
//                       class={["partners_list_item", item.visited.includes(Static.partnersTabName) ? null : null]}
//                     >
//                       <img
//                         src={item.logo}
//                         alt="img"
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function () {
  return <div>empty</div>;
}
