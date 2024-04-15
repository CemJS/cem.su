import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import leveGray from "@svg/lenta/level_gray.svg";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import points from "@svg/lenta/points.svg";

const RenderVideo = function ({ media, index }) {
  return (
    <div
      class="video-container "
      ref={`videoContainer${index}`}
      onmousemove={(e) => {
        e.currentTarget.classList.add("video-container_showControlls");
      }}
      onmouseleave={() => {
        setTimeout(() => {
          Ref[`videoContainer${index}`].classList.remove(
            "video-container_showControlls",
          );
        }, 300);
      }}
    >
      <div
        class="video-play"
        onclick={() => {
          Func.playAndPause(Ref[`video${index}`]);
        }}
        ondblclick={(e: any) => {
          if (e.clientX <= 250) {
            Ref[`video${index}`].currentTime -= 5;
          }
          if (e.clientX >= 550) {
            Ref[`video${index}`].currentTime += 5;
          }
        }}
      >
        <div class="video-play__icon">
          <i class="i i-play3" ref={`mainPlay${index}`}></i>
        </div>
      </div>
      <div class="video-wrapper">
        <div
          class="video-timeline"
          ref={`videoTimeLine${index}`}
          onclick={(e: any) => {
            let timeLineWidth = Ref[`videoTimeLine${index}`].clientWidth;
            Ref[`video${index}`].currentTime =
              (e.offsetX / timeLineWidth) * Ref[`video${index}`].duration;
          }}
          onmousedown={() => {
            Static.videoDragStart = true;
          }}
          onmousemove={(e: any) => {
            if (!Static.videoDragStart) return;
            Func.draggableProgressBar(e, index);
            Ref[`progressTime${index}`].style.left = `${e.offsetX}px`;
          }}
        >
          <div class="video-timeline__area">
            <span ref={`progressTime${index}`}>
              {Func.formatTime(Static[`currentTime${index}`])}
            </span>
            <div
              class="video-timeline__progressbar"
              ref={`progressBar${index}`}
            ></div>
          </div>
        </div>

        <ul class="video-controls">
          <li class="video-options">
            <span class="video-icon">
              <i
                class="i i-volume-medium"
                ref={`volume${index}`}
                onclick={(e) => {
                  if (!e.currentTarget.classList.contains("i-volume-medium")) {
                    Ref[`video${index}`].volume = 0.5;
                    e.currentTarget.classList.replace(
                      "i-volume-mute",
                      "i-volume-medium",
                    );
                  } else {
                    Ref[`video${index}`].volume = 0.0;
                    e.currentTarget.classList.replace(
                      "i-volume-medium",
                      "i-volume-mute",
                    );
                  }
                  Ref[`volumeSlider${index}`].value =
                    Ref[`video${index}`].volume;
                }}
              ></i>
            </span>
            <input
              type="range"
              ref={`volumeSlider${index}`}
              min="0"
              max="1"
              step="any"
              oninput={(e) => {
                Ref[`video${index}`].volume = e.target.value;
                if (e.target.value == 0) {
                  Ref[`volume${index}`].classList.replace(
                    "i-volume-medium",
                    "i-volume-mute",
                  );
                } else {
                  Ref[`volume${index}`].classList.replace(
                    "i-volume-mute",
                    "i-volume-medium",
                  );
                }
              }}
            />
            <div class="video-options__timer">
              <span>{`${Static[`currentTime${index}`] ? Func.formatTime(Static[`currentTime${index}`]) : "00:00"} / ${Static[`duration${index}`] ? Func.formatTime(Static[`duration${index}`]) : "00:00"}`}</span>
            </div>
          </li>
          <li class="video-options">
            <span
              class="video-icon"
              ref={`skipBackward${index}`}
              onclick={() => {
                Ref[`video${index}`].currentTime -= 5;
              }}
            >
              <i class="i i-undo1"></i>
            </span>
            <span class="video-icon">
              <i
                class="i i-play3"
                ref={`playAndPause${index}`}
                onclick={() => {
                  Func.playAndPause(Ref[`video${index}`]);
                }}
              ></i>
            </span>
            <span
              class="video-icon"
              ref={`skipForward${index}`}
              onclick={() => {
                Ref[`video${index}`].currentTime += 5;
              }}
            >
              <i class="i i-redo1"></i>
            </span>
          </li>
          <li class="video-options">
            <div
              class="video-options-speed"
              ref={`speed${media.mediaName}`}
              onclick={(e: any) => {
                e.currentTarget.classList.toggle("video-options-speed_active");
              }}
            >
              <span class="video-icon">
                <i class="i i-speed"></i>
              </span>
              <ul class="speed-tools" ref={`speedOptions${index}`}>
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
                        Ref[`video${index}`].playbackRate = item.value;
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
                    Ref[`video${index}`].playbackRate = 1;
                  }}
                >
                  Обычная
                </li>
              </ul>
            </div>
            <span
              class="video-icon"
              onclick={() => {
                Ref[`video${index}`].requestPictureInPicture();
              }}
            >
              <i class="i i-onedrive"></i>
            </span>
            <span class="video-icon">
              <i
                ref={`fullScreen${index}`}
                class="i i-share"
                onclick={(e) => {
                  Ref[`videoContainer${index}`].classList.toggle(
                    "video-container_fullscreen",
                  );
                  if (document.fullscreenElement) {
                    Ref[`fullScreen${index}`].classList.replace(
                      "i-user",
                      "i-share",
                    );
                    let scroll = Ref[`video${index}`].scrollTop;
                    console.log("=3f36f4=", scroll);
                    document.exitFullscreen();
                    setTimeout(() => {
                      window.scrollTo(0, scroll);
                    }, 200);
                  }
                  Ref[`fullScreen${index}`].classList.replace(
                    "i-share",
                    "i-user",
                  );
                  Ref[`videoContainer${index}`].requestFullscreen();
                }}
              ></i>
            </span>
          </li>
        </ul>
      </div>
      <video
        id={index}
        class="video"
        ref={`video${index}`}
        src={`/assets/upload/posts/${media?.mediaName}`}
        onplay={() => {
          Ref[`playAndPause${index}`].classList.replace("i-play3", "i-pause2");
          Ref[`mainPlay${index}`].classList.replace("i-play3", "i-pause2");
          Ref[`mainPlay${index}`].style.display = "none";
        }}
        onpause={() => {
          Ref[`playAndPause${index}`].classList.replace("i-pause2", "i-play3");
          Ref[`mainPlay${index}`].classList.replace("i-pause2", "i-play3");
          Ref[`mainPlay${index}`].style.display = "block";
        }}
        ontimeupdate={(e: any) => {
          Func.timeUpdate(e, index);
        }}
        onloadeddata={(e: any) => {
          Static[`duration${index}`] = e.target.duration;
        }}
      ></video>
    </div>
  );
};

