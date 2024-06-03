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
  return Static.records.findIndex((item) => item.id == id);
};

front.func.findIndexComment = (id, postIndex) => {
  return Static.records[postIndex].comments.findIndex((item) => item.id == id);
};

front.func.findIndexCommentToComment = (id, postIndex, commentIndex) => {
  return Static.records[postIndex].comments[commentIndex].comments.findIndex(
    (item) => item.id == id,
  );
};

front.func.updateFilter = () => {
  Static.makeFilter = {
    type: Static.type ? Static.type : "all",
    sort: Static.sort ? Static.sort : "lentaUsers",
    languageCode: Static.languageCode
      ? Static.languageCode
      : front.Variable.myInfo.country.code,
  };
};

front.loader = async () => {
  Func.updateFilter();
  Static.langPosts = "Русский";
  Static.languageCode = "ru";

  Static.makeFilter = {
    languageCode: Static.languageCode,
  };

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
