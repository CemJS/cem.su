import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <div id="icons" class="flex gap-2">
      {item?.closed ? (
        <img
          class="h-[1.125rem]"
          src="/contents/images/questions/closed.svg"
          alt="closed"
        />
      ) : (
        <img
          class="h-[1.125rem]"
          src="/contents/images/questions/notClosed.svg"
          alt="not closed"
        />
      )}
      <img
        class="h-[1.125rem]"
        style={
          item?.media.find((media) => media.type == "audio")
            ? "filter: invert(29%) sepia(71%) saturate(1865%) hue-rotate(291deg) brightness(93%) contrast(83%);"
            : "filter: invert(36%) sepia(6%) saturate(1877%) hue-rotate(186deg) brightness(99%) contrast(87%);"
        }
        src="/contents/images/questions/audio.svg"
        alt="audio"
      />
      <img
        class="h-[1.125rem]"
        style={
          item?.media.find((media) => media.type == "video")
            ? "filter: invert(29%) sepia(71%) saturate(1865%) hue-rotate(291deg) brightness(93%) contrast(83%);"
            : "filter: invert(36%) sepia(6%) saturate(1877%) hue-rotate(186deg) brightness(99%) contrast(87%);"
        }
        src="/contents/images/questions/video.svg"
        alt="video"
      />
      <img
        class="h-[1.125rem]"
        style={
          item?.media.find((media) => media.type == "image")
            ? "filter: invert(29%) sepia(71%) saturate(1865%) hue-rotate(291deg) brightness(93%) contrast(83%);"
            : "filter: invert(36%) sepia(6%) saturate(1877%) hue-rotate(186deg) brightness(99%) contrast(87%);"
        }
        src="/contents/images/questions/photo.svg"
        alt="photo"
      />
    </div>
  );
}
