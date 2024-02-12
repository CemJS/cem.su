import { Cemjsx, Fn, Ref, Static, front, Events, Func } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import openDrop from "@svg/icons/openDropDown.svg";
import order from "@svg/icons/order.svg";

const RenderTypeFilter = () => {
  return (
    <div
      ref="filterType"
      onclick={(e) => {
        Ref.filterTypeDrops.classList.toggle("filter__drops_active");
        Ref.filterType.classList.toggle("filter_active");
      }}
      class="filter"
    >
      <div class="filter__left">
        <p class="filter__title">Сортировать</p>
        <p class="filter__current">{Static.types.filter((item) => item.name == Static.type)[0].text}</p>
      </div>
      <img
        src={openDrop}
        alt=""
        class="filter__img"
      />
      <div
        ref="filterTypeDrops"
        class="filter__drops"
      >
        {Static.types.map((item) => {
          return (
            <div
              onclick={() => {
                Static.type = item.name;
                Func.updateFilter();
              }}
              class="filter__drop"
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RenderSortFilter = () => {
  return (
    <div
      ref="filterSort"
      onclick={(e) => {
        Ref.filterSortDrops.classList.toggle("filter__drops_active");
        Ref.filterSort.classList.toggle("filter_active");
      }}
      class="filter"
    >
      <div class="filter__left">
        <p class="filter__title">Сортировать</p>
        <p class="filter__current">{Static.sorts.filter((item) => item.name == Static.sort)[0].text}</p>
      </div>
      <img
        src={openDrop}
        alt=""
        class="filter__img"
      />
      <div
        ref="filterSortDrops"
        class="filter__drops"
      >
        {Static.sorts.map((item) => {
          return (
            <div
              onclick={() => {
                Static.sort = item.name;
                Func.updateFilter();
              }}
              class="filter__drop"
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RenderLanguageFilter = () => {
  return (
    <div
      onclick={async (e) => {
        Fn.initOne("modalLanguage", {
          full: true,
          callback: (chooseLanguage) => {
            Static.chooseLanguage = chooseLanguage;
            Func.updateFilter();
          },
        });
      }}
      class="filter"
    >
      <div class="filter__left">
        <p class="filter__current">{`${Static.chooseLanguage?.eng_name} (${Static.chooseLanguage?.orig_name})`}</p>
      </div>
      <img
        src={openDrop}
        alt=""
        class="filter__img"
      />
    </div>
  );
};

export default function () {
  return (
    <div
      onclick={(e) => {
        if (!e.target.closest(".filter")) {
          Ref.filterTypeDrops.classList.remove("filter__drops_active");
          Ref.filterType.classList.remove("filter_active");
          Ref.filterSortDrops.classList.remove("filter__drops_active");
          Ref.filterSort.classList.remove("filter_active");
        }
      }}
      class="page"
    >
      <div class="questions">
        <div class="wrapper wrapper_padding">
          <div class="questions__container">
            <h4>Последние вопросы</h4>
            <p class="questions__description">Задавайте свои вопросы, получайте грамотные и понятные ответы на родном языке, совершенно бесплатно.</p>
            <div class="questions__ask">
              <div class="questions__search">
                <input
                  oninput={(e) => {
                    Static.search = e.target.value;
                    if (Static.timer) return;
                    Static.timer = setTimeout(() => {
                      Func.updateFilter();
                      e.target.dispatchEvent(new Event("input"));
                      Static.timer = undefined;
                    }, 600);
                  }}
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
            <div class="questions__filters">
              <div class="questions__filter">
                <RenderTypeFilter />
              </div>
              <div class="questions__filter">
                <RenderSortFilter />
                <div
                  onclick={(e) => {
                    e.target.classList.toggle("questions__filter-order_active");
                    Static.order == 1 ? (Static.order = -1) : (Static.order = 1);
                    Func.updateFilter();
                  }}
                  class="questions__filter-order"
                >
                  <img
                    src={order}
                    alt="Сортировать"
                    class="questions__filter-triangles"
                  />
                </div>
              </div>
              <div class="questions__filter">
                <RenderLanguageFilter />
              </div>
            </div>

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
                            if (entry.isIntersecting) {
                              observer.unobserve($el);
                              let res = await front.Services.functions.sendApi("/api/events/Questions", {
                                action: "skip",
                                skip: Static.records.length,
                              });
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
