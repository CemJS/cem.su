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

front.func.timeUpdate = (e) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  Static.currentTime = currentTime;
  Ref.progressBar.style.width = `${percent}%`;
  return;
};

front.func.formatTime = (time) => {
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
    sort: Static.sort,
    order: Static.order,
    search: Static.search,
    isClosed: Static.type == "opened" ? false : Static.type == "closed" ? true : undefined,
    isBest: Static.type == "best",
    language: Static.chooseLanguage.code,
  };
  Static.makeFilter.action = "get";
  let res = await front.Services.functions.sendApi("/api/events/Questions", Static.makeFilter);
  return;
};

front.loader = async () => {
  Static.open = "Ответить";

  Static.search = "";
  Static.order = 1;
  Static.types = [
    {
      name: "All",
      text: "Все запросы",
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
    eng_name: "Russian",
    orig_name: "Русский",
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

  Func.updateFilter();

  let url = front.Services.functions.makeUrlEvent("Questions");

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
        Static.records.push(...json);
      },
    },
  ];
  Events.questions = await Fn.event(url, listener);

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    let url = front.Services.functions.makeUrlEvent("Questions", { action: "show", id: front.Variable.DataUrl[2] });

    let listener = [
      {
        type: "get",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }
          Static.record = json;
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
