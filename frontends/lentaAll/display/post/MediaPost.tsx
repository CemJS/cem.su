import { Cemjsx, Fn, Func, front } from "cemjs-all";
import Video from "@elements/Video";

export default function ({ mediaItem, index }) {
  return (
    <div class="relative h-full w-full select-none">
      {mediaItem.type == "video" ? (
        <Video
          src={`/assets/upload/posts/${mediaItem?.mediaName}`}
          key={mediaItem?.mediaName + index}
        />
      ) : mediaItem.type == "audio" ? (
        <audio-player
          src={`/assets/upload/posts/${mediaItem?.mediaName}`}
          title={mediaItem?.mediaName}
        ></audio-player>
      ) : mediaItem.type == "image" ? (
        <img
          class="w-full"
          src={`/assets/upload/posts/${mediaItem?.mediaName}`}
          alt=""
        />
      ) : (
        ""
      )}
    </div>
  );
}
