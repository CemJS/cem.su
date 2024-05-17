import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import postListenerData from "./listeners/postListener.data";
import postsListenerData from "./listeners/postsListener.data";
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

// функция для init поста

front.func.initPost = ($el, index) => {
  {
    if (index == Static.records?.length - 1) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            observer.unobserve($el);
            let skip = { ...Static.makeFilter };
            skip.skip = Static.records.length;
            let res = await front.Services.functions.sendApi(
              "/api/posts",
              skip,
            );
          }
        });
      });
      observer.observe($el);
    }
  }
};

front.loader = async () => {
  let url = front.Services.functions.makeUrlEvent("posts");
  Events.posts = await Fn.event(url, postsListenerData);
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
