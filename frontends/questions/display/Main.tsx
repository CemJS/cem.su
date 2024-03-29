import { Cemjsx, Fn, Ref, Static, front, Events, Func } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import avatarGpt from "@images/lenta/avatarGpt.png";
import appStore from "@images/questions/appStore.png";
import playMarket from "@images/questions/playMarket.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import openDrop from "@svg/icons/openDropDown.svg";
import order from "@svg/icons/order.svg";
import notFound from "@svg/icon/notFound.svg";

const RenderTitle = () => {
  return (
    <div id="top">
      <h4>Последние вопросы</h4>
      <p class="mb-5 max-w-[26.9375rem] text-[1rem] leading-[1.75rem] text-[#9198b3]">
        Задавайте свои вопросы, получайте грамотные и понятные ответы на родном
        языке, совершенно бесплатно.
      </p>
    </div>
  );
};

const RenderTypeFilter = () => {
  return (
    <div
      ref="filterType"
      onclick={(e) => {
        Ref.filterTypeDrops.classList.toggle("!opacity-100");
        Ref.filterTypeDrops.classList.toggle("!pointer-events-auto");
        Ref.filterType.classList.toggle("!rounded-ee-sm");
        Ref.filterType.classList.toggle("!rounded-es-sm");
        Ref.filterType.classList.toggle("!z-[2]");
      }}
      class="filterOne relative z-0 flex min-h-[5rem] w-full max-w-full cursor-pointer items-center justify-between rounded-[--borderR] bg-[--light-gray] p-[0.625rem_1.25rem] @767:max-w-[18.75rem]"
    >
      <div>
        <p class="text-[--textGray]">Сортировать</p>
        <p>{Static.types.filter((item) => item.name == Static.type)[0].text}</p>
      </div>
      <img src={openDrop} alt="" class="block" />
      <div
        ref="filterTypeDrops"
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[12] overflow-hidden rounded-ee-[--borderR] rounded-es-[--borderR] opacity-0 [background:var(--light-gray)] [transform:translateY(100%)] [transition:all_0.2s_ease-in-out]"
      >
        {Static.types.map((item) => {
          return (
            <div
              onclick={() => {
                Static.type = item.name;
                Func.updateFilter();
              }}
              class="flex min-h-[2.5rem] w-full items-center justify-start p-[0_1.25rem]"
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
        Ref.filterSortDrops.classList.toggle("!pointer-events-auto");
        Ref.filterSortDrops.classList.toggle("!opacity-100");
        Ref.filterSort.classList.toggle("!rounded-ee-sm");
        Ref.filterSort.classList.toggle("!rounded-es-sm");
        Ref.filterSort.classList.toggle("!z-[2]");
      }}
      class="filterOne relative z-0 flex min-h-[5rem] w-full max-w-full cursor-pointer items-center justify-between rounded-[--borderR] bg-[--light-gray] p-[0.625rem_1.25rem] @767:max-w-[18.75rem]"
    >
      <div>
        <p class="text-[--textGray]">Сортировать</p>
        <p>{Static.sorts.filter((item) => item.name == Static.sort)[0].text}</p>
      </div>
      <img src={openDrop} alt="" />
      <div
        ref="filterSortDrops"
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[12] overflow-hidden rounded-ee-[--borderR] rounded-es-[--borderR] opacity-0 [background:var(--light-gray)] [transform:translateY(100%)] [transition:all_0.2s_ease-in-out]"
      >
        {Static.sorts.map((item) => {
          return (
            <div
              onclick={() => {
                Static.sort = item.name;
                Func.updateFilter();
              }}
              class="flex min-h-[2.5rem] w-full items-center justify-start p-[0_1.25rem]"
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
      class="relative z-0 flex min-h-[5rem] w-full max-w-full cursor-pointer items-center justify-between rounded-[--borderR] bg-[--light-gray] p-[0.625rem_1.25rem] @767:max-w-[18.75rem]"
    >
      <div>
        <p>{`${Static.chooseLanguage?.engName} (${Static.chooseLanguage?.origName})`}</p>
      </div>
      <img src={openDrop} alt="" />
    </div>
  );
};

const RenderFilters = () => {
  return (
    <div class="mt-5 flex flex-col gap-[0.9375rem] @767:flex-row">
      <div class="relative flex w-full max-w-full cursor-pointer items-center gap-[0.9375rem] @767:max-w-[18.75rem]">
        <RenderTypeFilter />
      </div>
      <div class="relative flex w-full max-w-full cursor-pointer items-center gap-[0.9375rem] @767:max-w-[18.75rem]">
        <RenderSortFilter />
        <div
          onclick={(e) => {
            e.target.classList.toggle("rotate-180");
            Static.order == 1 ? (Static.order = -1) : (Static.order = 1);
            Func.updateFilter();
          }}
          class="h-full cursor-pointer"
        >
          <img src={order} alt="Сортировать" class="block" />
        </div>
      </div>
      <div class="relative flex w-full max-w-full cursor-pointer items-center gap-[0.9375rem] @767:max-w-[18.75rem]">
        <RenderLanguageFilter />
      </div>
    </div>
  );
};

const RenderAskInput = () => {
  return (
    <div class="relative flex flex-col gap-5 @767:flex-row">
      <div class="relative order-[1] w-full before:absolute before:left-5 before:top-4 before:h-[1.5625rem] before:w-[1.5625rem] before:![background-size:100%_100%] before:[background:url(/contents/svg/questions/search_icon.svg)] before:[content:''] @767:order-none">
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
          class="text[--white] m-[0_auto] h-[3.4375rem] w-full rounded-[1.875rem] border-none bg-[#2b3040] pl-[3.75rem] text-[1rem] [background-position:left_1.25rem_bottom_1.25rem] [transition:0.5s] placeholder:text-[#9198b3] focus:scale-100 focus:outline-none focus:[border:0.0625rem_solid_var(--border)] focus:placeholder:text-transparent"
          type="text"
          placeholder="Поиск по вопросам"
        />
      </div>
      <button
        class="btn !relative !z-[1] !flex !h-[3.4375rem] !w-full !items-center !justify-center !overflow-hidden !text-center !text-[1rem] !font-extrabold !uppercase !leading-[3.4375rem] !text-[--white] @767:!max-w-[18.75rem]"
        onclick={() => {
          if (!front.Variable.Auth) {
            Fn.initOne("modalAuthtorization", {});
          } else {
            Fn.initOne("modalAskQuestion", {});
          }
        }}
      >
        задать вопрос
      </button>
    </div>
  );
};

const RenderChatGpt = () => {
  return (
    <div class="relative z-0 mb-5 flex max-w-[19.375rem] items-center justify-between gap-[0.625rem] rounded-[--borderR] bg-[--prestige-blue] p-[0.9375rem]">
      {/* avatar */}
      <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
        <img
          class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
          src={avatarGpt}
        />
        <img
          class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
          src={frameDefault}
        />
        <img
          class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-white p-[0.1875rem]"
          src={teamLogo}
        />
      </div>
      {/* right */}
      <div>
        <div class="mb-5 flex items-center justify-between">
          <p class="text-[1rem] font-bold leading-[1.125rem]">ChatGPT</p>
          <div class="flex gap-[0.9375rem]">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.cemassistant"
              onclick={Fn.link}
            >
              <img
                src={playMarket}
                alt="playMarket"
                class="questions__gpt-app"
              />
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/by/app/cem-assistant/id6448629326"
              onclick={Fn.link}
            >
              <img src={appStore} alt="appStore" class="questions__gpt-app" />
            </a>
          </div>
        </div>
        <button class="btn font-bold">Спросить Chat GPT</button>
      </div>
    </div>
  );
};

const RenderNotFound = () => {
  return (
    <div class="not_found col-span-full w-full">
      <img src={notFound} alt="Нет записей" />
      Нет записей
    </div>
  );
};

const RenderQuestion = ({ item, index }) => {
  return (
    <div
      key={item.id}
      class="relative h-auto w-full cursor-pointer rounded-[1rem] bg-[--prestige-blue] p-5 [transition:0.5s] [border:0.0625rem_solid_transparent] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] hover:scale-[0.98] hover:bg-transparent hover:outline-none hover:[border:0.0625rem_solid_var(--border)] @767:w-[48.6%] @767:max-w-none @767:p-[1.875rem] @1024:w-[49%] @1240:w-full @1240:max-w-[25rem] @1240:p-[1.25rem] @1240:!pt-[0.625rem]"
      onclick={async () => {
        let url = front.Services.functions.makeUrlEvent(`questions/${item.id}`);

        Events.question = await Fn.event(url, Static.questionListener);
        Fn.linkChange(`/questions/show/${item.id}`);
      }}
      init={($el: any) => {
        if (index == Static.records?.length - 1) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
              if (entry.isIntersecting) {
                observer.unobserve($el);
                let skip = { ...Static.makeFilter };
                skip.action = "skip";
                skip.skip = Static.records.length;
                let res = await front.Services.functions.sendApi(
                  "/api/questions",
                  skip,
                );
              }
            });
          });
          observer.observe($el);
        }
      }}
    >
      <div class="relative">
        <div class="relative flex h-auto w-auto">
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={
                item.author?.avatar?.name
                  ? `/assets/upload/avatar/${item.author.avatar?.name}`
                  : avatarDefault
              }
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={
                item.author?.frame?.name
                  ? `/contents/images/lenta/${item.author.frame?.name}`
                  : frameDefault
              }
            />
            {item.author?.status?.team ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={item.author?.status?.team ? teamLogo : null}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    {item.author?.statistics?.level}
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      item.online
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
          <div class="absolute left-20 top-5 mb-2 block leading-[24px]">
            <span class="inline text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
              {item?.author?.nickname}
            </span>
          </div>
        </div>
        <div class="btn_border-wrap absolute right-0 top-0 h-auto !w-[4.6rem] cursor-default">
          <button class="btn_border !h-[1.6875rem] !text-[0.75rem] !font-semibold">
            {item.language?.origName}
          </button>
        </div>
      </div>
      <div
        class={[
          "mt-[0.625rem] flex h-[4.6875rem] min-w-full max-w-[20.625rem] cursor-pointer items-center overflow-hidden text-ellipsis text-[1.125rem] font-medium @1240:min-w-[auto] [&:hover_span]:!bg-clip-text [&:hover_span]:[-webkit-text-fill-color:transparent] [&:hover_span]:[background:linear-gradient(56.57deg,#2973ff_0%,#8846d3_51.56%,#ff22ac_105.28%)]",
          item.title?.length < 15 && item.text
            ? "!flex-col !items-start"
            : null,
        ]}
      >
        <span class="overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
          {item.title}
        </span>
        {item.title.length < 15 && item.text ? (
          <span class="overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
            {item.text}
          </span>
        ) : null}
      </div>
      <div class="flex h-[3.875rem] items-center justify-around text-[0.8125rem] text-[#838ba3] [&_span]:inline-flex [&_span]:gap-[0.625rem]">
        <span>
          <i class="i i-comment"></i>
          {item.statistics.answers}
        </span>
        <span>
          <i class="i i-faq"></i>
          {item.statistics.views}
        </span>
        <span>
          {front.Services.functions.timeStampToDate(
            item.showDate,
            undefined,
            true,
          )}
        </span>
      </div>
      <div class="btn_border-wrap text-center">
        <button
          // href={`/questions/show/${item._id}`}
          class=" btn_border"
          onclick={(e) => {
            // e.stopPropagation();
            // let data = {
            //   action: "answer",
            //   authorId: "63c7f6063be93e984c962b75",
            //   text: item.text,
            //   questionId: item.id,
            // };
            // front.Services.functions.sendApi("/api/answers/create", data);
          }}
        >
          Ответить
        </button>
      </div>
    </div>
  );
};

const TurnOffFilters = () => {
  Ref.filterTypeDrops.classList.remove("!opacity-100");
  Ref.filterTypeDrops.classList.remove("!pointer-events-auto");
  Ref.filterType.classList.remove("!rounded-ee-sm");
  Ref.filterType.classList.remove("!rounded-es-sm");
  Ref.filterType.classList.remove("!z-[2]");
  Ref.filterSortDrops.classList.remove("!pointer-events-auto");
  Ref.filterSortDrops.classList.remove("!opacity-100");
  Ref.filterSort.classList.remove("!rounded-ee-sm");
  Ref.filterSort.classList.remove("!rounded-es-sm");
  Ref.filterSort.classList.remove("!z-[2]");
};

export default function () {
  return (
    <div
      onclick={(e) => {
        if (!e.target.closest(".filterOne")) {
          TurnOffFilters();
        }
      }}
    >
      <div
        id="questions"
        class="before:fixed before:right-0 before:top-1/2 before:h-[25rem] before:w-[25rem] before:bg-[#8989bb] before:blur-[18.75rem] before:[content:''] before:[background-image:linear-gradient(315deg,#8989bb_0%,#a5a4cb_74%)] before:[transform:translate(-50%,-50%)] after:fixed after:left-[-16.875rem] after:top-[-4.375rem] after:z-[-1] after:h-full after:w-full after:bg-no-repeat after:opacity-[0.7] after:![background-size:100%_100%] after:[background:url(/contents/svg/questions/line.svg)] after:[content:'']"
      >
        <div class="wrapper wrapper_padding">
          <div class="pt-5">
            <RenderTitle />
            {/* card */}
            <RenderChatGpt />
            {/* ask question & search */}
            <RenderAskInput />
            {/* filters */}
            <RenderFilters />

            <div class="relative mx-auto mt-[0.9375rem] flex max-w-full flex-wrap items-center justify-between gap-[0.75rem] pb-[6.25rem] @1240:mt-5 @1240:grid @1240:gap-[1.25rem] @1240:[grid-template-columns:repeat(auto-fit,25rem)]">
              {Static.records?.length ? (
                Static.records?.map((item: any, index: number) => {
                  return <RenderQuestion item={item} index={index} />;
                })
              ) : (
                <RenderNotFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
