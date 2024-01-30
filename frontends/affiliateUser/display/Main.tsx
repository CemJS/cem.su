import { Cemjsx, Static } from "cemjs-all";
import copy from "@svg/icons/copy.svg";
import share from "@svg/icons/share.svg";
import empty from "@svg/icons/affiliateEmptyPartners.svg";
import time from "@svg/icons/time.svg";

const RenderCard = () => {
  return (
    <div class="affiliate__card affiliate_margin">
      <h2 class="affiliate__card-title">Партнерская программа</h2>
      <p class="affiliate__card-text">
        Разместите ссылку в социальных сетях, поделитесь с друзьями и заработайте токены CEM с каждого заpегистрированного пользователя. Также, для самых активных участников, у нас готовится
        расширенная программа монетизации для авторов контента.
      </p>
      <div class="affiliate__link">
        <p class="affiliate__link-title">Реферальная ссылка</p>
        <div class="affiliate__link-wrapper">
          <p class="affiliate__link-text">{Static.refLink}</p>
          <div class="affiliate__link-buttons">
            <button
              onclick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(Static.refLink);
                e.target.classList.add("active");
                setTimeout(() => {
                  e.target.classList.remove("active");
                }, 1500);
              }}
              class="affiliate__link-btn copy"
            >
              <img
                src={copy}
                alt="Скопировать"
              />
            </button>
            <button
              onclick={(e) => {
                if (navigator.share) {
                  navigator.share({
                    title: "Реферальная ссылка",
                    url: Static.refLink,
                  });
                }
              }}
              class="affiliate__link-btn"
            >
              <img
                src={share}
                alt="Поделиться"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderScores = () => {
  return (
    <div class="affiliate__scores">
      <div class="affiliate__score count">
        <h4 class="affiliate__score-title">0</h4>
        <p class="affiliate__score-text">Количество привлечённых пользователей</p>
        <div class="affiliate__score-bg"></div>
      </div>
      <div class="affiliate__score cemd">
        <h4 class="affiliate__score-title">0 CEMD</h4>
        <p class="affiliate__score-text">Выплаты за привлечённых пользователей</p>
        <div class="affiliate__score-bg"></div>
      </div>
    </div>
  );
};

const RenderPartners = () => {
  return (
    <div class={["affiliate__partners", !Static.partners.length ? "empty" : null]}>
      <h3 class="affiliate__partners-title">Мои партнеры</h3>
      <div class="affiliate__partners-list">
        {Static.partners.length ? (
          Static.partners?.map((item) => {
            return (
              <div class="affiliate__item">
                <div class="affiliate__item-left">
                  <div class="affiliate__item-img">
                    {/* <img
                    src=""
                    alt="Партнёр"
                    class="affiliate__item-img"
                  /> */}
                  </div>
                  <p class="affiliate__item-text">{item.name}</p>
                </div>
                <p class="affiliate__item-text">{item.date}</p>
                <p class="affiliate__item-text">{item.cem} CEM</p>
                <div class="affiliate__item-watch">
                  <img
                    src={time}
                    alt="Время"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div class="affiliate__empty">
            <img
              src={empty}
              alt="У вас пока нет партнёров"
            />
            <p class="affiliate__empty-text">У вас пока нет партнёров</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <RenderCard />
        <RenderScores />
        <RenderPartners />
      </div>
    </div>
  );
}
