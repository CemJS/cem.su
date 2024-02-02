import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";

export default function () {
  if (!Static.record?.id) {
    return <div>не найдено</div>;
  }

  return (
    <div class="ico_show effect_lines effect_figure">
      <div class="page page_list">
        <div class="wrapper wrapper_padding">
          <section class="icoItem__header">
            <div class="icoItem__header-icon">
              <img src={`/assets/upload/worldPress/${Static.record.icon}`} />
            </div>
            <div class="icoItem__header-desc">
              <h2 class="main__title">{Static.record.title}</h2>
              <p>{Static.record.description}</p>
            </div>
          </section>

          <section class="icoItem">
            <div class="icoItem__info">
              {Static.record.cover ? (
                <div class="icoItem__info_cover">
                  <img src={`/assets/upload/worldPress/${Static.record.cover}`} />
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

              <div class="icoItem__info-desc">
                <div class="icoItem__info-desc-item">
                  <div class="icoItem__category">
                    <span class=" text_important">{Static.record.category}</span>
                  </div>
                  <a
                    class="btn btn_gradient"
                    href={Static.record.siteLink}
                    onclick={Fn.link}
                  >
                    <span>Website</span>
                  </a>
                  <a
                    class="btn btn_gradient"
                    href={Static.record.whitePaperLink}
                    onclick={Fn.link}
                  >
                    <span>WhitePaper</span>
                  </a>
                </div>
                <div class="icoItem__info-desc-item">
                  <h5 class="icoItem__info-desc-title">
                    Token sale:{" "}
                    {Static.record.dateIsKnow ? (
                      <span class="ml_10">TBA</span>
                    ) : (
                      <span class="ml_10">{`${front.Services.functions.timeStampToDate(Static.record.startDate, ".")} - ${front.Services.functions.timeStampToDate(Static.record.endDate, ".")}`}</span>
                    )}
                  </h5>
                  <ul class="token__list">
                    <li>
                      Name: <span class="ttu bold ml_5">{Static.record.name}</span>
                    </li>
                    {Static.record?.type ? (
                      <li>
                        Token type: <span class="ttu bold ml_5">{Static.record.type}</span>
                      </li>
                    ) : null}
                    <li>
                      {`${Static.record.category} Token price:`}
                      <span class="ttu bold ml_5">{`1 ${Static.record.name} = ${Static.record.price} USD`}</span>
                    </li>
                    <li>
                      Tokens for sale:
                      <span class="ttu bold ml_5">{`${Static.record.targetSell?.toLocaleString()} token`}</span>
                    </li>

                    <li>
                      Total tokens:
                      <span class="ttu bold ml_5">{`${Static.record.totalSupply?.toLocaleString()} token`}</span>
                    </li>
                    <li>
                      Available for Token Sale:
                      <span class="ttu bold ml_5">{`${((Static.record.forSell / Static.record.totalSupply) * 100).toFixed(1)}%`}</span>
                    </li>
                    <li>
                      Accepts:<span class="ttu bold ml_5">{Static.record.sellType}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="icoItem__tallage pt_50">
            <div
              class="icoItem__tallage_wrap"
              ref="card"
              onmousemove={(e) => {
                const xVal = e.layerX;
                const yVal = e.layerY;
                const xRotation = 20 * ((xVal - Static.cardWidth / 2) / Static.cardWidth);
                const yRotation = -20 * ((yVal - Static.cardHeight / 2) / Static.cardHeight);
                const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg) `;
                Ref.card.style.transform = string;
              }}
              onmouseout={(e) => {
                Ref.card.style.transform = `scale(1) rotateX(0) rotateY(0)`;
              }}
            >
              <div class="icoItem__tallage-item">
                <span class="text_important icoItem__tallage-text">{Static.record.nowMoney && Static.record.nowMoney > 0 ? `$ ${Static.record.nowMoney}` : "$0"}</span>
                <span style="font-size: 40px; font-weight: 600;">of</span>
                <span class="icoItem__tallage-text">{Static.record.targetMoney ? `$ ${Static.record.targetMoney}` : "$0"}</span>
              </div>
              <div class="icoItem__tallage-item">
                <span class="icoItem__tallage-item-percent">
                  {Static.record.targetMoney <= 0 ? "0%" : Math.round(((Static.record.nowMoney && Static.record.nowMoney > 0 ? Static.record.nowMoney : 0) * 100) / Static.record.targetMoney)}
                </span>
              </div>
            </div>
          </section>

          {Static.record.media?.length ? (
            <section class="icoItem__gallery pt_25">
              <h2 class="general__title">Галерея</h2>
              <div class="icoItem__gallery_wrap pt_20">
                {/* <button class="icoItem__btn icoItem__btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem__btn icoItem__btn_next">
                  <img src={next} />
                </button> */}
                <div class="icoItem__carousel">
                  {Static.record.media.map((item, index) => {
                    return (
                      <div
                        class="icoItem__carousel-item"
                        onclick={() => {
                          let records = Static.record.media;
                          let activeIndex = index;
                          // Fn.initOne({ name: "modalGallery", data: { records, activeIndex } })
                        }}
                      >
                        <img
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
