import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import photo from "@svg/personalPosts/photo.svg";
import video from "@svg/personalPosts/video.svg";
import audio from "@svg/personalPosts/audio.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dots from "@svg/questions/dots.svg";
import Cube3d from "../posts/Cube3d";
import dislikeBtn from "@svg/profile/dislikeBtn.svg";
import likeBtn from "@svg/profile/likeBtn.svg";
import msg from "@svg/profile/msg.svg";
import eye from "@svg/profile/eye.svg";

const callModal = () => {
  Fn.initOne("previewModal", {
    item: () => {
      let key = 1;
      let showPost = [];
      function formatDate(dateString: any) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return day + "." + month + "." + year;
      }
      const makeLinksClickable = (text: string, attribute: string) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, (url) => `<a href="${url}" rel="noreferrer" target="_blank" rel="nofollow noopener" ${attribute}>${url}</a>`);
      };
      return (
        <div
          key={key}
          class="feed-card__item"
        >
          <div class="card-position">
            <div class="feed-card__item__header">
              <a
                // href={`/user/${item?.id}`}
                href=""
                class="feed-card__avatar"
                style="padding-left: 0;"
              >
                <div class="feed-card__avatar__icon">
                  <img
                    class="c-avataricon__photo"
                    src={Static.record?.avatar?.name ? `/assets/upload/avatar/${Static.record?.avatar?.name}` : avatarDefault}
                  />
                  <img
                    class="c-avataricon__frame"
                    src={Static.record?.frame?.name ? `/contents/images/lenta/${Static.record?.frame?.name}` : defaultGray}
                  />
                  <div>
                    <div class="c-avataricon__level user_avatar_level">
                      <img src={leveGray} />
                      <span>{Static.record?.statistics?.level}</span>
                    </div>
                    <div
                      style="display: none;"
                      class="c-avataricon__status c-avataricon__status--online avatar_user_online"
                    ></div>
                    <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                  </div>
                </div>
                <div class="feed-card__avatar__name-user">
                  {/* <span>{Static.record?.nickname}</span> */}
                  <span>Nickname</span>
                </div>
              </a>
              <div class="questions-table__optional">
                <div class="questions-table__optional__icon">
                  <img src={dots} />
                </div>
              </div>
            </div>
            <div class="feed-card__item__body">
              {Static.data.media[0]?.media?.length > 1 ? (
                <Cube3d />
              ) : (
                <div class="feed-card__item__body__image-container">
                  <img src={`/assets/upload/posts/${Static.data.media[0]?.name}`} />
                </div>
              )}

              <div
                style="padding-left: 20px;
                                            padding-right: 20px;
                                            margin-left: 0;
                                             margin-right: 0;"
              >
                <span class="feed-card__item__body__text">
                  {Static.showPost[key] === true ? (
                    <div>
                      <span>
                        <p
                          class="feed-card__item__body__text feed-card__item__body__text_white-space"
                          html={makeLinksClickable(Static.data.text, 'class="my-link"')}
                        ></p>
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span>
                        <div>{Static.data.text.length > 51 ? Static.data.text.slice(0, 51) + "..." : Static.data.text}</div>
                      </span>
                      <div>
                        <span
                          class={["show-full-post", Static.data.text.length < 51 ? "hide" : null]}
                          onclick={() => {
                            Static.showPost[key] = true;
                          }}
                        >
                          Показать все
                        </span>
                      </div>
                    </div>
                  )}
                </span>
              </div>
            </div>
            <div
              style="padding-left: 20px;
                                            padding-right: 20px;
                                            margin-left: 0;
                                             margin-right: 0;"
              class="feed-card__statistic"
            >
              <span class="feed-card__statistic__date">20.01.2024</span>
              <div class="feed-card__statistic__item">
                <div
                  style="display: flex;
                                                align-items: center;"
                >
                  <div class="feed-card__statistic__item__btn dislike">
                    <img src={dislikeBtn} />
                  </div>
                  <div class="feed-card__statistic__item__counter">0</div>
                  <div class="feed-card__statistic__item__btn like">
                    <img src={likeBtn} />
                  </div>
                </div>
              </div>
              <div class="feed-card__statistic__item">
                <div class="feed-card__statistic__item__image">
                  <img
                    src={msg}
                    alt="msg"
                  />
                  <span>0</span>
                </div>
                <div class="feed-card__statistic__item__image">
                  <img
                    src={eye}
                    alt="msg"
                  />
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  });
};

