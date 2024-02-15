import { Cemjsx } from "cemjs-all";
import reviews from "@images/university/reviews.jpeg";
import arrow from "@svg/about/select_arrow.svg";

let item;

export default function () {
  if (!this.Static.recordsCourses || !this.Static.recordsCourses.length) {
    return <div></div>;
  } else {
    item = this.Static.recordsCourses[0];
  }

  return (
    <div class="course">
      <div class="wrapper">
        <div class="course__container">
          <div class="course-header">
            <img
              class="course-header__background"
              src={`/assets/upload/worldPress/${item?.cover}`}
            />
            <div class="course-header__container">
              <div class="course-header__title">{item.name}</div>
              <div class="course-header__description">{item.description}</div>
              <div
                class="course-header__company"
                // onclick={() => [
                //   item.company.map((item) => {
                //     fn.modals.ModalTeachers(item)
                //   })
                // ]}
              >
                <span>Подробнее о школе</span>
              </div>
            </div>
          </div>

          {item.learn?.length != 0 ? (
            <div class="course-learn">
              <div class="course__subtitle">Вы научитесь</div>
              <ul class="course-learn__list">
                {item.learn?.map((item1) => {
                  return (
                    <li class="course-learn__item">
                      <div class="course-learn__subtitle">{item1.title}</div>
                      <div class="course-learn__description">{item1.description}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          <div class="course-footer">
            <div class="course-footer__container">
              <div class="course-footer__info">
                <div class="course-footer__info-header">
                  <div class="course-footer__info_price">Стоимость курса</div>
                  <div>
                    <div class="course-footer__info_duration">
                      Длительность курса: {item.duration}
                      <span>{item.timeCount == "month" ? " месяца" : " дней"}</span>
                    </div>
                    {!item.dateIsKnow ? (
                      <div class="course-footer__info_data">Старт курса: {this.Services.functions.dateFormat(item.dateStart, "course")}</div>
                    ) : (
                      <div class="course-footer__info_data">Курс в записи</div>
                    )}
                  </div>
                </div>
                <div class="course-footer__prices">
                  <div class="course-footer__cost">
                    <div class="course-footer__cost_section">
                      <span class="course-footer__cost_old">
                        {`${item.cost * 1.3}`}
                        {item.currency == "rub" ? <span class="card__cost_size"> ₽</span> : item.currency == "usd" ? <span class="card__cost_size"> $</span> : null}
                      </span>
                      <div class="course-footer__cost_discount">
                        <span>-30%</span>
                      </div>
                    </div>
                    <div class="course-footer__cost_new">
                      {item.cost}
                      {item.currency == "rub" ? <span class="card__cost_size"> ₽</span> : item.currency == "usd" ? <span class="card__cost_size"> $</span> : null}
                      <div>Новая цена</div>
                    </div>
                  </div>
                </div>
                <a
                  class="course-footer__enroll tag_button"
                  target="_blank"
                  href={item.linkRecord}
                >
                  <span>Записаться на курс</span>
                </a>
              </div>
              <div class="course-footer__info">
                {item.company.map((item) => {
                  return (
                    <div class="course-footer__company">
                      <div class="course-footer__company_title">
                        {/* <img src={`/assets/upload/worldPress/${item.image}`} /> */}
                        <h3>Школа «{item.name}»</h3>
                      </div>
                      <div>
                        <a
                          href={item.siteLink}
                          target="_blank"
                          class={["btn-item", !item.siteLink ? "social-btn_passive" : null]}
                        >
                          <div class="btn-item_text">Веб-сайт</div>
                        </a>
                      </div>
                      <div class="course-footer__social">
                        {item.social?.map((item) => {
                          // console.log('=cf3e42=', item)
                          return (
                            <div class="course-footer__social_item">
                              <a
                                href={item.url}
                                target="_blank"
                                class="course-footer__social_link"
                              >
                                <img src={`/assets/svg/mainSettings/${item.channel}.svg`} />
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="course-reviews">
            <div class="course__subtitle">Отзывы</div>
            <div class="course-reviews__container">
              <p class="course-reviews__soon">
                <span style="font-size: 26px;">Отзывы ещё не оставлены</span>
              </p>
              <div class="course-reviews__add">
                <span>Оставить отзыв</span>
              </div>
              <img
                class="course-reviews__image"
                src={reviews}
              />
            </div>
          </div>
          <div class="course-questions">
            <div class="course__subtitle">Вопросы и ответы</div>
            <div class="accordeon">
              {this.Static.Accordeon.map((item, index) => {
                return (
                  <div class="accordeon__item">
                    <div
                      class="accordeon__header"
                      onclick={() => {
                        this.Static.Accordeon.map((el, i) => {
                          if (index === i) {
                            el.hidden = !el.hidden;
                          } else {
                            el.hidden = true;
                          }
                        });
                        this.init();
                      }}
                    >
                      <h5 class="accordeon__header_title">{item.title}</h5>
                      <img
                        src={arrow}
                        class={["arrow", item.hidden ? null : "arrow__toggle"]}
                      ></img>
                    </div>
                    <div class={["accordeon__content", item.hidden ? null : "content__show"]}>{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
