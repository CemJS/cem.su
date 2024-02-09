import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";
import { Display } from "@elements/TeamSlider";
import test from "@images/events/test.jpg";
import test2 from "@images/events/test2.png";

export default function () {
  let currentTokenomica = -0;
  return (
    <div class="startaps_show effect_lines">
      <div class="page page_list">
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
              {Static.record.social?.length ? (
                <div class="social-networks pt-15">
                  {Static.record.social.map((item, index) => {
                    return (
                      <a
                        href={item.url}
                        onclick={Fn.link}
                        class="social-networks__item"
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
                  {Static.record.roadMap.map((item, index) => {
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
                  <div class="tokenomica__canvas">
                    <svg
                      class="tokenomica__chart"
                      width="500"
                      height="500"
                      viewBox="0 0 50 50"
                    >
                      {Static.record.Tokenomica.map((item, index) => {
                        return (
                          <circle
                            ref={`circle-${index}`}
                            class={[`tokenomica__unit-${index}`]}
                            r="15.9"
                            cx="50%"
                            cy="50%"
                            stroke-dasharray={`${item.value} 100`}
                            stroke-dashoffset={index == 0 ? "-0" : currentTokenomica}
                          >
                            {(currentTokenomica -= item.value)}
                          </circle>
                        );
                      })}
                    </svg>
                  </div>
                </div>
                <div class="tokenomica__desc">
                  {Static.record.Tokenomica.map((item, index) => {
                    return (
                      <div
                        onmouseover={() => {
                          Ref[`circle-${index}`].classList.add("hovered");
                        }}
                        onmouseout={() => {
                          Ref[`circle-${index}`].classList.remove("hovered");
                        }}
                        class="tokenomica__desc-item"
                      >
                        <div class={["tokenomica__desc-item-line", `tokenomica__desc-item-line-${index}`]}>
                          <span class={["tokenomica__desc-item-value", `tokenomica__desc-item-value-${index}`]}>{item.value}%</span>
                        </div>
                        <span class="tokenomica__desc-item-name">{item.descriptionShort}</span>
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
              <Display items={Static.record.team} />
              {/* <div class="startap__team_wrap">
                <button class="icoItem__btn icoItem__btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem__btn icoItem__btn_next">
                  <img src={next} />
                </button>
                <div class="buttonsShow">
                  <button
                    ref="next"
                    class="nextBtnEvents"
                    onclick={() => {
                      let gap = 13;
                      let slidesNum = Ref.gallery_container.children.length;
                      let itemWidth = Ref.gallery_container_slide.offsetWidth + gap;
                      let maxWidth = slidesNum * itemWidth;
                      if (Ref.gallery_container.scrollLeft < maxWidth) {
                        Ref.gallery_container.scrollLeft += itemWidth;
                      }
                    }}
                  >
                    <img
                      src={next}
                      alt=""
                    />
                  </button>
                  <button
                    ref="back"
                    class="prevBtnEvents"
                    onclick={() => {
                      let gap = 13;
                      let itemWidth = Ref.gallery_container_slide.offsetWidth + gap;

                      if (Ref.gallery_container.scrollLeft > 0) {
                        Ref.gallery_container.scrollLeft -= itemWidth;
                      }
                    }}
                  >
                    <img
                      src={back}
                      alt=""
                    />
                  </button>
                  <div class="slider-hidden">
                    <div
                      class="gallery-container"
                      ref="gallery_container"
                      onmousedown={(e) => {
                        Static.isDragging = true;
                        Static.startX = e.pageX;
                        Static.startScrollLeft = Ref.gallery_container.scrollLeft;
                      }}
                      onmousemove={(e) => {
                        if (!Static.isDragging) return;
                        // console.log('=ab8faf=',e.pageX - Static.startX)
                        e.preventDefault();
                        Ref.gallery_container.scrollLeft = Static.startScrollLeft - (e.pageX - Static.startX);
                      }}
                      onmouseup={() => {
                        Static.isDragging = false;
                      }}
                      ontouchstart={(e) => {
                        console.log("=d004e1=", e);
                        const firstTouch = e.touches[0];
                        Static.x1 = firstTouch.clientX;
                        Static.y1 = firstTouch.clientY;
                      }}
                      ontouchmove={(e) => {
                        if (!Static.x1 || !Static.y1) return false;
                        let x2 = e.touches[0].clientX;
                        let y2 = e.touches[0].clientY;
                        let xDiff = x2 - Static.x1;
                        let yDiff = y2 - Static.y1;
                        console.log("=cb2f82=", xDiff);

                        if (Math.abs(xDiff) > Math.abs(yDiff)) {
                          if (xDiff > -5) {
                            Ref.gallery_container.scrollLeft -= Ref.gallery_container_slide.offsetWidth + 16;
                          } else if (xDiff > 5) {
                            Ref.gallery_container.scrollLeft += Ref.gallery_container_slide.offsetWidth + 16;
                          }
                        }
                        Static.x1 = null;
                        Static.y1 = null;
                      }}
                    >
                      {Static.record.team.map((item) => {
                        return (
                          <div
                            ref="gallery_container_slide"
                            class=""
                          >
                            {
                              <div class="startap__team-item slider__item">
                                <div class="startap__team-item-img">
                                  <img src={`/assets/upload/worldPress/${item.photo}`}></img>
                                </div>
                                <span class="startap__team-item-name">{item.descriptionShort}</span>
                                <span class="startap__team-item-pos">{item.position}</span>
                              </div>
                            }
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <div class="startap__team-carousel slider">
                  <div class="slider__list-wrap">
                    <ul class="slider__list">
                      {Static.record.team.map((item, index) => {
                        return (
                          <div class="startap__team-item slider__item">
                            <div class="startap__team-item-img">
                              <img src={`/assets/upload/worldPress/${item.photo}`}></img>
                            </div>
                            <span class="startap__team-item-name">{item.descriptionShort}</span>
                            <span class="startap__team-item-pos">{item.position}</span>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div> */}
              {/* </div> */}
            </section>
          ) : null}

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
                          Fn.initOne("modalGallery", { records, activeIndex });
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
