import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all";
import Navigation from "./navigation";
// import postsListener from "./listeners/post.listener";
import { AudioPlayer } from "@elements/Audio";
import questionsListener from "./listeners/questions.listener";
import postsListener from "elements/post/listener/posts.listener";

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

front.func.checkForm = function () {
  if (Static.page == "questions") {
    Static.form?.title?.valid
      ? (Static.form.isValid = true)
      : (Static.form.isValid = false);
  }
  if (Static.page == "posts") {
    Static.form?.text?.value?.length > 0
      ? (Static.form.isValid = true)
      : (Static.form.isValid = false);
  }
};

front.func.reset = function () {
  Static.edit = undefined;
  Static.data = {
    languageCode: "ru",
    forFriends: Static.page == "posts" ? false : undefined,
    title: Static.page == "questions" ? "" : undefined,
    text: "",
    media: [],
  };
  Static.isValid = false;
  Ref["text"].value = "";
};

front.func.checkValid = function () {
  Static.form.isValid || Static.data?.media?.length > 0 || Static.previewChanged
    ? (Static.isValid = true)
    : (Static.isValid = false);
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
  Func.checkValid();
};

front.func.findIndexByMediaName = (mediaName: string) => {
  let index = Static.data.media?.findIndex(
    (item) => item?.mediaName == mediaName,
  );
  return index;
};

front.destroy = () => {
  Func.reset();
};

front.loader = async () => {
  Static.form = {
    title: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Вопрос",
      view: false,
      disable: false,
    },
    text: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Комментарий к вопросу",
      view: false,
      disable: false,
    },
    isValid: false,
  };
  // Static.feedState = true;
  Static.previewChanged = false;
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
    Events.createPosts = await Fn.event(url, listener);
  }
  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "qst") {
    Static.page = "questions";
    let url = front.Services.functions.makeUrlEvent("me/questions");
    let listener = questionsListener;
    Events.createQuestions = await Fn.event(url, listener);
  }

  if (Static.edit) {
    if (Static.page == "posts") {
      Static.data = {
        languageCode: Static.edit?.languages?.code
          ? Static.edit?.languages?.code
          : "ru",
        forFriends: Static.edit?.forFriends ? Static.edit?.forFriends : false,
        text: Static.edit?.text ? Static.edit?.text : "",
        media: Static.edit?.media ? Static.edit?.media : [],
      };
      Static.form.text.value = Static.edit?.text ? Static.edit?.text : "";
    }
    if (Static.page == "questions") {
      Static.data = {
        languageCode: Static.edit?.languages?.code
          ? Static.edit?.languages?.code
          : "ru",
        title: Static.edit?.title ? Static.edit?.title : "",
        text: Static.edit?.text ? Static.edit?.text : "",
        media: Static.edit?.media ? Static.edit?.media : [],
      };
      Static.form.title.value = Static.edit?.title ? Static.edit?.title : "";
      Static.form.text.value = Static.edit?.text ? Static.edit?.text : "";
    }
    Func.checkForm();
  } else {
    Static.data = {
      languageCode: "ru",
      forFriends: Static.page == "posts" ? false : undefined,
      title: Static.page == "questions" ? "" : undefined,
      text: "",
      media: [],
    };
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
