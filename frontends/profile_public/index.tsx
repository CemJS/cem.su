import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";
import postListener from "./listeners/post.listener";
import { AudioPlayer } from "@elements/Audio";

front.listener.finish = () => {
  if (!customElements.get("audio-player")) {
    customElements.define("audio-player", AudioPlayer);
  }
  return;
};

front.func.uploadMedia = async (file: any, type: string) => {
  let mediaIndex: number = Static.data.media.push({ type, name: "" }) - 1;

  let res = await front.Services.functions.uploadMedia(file, type);

  if (res?.name) {
    Static.data?.media[mediaIndex]
      ? (Static.data.media[mediaIndex] = { type, name: res.name })
      : 0;
  } else {
    Static.data?.media.splice(mediaIndex, 1);
  }

  Static.data.media.length > 0 ? (Static.isValid = true) : null;
};

front.func.findIndexByMediaName = (mediaName: string) => {
  let index = Static.data.media?.findIndex((item) => item?.name == mediaName);
  return index;
};

front.loader = async () => {
  Static.data = {
    languageCode: "ru",
    forFriends: false,
    text: "",
    media: [],
  };
  Static.origName = "Русский";
  Static.show = "grid";
  Static.isValid = false;
  Static.pageMap = {
    post: "пост",
    question: "вопрос",
  };

  if (front.Variable.DataUrl[2] && front.Variable.DataUrl[2] == "post") {
    Static.page = "post";
    let url = front.Services.functions.makeUrlEvent("posts");
    let listener = postListener;
    Events.posts = await Fn.event(url, listener);
    return;
  }
  if (front.Variable.DataUrl[2] && front.Variable.DataUrl[2] == "question") {
    Static.page = "question";
    return;
  }
};

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
