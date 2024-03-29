import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";
import { Display } from "@elements/TeamSlider";
import test from "@images/events/test.jpg";
import test2 from "@images/events/test2.png";

let tokenomicaColorMap = {
  0: "#e7f700",
  1: "#a43cf9",
  2: "#ff9b00",
  3: "#1d7af8",
  4: "#ff6e6c",
  5: "violet",
  6: "rgb(61, 153, 61)",
  7: "red",
  8: "#ff357f",
  9: "#ffdead",
  10: "#800000",
  11: "#a7fc00",
  12: "#fff8e7",
  13: "#ff00ff",
};

let RenderSaveList = () => {
  return (
    <div id="saveList" class="stroke-[#a43cf9] [background:#a43cf9]">
      <div class="stroke-[#e7f700] [background:#e7f700]"></div>
      <div class="stroke-[#ff9b00] [background:#ff9b00]"></div>
      <div class="stroke-[#1d7af8] [background:#1d7af8]"></div>
      <div class="stroke-[#ff6e6c] [background:#ff6e6c]"></div>
      <div class="stroke-[violet] [background:violet]"></div>
      <div class="stroke-[rgb(61,153,61)] [background:rgb(61,153,61)]"></div>
      <div class="stroke-[red] [background:red]"></div>
      <div class="stroke-[#ff357f] [background:#ff357f]"></div>
      <div class="stroke-[#ffdead] [background:#ffdead]"></div>
      <div class="stroke-[#800000] [background:#800000]"></div>
      <div class="stroke-[#a7fc00] [background:#a7fc00]"></div>
      <div class="stroke-[#fff8e7] [background:#fff8e7]"></div>
      <div class="stroke-[#ff00ff] [background:#ff00ff]"></div>
    </div>
  );
};

