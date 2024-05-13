import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";

export default function () {
  if (!Static.record?.id) {
    return <div>не найдено</div>;
  }
  return (
    <div id="show">
      <div class="page">
        <div class="wrapper">
          <section class="flex gap-[1.5625rem] py-[1.5625rem]">
            <div class="h-20 w-20 min-w-[3.75rem] overflow-hidden rounded-[--borderR]">
              <img
                class="h-auto w-full"
                src={`/assets/upload/worldPress/${Static.record.icon}`}
              />
            </div>
            <div id="desc">
              <h2 class="pb-[5px] text-[clamp(1.5rem,2vw,2rem)] font-bold">
                {Static.record.title}
              </h2>
              <p>{Static.record.description}</p>
            </div>
          </section>

          <section id="item">
            <div class="@1050:grid flex grid-cols-2 flex-col gap-5 pb-[1.5625rem]">
              {Static.record.cover ? (
                <div>
                  <img
                    class="w-full"
                    src={`/assets/upload/worldPress/${Static.record.cover}`}
                  />
                </div>
              ) : Static.record.coverVideo ? (
                <iframe
                  id="startupVideoPlayer"
                  width="100%"
                  height="585px"
                  src={Static.record.coverVideo}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : null}

              <div class="relative">
                <div class="flex gap-[0.9375rem] pb-[0.9375rem]">
                  <div
                    class="absolute right-0 top-0 w-fit rounded-[--borderR] p-[0.625rem]
                  [background:var(--white)]"
                  >
                    <span class="!bg-clip-text text-[1.375rem] font-bold leading-[1.625rem] [-webkit-text-fill-color:transparent] [background:var(--mainGradient)]">
                      {Static.record.category}
                    </span>
                  </div>
                  <a
                    class="btn !px-[0.5rem] ![background:var(--darkBlueGradient)] @464:px-[1rem]"
                    href={Static.record.siteLink}
                    onclick={Fn.link}
                  >
                    Website
                  </a>
                  <a
                    class="btn !px-[0.5rem] ![background:var(--darkBlueGradient)] @464:px-[1rem]"
                    href={Static.record.whitePaperLink}
                    onclick={Fn.link}
                  >
                    WhitePaper
                  </a>
                </div>
                <div id="desc">
                  <h5 class="mb-[0.9375rem] text-[1.375rem] font-semibold leading-[1.625rem]">
                    Token sale:{" "}
                    {Static.record.dateIsKnow ? (
                      <span class="[border-bottom:0.0625rem_solid_var(--white)]">
                        TBA
                      </span>
                    ) : (
                      <span class="[border-bottom:0.0625rem_solid_var(--white)]">{`${front.Services.functions.timeStampToDate(Static.record.startDate, ".")} - ${front.Services.functions.timeStampToDate(Static.record.endDate, ".")}`}</span>
                    )}
                  </h5>
                  <ul class="flex flex-col gap-[0.9375rem] [&_li]:text-[1.125rem] [&_li]:font-normal [&_li]:leading-[1.5rem]">
                    <li>
                      Name:{" "}
                      <span class="ml-[5px] font-bold uppercase">
                        {Static.record.name}
                      </span>
                    </li>
                    {Static.record?.type ? (
                      <li>
                        Token type:{" "}
                        <span class="ml-[5px] font-bold uppercase">
                          {Static.record.type}
                        </span>
                      </li>
                    ) : null}
                    <li>
                      {`${Static.record.category} Token price:`}
                      <span class="ml-[5px] font-bold uppercase">{`1 ${Static.record.name} = ${Static.record.price} USD`}</span>
                    </li>
                    <li>
                      Tokens for sale:
                      <span class="ml-[5px] font-bold uppercase">{`${Static.record.targetSell?.toLocaleString()} token`}</span>
                    </li>

                    <li>
                      Total tokens:
                      <span class="ml-[5px] font-bold uppercase">{`${Static.record.totalSupply?.toLocaleString()} token`}</span>
                    </li>
                    <li>
                      Available for Token Sale:
                      <span class="ml-[5px] font-bold uppercase">{`${((Static.record.forSell / Static.record.totalSupply) * 100).toFixed(1)}%`}</span>
                    </li>
                    <li>
                      Accepts:
                      <span class="ml-[5px] font-bold uppercase">
                        {Static.record.sellType}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="pt-[50px]">
            <div
              class="mx-auto flex h-auto w-full max-w-[34.375rem] grid-cols-[1.5fr_1fr] flex-col items-center justify-center gap-[0.9375rem] rounded-[--borderR] p-[1.5625rem] [background:rgba(221,221,221,0.25)] [border:0.0625rem_solid_var(--border)] [transition:box-shadow_0.1s,transform_0.1s] @464:grid @464:h-[15.625rem]"
              ref="card"
              onmousemove={(e) => {
                const xVal = e.layerX;
                const yVal = e.layerY;
                const xRotation =
                  20 * ((xVal - Static.cardWidth / 2) / Static.cardWidth);
                const yRotation =
                  -20 * ((yVal - Static.cardHeight / 2) / Static.cardHeight);
                const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg) `;
                Ref.card.style.transform = string;
              }}
              onmouseout={(e) => {
                Ref.card.style.transform = `scale(1) rotateX(0) rotateY(0)`;
              }}
            >
              <div class="flex w-full flex-col items-center justify-center gap-[15px]">
                <span class="!bg-clip-text text-[clamp(2rem,2vw,2.375rem)] font-bold leading-[1] [-webkit-text-fill-color:transparent] [background:var(--mainGradient)]">
                  {Static.record.nowMoney && Static.record.nowMoney > 0
                    ? `$ ${Static.record.nowMoney}`
                    : "$0"}
                </span>
                <span style="font-size: 40px; font-weight: 600;">of</span>
                <span class="text-[clamp(2rem,2vw,2.375rem)] font-bold leading-[1]">
                  {Static.record.targetMoney
                    ? `$ ${Static.record.targetMoney}`
                    : "$0"}
                </span>
              </div>
              <div class="flex w-full items-center justify-center">
                <span class="relative text-[clamp(3rem,2vw,4rem)] font-bold leading-[4.75rem] before:absolute before:right-[-4.0625rem] before:content-['%']">
                  {Static.record?.targetMoney
                    ? Static.record?.targetMoney <= 0
                      ? "0%"
                      : Math.round(
                          ((Static.record.nowMoney && Static.record.nowMoney > 0
                            ? Static.record.nowMoney
                            : 0) *
                            100) /
                            Static.record.targetMoney,
                        )
                    : "0"}
                </span>
              </div>
            </div>
          </section>

          {Static.record.media?.length ? (
            <section class="pt-[25px]">
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
                          src={`/assets/upload/worldPress/${item.mediaName}`}
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
