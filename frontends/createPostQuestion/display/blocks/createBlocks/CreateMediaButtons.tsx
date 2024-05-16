import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import photo from "@svg/personalPosts/photo.svg";
import video from "@svg/personalPosts/video.svg";
import audio from "@svg/personalPosts/audio.svg";

const RenderPhotoButton = () => {
  return (
    <label
      id="photo"
      class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[50%] p-3 [background:linear-gradient(180.17deg,#31394b_2.73%,#262c3b_96.49%)]"
    >
      <img class="max-w-full" src={photo} alt="" />
      <input
        class="hidden"
        id="photo"
        ref="photo"
        type="file"
        accept=".jpg, .jpeg, .png, .gif, image/*"
        multiple="false"
        onchange={async (e) => {
          const files = [...e.target.files];
          let err = 0;
          files.forEach((file) => {
            if (!(file.type.split("/")[0] == "image")) {
              err++;
            }
          });
          if (!err) {
            const file = files[0];

            Fn.initOne("modalCropImage", {
              cropImage: file,
              defaultRatio:
                Static.data.media.length > 0 && Static.aspect
                  ? Static.aspect
                  : undefined,
              callback: (photo, aspect) => {
                Static.aspect = aspect;
                Func.uploadMedia(photo, "image");
              },
            });
          } else {
            Fn.initOne("alert", {
              type: "danger",
              text: "Неверный формат фото",
            });
          }

          e.preventDefault();
        }}
      />
    </label>
  );
};

const RenderVideoButton = () => {
  return (
    <label
      id="video"
      class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[50%] p-3 [background:linear-gradient(180.17deg,#31394b_2.73%,#262c3b_96.49%)]"
    >
      <img class="max-w-full" src={video} alt="" />
      <input
        class="hidden"
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
            Fn.initOne("alert", {
              type: "danger",
              text: "Неверный формат видео",
            });
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
  );
};

const RenderAudioButton = () => {
  return (
    <label
      id="audio"
      class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[50%] p-3 [background:linear-gradient(180.17deg,#31394b_2.73%,#262c3b_96.49%)]"
    >
      <img class="max-w-full" src={audio} alt="" />
      <input
        class="hidden"
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
            Fn.initOne("alert", {
              type: "danger",
              text: "Неверный формат аудио",
            });
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
  );
};

export default function () {
  return (
    <div id="media_buttons" class="mt-[30px] flex justify-center gap-4">
      <RenderPhotoButton />
      <RenderVideoButton />
      <RenderAudioButton />
    </div>
  );
}