const RenderStatistics = function ({ item }) {
  return (
    <ul class="mt-4 flex items-center justify-between">
      <li class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <i
            class="i i-likeFull"
            onclick={(e) => {
              e.currentTarget.classList.toggle("i_likes");
              Func.likePost(item.id);
            }}
          ></i>
          {item?.statistics.rating}
        </div>
        <div class="flex items-center gap-2">
          <i
            class="i i-dislikeFull"
            onclick={(e) => {
              e.currentTarget.classList.toggle("i_likes");
              Func.dislikePost(item.id);
            }}
          ></i>
          {item?.statistics.rating}
        </div>
      </li>
      <li class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <i class="i i-comments"></i>
          {item?.statistics.comments}
        </div>
        <div class="flex items-center gap-2">
          <i class="i i-eye"></i>
          {item?.statistics.view}
        </div>
      </li>
    </ul>
  );
};

const RenderPost = function ({ item, index }) {
  return (
    <div
      init={($el: any) => {
        // if ((item.id = "6601828fffbbd9f5a898715a")) {
        //   $el.scrollIntoView();
        // }
        if (index == Static.records?.length - 1) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
              if (entry.isIntersecting) {
                observer.unobserve($el);
                let skip = { ...Static.makeFilter };
                skip.skip = Static.records.length;
                let res = await front.Services.functions.sendApi(
                  "/api/posts",
                  skip,
                );
              }
            });
          });
          observer.observe($el);
        }
      }}
      class="mb-[1.2rem] rounded-[--borderR]"
    >
      <div class="relative flex gap-4 rounded-tl-[--borderR] rounded-tr-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <div
          id="user-circle"
          class="relative inline-block h-16 w-16 rounded-[50%]"
        >
          <img
            class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
            src={
              item.author?.avatar?.name
                ? `/assets/upload/avatar/${item.author.avatar?.name}`
                : avatarDefault
            }
          />
          <img
            class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
            src={
              item.author?.frame?.name
                ? `/contents/images/lenta/${item.author.frame?.name}`
                : frameDefault
            }
          />
          {item.author?.status?.team ? (
            <img
              class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
              src={item.author?.status?.team ? teamLogo : null}
            />
          ) : (
            <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
              <div class="relative flex h-full w-full items-center justify-center">
                <img class="h-full" src={leveGray} />
                <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                  {item.author?.statistics?.level}
                </span>
                <div
                  class={[
                    "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                    item.online
                      ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                      : null,
                  ]}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div class="flex w-full items-center justify-between">
          <span class="font-medium">{item?.author?.nickname}</span>
          {/* действия */}
          <div
            class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
            onclick={() => {
              let records = [];

              if (
                front.Variable.myInfo.id != item.author.id &&
                front.Variable.Auth
              ) {
                records.push({
                  name: "Подписаться",
                  func: () => Func.follow(item?.id),
                });
              }

              Fn.initOne("modalTools", {
                records,
                userId: item?.author.id,
                complainTo: {
                  name: "posts",
                  text: "пост",
                  id: item?.id,
                },
              });
            }}
          >
            <img src={points} />
          </div>
        </div>
      </div>

      {/* media */}
      <div class="relative w-full">
        {item?.media?.map((mediaItem) => {
          return mediaItem.type == "video" ? (
            <RenderVideo media={mediaItem} index={index} />
          ) : mediaItem.type == "audio" ? (
            <audio-player
              src="/contents/audio/test2.mp3"
              title="My media file2"
            ></audio-player>
          ) : mediaItem.type == "image" ? (
            <img
              class="w-full"
              src={`/assets/upload/posts/${mediaItem?.mediaName}`}
              alt=""
            />
          ) : (
            ""
          );
        })}
      </div>

      <div class="rounded-bl-[--borderR] rounded-br-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <div
          ref={`itemText${item?.id}`}
          html={item.text}
          id="text"
          class={[
            "w-full [&_a]:!bg-clip-text [&_a]:!text-transparent [&_a]:[background:--mainGradient] [&_p]:pb-4",
            item?.media?.length > 0 ? "line-clamp-1" : "",
          ]}
        ></div>
        {item?.media?.length > 0 ? (
          <div
            init={(e) => {
              Ref[`itemText${item?.id}`].scrollHeight <= 24
                ? e.classList.add("hidden")
                : e.classList.remove("hidden");
              window.addEventListener("resize", () => {
                Ref[`itemText${item?.id}`].scrollHeight <= 24
                  ? e.classList.add("hidden")
                  : !Static[`showItem${item.id}`]
                    ? e.classList.remove("hidden")
                    : null;
              });
            }}
            onclick={(e) => {
              Ref[`itemText${item?.id}`].classList.remove("line-clamp-1");
              Static[`showItem${item.id}`] = true;
              e.target.classList.add("hidden");
            }}
            class="inline-block cursor-pointer pl-[5px] font-medium text-[--polar-mist]"
          >
            Показать всё
          </div>
        ) : null}
        <RenderStatistics item={item} />
      </div>
    </div>
  );
};