export default function () {
  let currentTokenomica = -0;
  return (
    <div id="show">
      <RenderSaveList />
      <div class="page">
        <div class="wrapper">
          <h2 class="m-[0.625rem_0_1.5625rem_0] text-center text-[clamp(2rem,2vw,2.75rem)] font-bold leading-[3.625rem]">
            {Static.record.title}
          </h2>

          <section class="flex grid-cols-2 flex-col gap-[1.5625rem] @992:grid">
            <div class="flex flex-col gap-[1.5625rem] @992:gap-[0.9375rem]">
              <div class="mx-auto h-[21.875rem] max-w-[40.625rem] @992:mx-[unset]">
                {Static.record.cover ? (
                  <img
                    class="h-full w-full rounded-[--borderR] object-cover"
                    src={`/assets/upload/worldPress/${Static.record.cover}`}
                  ></img>
                ) : Static.record.coverVideo ? (
                  <iframe
                    class="social-video"
                    id="startupVideoPlayer"
                    width="100%"
                    height="400px"
                    src={Static.record.coverVideo}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                ) : null}
              </div>
              <div class="relative z-[1] overflow-hidden rounded-[--borderR] p-[0.9375rem] [box-shadow:0_0_16px_0_rgba(33,31,31,0.2)]">
                <div
                  id="bg"
                  class="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[rebeccapurple] blur-[3.75rem]"
                ></div>
                <p class="text-[1.125rem] font-normal leading-[1.5625rem]">
                  {Static.record.descriptionShort}
                </p>
              </div>
              <div class="flex gap-[0.9375rem]">
                <a
                  onclick={Fn.link}
                  href={Static.record.whitePaperLink}
                  class={[
                    "btn",
                    Static.record.whitePaperLink
                      ? "btn_gradient"
                      : "btn_disable",
                  ]}
                >
                  <span>WhitePaper</span>
                </a>
                <a
                  onclick={Fn.link}
                  class={[
                    "btn",
                    Static.record.siteLink ? "btn_gradient" : "btn_disable",
                  ]}
                  href={Static.record.siteLink}
                >
                  <span>WebSite</span>
                </a>
              </div>
            </div>
            <div class="flex flex-col gap-[1.5625rem] @992:flex-row">
              <p class="!h-auto overflow-y-scroll pr-[0.625rem] @992:h-[21.75rem]">
                {Static.record.description}
              </p>
              {Static.record.social?.length ? (
                <div class="flex flex-wrap justify-center gap-[1.5625rem] pt-[15px]">
                  {Static.record.social.map((item, index) => {
                    return (
                      <a
                        href={item.url}
                        onclick={Fn.link}
                        class="inline-flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-[--ellipse] [background:rgba(255,255,255,0.09)] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:all_0.3s_ease] hover:bg-transparent hover:[border:0.0625rem_solid_var(--border)] hover:[transform:scale(1.1)]"
                      >
                        <img
                          class="h-5"
                          src={`/contents/icons/social_networks/${item.channel}.svg`}
                          alt={item.channel}
                        />
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </section>

          {Static.record.roadMap?.length ? (
            <section>
              <h2 class="m-[0.625rem_0_1.5625rem_0] text-center text-[clamp(2rem,2vw,2.75rem)] font-bold leading-[3.625rem]">
                Дорожная карта
              </h2>
              {Static.record.roadMap.length &&
              Static.record.roadMap[0].image ? (
                <div class="flex items-center justify-center">
                  <img
                    class="h-full rounded-[--borderR]"
                    src={`/assets/upload/worldPress/${Static.record.roadMap[0].image}`}
                  />
                </div>
              ) : (
                <div class="grid grid-cols-4 gap-[1.5625rem]">
                  {Static.record.roadMap.map((item, index) => {
                    return (
                      <div class="flex flex-col gap-[0.9375rem] [&_span]:text-[1.75rem] [&_span]:font-bold [&_span]:leading-[2.25rem]">
                        <span class="bg-clip-text !text-[clamp(1rem,2vw,1.125rem)] !font-bold !leading-[1.375rem] [-webkit-text-fill-color:transparent] [background:var(--mainGradient)]">
                          {item.year}
                        </span>
                        <p class="text-[1.125rem] font-medium leading-[1.625rem]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          ) : null}

          {Static.record.tokenomica?.length ? (
            <section id="tokenomica">
              <h2 class="m-[0.625rem_0_1.5625rem_0] text-center text-[clamp(2rem,2vw,2.75rem)] font-bold leading-[3.625rem]">
                Токеномика
              </h2>
              <div class="flex grid-cols-2 flex-col items-center gap-[1.5625rem] rounded-[--borderR] bg-[--light-gray] p-[1.5625rem_1.5625rem_2.1875rem_1.5625rem] [box-shadow:0rem_0.3125rem_2_75rem_0rem_rgba(29,33,45,0.8)] @992:grid">
                <div id="pie">
                  <div id="canvas">
                    <svg
                      class="h-[18.75rem] w-[18.75rem] fill-[--light-navy]"
                      width="500"
                      height="500"
                      viewBox="0 0 50 50"
                    >
                      {Static.record.tokenomica.map((item, index) => {
                        return (
                          <circle
                            ref={`circle-${index}`}
                            class={[
                              `fill-none stroke-2 [transition:all_0.3s_ease] [animation-duration:1.5s] [animation-name:render] hover:stroke-[4] hover:opacity-80 stroke-[${tokenomicaColorMap[index]}]`,
                            ]}
                            r="15.9"
                            cx="50%"
                            cy="50%"
                            stroke-dasharray={`${item.value} 100`}
                            stroke-dashoffset={
                              index == 0 ? "-0" : currentTokenomica
                            }
                          >
                            {(currentTokenomica -= item.value)}
                          </circle>
                        );
                      })}
                    </svg>
                  </div>
                </div>
                <div class="flex flex-wrap justify-evenly [column-gap:1.875rem] [row-gap:2.5rem]">
                  {Static.record.tokenomica.map((item, index) => {
                    return (
                      <div
                        onmouseover={() => {
                          Ref[`circle-${index}`].classList.add("!opacity-80");
                          Ref[`circle-${index}`].classList.add("!stroke-[4]");
                        }}
                        onmouseout={() => {
                          Ref[`circle-${index}`].classList.remove(
                            "!opacity-80",
                          );
                          Ref[`circle-${index}`].classList.remove(
                            "!stroke-[4]",
                          );
                        }}
                        class="flex items-center gap-[0.625rem]"
                      >
                        <div
                          class={[
                            "relative block h-[0.3125rem] w-[3.125rem] rounded-[0.3125rem]",
                            `[background:${tokenomicaColorMap[index]}]`,
                          ]}
                        >
                          <span
                            class={[
                              "absolute bottom-[-1.5625rem] left-1/2 font-semibold [transform:translateX(-50%)]",
                              `text-[${tokenomicaColorMap[index]}]`,
                            ]}
                          >
                            {item.value}%
                          </span>
                        </div>
                        <span class="text-[1.125rem] font-medium leading-[1.625rem]">
                          {item.descriptionShort}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}

          {Static.record.team?.length ? (
            <section id="team">
              <h2 class="m-[0.625rem_0_1.5625rem_0] text-center text-[clamp(2rem,2vw,2.75rem)] font-bold leading-[3.625rem]">
                Команда
              </h2>
              <Display items={Static.record.team} />
            </section>
          ) : null}

          {Static.record.media?.length ? (
            <section id="gallery" class="pt-[25px]">
              <h2 class="m-[0.625rem_0_1.5625rem_0] text-center text-[clamp(2rem,2vw,2.75rem)] font-bold leading-[3.625rem]">
                Галерея
              </h2>
              <div class="relative pt-[20px]">
                {/* <button class="icoItem__btn icoItem__btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem__btn icoItem__btn_next">
                  <img src={next} />
                </button> */}
                <div class="flex flex-wrap justify-center gap-[0.9375rem] overflow-hidden">
                  {Static.record.media.map((item, index) => {
                    return (
                      <div
                        class="h-[21.875rem] w-[21.875rem] cursor-pointer"
                        onclick={() => {
                          let records = Static.record.media;
                          let activeIndex = index;
                          Fn.initOne("modalGallery", { records, activeIndex });
                        }}
                      >
                        <img
                          class="h-full w-full rounded-[--borderR] object-cover"
                          src={`/assets/upload/worldPress/${item.name}`}
                          alt="Gallery photo"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
