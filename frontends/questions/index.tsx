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

front.func.timeUpdate = (e: any) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  Static.currentTime = currentTime;
  Ref.progressBar.style.width = `${percent}%`;
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
  let data: object = {
    action: "close",
    id: Static.record.id,
  };
  Static.record.closed = true;
  let res = await front.Services.functions.sendApi("/api/questions", data);
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
  let data: object = {
    action: "bestAnswer",
    questionId: Static.record.id,
    answerId: id,
  };
  let res = await front.Services.functions.sendApi("/api/questions", data);
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

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    let url = front.Services.functions.makeUrlEvent(
      `questions/${front.Variable.DataUrl[2]}`,
    );

    let listener = [
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
          Fn.log("=01c668=", json);
          Fn.log("=3c43bf=", Static.record);
          Static.record.answers.unshift(json);
          Static.record.statistics.answers++;
        },
      },
    ];
    Events.questions = await Fn.event(url, listener);

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
