import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import postListenerData from "./listeners/postListener.data";
import { AudioPlayer } from "@elements/Audio";

front.listener.finish = () => {
  if (!customElements.get("audio-player")) {
    customElements.define("audio-player", AudioPlayer);
  }
  return;
};

// функция проверки авторизации

front.func.sendAuth = async (url: string, data: object, method = "POST") => {
  if (front.Variable.Auth) {
    let res = await front.Services.functions.sendApi(url, data, method);
    if (res?.status == 409) {
      Fn.initOne("alert", { text: "Рейтинг уже начислен", type: "danger" });
      return;
    }
    if (res?.error) {
      Fn.initOne("alert", { text: "Ошибка запроса" });
    }
    return res;
  } else {
    Fn.initOne("modalAuthtorization", {});
  }
};

// запросы

front.func.follow = async (item) => {
  let res;
  !item?.subscribed
    ? (res = await Func.sendAuth(`/api/users/${item?.id}/subscribe`, {}))
    : (res = await Func.sendAuth(`/api/users/${item?.id}/unsubscribe`, {}));
  res?.status == 200 ? (item.subscribed = !item?.subscribed) : null;
  return;
};

front.func.likePost = (id) => {
  Func.sendAuth(`/api/posts/${id}/like`, {});
  return;
};

front.func.dislikePost = (id) => {
  Func.sendAuth(`/api/posts/${id}/dislike`, {});
  return;
};

// поиск индекса

front.func.findIndexPost = (id) => {
  return Static.records.findIndex((item) => item.id == id);
};

front.func.findIndexComment = (id, postIndex) => {
  return Static.records[postIndex].comments.findIndex((item) => item.id == id);
};

front.func.findIndexCommentToComment = (id, postIndex, commentIndex) => {
  console.log("=b53b67=", id);
  console.log(
    "=09f769=",
    Static.records[postIndex].comments[commentIndex].comments,
  );
  return Static.records[postIndex].comments[commentIndex].comments.findIndex(
    (item) => item.id == id,
  );
};

// получение поста по ссылке /show

front.func.getQuestion = async (id) => {
  let url = front.Services.functions.makeUrlEvent(`posts/${id}`);

  Events.post = await Fn.event(url, postListenerData);

  // front.Services.functions.sendApi(`/api/posts/${id}`, {});
};

front.loader = async () => {
  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    Func.getQuestion(front.Variable.DataUrl[2]);
  }
  return;
};

front.display = () => {
  return (
    <div class="mt-[25px] px-3">
      <Navigation />
    </div>
  );
};

export { front };
