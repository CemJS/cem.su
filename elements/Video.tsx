import { Cemjsx, Func, Ref, Static, front } from "cemjs-all";

Static.videoDragStart = false;

Static.activeSpeed = 1;
Static.speedOptions = [
  {
    value: 2,
  },
  {
    value: 1.5,
  },
  {
    value: 0.75,
  },
  {
    value: 0.5,
  },
];

export default function ({ src, key }) {
  return (
    <div
      class="video-container "
      ref={`videoContainer${key}`}
      onmousemove={(e) => {
        e.currentTarget.classList.add("video-container_showControlls");
      }}
      onmouseleave={() => {
        setTimeout(() => {
          Ref[`videoContainer${key}`].classList.remove(
            "video-container_showControlls",
          );
        }, 300);
      }}
    >
      <div
        class="video-play"
        onclick={() => {
          Func.playAndPause(Ref[`video${key}`]);
        }}
        ondblclick={(e: any) => {
          if (e.clientX <= 250) {
            Ref[`video${key}`].currentTime -= 5;
          }
          if (e.clientX >= 550) {
            Ref[`video${key}`].currentTime += 5;
          }
        }}
      >
        <div class="video-play__icon !bg-[rgba(0,0,0,0.6117647059)]">
          <i class="i i-play" ref={`mainPlay${key}`}></i>
        </div>
      </div>
      <div class="video-wrapper">
        <div
          class="video-timeline"
          ref={`videoTimeLine${key}`}
          onclick={(e: any) => {
            let timeLineWidth = Ref[`videoTimeLine${key}`].clientWidth;
            Ref[`video${key}`].currentTime =
              (e.offsetX / timeLineWidth) * Ref[`video${key}`].duration;
          }}
          onmousedown={() => {
            Static.videoDragStart = true;
          }}
          onmousemove={(e: any) => {
            if (!Static.videoDragStart) return;
            Func.draggableProgressBar(e, key);
            Ref[`progressTime${key}`].style.left = `${e.offsetX}px`;
          }}
        >
          <div class="video-timeline__area">
            <span ref={`progressTime${key}`}>
              {Func.formatTime(Static[`currentTime${key}`])}
            </span>
            <div
              class="video-timeline__progressbar"
              ref={`progressBar${key}`}
            ></div>
          </div>
        </div>

        <ul class="video-controls">
          <li class="video-options">
            <span class="video-icon">
              <i
                class="i i-speaker-wave"
                ref={`volume${key}`}
                onclick={(e) => {
                  if (!e.currentTarget.classList.contains("i-volume-medium")) {
                    Ref[`video${key}`].volume = 0.5;
                    e.currentTarget.classList.replace(
                      "i-volume-mute",
                      "i-volume-medium",
                    );
                  } else {
                    Ref[`video${key}`].volume = 0.0;
                    e.currentTarget.classList.replace(
                      "i-volume-medium",
                      "i-volume-mute",
                    );
                  }
                  Ref[`volumeSlider${key}`].value = Ref[`video${key}`].volume;
                }}
              ></i>
            </span>
            <input
              type="range"
              ref={`volumeSlider${key}`}
              min="0"
              max="1"
              step="any"
              oninput={(e) => {
                Ref[`video${key}`].volume = e.target.value;
                if (e.target.value == 0) {
                  Ref[`volume${key}`].classList.replace(
                    "i-volume-medium",
                    "i-volume-mute",
                  );
                } else {
                  Ref[`volume${key}`].classList.replace(
                    "i-volume-mute",
                    "i-volume-medium",
                  );
                }
              }}
            />
            <div class="video-options__timer">
              <span>{`${Static[`currentTime${key}`] ? Func.formatTime(Static[`currentTime${key}`]) : "00:00"} / ${Static[`duration${key}`] ? Func.formatTime(Static[`duration${key}`]) : "00:00"}`}</span>
            </div>
          </li>
          <li class="video-options">
            <span
              class="video-icon"
              ref={`skipBackward${key}`}
              onclick={() => {
                Ref[`video${key}`].currentTime -= 5;
              }}
            >
              <i class="i i-undo1"></i>
            </span>
            <span class="video-icon">
              <i
                class="i i-play3"
                ref={`playAndPause${key}`}
                onclick={() => {
                  Func.playAndPause(Ref[`video${key}`]);
                }}
              ></i>
            </span>
            <span
              class="video-icon"
              ref={`skipForward${key}`}
              onclick={() => {
                Ref[`video${key}`].currentTime += 5;
              }}
            >
              <i class="i i-redo1"></i>
            </span>
          </li>
          <li class="video-options">
            <div
              class="video-options-speed"
              ref={`speed${key}`}
              onclick={(e: any) => {
                Ref[`speed${key}`].classList.toggle(
                  "video-options-speed_active",
                );
              }}
            >
              <span class="video-icon">
                <i class="i i-speed"></i>
              </span>
              <ul class="speed-tools" ref={`speedOptions${key}`}>
                {Static.speedOptions.map((item) => {
                  return (
                    <li
                      class={[
                        "speed-tools__item",
                        Static.activeSpeed == item.value
                          ? "speed-tools__item_active"
                          : null,
                      ]}
                      onclick={(e) => {
                        e.stopPropagation();
                        Ref[`video${key}`].playbackRate = item.value;
                        Static.activeSpeed = item.value;
                        Ref[`speed${key}`].classList.toggle(
                          "video-options-speed_active",
                        );
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
                    Ref[`video${key}`].playbackRate = 1;
                  }}
                >
                  Обычная
                </li>
              </ul>
            </div>
            <span
              class="video-icon"
              onclick={() => {
                Ref[`video${key}`].requestPictureInPicture();
              }}
            >
              <i class="i i-onedrive"></i>
            </span>
            <span class="video-icon">
              <i
                ref={`fullScreen${key}`}
                class="i i-share"
                onclick={() => {
                  let position = document.documentElement.scrollTop;

                  Ref[`videoContainer${key}`].classList.toggle(
                    "video-container_fullscreen",
                  );
                  if (document.fullscreenElement) {
                    Ref[`fullScreen${key}`].classList.replace(
                      "i-user",
                      "i-share",
                    );
                    document.documentElement.scrollTo(0, position);
                    document.exitFullscreen();

                    return;
                  }
                  Ref[`fullScreen${key}`].classList.replace(
                    "i-share",
                    "i-user",
                  );
                  Ref[`videoContainer${key}`].requestFullscreen();

                  setTimeout(() => {
                    document.addEventListener(
                      "fullscreenchange",
                      function fullscreen(event) {
                        document.removeEventListener(
                          "fullscreenchange",
                          fullscreen,
                        );
                        Ref[`fullScreen${key}`].classList.replace(
                          "i-user",
                          "i-share",
                        );
                        Ref[`videoContainer${key}`].classList.remove(
                          "video-container_fullscreen",
                        );
                        document.documentElement.scrollTo(0, position);
                      },
                    );
                  }, 200);
                }}
              ></i>
            </span>
          </li>
        </ul>
      </div>
      <video
        id={key}
        class="video"
        ref={`video${key}`}
        src={src}
        onplay={() => {
          Ref[`playAndPause${key}`].classList.replace("i-play3", "i-pause2");
          Ref[`mainPlay${key}`].classList.replace("i-play3", "i-pause2");
          Ref[`mainPlay${key}`].style.display = "none";
        }}
        onpause={() => {
          Ref[`playAndPause${key}`].classList.replace("i-pause2", "i-play3");
          Ref[`mainPlay${key}`].classList.replace("i-pause2", "i-play3");
          Ref[`mainPlay${key}`].style.display = "block";
        }}
        ontimeupdate={(e: any) => {
          Func.timeUpdate(e, key);
        }}
        onloadeddata={(e: any) => {
          Static[`duration${key}`] = e.target.duration;
        }}
      ></video>
    </div>
  );
}

front.func.playAndPause = (video: any) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  return;
};

front.func.timeUpdate = (e, index) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  Static[`currentTime${index}`] = currentTime;
  Ref[`progressBar${index}`].style.width = `${percent}%`;
  return;
};

front.func.formatTime = (time) => {
  let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? Number(`0${seconds}`) : seconds;
  minutes = minutes < 10 ? Number(`0${minutes}`) : minutes;
  hours = hours < 10 ? Number(`0${hours}`) : hours;

  if (hours == 0) {
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

front.func.draggableProgressBar = (e: any, index: any) => {
  let timeLineWidth = Ref[`videoTimeLine${index}`].clientWidth;
  Ref[`progressBar${index}`].style.width = `${e.offsetX}px`;
  Ref[`video${index}`].currentTime =
    (e.offsetX / timeLineWidth) * Ref[`video${index}`].duration;
  return;
};
