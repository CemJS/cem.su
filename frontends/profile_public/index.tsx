import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

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

  try {
    let answer = await fetch("/upload/posts", {
      method: "POST",
      body: data,
    });
    let res = await answer.json();

    Static.data.media.push({ type, name: res.name });
    Static.data.media.length > 0 ? (Static.isValid = true) : null;
  } catch {
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

  if (front.Variable.DataUrl[2] && front.Variable.DataUrl[2] == "posts") {
    let url = front.Services.functions.makeUrlEvent("Posts", {
      action: "showMy",
    });
    let listener = [
      {
        type: "get",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }

          Static.records = json;
        },
      },
      {
        type: "add",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }
          Static.records = [...Static.records, ...json];
        },
      },
    ];
    Events.posts = await Fn.event(url, listener);
  }

  return;
};

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
