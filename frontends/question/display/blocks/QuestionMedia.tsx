import { Cemjsx, Fn, Func, front } from "cemjs-all";
import Video from "@elements/Video";

export default function ({ mediaItem, index }) {
  return (
    <div class="relative h-full w-full select-none">
      {mediaItem.type == "video" ? (
        <Video
          poster={mediaItem?.preview}
          src={`/assets/upload/posts/${mediaItem?.mediaName}`}
          key={mediaItem?.mediaName + index}
        />
      ) : mediaItem.type == "audio" ? (
        <div class="flex h-full items-center justify-center">
          <audio-player
            src={`/assets/upload/posts/${mediaItem?.mediaName}`}
            title={mediaItem?.mediaName}
          ></audio-player>
        </div>
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
