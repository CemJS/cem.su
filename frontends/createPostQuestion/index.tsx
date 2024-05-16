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
  console.log("=9404ba=", Static.edit);
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

  console.log("=d1ce83=", Static.data);

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
    let listener = postListener;
    Events.posts = await Fn.event(url, listener);
    return;
  }
  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "qst") {
    Static.page = "questions";
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