export default function () {
  return (
    <div class="mx-auto w-full max-w-[900px]">
      {Static.records?.map((item, index) => {
        return (
          // item
          <RenderPost item={item} index={index} />
        );
      })}
    </div>
  );
}

{
  /* <video class="video" ref="video" src="/contents/video/yan.MOV"></video> */
}
{
  /* <div class="controlls">
    <button ref="play" onclick={() => { Func.playVideo(Ref[`video${index}`]) }}>
        <i class="i i-lock"></i>play
    </button>
    <button ref="pause" onclick={() => { Func.pauseVideo(Ref[`video${index}`]) }}>
        <i class="i i-lock"></i>pause
    </button>
    <button ref="stop" onclick={() => { Func.stopVideo(Ref[`video${index}`]) }}>
        <i class="i i-lock"></i>stop
    </button>
    <button ref="speedUp" onclick={Func.speedUpVideo()}>
        <i class="i i-lock"></i>Быстрее
    </button>
    <button ref="speedDown" onclick={Func.speedDownVideo()}>
        <i class="i i-lock"></i>Медленнее
    </button>
    <button ref="speedNormal" onclick={Func.speedNormalVideo()}>
        <i class="i i-lock"></i>Норма
    </button>
    <div>
        <input type="range" ref="volume" onclick={Func.volumeVideo()} />Звук
    </div>
</div> */
}
