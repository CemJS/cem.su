import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";
import up_arrow from "@svg/courseLine/up_arrow.svg";
import networking from "@svg/forum/networking.svg";
import communication from "@svg/forum/communication.svg";
import innovation from "@svg/forum/innovation.svg";
import inspiration from "@svg/forum/inspiration.svg";
import education from "@svg/forum/education.svg";
import crypto_emergency from "@svg/forum/crypto_emergency.svg";
import speakers from "@json/forumSpeakers";
import partners from "@json/forumPartners";

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

export default function () {
  return (
    <div class="forum effect_lines">
      <section class="forum_preview">
        <div class="wrapper">
          <div class="forum_preview_about">
            <h1>Crypto ЮГ</h1>
          </div>
        </div>
      </section>
      <div class="wrapper">
        <div class="page">
          <section class="about_section">
            <div class="items_about">
              {contentAbout.map((item, index) => {
                return (
                  <div class="item_about">
                    <div class="head">
                      <img
                        src={item.img}
                        alt="img"
                      />
                      <h5>{item.title}</h5>
                    </div>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* speakers tabs */}

          <section class="event_section">
            <h4>Спикеры</h4>
            <div class="events_list">
              <div class="tabs">
                {tabs.map((item, index) => {
                  return (
                    <span
                      class="tab"
                      ref="tabItem1"
                      onclick={() => {
                        Static.activeIndex = index;
                        Ref.activeTab.style.left = `${Ref.tabItem1.offsetWidth * Static.activeIndex}px`;
                        Static.speakersTabName = item.name;
                        // fn("tab", speakers, arrFinish);
                        Ref.speakersContent.classList.add("animated");
                        setTimeout(() => {
                          Ref.speakersContent.classList.remove("animated");
                        }, 500);
                      }}
                    >
                      {item.name}
                    </span>
                  );
                })}
                <div
                  class="activeTab"
                  ref="activeTab"
                ></div>
              </div>

              {/* speakers */}

              <div
                class="speakers"
                ref="speakersContent"
              >
                {speakers
                  .filter((item) => item.visited.includes(Static.speakersTabName))
                  .slice(0, Static.howMutchSpeakers)
                  .map((item, index) => {
                    return (
                      <div class={["speaker"]}>
                        <div class="photo">
                          <img
                            src={`/contents/forum/speakers/${item.photo}`}
                            alt="img"
                          />
                        </div>
                        <div class="speaker_about">
                          <h3>{item.speaker}</h3>
                          <p>{item.about_speaker}</p>
                        </div>
                      </div>
                    );
                  })}

                {/* {

                    (speakers.filter((item, index) => {
                      if (item.visited.includes(Static.speakersTabName)) {
                        return true
                      }
                      return false
                    }).slice(0, Static.howMutchSpeakers)).map((item, index) => {
                      return (

                        <div class={["speaker",]}
                        >
                          <div class='photo'>
                            <img src={item.photo} alt="img" />
                          </div>
                          <div class='speaker_about'>
                            <h3>{item.speaker}</h3>
                            <p>{item.about_speaker}</p>
                          </div>
                        </div>
                      )
                    })
                  } */}
                {/* {

                    arrFinish.map((item, index) => {
                      return (

                        <div class={["speaker",]}
                        >
                          <div class='photo'>
                            <img src={item.photo} alt="img" />
                          </div>
                          <div class='speaker_about'>
                            <h3>{item.speaker}</h3>
                            <p>{item.about_speaker}</p>
                          </div>
                        </div>
                      )
                    })
                  } */}
              </div>
            </div>

            {/* speakers show_all button */}

            <div
              class="show_all"
              ref="button"
              onclick={() => {
                if (Static.howMutchSpeakers == 8) {
                  Static.howMutchSpeakers = speakers.length;
                  Ref.buttonSpan.innerText = "Скрыть";
                } else {
                  Static.howMutchSpeakers = 8;
                  Ref.buttonSpan.textContent = "Показать всех";
                }
              }}
            >
              <span
                ref="buttonSpan"
                type="button"
              >
                Показать всех
              </span>
            </div>
          </section>

          <div class="buttons">
            {/* next */}
            <button
              ref="next"
              class="nextBtn"
              onclick={() => {
                let slidesNum = Ref.partners_content.children.length;
                let itemWidth = Ref.slide.offsetWidth + 10;
                if (Ref.partners_content.offsetWidth <= 520) {
                  Static.maxSlidesPerShift = 2;
                } else if (Ref.partners_content.offsetWidth <= 736) {
                  Static.maxSlidesPerShift = 3;
                } else if (Ref.partners_content.offsetWidth <= 958) {
                  Static.maxSlidesPerShift = 4;
                } else {
                  Static.maxSlidesPerShift = 5;
                }
                if (Static.currentSlide < slidesNum - Static.maxSlidesPerShift) {
                  Static.currentSlide++;
                  console.log(Static.currentSlide);
                  console.log("=b57d25=", Ref.partners_content.offsetWidth);
                }

                Ref.partners_content.style.transform = `translateX(-${Static.currentSlide * itemWidth}px)`;
              }}
            >
              <img
                src={next}
                alt=""
              />
            </button>
            {/* back */}
            <button
              ref="back"
              class="prevBtn"
              onclick={() => {
                let itemWidth = Ref.slide.offsetWidth + 10;

                if (Static.currentSlide > 0) {
                  Static.currentSlide--;
                  console.log(Static.currentSlide);
                }

                Ref.partners_content.style.transform = `translateX(-${Static.currentSlide * itemWidth}px)`;
              }}
            >
              <img
                src={back}
                alt=""
              />
            </button>

            {/* partners tabs*/}
            <section class="partners_section">
              <h4>Партнеры</h4>

              <div
                class="tabs"
                ref="forumTabs"
              >
                {tabs.map((item, index) => {
                  return (
                    <span
                      class="tab"
                      ref="tabItem2"
                      onclick={() => {
                        Static.activeIndex = index;
                        Ref.activeTab2.style.left = `${Ref.tabItem2.offsetWidth * Static.activeIndex}px`;
                        Static.partnersTabName = item.name;
                        Ref.partners_content.classList.add("animated");
                        setTimeout(() => {
                          Ref.partners_content.classList.remove("animated");
                        }, 500);
                        Ref.partners_content.style.transform = null;
                        // console.log('=1b762b=',Ref.slide.offsetWidth)
                        Fn.init();
                      }}
                    >
                      {item.name}
                    </span>
                  );
                })}
                <div
                  class="activeTab"
                  ref="activeTab2"
                ></div>
              </div>
              {/*partners  slider */}
              {/* partners  */}
              <div
                class="partners_list"
                ref="partners_content"
              >
                {partners.map((item, index) => {
                  return (
                    <a
                      ref="slide"
                      target="_blank"
                      href={item.url}
                      class={["partners_list_item", item.visited.includes(Static.partnersTabName) ? null : null]}
                    >
                      <img
                        src={`/contents/forum/partners/${item.logo}`}
                        alt="img"
                      />
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
