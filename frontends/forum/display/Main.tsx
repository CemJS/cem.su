import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";
import up_arrow from "@svg/courseLine/up_arrow.svg";
import logo from "@svg/logo.svg";
import networking from "@svg/forum/networking.svg";
import communication from "@svg/forum/communication.svg";
import innovation from "@svg/forum/innovation.svg";
import inspiration from "@svg/forum/inspiration.svg";
import education from "@svg/forum/education.svg";
import crypto_emergency from "@svg/forum/crypto_emergency.svg";
import speakers from "@json/forumSpeakers";
import partners from "@json/forumPartners";
import introImg from "@images/forum/Crypto.png";
import metis from "@images/forum/metis.png";
import racib from "@images/forum/racib.png";
import schedule3 from "@images/forum/schedule3.png";
import schedule4 from "@images/forum/schedule4.png";

import { Display } from "@elements/ForumSlider";

const tabs = [
  {
    name: "CryptoЮГ2023",
  },
  {
    name: "CryptoЮГ2022",
  },
];

interface Course {
  _id: string;
  nameCoin: string;
  currentCourse: number;
  change: number;
}

let arrFinish = [];

speakers.forEach((item) => {
  if (item.visited.includes("CryptoЮГ2023") && arrFinish.length < 8) {
    arrFinish.push(item);
  }
});

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

Static.partners = partners;

