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
    <div ref={`ans${Static.record.id}`} class="hidden">
      <textarea
        class="w-full resize-none rounded-[0.9375rem] border-[0] bg-[#313543] p-5 text-[1rem] text-[--white]"
        cols="20"
        rows="10"
        value={Static.text}
        oninput={(e) => {
          Static.text = e.target.value;
        }}
      ></textarea>
      <div class="flex justify-center p-10">
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
    <div class="flex h-auto flex-wrap items-center justify-between pb-[0.625rem] text-[0.875rem] text-[#838ba3] ![border-color:var(--border-answer)] [border-bottom:0.0625rem_solid] [row-gap:1.25rem] @767:col-[1/span_2] @767:h-[3.875rem] @767:text-[0.8125rem] [&_span]:flex [&_span]:gap-[0.625rem]">
      <span>
        <i class="i i-comment"></i>
        {Static.record.statistics.answers}
      </span>
      <span>
        <i class="i i-faq"></i>
        {Static.record.statistics.views}
      </span>
      <span>{`${front.Services.functions.timeStampToDate(Static.record.showDate, ".")} ${Func.addNull(Func.getDate(Static.record.showDate).getHours())}:${Func.addNull(Func.getDate(Static.record.showDate).getMinutes())}`}</span>
      {!Static.record.closed ? (
        <div class="btn_border-wrap !m-0 !w-full @600:!w-[12.625rem] ">
          <button
            onclick={(e: any) => {
              Static.open == "Ответить"
                ? (Static.open = "Отменить")
                : (Static.open = "Ответить");
              Ref[`ans${Static.record.id}`].classList.toggle("!block");
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

const RenderAnswer = ({ answer, answerIndex }) => {
  return (
    <div
      class={[
        "mb-[0.9375rem] rounded-[0.9375rem] bg-[#313643]",
        answer.best
          ? "!order-[-1] !rounded-[15px] ![border:1px_solid_#00e741]"
          : null,
      ]}
    >
      <div class="relative p-[0_0.625rem]">
        <a class="relative flex h-auto w-auto" href="">
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={
                answer.author.avatar?.name
                  ? `/assets/upload/avatar/${answer.author.avatar?.name}`
                  : image
              }
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={
                answer.author.frame?.name &&
                answer.author.frame?.name != "default.svg"
                  ? `/contents/images/lenta/${answer.author.frame?.name}`
                  : frameDefault
              }
            />
            {answer.author.status?.team ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={answer.author.status?.team ? teamLogo : null}
              />
            ) : (
              <div>
                <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    {answer.author.statistics.level}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div class="absolute left-[4.5625rem] top-5 block w-[8.125rem]">
            <div class="text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
              {answer.author.nickname}
            </div>
            <div class="relative top-[-0.4375rem] inline-block text-[0.8125rem] font-medium leading-[1.375rem] text-[#b0b7cd]">{`${front.Services.functions.timeStampToDate(answer.showDate, ".")} ${Func.addNull(Func.getDate(answer.showDate).getHours())}:${Func.addNull(Func.getDate(answer.showDate).getMinutes())}`}</div>
          </div>
        </a>
        <div class="mb-[0.125rem] w-full pt-[0.375rem]">
          {/* {} */}
          {/* <span>{answer.text}</span> */}
          <span
            class="relative mx-auto block overflow-hidden break-words p-[0_0.5rem] text-[1rem] font-medium leading-[1.375rem] text-[--white]"
            html={answer.text}
          ></span>
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
            class="m-0 !ml-[0.3125rem] inline-block cursor-pointer !bg-clip-text pt-[0.625rem] text-[1rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
            onclick={(e) => {
              // let elemr = Ref.answerList.childNodes;
              // for (let i = 0; i < elemr.length; i++) {
              //   for (let y = 0; y < elemr[i].childNodes.length; y++) {
              //     if (
              //       elemr[i].childNodes[y].firstChild?.nextSibling?.nextSibling
              //     ) {
              //       elemr[i].childNodes[
              //         y
              //       ].firstChild.nextSibling.nextSibling.style =
              //         "display: none";
              //     }
              //   }
              // }
              Ref[`inputAns${answerIndex}`].classList.toggle("!flex");
              Ref[`inputAns${answerIndex}`].focus();
            }}
          >
            Ответить
          </div>
        </div>
        <div
          ref={`inputAns${answerIndex}`}
          class="relative z-[100] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
        >
          <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
            <textarea
              class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
              rows="1"
              data-max-height="200"
              data-scroll-last="48"
              value={Static.textAns}
              oninput={(e) => {
                Static.textAns = e.target.value;
              }}
            ></textarea>
          </div>
          <button
            class="m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]"
            onclick={() => {
              let data = {
                text: Static.textAns,
                answerId: answer.id,
              };
              Static.textAns = "";
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
          <div class="relative ml-[0.3125rem] mt-[1rem] pb-[0.625rem] [transform:translate(0,0)]">
            <button
              class="relative block min-h-[2rem] w-max cursor-pointer overflow-hidden rounded-[0.1875rem] border-none bg-transparent pl-[0.625rem] pr-[0.625rem] pt-0 text-center text-[0.875rem] font-semibold text-[--white] no-underline"
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
            >
              {`${Static.showComments} (${answer.statistics.comments})`}{" "}
              <div class="absolute top-0 z-[-1] inline-block h-[3.4375rem] w-[27.5rem] bg-[#3bade3] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_10%,#9844b7_70%,#ff357f_90%)] [transform:translateX(-20.625rem)]   [transition:transform_400ms_ease-in]"></div>
            </button>
          </div>
        ) : null}
        <div class="static flex items-center justify-end gap-[0.3125rem] pb-[0.375rem] @410:absolute @410:right-[0.9375rem] @410:top-[0.9375rem] @410:pb-0">
          <div class="flex w-16 items-center justify-between">
            <img
              class="h-5 w-5 cursor-pointer rounded-[50%]"
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
            <span class="relative ml-[0.125rem] min-w-[1.125rem] !bg-clip-text text-center text-[0.9375rem] font-bold tracking-[0.0625rem] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_25%,#9844b7_51%,#ff357f_100%)]">
              {answer.statistics.rating}
            </span>
            <img
              class="h-5 w-5 cursor-pointer rounded-[50%]"
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
            class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
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
      <div
        class="bg-[#242835] [border-radius:0_0_0.9375rem_0.9375rem]"
        style="display: none"
      >
        {answer.comments?.map((comment, commentIndex) => {
          return (
            <div class="relative p-[0_0.625rem]" style="margin: 0 10px">
              <a
                class="relative left-[-0.25rem] top-[0.625rem] flex h-[auto] w-[auto] no-underline"
                href=""
              >
                <div class="relative z-[1] ml-[0.625rem] h-[2.625rem] w-[2.25rem] min-w-[2.9375rem]">
                  <img
                    class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] [transform:translateX(-50%)_translateY(-50%)] [object-fit:cover]"
                    src={
                      comment.author.avatar?.name
                        ? `/assets/upload/avatar/${comment.author.avatar?.name}`
                        : image
                    }
                  />
                  <img
                    class="absolute left-1/2 top-[0] z-[2] h-full !w-auto [transform:translateX(-50%)]"
                    src={
                      comment.author.frame?.name &&
                      comment.author.frame?.name != "default.svg"
                        ? `/contents/images/lenta/${comment.author.frame?.name}`
                        : frameDefault
                    }
                  />
                  {comment.author.status?.team ? (
                    <img
                      class="absolute bottom-[0] right-0 z-[2] h-[1.0625rem] w-[1.0625rem] rounded-[50%] bg-[--white] p-[0.1875rem]"
                      src={comment.author.status?.team ? teamLogo : null}
                    />
                  ) : (
                    <div>
                      <div class="absolute !top-[auto] bottom-0 right-[0] z-[2] h-[1.125rem]">
                        <img class="h-full" src={leveGray} />
                        <span class="absolute left-1/2 top-1/2 text-[0.625rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                          {comment.author.statistics.level}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div class="absolute left-[3.75rem] top-[0.625rem] block w-[8.125rem]">
                  <div class="text-[0.625rem] leading-[1.25rem] text-[--white] [font-weight:600]">
                    {comment.author.nickname}
                  </div>
                  <div class="user-comment__avatar_time">{`${front.Services.functions.timeStampToDate(comment.showDate, ".")} ${Func.addNull(Func.getDate(comment.showDate).getHours())}:${Func.addNull(Func.getDate(comment.showDate).getMinutes())}`}</div>
                </div>
              </a>
              <div class="mb-[0.125rem] w-full pt-[0.875rem]">
                <span html={comment.text}></span>
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
                    Ref[`inputComment${commentIndex}`].classList.toggle(
                      "!flex",
                    );
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
              <div
                ref={`inputComment${commentIndex}`}
                class="relative z-[100] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
              >
                <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                  <textarea
                    class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                    rows="1"
                    data-max-height="200"
                    data-scroll-last="48"
                    value={Static.textCom}
                    oninput={(e) => {
                      Static.textCom = e.target.value;
                    }}
                  ></textarea>
                </div>
                <button
                  class="m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]"
                  onclick={() => {
                    let data = {
                      text: Static.textCom,
                    };
                    Static.textCom = "";
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
              {comment.comments?.map((comm, commIndex) => {
                return (
                  <div class="relative p-[0_0.625rem]" style="margin: 0 10px">
                    <a
                      class="relative left-[-0.25rem] top-[0.625rem] flex h-[auto] w-[auto] no-underline"
                      href=""
                    >
                      <div class="relative z-[1] ml-[0.625rem] h-[2.625rem] w-[2.25rem] min-w-[2.9375rem]">
                        <img
                          class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] [transform:translateX(-50%)_translateY(-50%)] [object-fit:cover]"
                          src={
                            comm.author.avatar?.name
                              ? `/assets/upload/avatar/${comm.author.avatar?.name}`
                              : image
                          }
                        />
                        <img
                          class="absolute left-1/2 top-[0] z-[2] h-full !w-auto [transform:translateX(-50%)]"
                          src={
                            comm.author.frame?.name
                              ? `/contents/images/lenta/${comm.author.frame?.name}`
                              : frameDefault
                          }
                        />
                        {comm.author.status?.team ? (
                          <img
                            class=""
                            src={comm.author.status?.team ? teamLogo : null}
                          />
                        ) : (
                          <div>
                            <div class="absolute !top-[auto] bottom-0 right-[0] z-[2] h-[1.125rem]">
                              <img class="h-full" src={leveGray} />
                              <span class="absolute left-1/2 top-1/2 text-[0.625rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                                {comm.author?.statistics?.level}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div class="absolute left-[3.75rem] top-[0.625rem] block w-[8.125rem]">
                        <div class="text-[0.625rem] leading-[1.25rem] text-[--white] [font-weight:600]">
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
                    <div class="mb-[0.125rem] w-full pt-[0.875rem]">
                      <span html={comm.text}></span>
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
                            console.log("=d7a607=", data);
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
                          Ref[
                            `inputCommentComm${commentIndex}${commIndex}`
                          ].classList.toggle("!flex");
                          Ref[
                            `inputCommentComm${commentIndex}${commIndex}`
                          ].focus();
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
                    <div
                      ref={`inputCommentComm${commentIndex}${commIndex}`}
                      class="user-comment__comment user-comment__form"
                    >
                      <div class="user-comment__comment_field">
                        <textarea
                          rows="1"
                          data-max-height="200"
                          data-scroll-last="48"
                          value={Static.textComCom}
                          oninput={(e) => {
                            Static.textComCom = e.target.value;
                          }}
                        ></textarea>
                      </div>
                      <button
                        class="user-comment__comment_button"
                        onclick={() => {
                          let data = {
                            quote: comm.id,
                            text: Static.textComCom,
                          };
                          console.log("=ab0e4f=", data);
                          Static.textComCom = "";
                          front.Services.functions.sendApi(
                            `/api/answers/${answer.id}/comments/${comment.id}/comment`,
                            data,
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
              html={Static.record.text}
            ></p>
            <RenderStatistic />
          </div>

          <div class="mx-auto mt-10 max-w-[53.125rem]">
            <RenderAddAnswer />

            {Static.record.answers?.length > 0 ? (
              <div
                class="relative mb-5 w-full rounded-[0.9375rem] bg-[#2b3040] p-[1.5625rem_0rem] !pb-0 !pt-[0.125rem] [border:0.0625rem_solid_#353c50]"
                ref="answerList"
              >
                {Static.record.answers?.map((answer, index) => {
                  return <RenderAnswer answer={answer} answerIndex={index} />;
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
