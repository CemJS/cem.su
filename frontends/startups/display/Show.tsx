import { Cemjsx, Fn, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";
// import HeaderBack from "./Show";

export default function () {
  return (
    <div class="startaps_show effect_lines">
      <div class="page">
        <div class="wrapper wrapper_padding">
          <h2 class="general__title">{Static.record.title}</h2>

          <section class="startap__info">
            <div class="startap__info-item startap__info-item-media">
              <div class="startap__info_cover">
                {Static.record.cover ? (
                  <img src={`/assets/upload/worldPress/${Static.record.cover}`}></img>
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
              <div class="startap__box">
                <p class="startap__text">{Static.record.descriptionShort}</p>
              </div>
              <div class="startap__btns">
                <a
                  onclick={Fn.link}
                  href={Static.record.whitePaperLink}
                  class={["btn", Static.record.whitePaperLink ? "btn_gradient" : "btn_disable"]}
                >
                  <span>WhitePaper</span>
                </a>
                <a
                  onclick={Fn.link}
                  class={["btn", Static.record.siteLink ? "btn_gradient" : "btn_disable"]}
                  href={Static.record.siteLink}
                >
                  <span>WebSite</span>
                </a>
              </div>
            </div>
            <div class="startap__info-item startap__info-item-desc">
              <p class="startap_text">{Static.record.description}</p>
              {Static.record.social.length ? (
                <div class="startap__socials">
                  {Static.record.social.map((item, index) => {
                    return (
                      <a
                        href={item.url}
                        onclick={Fn.link}
                        class="startap__socials-item"
                      >
                        <img
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
            <section class="startap__roadmap">
              <h2 class="general__title">Дорожная карта</h2>
              {Static.record.roadMap.length && Static.record.roadMap[0].image ? (
                <div class="startap__roadmap-image">
                  <img src={`/assets/upload/worldPress/${Static.record.roadMap[0].image}`} />
                </div>
              ) : (
                <div class="startap__roadmap-board">
                  {Static.record.map((item, index) => {
                    return (
                      <div class="startap__roadmap-board-item">
                        <span class="text_important">{item.year}</span>
                        <p>{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          ) : null}

          {Static.record.Tokenomica?.length ? (
            <section class="startap__tokenomica">
              <h2 class="general__title">Токеномика</h2>
              <div class="tokenomica__board">
                <div class="tokenomica__pie">
                  <svg
                    width="230"
                    height="140"
                  >
                    <rect
                      x="5"
                      y="5"
                      width="220"
                      height="130"
                      fill="skyblue"
                      stroke="steelblue"
                      stroke-width="5"
                    />
                  </svg>
                </div>
                <div class="tokenomica__desc">
                  {Static.record.Tokenomica.map((item, index) => {
                    return (
                      <div class="tokenomica__desc-item">
                        <div class={["tokenomica__desc-item-line", `tokenomica__desc-item-line-${index}`]}>
                          <span class={["tokenomica__desc-item-value", `tokenomica__desc-item-value-${index}`]}>{item.value}%</span>
                        </div>
                        <span class="tokenomica__desc-item-name">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}

          {Static.record.team?.length ? (
            <section class="startap__team">
              <h2 class="general__title">Команда</h2>
              <div class="startap__team_wrap">
                <button class="icoItem__btn icoItem__btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem__btn icoItem__btn_next">
                  <img src={next} />
                </button>
                <div class="startap__team-carousel">
                  {Static.record.team.map((item, index) => {
                    return (
                      <div class="startap__team-item">
                        <div class="startap__team-item-img">
                          <img src={`/assets/upload/worldPress/${item.foto}`}></img>
                        </div>
                        <span class="startap__team-item-name">{item.descriptionShort}</span>
                        <span class="startap__team-item-pos">{item.position}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}

          {Static.record.media?.length ? (
            <section class="icoItem__gallery pt_25">
              <h2 class="general__title">Галерея</h2>
              <div class="icoItem__gallery_wrap pt_20">
                <button class="icoItem__btn icoItem__btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem__btn icoItem__btn_next">
                  <img src={next} />
                </button>
                <div class="icoItem__carousel">
                  {Static.record.media.map((item, index) => {
                    return (
                      <div
                        class="icoItem__carousel-item"
                        onclick={() => {
                          // Fn.initOne({
                          //   name: "modalGallery", ifOpen: (front) => {
                          //     setTimeout(() => {
                          //       front.clearData()
                          //     }, 500);
                          //   }
                          // })
                          // cross({ records: Static.record.media })
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
