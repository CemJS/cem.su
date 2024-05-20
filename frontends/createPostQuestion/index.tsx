import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";
import postsListener from "./listeners/post.listener";
import { AudioPlayer } from "@elements/Audio";
import questionsListener from "./listeners/questions.listener";

front.listener.finish = () => {
  if (Static.reload) {
    front.loader();
    Static.reload = false;
  }
  if (!customElements.get("audio-player")) {
    customElements.define("audio-player", AudioPlayer);
  }
  return;
};

front.func.uploadMedia = async (file: any, type: string) => {
  let mediaIndex: number = Static.data.media.push({ type, mediaName: "" }) - 1;

  let res = await front.Services.functions.uploadMedia(file, type);

  if (res?.name) {
    Static.data?.media[mediaIndex]
      ? (Static.data.media[mediaIndex] = { type, mediaName: res.name })
      : 0;
  } else {
    Static.data?.media.splice(mediaIndex, 1);
  }

  Static.data.media.length > 0 ? (Static.isValid = true) : null;
};

front.func.findIndexByMediaName = (mediaName: string) => {
  let index = Static.data.media?.findIndex(
    (item) => item?.mediaName == mediaName,
  );
  return index;
};

front.loader = async () => {
  console.log("=8195ec=", 1);
  if (Static.edit) {
    Static.data = {
      languageCode: Static.edit?.languages?.code
        ? Static.edit?.languages?.code
        : "ru",
      forFriends: Static.edit?.forFriends ? Static.edit?.forFriends : false,
      text: Static.edit?.text ? Static.edit?.text : "",
      media: Static.edit?.media ? Static.edit?.media : [],
    };
  } else {
    Static.data = {
      languageCode: "ru",
      forFriends: false,
      text: "",
      media: [],
    };
  }

  Static.origName = "Русский";
  Static.show = "grid";
  Static.isValid = false;
  Static.pageMap = {
    posts: "пост",
    questions: "вопрос",
  };

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "pst") {
    Static.page = "posts";
    let url = front.Services.functions.makeUrlEvent("me/posts");
    let listener = postsListener;
    Events.posts = await Fn.event(url, listener);
    return;
  }
  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "qst") {
    Static.page = "questions";
    let url = front.Services.functions.makeUrlEvent("me/questions");
    let listener = questionsListener;
    Events.questions = await Fn.event(url, listener);
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
