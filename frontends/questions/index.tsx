import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

// ======== videoplayer start ========
front.func.playAndPause = (video: any) => {
  // video.paused ? video.play() : video.pause()
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  return;
};

front.func.formatTime = (time: any) => {
  let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? Number(`0${seconds}`) : seconds;
  minutes = minutes < 10 ? Number(`0${minutes}`) : minutes;
  hours = hours < 10 ? Number(`0${hours}`) : hours;

  if (hours == 0) {
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

front.func.draggableProgressBar = (e: any) => {
  let timeLineWidth = Ref.videoTimeLine.clientWidth;
  Ref.progressBar.style.width = `${e.offsetX}px`;
  Ref.video.currentTime = (e.offsetX / timeLineWidth) * Ref.video.duration;
  return;
};
// ======== videoplayer end ========

front.func.updateFilter = async () => {
  Static.makeFilter = {
    action: "get",
    sort: Static.sort,
    order: Static.order,
    search: Static.search,
    isClosed:
      Static.type == "opened"
        ? false
        : Static.type == "closed"
          ? true
          : undefined,
    isBest: Static.type == "best",
    language: Static.chooseLanguage.code,
  };
  let res = await front.Services.functions.sendApi(
    "/api/questions",
    Static.makeFilter,
  );
  return;
};

front.func.getDate = (timestamp: any) => {
  return new Date(timestamp);
};

front.func.addNull = (str: any) => {
  str = String(str);
  return str.length < 2 ? `0${str}` : str;
};

front.func.deleteQuestion = async () => {
  let data: object = {
    action: "delete",
    id: Static.record.id,
  };
  let res = await front.Services.functions.sendApi("/api/questions", data);
  front.Variable.$el.header.classList.remove("hide");
  front.Variable.$el.footer.classList.remove("hide");
  Static.record = null;
  Events.questions.close();
  Fn.linkChange("/questions");
};

front.func.closeQuestion = async () => {
  Static.record.closed = true;
  Func.sendAuth(`/api/questions/${Static.record.id}/close`, {});
};

front.func.share = () => {
  navigator.share({
    title: document.title,
    url: window.location.href,
  });
};

front.func.deleteAnswer = async (id: string) => {
  let data: object = {
    action: "delete",
    id: Static.record.id,
  };
  let res = await front.Services.functions.sendApi("/api/questions", data);
  front.Variable.$el.header.classList.remove("hide");
  front.Variable.$el.footer.classList.remove("hide");
  Static.record = null;
  Events.questions.close();
  Fn.linkChange("/questions");
};

front.func.bestAnswer = async (id: string) => {
  Static.record.closed = true;
  let res = await front.Services.functions.sendApi(
    `/api/questions/${Static.record.id}/answers/${id}/close`,
    {},
  );
};

front.func.reportQuestion = async () => {
  front.Services.functions.sendApi(
    `/api/questions/${Static.record.id}/complain`,
    {},
  );
};

front.func.sendAuth = async (url: string, data: object, method = "POST") => {
  if (front.Variable.Auth) {
    return await front.Services.functions.sendApi(url, data, method);
  } else {
    Fn.initOne("modalAuthtorization", {});
  }
};

front.func.hideInputs = () => {
  let inputs = document.querySelectorAll("#form");
  let arr = [...inputs];
  for (let elem of arr) {
    elem.classList.remove("!flex");
  }
};

front.loader = async () => {
  Static.open = "Ответить";

  Static.search = "";
  Static.order = -1;
  Static.types = [
    {
      name: "All",
      text: "Все вопросы",
    },
    {
      name: "opened",
      text: "Ожидающие ответа",
    },
    {
      name: "closed",
      text: "Закрытые вопросы",
    },
    {
      name: "best",
      text: "Закрытые с лучшим ответом",
    },
  ];

  Static.type = "All";

  Static.chooseLanguage = {
    engName: "Russian",
    origName: "Русский",
    code: "ru",
  };

  Static.sorts = [
    {
      name: "date",
      text: "По дате",
    },
    {
      name: "views",
      text: "По просмотрам",
    },
    {
      name: "answers",
      text: "По ответам",
    },
  ];

  Static.sort = "date";

  // Func.updateFilter();

  Static.makeFilter = {
    sort: Static.sort,
    order: Static.order,
    search: Static.search,
    isClosed:
      Static.type == "opened"
        ? false
        : Static.type == "closed"
          ? true
          : undefined,
    isBest: Static.type == "best",
    language: Static.chooseLanguage.code,
  };

  delete Static.makeFilter.isClosed; //== undefined ? Static.makeFilter.

  let url = front.Services.functions.makeUrlEvent(
    "questions",
    Static.makeFilter,
  );
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
      type: "create",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        console.log("=8587af=", json);

        Static.records.unshift(json);
        console.log("=4d73fb=", Static.records);
      },
    },
    {
      type: "skip",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.records = [...Static.records, ...json];
      },
    },
  ];
  Events.questions = await Fn.event(url, listener);

  Static.questionListener = [
    {
      type: "getById",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.record = json;
      },
    },
    {
      type: "answer",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.record.answers.unshift(json);
        Static.record.statistics.answers++;
      },
    },
    {
      type: "comment",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        console.log("=f51763=", json);
        let answerIndex = Static.record.answers.findIndex(
          (item) => item.id == json.answerId,
        );
        Static.record.answers[answerIndex].statistics.comments++;
        if (!Array.isArray(Static.record.answers[answerIndex].comments)) {
          Static.record.answers[answerIndex].comments = [];
        }
        console.log("=8ff2c7=", 1);
        console.log("=52f6ca=", Static.record.answers[answerIndex]);
        Static.record.answers[answerIndex].comments.unshift(json.comment);
        Static.record.statistics.answers++;
      },
    },
    {
      type: "commentToComment",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        console.log("=8e724a=", json);
        let answerIndex = Static.record.answers.findIndex(
          (item) => item.id == json.answerId,
        );

        let commentIndex = Static.record.answers[
          answerIndex
        ].comments.findIndex((item) => item.id == json.commentId);

        if (
          !Array.isArray(
            Static.record.answers[answerIndex].comments[commentIndex].comments,
          )
        ) {
          Static.record.answers[answerIndex].comments[commentIndex].comments =
            [];
        }
        Static.record.answers[answerIndex].comments[
          commentIndex
        ].comments.unshift(json.comment);
        Static.record.statistics.answers++;
      },
    },
  ];

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    let url = front.Services.functions.makeUrlEvent(
      `questions/${front.Variable.DataUrl[2]}`,
    );

    Events.questions = await Fn.event(url, Static.questionListener);

    Static.videoDragStart = false;

    Static.activeSpeed = 1;
    Static.speedOptions = [
      {
        value: 2,
      },
      {
        value: 1.5,
      },
      {
        value: 0.75,
      },
      {
        value: 0.5,
      },
    ];

    // let urlAns = front.Services.functions.makeUrlEvent("Answers", { id: front.Variable.DataUrl[2] });

    // let listenerAns = [
    //   {
    //     type: "get",
    //     fn: ({ data }) => {
    //       let json = front.Services.functions.strToJson(data);
    //       if (!json) {
    //         return;
    //       }
    //       Static.answers = json;
    //     },
    //   },
    // ];
    // Events.answers = await Fn.event(urlAns, listenerAns);
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
