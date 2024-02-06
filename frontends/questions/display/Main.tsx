import { Cemjsx, Fn, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import views from "@svg/news/views.svg";
import comments from "@svg/news/comments.svg";
// import Show from './display/show'

export default function () {
  console.log("=a5992d=", Static.records);

  return (
    <div class="page">
      <div class="questions">
        <div class="wrapper wrapper_padding">
          <div class="questions__container">
            <h4>Последние вопросы</h4>
            <p class="questions__description">Задавайте свои вопросы, получайте грамотные и понятные ответы на родном языке, совершенно бесплатно.</p>
            <div class="questions__ask">
              <div class="questions__search">
                <input
                  type="text"
                  placeholder="Поиск по вопросам"
                />
              </div>
              <button
                onclick={() => {
                  //   Fn.initOne({
                  //     name: "modalQuestion",
                  //     ifOpen: (front) => {
                  //       setTimeout(() => {
                  //         front.clearData();
                  //       }, 500);
                  //     },
                  //   });
                }}
              >
                задать вопрос
              </button>
            </div>

            <div class="questions__list">
              {Static.records?.map((item) => {
                Fn.log("=f65505=", item);
                return (
                  <div
                    class="questions__item"
                    onclick={() => {
                      Static.record = item;
                    }}
                  >
                    <div class="questions__item_header questions__user">
                      <div class="avatar">
                        <div class="avatar__icon">
                          <img
                            class="avatar__photo"
                            src={item.authorDetails?.avatar?.name ? `/assets/upload/avatar/${item.authorDetails.avatar?.name}` : avatarDefault}
                          />
                          <img
                            class="avatar__frame"
                            src={item.authorDetails?.frame?.name ? `/assets/images/lenta/${item.authorDetails.frame?.name}` : frameDefault}
                          />
                          {item.authorDetails?.status?.team ? (
                            <img
                              class="avatar__team"
                              src={item.authorDetails.status?.team ? teamLogo : null}
                            />
                          ) : (
                            <div>
                              <div class="avatar__level">
                                <img src={leveGray} />
                                <span>{item.authorDetails.statistic?.level}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div class="avatar__name">
                          <span>{item.authorDetails.nickname}</span>
                        </div>
                      </div>
                      <div class="questions__item_languages btn btn_gradient">
                        <span>Русский</span>
                      </div>
                    </div>
                    <div class={["questions__item_preview", item.title.length < 15 && item.text ? "questions__item_preview_row" : null]}>
                      <span>{front.Services.functions.sliceString(item.title)}</span>
                      {item.title.length < 15 && item.text ? <span>{item.text}</span> : null}
                    </div>
                    <div class="questions__item_statistic">
                      <span>
                        <i class="i i-comment"></i>
                        {item.statistic.answer}
                      </span>
                      <span>
                        <i class="i i-faq"></i>
                        {item.statistic.view}
                      </span>
                      <span>{front.Services.functions.dateFormat(item.showDate, "now")}</span>
                    </div>
                    <div class="questions__item_footer">
                      <a
                        href={`/questions/${item._id}`}
                        class="btn btn_gradient"
                        onclick={(e) => {
                          Static.recordsShow = item;
                          Fn.link(e);
                        }}
                      >
                        Ответить
                      </a>
                    </div>
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
