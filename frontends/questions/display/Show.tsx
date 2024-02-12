import { Cemjsx, Events, Fn, Func, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";

const RenderVideo = function (src: any) {
  return (
    <div
      class="video-container "
      ref="videoContainer"
      onmousemove={(e) => {
        e.currentTarget.classList.add("video-container_showControlls");
      }}
      onmouseleave={() => {
        setTimeout(() => {
          Ref.videoContainer.classList.remove("video-container_showControlls");
        }, 300);
      }}
    >
      <div
        class="video-play"
        onclick={() => {
          Func.playAndPause(Ref.video);
        }}
        ondblclick={(e: any) => {
          if (e.clientX <= 250) {
            Ref.video.currentTime -= 5;
          }
          if (e.clientX >= 550) {
            Ref.video.currentTime += 5;
          }
        }}
      >
        <div class="video-play__icon">
          <i
            class="i i-play3"
            ref="mainPlay"
          ></i>
        </div>
      </div>
      <div class="video-wrapper">
        <div
          class="video-timeline"
          ref="videoTimeLine"
          onclick={(e: any) => {
            let timeLineWidth = Ref.videoTimeLine.clientWidth;
            Ref.video.currentTime = (e.offsetX / timeLineWidth) * Ref.video.duration;
          }}
          onmousedown={() => {
            Static.videoDragStart = true;
          }}
          onmousemove={(e: any) => {
            if (!Static.videoDragStart) return;
            Func.draggableProgressBar(e);
            Ref.progressTime.style.left = `${e.offsetX}px`;
          }}
        >
          <div class="video-timeline__area">
            <span ref="progressTime">{Func.formatTime(Static.currentTime)}</span>
            <div
              class="video-timeline__progressbar"
              ref="progressBar"
            ></div>
          </div>
        </div>

        <ul class="video-controls">
          <li class="video-options">
            <span class="video-icon">
              <i
                class="i i-volume-medium"
                ref="volume"
                onclick={(e) => {
                  if (!e.currentTarget.classList.contains("i-volume-medium")) {
                    Ref.video.volume = 0.5;
                    e.currentTarget.classList.replace("i-volume-mute", "i-volume-medium");
                  } else {
                    Ref.video.volume = 0.0;
                    e.currentTarget.classList.replace("i-volume-medium", "i-volume-mute");
                  }
                  Ref.volumeSlider.value = Ref.video.volume;
                }}
              ></i>
            </span>
            <input
              type="range"
              ref="volumeSlider"
              min="0"
              max="1"
              step="any"
              oninput={(e) => {
                Ref.video.volume = e.target.value;
                if (e.target.value == 0) {
                  Ref.volume.classList.replace("i-volume-medium", "i-volume-mute");
                } else {
                  Ref.volume.classList.replace("i-volume-mute", "i-volume-medium");
                }
              }}
            />
            <div class="video-options__timer">
              <span>{`${Static.currentTime ? Func.formatTime(Static.currentTime) : "00:00"} / ${Static.duration ? Func.formatTime(Static.duration) : "00:00"}`}</span>
            </div>
          </li>
          <li class="video-options">
            <span
              class="video-icon"
              ref="skipBackward"
              onclick={() => {
                Ref.video.currentTime -= 5;
              }}
            >
              <i class="i i-undo1"></i>
            </span>
            <span class="video-icon">
              <i
                class="i i-play3"
                ref="playAndPause"
                onclick={() => {
                  Func.playAndPause(Ref.video);
                }}
              ></i>
            </span>
            <span
              class="video-icon"
              ref="skipForward"
              onclick={() => {
                Ref.video.currentTime += 5;
              }}
            >
              <i class="i i-redo1"></i>
            </span>
          </li>
          <li class="video-options">
            <div
              class="video-options-speed"
              ref="speed"
              onclick={(e: any) => {
                e.currentTarget.classList.toggle("video-options-speed_active");
              }}
            >
              <span class="video-icon">
                <i class="i i-speed"></i>
              </span>
              <ul
                class="speed-tools"
                ref="speedOptions"
              >
                {Static.speedOptions.map((item) => {
                  return (
                    <li
                      class={["speed-tools__item", Static.activeSpeed == item.value ? "speed-tools__item_active" : null]}
                      onclick={() => {
                        Ref.video.playbackRate = item.value;
                        Static.activeSpeed = item.value;
                      }}
                    >
                      {`${item.value}x`}
                    </li>
                  );
                })}
                <li
                  class={["speed-tools__item", Static.activeSpeed == 1 ? "speed-tools__item_active" : null]}
                  onclick={() => {
                    Ref.video.playbackRate = 1;
                  }}
                >
                  Обычная
                </li>
              </ul>
            </div>
            <span
              class="video-icon"
              onclick={() => {
                Ref.video.requestPictureInPicture();
              }}
            >
              <i class="i i-onedrive"></i>
            </span>
            <span class="video-icon">
              <i
                ref="fullScreen"
                class="i i-share"
                onclick={(e) => {
                  Ref.videoContainer.classList.toggle("video-container_fullscreen");
                  if (document.fullscreenElement) {
                    Ref.fullScreen.classList.replace("i-user", "i-share");
                    return document.exitFullscreen();
                  }
                  Ref.fullScreen.classList.replace("i-share", "i-user");
                  Ref.videoContainer.requestFullscreen();
                }}
              ></i>
            </span>
          </li>
        </ul>
      </div>
      <video
        class="video"
        ref="video"
        src={src}
        onplay={() => {
          Ref.playAndPause.classList.replace("i-play3", "i-pause2");
          Ref.mainPlay.classList.replace("i-play3", "i-pause2");
          Ref.mainPlay.style.display = "none";
        }}
        onpause={() => {
          Ref.playAndPause.classList.replace("i-pause2", "i-play3");
          Ref.mainPlay.classList.replace("i-pause2", "i-play3");
          Ref.mainPlay.style.display = "block";
        }}
        ontimeupdate={(e: any) => {
          Func.timeUpdate(e);
        }}
        onloadeddata={(e: any) => {
          Static.duration = e.target.duration;
        }}
      ></video>
    </div>
  );
};

export default function () {
  if (!Static.record?.id) {
    return <div>не найдено</div>;
  }
  Static.showComments = "Показать комментарии";
  let image = `/contents/images/lenta/avatar_default.png`;
  return (
    <div>
      <div class="questions-show">
        <div class="wrapper">
          <div class="questions-show__container">
            <div class="questions__user">
              <a
                class="avatar"
                href="#"
              >
                <div class="avatar__icon">
                  <img
                    class="avatar__photo"
                    src={Static.record.authorDetails.avatar?.name ? `/assets/upload/avatar/${Static.record.authorDetails.avatar?.name}` : image}
                  />
                  <img
                    class="avatar__frame"
                    src={Static.record.authorDetails.frame?.name ? `/contents/images/lenta/${Static.record.authorDetails.frame?.name}` : frameDefault}
                  />
                  {Static.record.authorDetails.status?.team ? (
                    <img
                      class="avatar__team"
                      src={Static.record.authorDetails.status?.team ? teamLogo : null}
                    />
                  ) : (
                    <div>
                      <div class="avatar__level">
                        <img src={leveGray} />
                        <span>{Static.record.authorDetails.statistic.level}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div class="avatar__name">
                  <span>{Static.record.authorDetails.nickname}</span>
                </div>
              </a>
            </div>
            <p class="questions-show__title">{Static.record.title}</p>
            <p
              ref="itemText"
              class="questions-show__description"
              init={() => (Ref.itemText.innerHTML = Static.record.text)}
            ></p>
            <div class="questions__item_statistic questions-show__statistic">
              <span>
                <i class="i i-comment"></i>
                {Static.record.statistic.answer}
              </span>
              <span class="questions-show__statistic_view">
                <i class="i i-faq"></i>
                {Static.record.statistic.view}
              </span>
              <span>{front.Services.functions.timeStampToDate(Static.record.showDate, ".")}</span>
            </div>
          </div>

          <div class="user-comment questions-show__answers">
            <div class="answer">
              <textarea
                class="answer__field"
                cols="20"
                rows="10"
                oninput={(e) => {
                  Static.text = e.target.value;
                }}
              ></textarea>
              <div class="answer__btn-wrapper">
                <button
                  class="btn"
                  type="button"
                  onclick={() => {
                    let data = {
                      action: "insert",
                      author: "63c7f6063be93e984c962b75",
                      text: Static.text,
                      questionId: Static.record.id,
                      table: "Questions",
                      tableID: Static.record.id,
                      rating: 1,
                    };
                    fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(data),
                    });
                  }}
                >
                  Отправить
                </button>
              </div>
            </div>

            {Static.record.answers?.length > 0 ? (
              <div
                class="user-comment__list questions-show__list"
                ref="answerList"
              >
                {Static.record.answers?.map((answer) => {
                  return (
                    <div class="questions-show__item">
                      <div class="user-comment__item">
                        <a
                          class="user-comment__avatar avatar"
                          href=""
                        >
                          <div class="avatar__icon">
                            <img
                              class="avatar__photo"
                              src={answer.authorDetails.avatar?.name ? `/assets/upload/avatar/${answer.authorDetails.avatar?.name}` : image}
                            />
                            <img
                              class="avatar__frame"
                              src={answer.authorDetails.frame?.name && answer.authorDetails.frame?.name != "default.svg" ? `/contents/images/lenta/${answer.authorDetails.frame?.name}` : frameDefault}
                            />
                            {answer.authorDetails.status?.team ? (
                              <img
                                class="avatar__team"
                                src={answer.authorDetails.status?.team ? teamLogo : null}
                              />
                            ) : (
                              <div>
                                <div class="avatar__level">
                                  <img src={leveGray} />
                                  <span>{answer.authorDetails.statistic.level}</span>
                                </div>
                              </div>
                            )}
                          </div>
                          <div class="user-comment__avatar_info">
                            <div class="user-comment__avatar_name">{answer.authorDetails.nickname}</div>
                            <div class="user-comment__avatar_time">{front.Services.functions.timeStampToDate(answer.showDate, ".")}</div>
                          </div>
                        </a>
                        <div class="user-comment__body">
                          <span init={(e) => (e.innerHTML = answer.text)}></span>
                          {answer.media.map((item) => {
                            return item.type == "image" ? (
                              <img
                                src={`/assets/upload/answers/${item.name}`}
                                alt={item.type}
                                class="user-comment__media"
                              />
                            ) : item.type == "video" ? (
                              <RenderVideo src={`/assets/upload/answers/${item.name}`} />
                            ) : null;
                          })}
                          <div
                            class="user-comment__answer questions-show__tell"
                            onclick={(e) => {
                              let elemr = Ref.answerList.childNodes;
                              for (let i = 0; i < elemr.length; i++) {
                                for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                  if (elemr[i].childNodes[y].firstChild?.nextSibling?.nextSibling) {
                                    elemr[i].childNodes[y].firstChild.nextSibling.nextSibling.style = "display: none";
                                  }
                                }
                              }

                              let el = e.currentTarget;
                              el.parentElement.nextSibling.style = "display: flex";
                              el.parentElement.nextSibling.firstChild.firstChild.focus();
                            }}
                          >
                            Ответить
                          </div>
                        </div>
                        <div class="user-comment__comment user-comment__form">
                          <div class="user-comment__comment_field">
                            <textarea
                              rows="1"
                              data-max-height="200"
                              data-scroll-last="48"
                              oninput={(e) => {
                                Static.textCom = e.target.value;
                              }}
                            ></textarea>
                          </div>
                          <button
                            class="user-comment__comment_button"
                            onclick={() => {
                              let data = {
                                action: "insert",
                                // author: front.Variable.myInfo.id,
                                author: "63c7f6063be93e984c962b75",
                                text: Static.textCom,
                                table: "Answers",
                                tableID: answer.id,
                                rating: 1,
                              };
                              fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify(data),
                              });
                            }}
                          >
                            <img src={sendMessage} />
                          </button>
                        </div>
                        {answer.statistic.comments > 0 ? (
                          <div class="answer__comments">
                            <button
                              onclick={(e) => {
                                let el = e.currentTarget;
                                let elemComments = el.parentElement.parentElement.parentElement.lastChild;

                                if (elemComments.style.display == "none") {
                                  Static.showComments = "Скрыть комментарии";
                                  elemComments.style = "display: block";
                                } else {
                                  Static.showComments = "Показать комментарии";
                                  elemComments.style = "display: none";
                                }
                              }}
                            >{`${Static.showComments} (${answer.statistic.comments})`}</button>
                          </div>
                        ) : null}
                        <div class="user-comment__statistic comment-statistic">
                          <div class="comment-statistic__rating">
                            <img
                              src={dislike}
                              onclick={() => {
                                let data = {
                                  action: "update",
                                  author: "63c7f6063be93e984c962b75",
                                  rating: -1,
                                  type: "minus",
                                  answerId: answer.id,
                                };
                                fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                                  method: "POST",
                                  headers: { "content-type": "application/json" },
                                  body: JSON.stringify(data),
                                });
                              }}
                            />
                            <span>{answer.statistic.rating}</span>
                            <img
                              src={like}
                              onclick={() => {
                                let data = {
                                  action: "update",
                                  author: "63c7f6063be93e984c962b75",
                                  rating: 1,
                                  type: "plus",
                                  answerId: answer.id,
                                };
                                fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                                  method: "POST",
                                  headers: { "content-type": "application/json" },
                                  body: JSON.stringify(data),
                                });
                              }}
                            />
                          </div>
                          <div
                            class="user-comment__settings"
                            onclick={() => {
                              // Fn.initOne({
                              //   name: "modalTool",
                              //   ifOpen: (front) => {
                              //     setTimeout(() => {
                              //       front.clearData();
                              //     }, 500);
                              //   },
                              //   data: {
                              //     data: {
                              //       page: "comments",
                              //       id: answer.id,
                              //       collection: "Answers",
                              //       table: "Questions",
                              //       tableID: Static.record.id,
                              //       rating: -1,
                              //     },
                              //   },
                              // });
                              // console.log('=ee090b=', answer.id)
                              // let data = {
                              //   action: "remove",
                              //   id: answer.id,
                              //   table: "Questions",
                              //   tableID: Static.record.id,
                              //   rating: -1,
                              // }
                              // fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                              //   method: "POST",
                              //   headers: { "content-type": "application/json" },
                              //   body: JSON.stringify(data),
                              // })
                            }}
                          >
                            <img src={points} />
                          </div>
                        </div>
                      </div>
                      <div
                        class="questions-show__comments"
                        style="display: none"
                      >
                        {answer.commentsDetails?.map((comment) => {
                          return (
                            <div
                              class="user-comment__item"
                              style="margin: 0 10px"
                            >
                              <a
                                class="user-comment__avatar avatar"
                                href=""
                              >
                                <div class="avatar__icon">
                                  <img
                                    class="avatar__photo"
                                    src={comment.authorDetails.avatar?.name ? `/assets/upload/avatar/${comment.authorDetails.avatar?.name}` : image}
                                  />
                                  <img
                                    class="avatar__frame"
                                    src={
                                      comment.authorDetails.frame?.name && comment.authorDetails.frame?.name != "default.svg"
                                        ? `/contents/images/lenta/${comment.authorDetails.frame?.name}`
                                        : frameDefault
                                    }
                                  />
                                  {comment.authorDetails.status?.team ? (
                                    <img
                                      class="avatar__team"
                                      src={comment.authorDetails.status?.team ? teamLogo : null}
                                    />
                                  ) : (
                                    <div>
                                      <div class="avatar__level">
                                        <img src={leveGray} />
                                        <span>{comment.authorDetails.statistic.level}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div class="user-comment__avatar_info">
                                  <div class="user-comment__avatar_name">{comment.authorDetails.nickname}</div>
                                  <div class="user-comment__avatar_time">{front.Services.functions.timeStampToDate(comment.showDate, ".")}</div>
                                </div>
                              </a>
                              <div class="user-comment__body">
                                <span init={(e) => (e.innerHTML = comment.text)}></span>
                              </div>
                              <div class="user-comment__statistic comment-statistic">
                                <div class="comment-statistic__rating">
                                  <img
                                    src={dislike}
                                    onclick={() => {
                                      let data = {
                                        action: "update",
                                        author: "63c7f6063be93e984c962b75",
                                        rating: -1,
                                        type: "minus",
                                        id: comment.id,
                                      };
                                      fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                        method: "POST",
                                        headers: { "content-type": "application/json" },
                                        body: JSON.stringify(data),
                                      });
                                    }}
                                  />
                                  <span>{comment.rating}</span>
                                  <img
                                    src={like}
                                    onclick={() => {
                                      let data = {
                                        action: "update",
                                        author: "63c7f6063be93e984c962b75",
                                        rating: 1,
                                        type: "plus",
                                        id: comment.id,
                                      };
                                      fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                        method: "POST",
                                        headers: { "content-type": "application/json" },
                                        body: JSON.stringify(data),
                                      });
                                    }}
                                  />
                                </div>
                                <span
                                  class="user-comment__answer"
                                  onclick={(e) => {
                                    let el = e.currentTarget;
                                    el.parentElement.parentElement.lastChild.style = "display: flex";
                                  }}
                                >
                                  Ответить
                                </span>
                                <div
                                  class="user-comment__settings"
                                  onclick={() => {
                                    // Fn.initOne({
                                    //   name: "modalTool",
                                    //   ifOpen: (front) => {
                                    //     setTimeout(() => {
                                    //       front.clearData();
                                    //     }, 500);
                                    //   },
                                    //   data: {
                                    //     data: {
                                    //       page: "comments",
                                    //       id: comment.id,
                                    //       collection: "Comments",
                                    //       table: "Answers",
                                    //       tableID: answer.id,
                                    //       rating: -1,
                                    //     },
                                    //   },
                                    // });
                                    // let data = {
                                    //   action: "remove",
                                    //   id: comm.id,
                                    //   table: "Answer",
                                    //   tableID: answer.id,
                                    //   rating: -1,
                                    // }
                                    // fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                    //   method: "POST",
                                    //   headers: { "content-type": "application/json" },
                                    //   body: JSON.stringify(data),
                                    // })
                                  }}
                                >
                                  <img src={points} />
                                </div>
                              </div>
                              <div class="user-comment__comment user-comment__form">
                                <div class="user-comment__comment_field">
                                  <textarea
                                    rows="1"
                                    data-max-height="200"
                                    data-scroll-last="48"
                                    oninput={(e) => {
                                      Static.textCom = e.target.value;
                                    }}
                                  ></textarea>
                                </div>
                                <button
                                  class="user-comment__comment_button"
                                  onclick={() => {
                                    let data = {
                                      action: "insert",
                                      author: "63c7f6063be93e984c962b75",
                                      text: Static.textCom,
                                      table: "Answers",
                                      commentId: comment.id,
                                      rating: 1,
                                    };
                                    fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    });
                                  }}
                                >
                                  <img src={sendMessage} />
                                </button>
                              </div>
                              {Static.recordsCommentsInner?.map((comm, index) => {
                                if (comm.commentId != comment.id) {
                                  return;
                                }
                                return (
                                  <div
                                    class="user-comment__item"
                                    style="margin: 0 10px"
                                  >
                                    <a
                                      class="user-comment__avatar avatar"
                                      href=""
                                    >
                                      <div class="avatar__icon">
                                        <img
                                          class="avatar__photo"
                                          src={comm.authorDetails.avatar?.name ? `/assets/upload/avatar/${comm.authorDetails.avatar?.name}` : image}
                                        />
                                        <img
                                          class="avatar__frame"
                                          src={comm.authorDetails.frame?.name ? `/contents/images/lenta/${comm.authorDetails.frame?.name}` : frameDefault}
                                        />
                                        {comm.authorDetails.status?.team ? (
                                          <img
                                            class="avatar__team"
                                            src={comm.authorDetails.status?.team ? teamLogo : null}
                                          />
                                        ) : (
                                          <div>
                                            <div class="avatar__level">
                                              <img src={leveGray} />
                                              <span>{comm.authorDetails.statistic.level}</span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div class="user-comment__avatar_info">
                                        <div class="user-comment__avatar_name">{comm.authorDetails.nickname}</div>
                                        <div class="user-comment__avatar_time">{front.Services.functions.timeStampToDate(comm.showDate, ".")}</div>
                                      </div>
                                    </a>
                                    <div class="user-comment__body">
                                      <span init={(e) => (e.innerHTML = comm.text)}></span>
                                    </div>
                                    <div class="user-comment__statistic comment-statistic">
                                      <div class="comment-statistic__rating">
                                        <img
                                          src={dislike}
                                          onclick={() => {
                                            let data = {
                                              action: "update",
                                              author: "63c7f6063be93e984c962b75",
                                              rating: -1,
                                              type: "minus",
                                              id: comm.id,
                                            };
                                            fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                              method: "POST",
                                              headers: { "content-type": "application/json" },
                                              body: JSON.stringify(data),
                                            });
                                          }}
                                        />
                                        <span>{comm.statistic.rating}</span>
                                        <img
                                          src={like}
                                          onclick={() => {
                                            let data = {
                                              action: "update",
                                              author: "63c7f6063be93e984c962b75",
                                              rating: 1,
                                              type: "plus",
                                              id: comm.id,
                                            };
                                            fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                              method: "POST",
                                              headers: { "content-type": "application/json" },
                                              body: JSON.stringify(data),
                                            });
                                          }}
                                        />
                                      </div>
                                      <span
                                        class="user-comment__answer"
                                        onclick={(e) => {
                                          let elemr = Ref.commentList.childNodes;
                                          for (let i = 0; i < elemr.length; i++) {
                                            for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                              elemr[i].childNodes[y].lastChild.style = "display: none";
                                            }
                                          }

                                          let el = e.currentTarget;
                                          el.parentElement.parentElement.lastChild.style = "display: flex;";
                                          el.parentElement.parentElement.lastChild.firstChild.firstChild.focus();
                                        }}
                                      >
                                        Ответить
                                      </span>
                                      <div
                                        class="user-comment__settings"
                                        onclick={() => {
                                          // Fn.initOne({
                                          //   name: "modalTool",
                                          //   ifOpen: (front) => {
                                          //     setTimeout(() => {
                                          //       front.clearData();
                                          //     }, 500);
                                          //   },
                                          //   data: {
                                          //     data: {
                                          //       page: "comments",
                                          //       id: comm.id,
                                          //       collection: "Comments",
                                          //       table: "Answers",
                                          //       tableID: answer.id,
                                          //       rating: -1,
                                          //     },
                                          //   },
                                          // });
                                        }}
                                      >
                                        <img src={points} />
                                      </div>
                                    </div>
                                    <div class="user-comment__comment user-comment__form">
                                      <div class="user-comment__comment_field">
                                        <textarea
                                          rows="1"
                                          data-max-height="200"
                                          data-scroll-last="48"
                                          oninput={(e) => {
                                            Static.textCom = e.target.value;
                                          }}
                                        ></textarea>
                                      </div>
                                      <button
                                        class="user-comment__comment_button"
                                        onclick={() => {
                                          let data = {
                                            action: "insert",
                                            author: "63c7f6063be93e984c962b75",
                                            text: Static.textCom,
                                            table: "Answers",
                                            commentId: comment.id,
                                            rating: 1,
                                          };
                                          fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                            method: "POST",
                                            headers: { "content-type": "application/json" },
                                            body: JSON.stringify(data),
                                          });
                                        }}
                                      >
                                        <img src={sendMessage} />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
