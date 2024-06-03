import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import CreateMediaButtons from "./components/CreateMediaButtons";
import CreateMediaFiles from "./components/CreateMediaFiles";
import { AudioPlayer } from "@elements/Audio";

if (!customElements.get("audio-player")) {
  customElements.define("audio-player", AudioPlayer);
}
export default function ({ className }: { className?: string }) {
  return (
    <div class={`${className}`}>
      <CreateMediaFiles />
      <CreateMediaButtons />
    </div>
  );
}

front.func.uploadMedia = async (file: any, type: string) => {
  Static.uploadAbortController = new AbortController();
  Static.id++;
  let mediaIndex: number =
    Static.data.media.push({ type, mediaName: "", id: Static.id }) - 1;

  let uploadMediaFiles = await front.Services.functions.uploadMediaFiles(
    file,
    type,
    Static.uploadAbortController?.signal,
  );

  let errors = {
    video: "видео",
    image: "картинку",
    audio: "аудиозапись",
  };

  if (uploadMediaFiles?.name && uploadMediaFiles?.name != "AbortError") {
    Static.data?.media[mediaIndex]
      ? (Static.data.media[mediaIndex] = {
          type,
          mediaName: uploadMediaFiles.name,
          id: Static.id,
        })
      : 0;
  } else {
    if (uploadMediaFiles?.name != "AbortError") {
      Fn.initOne("alert", {
        text: `Не удалось загрузить ${errors[type]}`,
        type: "danger",
      });
      Static.data?.media.splice(mediaIndex, 1);
    }
  }
  Func.checkValid();
};

front.func.findIndex = (item: any) => {
  let index = Static.data.media?.findIndex(
    (media) => media?.id == item.id || media?.mediaName == item.mediaName,
  );
  return index;
};
