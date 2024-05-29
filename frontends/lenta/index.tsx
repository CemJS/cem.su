import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import { AudioPlayer } from "@elements/Audio";
import postsListener from "elements/post/listener/posts.listener";

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
// поиск индекса

front.func.findIndexPost = (id) => {
  return Static.posts.findIndex((item) => item.id == id);
};

front.func.findIndexComment = (id, postIndex) => {
  return Static.posts[postIndex].comments.findIndex((item) => item.id == id);
};

front.func.findIndexCommentToComment = (id, postIndex, commentIndex) => {
  console.log("=b53b67=", id);
  console.log(
    "=09f769=",
    Static.posts[postIndex].comments[commentIndex].comments,
  );
  return Static.posts[postIndex].comments[commentIndex].comments.findIndex(
    (item) => item.id == id,
  );
};

front.loader = async () => {
  Static.showPostSkeleton = true;
  let url = front.Services.functions.makeUrlEvent("posts");
  Events.posts = await Fn.event(url, postsListener);
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
