import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import photo from "@svg/personalPosts/photo.svg";
import video from "@svg/personalPosts/video.svg";
import audio from "@svg/personalPosts/audio.svg";

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
          <div class={["btn", "post-create__button", !Static.isValid ? "btn_reset" : null]}>
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
