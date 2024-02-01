import { Cemjsx, Fn, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";

export default function () {
  return (
    <div class="startaps_show effect_lines">
      <div class="wrapper">
        <div class="back">
          <div class="back_arrow">
            <a
              href="/startups"
              class="back_arrow"
              onclick={Fn.link}
            >
              <img src={back}></img>
            </a>
          </div>
          <div
            class="tool"
            onclick={() => {
              // Fn.initOne({
              //   name: "modalTool",
              //   ifOpen: (front) => {
              //     setTimeout(() => {
              //       front.clearData();
              //     }, 500);
              //   },
              // });
            }}
          >
            <span class="tool_item"></span>
            <span class="tool_item"></span>
            <span class="tool_item"></span>
          </div>
        </div>

        <h2 class="general_title">{Static.record.title}</h2>

        <section class="startap_info">
          <div class="startap_info_item startap_info_item_media">
            <div class="startap_info_cover">
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
            <div class="startap_box">
              <p class="startap_text">{Static.record.descriptionShort}</p>
            </div>
            <div class="startap_btns">
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
          <div class="startap_info_item startap_info_item_desc">
            <p class="startap_text">{Static.record.description}</p>
            {Static.record.social.length ? (
              <div class="startap_socials">
                {Static.record.social.map((item, index) => {
                  return (
                    <a
                      href={item.url}
                      onclick={Fn.link}
                      class="startap_socials_item"
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
          <section class="startap_roadmap">
            <h2 class="general_title">Дорожная карта</h2>
            {Static.record.roadMap.length && Static.record.roadMap[0].image ? (
              <div class="startap_roadmap_image">
                <img src={`/assets/upload/worldPress/${Static.record.roadMap[0].image}`} />
              </div>
            ) : (
              <div class="startap_roadmap_board">
                {Static.record.map((item, index) => {
                  return (
                    <div class="startap_roadmap_board_item">
                      <span class="text_important">{item.year}</span>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ) : null}

        {Static.record.tokenomica.length ? (
          <section class="startap_tokenomica">
            <h2 class="general_title">Токеномика</h2>
            <div class="tokenomica_board">
              <div class="tokenomica_pie">
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
              <div class="tokenomica_desc">
                {Static.record.tokenomica.map((item, index) => {
                  return (
                    <div class="tokenomica_desc_item">
                      <div class={["tokenomica_desc_item_line", `tokenomica_desc_item_line-${index}`]}>
                        <span class={["tokenomica_desc_item_value", `tokenomica_desc_item_value-${index}`]}>{item.value}%</span>
                      </div>
                      <span class="tokenomica_desc_item_name">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {Static.record.team.length ? (
          <section class="startap_team">
            <h2 class="general_title">Команда</h2>
            <div class="startap_team_wrap">
              <button class="icoItem_btn icoItem_btn_prev">
                <img src={back} />
              </button>
              <button class="icoItem_btn icoItem_btn_next">
                <img src={next} />
              </button>
              <div class="startap_team_carousel">
                {Static.record.team.map((item, index) => {
                  return (
                    <div class="startap_team_item">
                      <div class="startap_team_item_img">
                        <img src={`/assets/upload/worldPress/${item.foto}`}></img>
                      </div>
                      <span class="startap_team_item_name">{item.name}</span>
                      <span class="startap_team_item_pos">{item.position}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {Static.record.media.length ? (
          <section class="icoItem_gallery pt_25">
            <h2 class="often_title">Галерея</h2>
            <div class="icoItem_gallery_wrap pt_20">
              <button class="icoItem_btn icoItem_btn_prev">
                <img src={back} />
              </button>
              <button class="icoItem_btn icoItem_btn_next">
                <img src={next} />
              </button>
              <div class="icoItem_carousel">
                {Static.record.media.map((item, index) => {
                  return (
                    <div
                      class="icoItem_carousel_item"
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
  );
}