export default function () {
  return (
    <div class="post-create">
      <h2>Создать/редактировать пост</h2>
      <form class="post-create__form">
        <div class="post-create__lang">
          <label>Ваш язык:</label>
          <span
            onclick={() => {
              Fn.initOne("modalLanguage", {
                full: true,
                callback: (lang) => {
                  Static.data.languageCode = lang.code;
                  Static.origName = lang.origName;
                },
              });
            }}
          >
            {Static.origName}
          </span>
        </div>
        <div class="post-create__friends">
          <input
            type="checkbox"
            id="friends"
            onclick={(e) => {
              Static.data.forFriends = e.target.checked;
            }}
          />
          <label for="friends">Только для друзей</label>
        </div>
        {Static.data?.media.length ? (
          <div class="post-create__files">
            {Static.data.media.map((item) => {
              return (
                <div class="post-create__video-preview">
                  <video src={`/assets/upload/posts/${item.name}`}></video>
                </div>
              );
            })}
          </div>
        ) : null}
        <div
          class="post-create__text"
          contenteditable="plaintext-only"
          onkeyup={(e) => {
            Static.data.text = e.target.textContent;
            Static.data?.text.length > 1 ? (Static.isValid = true) : (Static.isValid = false);
          }}
        />

        <div class="post-create__media">
          <label
            id="photo"
            class="post-create__media-item"
          >
            <img
              src={photo}
              alt=""
            />
            <input
              id="photo"
              ref="photo"
              type="file"
              accept=".jpg, .jpeg, .png, .gif, image/*"
              multiple="true"
              onclick={(e) => Fn.log("=193ffa=", e)}
            />
          </label>
          <label
            id="video"
            class="post-create__media-item"
          >
            <img
              src={video}
              alt=""
            />
            <input
              onchange={async (e) => {
                const files = [...e.target.files];
                let err = 0;
                files.forEach((file) => {
                  if (!(file.type.split("/")[0] == "video")) {
                    err++;
                  }
                });
                if (!err) {
                  files.forEach((file) => {
                    Func.uploadMedia(file, "video");
                  });
                } else {
                  Fn.initOne("alert", { type: "danger", text: "Неверный формат видео" });
                }

                e.preventDefault();
              }}
              id="video"
              ref="video"
              type="file"
              accept=".mp4, .avi, .mov, .mkv, .avi, .flv, video/*"
              multiple="true"
            />
          </label>
          <label
            id="audio"
            class="post-create__media-item"
          >
            <img
              src={audio}
              alt=""
            />
            <input
              onchange={async (e) => {
                const files = [...e.target.files];
                let err = 0;
                files.forEach((file) => {
                  if (!(file.type.split("/")[0] == "audio")) {
                    err++;
                  }
                });
                if (!err) {
                  files.forEach((file) => {
                    Func.uploadMedia(file, "audio");
                  });
                } else {
                  Fn.initOne("alert", { type: "danger", text: "Неверный формат аудио" });
                }

                e.preventDefault();
              }}
              id="audio"
              ref="audio"
              type="file"
              accept=".mp3, .wav, .aiff, .aac, .ogg, .wma, audio/*"
              multiple="true"
            />
          </label>
        </div>
        <div class="post-create__buttons">
          <div
            onclick={() => (Static.isValid ? callModal() : null)}
            class={["btn", "post-create__button", !Static.isValid ? "btn_reset" : null]}
          >
            <span>Предпросмотр</span>
          </div>
          <div
            onclick={async (e) => {
              if (Static.isValid) {
                Fn.log("=d03a2d=", Static.data);
                let res = await front.Services.functions.sendApi("/api/Posts", Static.data);
                console.log("=b433f7=", res);
              } else {
                Fn.initOne("alert", { text: "Заполните пост", type: "danger" });
              }
            }}
            class={["btn", "post-create__button", !Static.isValid ? "btn_reset" : null]}
          >
            <span>Создать</span>
          </div>
        </div>
      </form>
    </div>
  );
}