export default function () {
  return (
    <div class="forum">
      <div class="forum__intro">
        <div class="wrapper">
          <div class="forum__intro-card">
            <div class="forum__intro-img">
              <img
                src={introImg}
                alt="Crypto ЮГ 2023"
              />
            </div>
            <div class="forum__intro-right">
              <h2 class="forum__intro-title">Ежегодный криптовалютный форум</h2>
              <p class="forum__intro-subtitle">
                3-4 июня
                <br />
                г. Новороссийск
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="forum__info forum__info_margin">
        <div class="wrapper wrapper_padding">
          <div class="forum__info-wrapper">
            <div class="forum__info-invite">
              <div class="forum__text">
                Команда <span class="forum__text_green">Crypto Emergency</span> рада пригласить тебя на второй ежегодный криптофорум <span class="forum__text_green">Crypto Юг 2023</span>, который
                состоится 3 и 4 июня в г. Новороссийске.
              </div>
            </div>
            <div class="forum__info-sponsor">
              <h3 class="forum__info-title">Организатор</h3>
              <img
                src={logo}
                alt="Crypto Emergency"
              />
            </div>
            <div class="forum__info-sponsor">
              <h3 class="forum__info-title">Спонсор After party</h3>
              <img
                src={metis}
                alt="Metis"
              />
            </div>
            <div class="forum__info-sponsor">
              <h3 class="forum__info-title">При поддержке</h3>
              <img
                src={racib}
                alt="РАКИБ"
              />
            </div>
            <div class="forum__info-schedules">
              <h3 class="forum__info-title">Расписание форума</h3>
              <div class="forum__info-cover">
                <img
                  src={schedule3}
                  alt="Расписание 3 июня"
                  class="forum__info-schedule"
                />
                <img
                  src={schedule4}
                  alt="Расписание 4 июня"
                  class="forum__info-schedule"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper wrapper_padding">
        <div class="forum__opportunities">
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Crypto Юг 2023</span> - прекрасная возможность провести время приятно и с пользой, открыть для себя новые возможности, повысить экспертность и увеличить
              доход.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Образование</span> - форум предоставляет доступ к содержательным беседам, семинарам и панельным дискуссиям о последних тенденциях и разработках в
              индустрии криптовалют.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Живое общение</span> - возможность в живую пообщаться с любимым экспертом или с другими участниками и профессионалами крипторынка.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Нетворкинг</span> - если вы ищите перспективные проекты для поддержки или участия, наш форум предоставляет отличную возможность встретиться и пообщаться с
              нужными людьми.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Инновации</span> - ты можешь ознакомиться с передовыми технологиями и инновационными решениями, которые формируют будущее индустрии криптовалют.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Вдохновение</span> - на форуме выступают дальновидные спикеры, которые могут вдохновить тебя вывести собственные идеи и проекты на новый уровень.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Заявить о себе</span> - форум предоставляет сцену для демонстрации твоих экспертных знаний в области криптовалют, повышая твою репутацию лидера мысли и
              эксперта.
            </div>
          </div>
          <div class="forum__opportunity">
            <div class="forum__text">
              <span class="forum__text_green">Сотрудничество</span> - такие мероприятия являются центром сотрудничества и формирования сообщества, предоставляя возможности для совместной работы над
              проектами и инициативами, которые могут оказать значительное влияние на индустр ию.
            </div>
          </div>
        </div>
        <div class="forum__confidence forum__confidence_margin forum__text">
          Мы уверены, что наш криптофорум предоставит тебе всю ценную информацию, деловые возможности и возможности, которых больше нигде не встретишь.
        </div>
        <div className="forum__images"></div>
      </div>
    </div>

    // <div class="forum effect_lines">
    //   <section class="forum_preview">
    //     <div class="wrapper">
    //       <div class="forum_preview_about">
    //         <h1>Crypto ЮГ</h1>
    //       </div>
    //     </div>
    //   </section>
    //   <div class="wrapper">
    //     <div class="page">
    //       <section class="about_section">
    //         <div class="items_about">
    //           {contentAbout.map((item, index) => {
    //             return (
    //               <div class="item_about">
    //                 <div class="head">
    //                   <img
    //                     src={item.img}
    //                     alt="img"
    //                   />
    //                   <h5>{item.title}</h5>
    //                 </div>
    //                 <p>{item.text}</p>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </section>

    //       {/* speakers tabs */}

    //       <section class="event_section">
    //         <h4>Спикеры</h4>
    //         <div class="events_list">
    //           <div class="tabs">
    //             {tabs.map((item, index) => {
    //               return (
    //                 <span
    //                   class="tab"
    //                   ref="tabItem1"
    //                   onclick={() => {
    //                     Static.activeIndex = index;
    //                     Ref.activeTab.style.left = `${Ref.tabItem1.offsetWidth * Static.activeIndex}px`;
    //                     Static.speakersTabName = item.name;
    //                     // fn("tab", speakers, arrFinish);
    //                     Ref.speakersContent.classList.add("animated");
    //                     setTimeout(() => {
    //                       Ref.speakersContent.classList.remove("animated");
    //                     }, 500);
    //                   }}
    //                 >
    //                   {item.name}
    //                 </span>
    //               );
    //             })}
    //             <div
    //               class="activeTab"
    //               ref="activeTab"
    //             ></div>
    //           </div>

    //           {/* speakers */}

    //           <div
    //             class="speakers"
    //             ref="speakersContent"
    //           >
    //             {speakers
    //               .filter((item) => item.visited.includes(Static.speakersTabName))
    //               .slice(0, Static.howMutchSpeakers)
    //               .map((item, index) => {
    //                 return (
    //                   <div class={["speaker"]}>
    //                     <div class="photo">
    //                       <img
    //                         src={`/contents/forum/speakers/${item.photo}`}
    //                         alt="img"
    //                       />
    //                     </div>
    //                     <div class="speaker_about">
    //                       <h3>{item.speaker}</h3>
    //                       <p>{item.about_speaker}</p>
    //                     </div>
    //                   </div>
    //                 );
    //               })}

    //             {/* {

    //                 (speakers.filter((item, index) => {
    //                   if (item.visited.includes(Static.speakersTabName)) {
    //                     return true
    //                   }
    //                   return false
    //                 }).slice(0, Static.howMutchSpeakers)).map((item, index) => {
    //                   return (

    //                     <div class={["speaker",]}
    //                     >
    //                       <div class='photo'>
    //                         <img src={item.photo} alt="img" />
    //                       </div>
    //                       <div class='speaker_about'>
    //                         <h3>{item.speaker}</h3>
    //                         <p>{item.about_speaker}</p>
    //                       </div>
    //                     </div>
    //                   )
    //                 })
    //               } */}
    //             {/* {

    //                 arrFinish.map((item, index) => {
    //                   return (

    //                     <div class={["speaker",]}
    //                     >
    //                       <div class='photo'>
    //                         <img src={item.photo} alt="img" />
    //                       </div>
    //                       <div class='speaker_about'>
    //                         <h3>{item.speaker}</h3>
    //                         <p>{item.about_speaker}</p>
    //                       </div>
    //                     </div>
    //                   )
    //                 })
    //               } */}
    //           </div>
    //         </div>

    //         {/* speakers show_all button */}

    //         <div
    //           class="show_all"
    //           ref="button"
    //           onclick={() => {
    //             if (Static.howMutchSpeakers == 8) {
    //               Static.howMutchSpeakers = speakers.length;
    //               Ref.buttonSpan.innerText = "Скрыть";
    //             } else {
    //               Static.howMutchSpeakers = 8;
    //               Ref.buttonSpan.textContent = "Показать всех";
    //             }
    //           }}
    //         >
    //           <span
    //             ref="buttonSpan"
    //             type="button"
    //           >
    //             Показать всех
    //           </span>
    //         </div>
    //       </section>

    //       {/* <div class="buttons">
    //         next
    //         <button
    //           ref="next"
    //           class="nextBtn"
    //           onclick={() => {
    //             let slidesNum = Ref.partners_content.children.length;
    //             let itemWidth = Ref.slide.offsetWidth + 10;
    //             if (Ref.partners_content.offsetWidth <= 520) {
    //               Static.maxSlidesPerShift = 2;
    //             } else if (Ref.partners_content.offsetWidth <= 736) {
    //               Static.maxSlidesPerShift = 3;
    //             } else if (Ref.partners_content.offsetWidth <= 958) {
    //               Static.maxSlidesPerShift = 4;
    //             } else {
    //               Static.maxSlidesPerShift = 5;
    //             }
    //             if (Static.currentSlide < slidesNum - Static.maxSlidesPerShift) {
    //               Static.currentSlide++;
    //               console.log(Static.currentSlide);
    //               console.log("=b57d25=", Ref.partners_content.offsetWidth);
    //             }

    //             Ref.partners_content.style.transform = `translateX(-${Static.currentSlide * itemWidth}px)`;
    //           }}
    //         >
    //           <img
    //             src={next}
    //             alt=""
    //           />
    //         </button>
    //         back
    //         <button
    //           ref="back"
    //           class="prevBtn"
    //           onclick={() => {
    //             let itemWidth = Ref.slide.offsetWidth + 10;

    //             if (Static.currentSlide > 0) {
    //               Static.currentSlide--;
    //               console.log(Static.currentSlide);
    //             }

    //             Ref.partners_content.style.transform = `translateX(-${Static.currentSlide * itemWidth}px)`;
    //           }}
    //         >
    //           <img
    //             src={back}
    //             alt=""
    //           />
    //         </button> */}

    //       {/* partners tabs*/}
    //       <section class="partners_section">
    //         <h4>Партнеры</h4>
    //         <div
    //           class="tabs tabs_partners"
    //           ref="forumTabs"
    //         >
    //           {tabs.map((item, index) => {
    //             return (
    //               <span
    //                 index={index}
    //                 class="tab"
    //                 ref="tabItem2"
    //                 onclick={() => {
    //                   Static.activeIndex = index;
    //                   Ref.activeTab2.style.left = `${Ref.tabItem2.offsetWidth * Static.activeIndex}px`;
    //                   Static.partnersTabName = item?.name;
    //                   Static.partners = partners.filter((item) => item.visited.includes(Static.partnersTabName));
    //                 }}
    //               >
    //                 {item.name}
    //               </span>
    //             );
    //           })}
    //           <div
    //             class="activeTab"
    //             ref="activeTab2"
    //           ></div>
    //         </div>
    //         {/*partners  slider */}
    //         {/* partners  */}
    //         <Display items={Static.partners} />

    //         {/* <div class={Static.partnersTabName == "CryptoЮГ2023" ? "opacity" : null}>
    //           <Display items={Static.partners2023} />
    //         </div>
    //         <div class={Static.partnersTabName == "CryptoЮГ2022" ? "opacity" : null}>
    //           <Display items={Static.partners2022} />
    //         </div> */}
    //       </section>
    //     </div>
    //     {/* </div> */}
    //   </div>
    // </div>
  );
}
