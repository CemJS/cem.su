import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dots from "@svg/questions/dots.svg";
import dislikeBtn from "@svg/profile/dislikeBtn.svg";
import likeBtn from "@svg/profile/likeBtn.svg";
import msg from "@svg/profile/msg.svg";
import eye from "@svg/profile/eye.svg";
import Cube3d from "./Cube3d";

Static.showPost = [];
// let showPost: object = {};

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
export default function () {
  // Fn.log('=dfbb06=', Static.record)
  return (
    <div style="width: 100%;">
      {Static.records?.map((item: any, key: number) => {
        // Fn.log('=b56954=', item)
        // showPost[key] = false;
        // let show + key = false;

        return (
          <div
            key={key}
            class="feed-card__item"
          >
            <div class="card-position">
              <div class="feed-card__item__header">
                <a
                  href={`/user/${item?.id}`}
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
                    <span>{Static.record?.nickname}</span>
                  </div>
                </a>
                <div class="questions-table__optional">
                  <div class="questions-table__optional__icon">
                    <img src={dots} />
                  </div>
                </div>
              </div>
              <div class="feed-card__item__body">
                {item?.media?.length > 1 ? (
                  <Cube3d />
                ) : (
                  <div class="feed-card__item__body__image-container">
                    <img src={`/assets/upload/posts/${item?.media[0]?.name}`} />
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
                            html={makeLinksClickable(item?.text, 'class="my-link"')}
                          ></p>
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span>
                          <div>{item?.text?.length > 51 ? item?.text?.slice(0, 51) + "..." : item?.text}</div>
                        </span>
                        <div>
                          <span
                            class="show-full-post"
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
                <span class="feed-card__statistic__date">{formatDate(item?.dateCreate)}</span>
                <div class="feed-card__statistic__item">
                  <div
                    style="display: flex;
                                                align-items: center;"
                  >
                    <div class="feed-card__statistic__item__btn dislike">
                      <img src={dislikeBtn} />
                    </div>
                    <div class="feed-card__statistic__item__counter">{item?.statistic?.rating}</div>
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
                    <span>{item?.statistic?.comments}</span>
                  </div>
                  <div class="feed-card__statistic__item__image">
                    <img
                      src={eye}
                      alt="msg"
                    />
                    <span>{item?.statistic?.view}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
