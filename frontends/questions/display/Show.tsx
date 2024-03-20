import { Cemjsx, Events, Fn, Func, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";
import notFound from "@svg/icon/notFound.svg";

Static.showComments = "Показать комментарии";
let image = `/contents/images/lenta/avatar_default.png`;

const RenderVideo = function () {
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
          <i class="i i-play3" ref="mainPlay"></i>
        </div>
      </div>
      <div class="video-wrapper">
        <div
          class="video-timeline"
          ref="videoTimeLine"
          onclick={(e: any) => {
            let timeLineWidth = Ref.videoTimeLine.clientWidth;
            Ref.video.currentTime =
              (e.offsetX / timeLineWidth) * Ref.video.duration;
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
            <span ref="progressTime">
              {Func.formatTime(Static.currentTime)}
            </span>
            <div class="video-timeline__progressbar" ref="progressBar"></div>
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
                    e.currentTarget.classList.replace(
                      "i-volume-mute",
                      "i-volume-medium",
                    );
                  } else {
                    Ref.video.volume = 0.0;
                    e.currentTarget.classList.replace(
                      "i-volume-medium",
                      "i-volume-mute",
                    );
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
                  Ref.volume.classList.replace(
                    "i-volume-medium",
                    "i-volume-mute",
                  );
                } else {
                  Ref.volume.classList.replace(
                    "i-volume-mute",
                    "i-volume-medium",
                  );
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
              <ul class="speed-tools" ref="speedOptions">
                {Static.speedOptions.map((item) => {
                  return (
                    <li
                      class={[
                        "speed-tools__item",
                        Static.activeSpeed == item.value
                          ? "speed-tools__item_active"
                          : null,
                      ]}
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
                  class={[
                    "speed-tools__item",
                    Static.activeSpeed == 1 ? "speed-tools__item_active" : null,
                  ]}
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
                  Ref.videoContainer.classList.toggle(
                    "video-container_fullscreen",
                  );
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
        src="/contents/video/yan.MOV"
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

const RenderUser = () => {
  return (
    <div id="user">
      <a class="relative flex h-auto w-auto" href="#">
        <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
          <img
            class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
            src={
              Static.record.author.avatar?.name
                ? `/assets/upload/avatar/${Static.record.author.avatar?.name}`
                : image
            }
          />
          <img
            class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
            src={
              Static.record.author.frame?.name
                ? `/contents/images/lenta/${Static.record.author.frame?.name}`
                : frameDefault
            }
          />
          {Static.record.author.status?.team ? (
            <img
              class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
              src={Static.record.author.status?.team ? teamLogo : null}
            />
          ) : (
            <div>
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <img class="h-full" src={leveGray} />
                <span class="text-[0.75rem absolute left-1/2 top-1/2 font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                  {Static.record.author.statistics.level}
                </span>
              </div>
            </div>
          )}
        </div>
        <div class="absolute left-20 top-5 mb-2 block leading-[24px]">
          <span class="inline text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
            {Static.record.author.nickname}
          </span>
        </div>
      </a>
    </div>
  );
};

const RenderNotFound = () => {
  return (
    <div class="not_found col-span-full w-full">
      <img src={notFound} alt="Нет записей" />
      Нет записей
    </div>
  );
};

const RenderAddAnswer = () => {
  return (
    <div ref={`ans${Static.record.id}`} class="answer">
      <textarea
        class="answer__field"
        cols="20"
        rows="10"
        value={Static.text}
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
              text: Static.text,
              questionId: Static.record.id,
            };
            Static.text = "";
            front.Services.functions.sendApi("/api/answers/create", data);
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

const RenderStatistic = () => {
  return (
    <div class="questions__item_statistic questions-show__statistic">
      <span>
        <i class="i i-comment"></i>
        {Static.record.statistics.answers}
      </span>
      <span class="questions-show__statistic_view">
        <i class="i i-faq"></i>
        {Static.record.statistics.views}
      </span>
      <span>{`${front.Services.functions.timeStampToDate(Static.record.showDate, ".")} ${Func.addNull(Func.getDate(Static.record.showDate).getHours())}:${Func.addNull(Func.getDate(Static.record.showDate).getMinutes())}`}</span>
      {!Static.record.closed ? (
        <div class="questions__item-open btn_border-wrap">
          <button
            onclick={(e: any) => {
              Static.open == "Ответить"
                ? (Static.open = "Отменить")
                : (Static.open = "Ответить");
              Ref[`ans${Static.record.id}`].classList.toggle("answer_active");
            }}
            class="btn_border"
          >
            {Static.open}
          </button>
        </div>
      ) : null}
    </div>
  );
};

const RenderAnswer = ({ answer }) => {
  return (
    <div
      class={[
        "questions-show__item",
        answer.best ? "questions-show__item_best" : null,
      ]}
    >
      <div class="user-comment__item">
        <a class="avatar" href="">
          <div class="avatar__icon">
            <img
              class="avatar__photo"
              src={
                answer.author.avatar?.name
                  ? `/assets/upload/avatar/${answer.author.avatar?.name}`
                  : image
              }
            />
            <img
              class="avatar__frame"
              src={
                answer.author.frame?.name &&
                answer.author.frame?.name != "default.svg"
                  ? `/contents/images/lenta/${answer.author.frame?.name}`
                  : frameDefault
              }
            />
            {answer.author.status?.team ? (
              <img
                class="avatar__team"
                src={answer.author.status?.team ? teamLogo : null}
              />
            ) : (
              <div>
                <div class="avatar__level">
                  <img src={leveGray} />
                  <span>{answer.author.statistics.level}</span>
                </div>
              </div>
            )}
          </div>
          <div class="user-comment__avatar_info-big">
            <div class="user-comment__avatar_name-big">
              {answer.author.nickname}
            </div>
            <div class="user-comment__avatar_time">{`${front.Services.functions.timeStampToDate(answer.showDate, ".")} ${Func.addNull(Func.getDate(answer.showDate).getHours())}:${Func.addNull(Func.getDate(answer.showDate).getMinutes())}`}</div>
          </div>
        </a>
        <div class="user-comment__body-big">
          {/* {} */}
          {/* <span>{answer.text}</span> */}
          <span html={answer.text}></span>
          {answer.media.map((item) => {
            return item.type == "image" ? (
              <img
                src={`/assets/upload/answers/${item.mediaName}`}
                alt={item.type}
                class="user-comment__media"
              />
            ) : item.type == "video" ? (
              // <RenderVideo src={`/assets/upload/answers/${item.name}`} />
              {}
            ) : null;
          })}
          <div
            class="user-comment__answer questions-show__tell"
            onclick={(e) => {
              let elemr = Ref.answerList.childNodes;
              for (let i = 0; i < elemr.length; i++) {
                for (let y = 0; y < elemr[i].childNodes.length; y++) {
                  if (
                    elemr[i].childNodes[y].firstChild?.nextSibling?.nextSibling
                  ) {
                    elemr[i].childNodes[
                      y
                    ].firstChild.nextSibling.nextSibling.style =
                      "display: none";
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
                text: Static.textCom,
                answerId: answer.id,
              };
              front.Services.functions.sendApi(
                `/api/answers/${answer.id}/comment`,
                data,
              );
            }}
          >
            <img src={sendMessage} />
          </button>
        </div>
        {answer.statistics.comments > 0 ? (
          <div class="answer__comments">
            <button
              onclick={(e) => {
                let el = e.currentTarget;
                let elemComments =
                  el.parentElement.parentElement.parentElement.lastChild;

                if (elemComments.style.display == "none") {
                  Static.showComments = "Скрыть комментарии";
                  elemComments.style = "display: block";
                } else {
                  Static.showComments = "Показать комментарии";
                  elemComments.style = "display: none";
                }
              }}
            >{`${Static.showComments} (${answer.statistics.comments})`}</button>
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
                fetch(
                  `/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`,
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                  },
                );
              }}
            />
            <span>{answer.statistics.rating}</span>
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
                fetch(
                  `/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`,
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                  },
                );
              }}
            />
          </div>
          <div
            class="user-comment__settings"
            onclick={() => {
              let records = [];
              records.push({
                name: "Поделиться",
                func: Func.share,
              });
              if (front.Variable.myInfo.id == Static.record.author.id) {
                !Static.record.closed
                  ? records.push({
                      name: "Выбрать лучшим",
                      func: () => Func.bestAnswer(answer.id),
                    })
                  : null;
              }
              if (front.Variable.myInfo.id == answer.author.id) {
                records.push({
                  name: "Удалить",
                  func: Func.deleteQuestion,
                });
              }

              Fn.initOne("modalTools", { records });
            }}
          >
            <img src={points} />
          </div>
        </div>
      </div>
      <div class="questions-show__comments" style="display: none">
        {answer.comments?.map((comment) => {
          return (
            <div class="user-comment__item" style="margin: 0 10px">
              <a class="user-comment__avatar avatar" href="">
                <div class="avatar__icon">
                  <img
                    class="avatar__photo"
                    src={
                      comment.author.avatar?.name
                        ? `/assets/upload/avatar/${comment.author.avatar?.name}`
                        : image
                    }
                  />
                  <img
                    class="avatar__frame"
                    src={
                      comment.author.frame?.name &&
                      comment.author.frame?.name != "default.svg"
                        ? `/contents/images/lenta/${comment.author.frame?.name}`
                        : frameDefault
                    }
                  />
                  {comment.author.status?.team ? (
                    <img
                      class="avatar__team"
                      src={comment.author.status?.team ? teamLogo : null}
                    />
                  ) : (
                    <div>
                      <div class="avatar__level">
                        <img src={leveGray} />
                        <span>{comment.author.statistics.level}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div class="user-comment__avatar_info">
                  <div class="user-comment__avatar_name">
                    {comment.author.nickname}
                  </div>
                  <div class="user-comment__avatar_time">{`${front.Services.functions.timeStampToDate(comment.showDate, ".")} ${Func.addNull(Func.getDate(comment.showDate).getHours())}:${Func.addNull(Func.getDate(comment.showDate).getMinutes())}`}</div>
                </div>
              </a>
              <div class="user-comment__body">
                <span>{comment.text}</span>
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
                      fetch(
                        `/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`,
                        {
                          method: "POST",
                          headers: {
                            "content-type": "application/json",
                          },
                          body: JSON.stringify(data),
                        },
                      );
                    }}
                  />
                  <span>{comment.statistics.rating}</span>
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
                      fetch(
                        `/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`,
                        {
                          method: "POST",
                          headers: {
                            "content-type": "application/json",
                          },
                          body: JSON.stringify(data),
                        },
                      );
                    }}
                  />
                </div>
                <span
                  class="user-comment__answer"
                  onclick={(e) => {
                    let el = e.currentTarget;
                    el.parentElement.parentElement.lastChild.style =
                      "display: flex";
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
                      text: Static.textCom,
                    };
                    front.Services.functions.sendApi(
                      `/api/answers/${answer.id}/comments/${comment.id}/comment`,
                      data,
                    );
                    console.log("=86680c=", data);
                  }}
                >
                  <img src={sendMessage} />
                </button>
              </div>
              {comment.comments?.map((comm, index) => {
                return (
                  <div class="user-comment__item" style="margin: 0 10px">
                    <a class="user-comment__avatar avatar" href="">
                      <div class="avatar__icon">
                        <img
                          class="avatar__photo"
                          src={
                            comm.author.avatar?.name
                              ? `/assets/upload/avatar/${comm.author.avatar?.name}`
                              : image
                          }
                        />
                        <img
                          class="avatar__frame"
                          src={
                            comm.author.frame?.name
                              ? `/contents/images/lenta/${comm.author.frame?.name}`
                              : frameDefault
                          }
                        />
                        {comm.author.status?.team ? (
                          <img
                            class="avatar__team"
                            src={comm.author.status?.team ? teamLogo : null}
                          />
                        ) : (
                          <div>
                            <div class="avatar__level">
                              <img src={leveGray} />
                              <span>{comm.author?.statistics?.level}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div class="user-comment__avatar_info">
                        <div class="user-comment__avatar_name">
                          {comm.author.nickname}
                        </div>
                        <div class="user-comment__avatar_time">
                          {front.Services.functions.timeStampToDate(
                            comm.showDate,
                            ".",
                          )}
                        </div>
                      </div>
                    </a>
                    <div class="user-comment__body">
                      <span>{comm.text}</span>
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
                            fetch(
                              `/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`,
                              {
                                method: "POST",
                                headers: {
                                  "content-type": "application/json",
                                },
                                body: JSON.stringify(data),
                              },
                            );
                          }}
                        />
                        <span>{comm.statistics?.rating}</span>
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
                            fetch(
                              `/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`,
                              {
                                method: "POST",
                                headers: {
                                  "content-type": "application/json",
                                },
                                body: JSON.stringify(data),
                              },
                            );
                          }}
                        />
                      </div>
                      <span
                        class="user-comment__answer"
                        onclick={(e) => {
                          let elemr = Ref.commentList.childNodes;
                          for (let i = 0; i < elemr.length; i++) {
                            for (
                              let y = 0;
                              y < elemr[i].childNodes.length;
                              y++
                            ) {
                              elemr[i].childNodes[y].lastChild.style =
                                "display: none";
                            }
                          }

                          let el = e.currentTarget;
                          el.parentElement.parentElement.lastChild.style =
                            "display: flex;";
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
                          fetch(
                            `/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`,
                            {
                              method: "POST",
                              headers: {
                                "content-type": "application/json",
                              },
                              body: JSON.stringify(data),
                            },
                          );
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
};

export default function () {
  Fn.log("=d35a6a=", Static.record);
  if (!Static.record?.id) {
    return <div>не найдено</div>;
  }
  return (
    <div>
      <div class="pb-20">
        <div class="wrapper">
          <div class="mx-auto max-w-[53.125rem] pt-[3.125rem]">
            <RenderUser />
            <p class="pt-5 text-[1.125rem] font-semibold">
              {Static.record.title}
            </p>
            <p
              ref="itemText"
              class="pt-[0.9375rem] text-[1.125rem]"
              init={(e) =>
                front.Services.functions.editText(Static.record.text, e)
              }
            ></p>
            <RenderStatistic />
          </div>

          <div class="user-comment questions-show__answers">
            <RenderAddAnswer />

            {Static.record.answers?.length > 0 ? (
              <div
                class="user-comment__list questions-show__list"
                ref="answerList"
              >
                {Static.record.answers?.map((answer) => {
                  return <RenderAnswer answer={answer} />;
                })}
              </div>
            ) : (
              <RenderNotFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
