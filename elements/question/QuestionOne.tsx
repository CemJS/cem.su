import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

export default function ({
  item,
  index,
  skipUrl = "/api/questions",
  link,
}: {
  item: any;
  index: number;
  skipUrl?: string;
  link?: string;
}) {
  return (
    <div
      key={item.id}
      class="relative h-auto w-full cursor-pointer rounded-[1rem] bg-[--prestige-blue] p-5 [border:0.0625rem_solid_transparent] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:0.5s] hover:scale-[0.98] hover:bg-transparent hover:outline-none hover:[border:0.0625rem_solid_var(--border)] @767:w-[48.6%] @767:max-w-none @767:p-[1.875rem] @1024:w-[49%] @1240:w-full @1240:max-w-[25rem] @1240:p-[1.25rem] @1240:!pt-[0.625rem]"
      onclick={async () => {
        // Func.getQuestion(item.id);
        // Fn.clearData();
        Fn.linkChange(`/question/show/${item.id}`, { link });
      }}
      init={($el: any) => {
        // if ((item.id = "6601828fffbbd9f5a898715a")) {
        //   $el.scrollIntoView();
        // }
        if (index == Static.questions?.length - 1) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
              if (entry.isIntersecting) {
                observer.unobserve($el);
                let skip = { ...Static.makeFilter };
                skip.skip = Static.questions.length;
                let res = await front.Services.functions.sendApi(skipUrl, skip);
              }
            });
          });
          observer.observe($el);
        }
      }}
    >
      <div class="relative">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/${item?.author.nickname}`}
          class="relative inline-flex h-auto w-auto"
        >
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
        </a>
        <div class="btn_border-wrap absolute right-0 top-0 h-auto !w-[4.6rem] cursor-default">
          <button class="btn_border !h-[1.6875rem] !text-[0.75rem] !font-semibold hover:bg-[--black-gray]">
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
        <span class="inline-flex items-center gap-1">
          <i class="i i-chat-bubble-left-right"></i>
          {item.statistics.answers}
        </span>
        <span class="inline-flex items-center gap-1">
          <i class="i i-eye"></i>
          {item.statistics.views}
        </span>
        <span class="inline-flex items-center gap-1">
          <i class="i i-clock"></i>
          {front.Services.functions.timeStampToDate(
            item.showDate,
            undefined,
            true,
          )}
        </span>
      </div>
      <div class="btn_border-wrap text-center">
        <button
          // href={`/question/show/${item._id}`}
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
          {front.Variable?.words?.qa?.toAnswer}
        </button>
      </div>
    </div>
  );
}
