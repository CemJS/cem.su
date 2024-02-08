import { Cemjsx, Fn, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import openDrop from "@svg/icons/openDropDown.svg";

const RenderFilter = (title: string, items: any[], outStatic: string) => {
  <div class="filter questions__filter">
    <div class="filter__left">
      <p class="filter__title">{title}</p>
      <p class="filter__current">{items.filter((item) => item.name == Static["outStatic"])[0].text}</p>
    </div>
    <img
      src={openDrop}
      alt=""
      class="filter__img"
    />
    <div class="filter__drops">
      {items.map((item) => {
        return <div class="filter__drop"></div>;
      })}
    </div>
  </div>;
};

export default function () {
  // Fn.log("=18e445=", Static.records);
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
                class="btn"
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
            <div class="questions__filters"></div>

            <div class="questions__list">
              {Static.records?.map((item: any, index: number) => {
                return (
                  <div
                    class="questions__item"
                    onclick={() => {
                      Static.record = item;
                      Fn.linkChange(`/questions/show/${item.id}`);
                    }}
                    init={($el: any) => {
                      if (index == Static.records?.length - 1) {
                        const observer = new IntersectionObserver((entries) => {
                          entries.forEach(async (entry) => {
                            // Fn.log("=6ba7c1=111111", entry.isIntersecting, entry);
                            if (entry.isIntersecting) {
                              // Fn.log("=2a3c8e=", 6666666);
                              observer.unobserve($el);
                              let res = await front.Services.functions.sendApi("/api/events/Questions", {
                                action: "skip",
                                skip: Static.records.length,
                              });
                              console.log("=e26cda=", res);
                            }
                          });
                        });
                        observer.observe($el);
                      }
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
                      <span>{item.title}</span>
                      {item.title.length < 15 && item.text ? <span init={(e) => (e.innerHTML = item.text)}></span> : null}
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
                      <span>{front.Services.functions.timeStampToDate(item.showDate, ".")}</span>
                    </div>
                    <div class="questions__item_footer">
                      <a
                        // href={`/questions/show/${item._id}`}
                        class="btn btn_gradient"
                        // onclick={(e) => {
                        //   Static.recordsShow = item;
                        //   Fn.link(e);
                        // }}
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
