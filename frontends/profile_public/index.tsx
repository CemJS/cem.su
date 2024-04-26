import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";
import postListener from "./listeners/post.listener";

front.listener.finish = () => {
  return;
};

front.func.uploadMedia = async (file, type: string) => {
  let data = new FormData();
  data.append("media", file);

  let errors = {
    video: "видео",
    image: "картинку",
    audio: "аудиозапись",
  };

  let mediaIndex: number;
  try {
    mediaIndex = Static.data.media.push({ type, name: "" }) - 1;
    console.log("=7f5785=", mediaIndex);
    let answer = await fetch("/upload/posts", {
      method: "POST",
      body: data,
    });
    let res = await answer.json();

    console.log("=60cd8e=", res);

    Static.data.media[mediaIndex]
      ? (Static.data.media[mediaIndex] = { type, name: res.name })
      : 0;
    Static.data.media.length > 0 ? (Static.isValid = true) : null;
  } catch {
    Static.data.media.splice(mediaIndex, 1);
    Fn.initOne("alert", {
      text: `Не удалось загрузить ${errors[type]}`,
      type: "danger",
    });
  }
  return;
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
  if (!front.Variable.DataUrl[2]) {
    console.log("=533d6f=", 1);
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
