import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import speakers from "@json/forum/forumSpeakers";

let arrFinish = [];

speakers.forEach((item) => {
  if (item.visited.includes("CryptoЮГ2023") && arrFinish.length < 8) {
    arrFinish.push(item);
  }
});

const tabs = [
  {
    name: "CryptoЮГ2023",
  },
  {
    name: "CryptoЮГ2022",
  },
];

export default function () {
  return (
    <section class="event_section">
      <h2 class="forum__title forum__title_margin">Спикеры</h2>
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
                  Fn.log("tab", speakers, arrFinish);
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
          <div class="activeTab" ref="activeTab"></div>
        </div>

        {/* speakers */}

        <div class="speakers" ref="speakersContent">
          {speakers
            .filter((item) => item.visited.includes(Static.speakersTabName))
            .slice(0, Static.howMutchSpeakers)
            .map((item, index) => {
              return (
                <div class={["speaker"]}>
                  <div class="speaker__photo">
                    <img
                      src={`/contents/forum/speakers/${item.photo}`}
                      alt="img"
                    />
                  </div>
                  <div class="speaker__about">
                    <h3>{item.speaker}</h3>
                    <p>{item.about_speaker}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* speakers show_all button */}

      <div
        class="show-all"
        ref="button"
        onclick={() => {
          if (Static.howMutchSpeakers == 6) {
            Static.howMutchSpeakers = speakers.length;
            Ref.buttonSpan.innerText = "Скрыть";
          } else {
            Static.howMutchSpeakers = 6;
            Ref.buttonSpan.textContent = "Показать всех";
          }
          Fn.log("=9b27aa=", speakers);
        }}
      >
        <span ref="buttonSpan" class="show-all__button">
          Показать всех
        </span>
      </div>
    </section>
  );
}
