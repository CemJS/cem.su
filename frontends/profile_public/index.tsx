import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";
import postListener from "./listeners/post.listener";
import { AudioPlayer } from "@elements/Audio";

front.listener.finish = () => {
  // плеер

  if (!Static.define) {
    customElements.define("audio-player", AudioPlayer);
    Static.define = true;
  }
  return;
};

front.func.uploadMedia = async (file: any, type: string) => {
  let mediaIndex: number = Static.data.media.push({ type, name: "" }) - 1;

  let res = await front.Services.functions.uploadMedia(file, type);

  Static.data.media[mediaIndex]
    ? (Static.data.media[mediaIndex] = { type, name: res.name })
    : 0;
  Static.data.media.length > 0 ? (Static.isValid = true) : null;
};

front.loader = async () => {
  Static.data = {
    languageCode: "ru",
    forFriends: false,
    text: "",
    media: [],
  };
  Static.origName = "Русский";
  Static.data.action = "create";
  Static.show = "grid";
  Static.isValid = false;
  Static.pageMap = {
    post: "пост",
    question: "вопрос",
  };

  if (front.Variable.DataUrl[2] && front.Variable.DataUrl[2] == "post") {
    Static.page = "post";
    let url = front.Services.functions.makeUrlEvent("Posts", {
      action: "showMy",
    });
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
