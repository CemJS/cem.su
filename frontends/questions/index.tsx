import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.updateFilter = async () => {
  Static.makeFilter = {
    sort: Static.sort,
    order: Static.order,
    search: Static.search,
    isClosed: Static.type == "opened" ? false : Static.type == "closed" ? true : undefined,
    isBest: Static.type == "best",
    language: Static.chooseLanguage.code,
  };
  Fn.log("=827b36=", Static.makeFilter);
  let res = await front.Services.functions.sendApi("/api/events/Questions", Static.makeFilter);
  console.log("=f9b841=", res);
  return;
};

front.loader = async () => {
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
        // Fn.log("=68682c=", "get", json);

        Static.records = json;
        // Fn.log("=8ec152=", Static.records);
      },
    },
    {
      type: "add",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        // Fn.log("=68682c=", "add", json);
        Static.records.push(...json);
      },
    },
  ];
  Events.questions = await Fn.event(url, listener);

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    let url = front.Services.functions.makeUrlEvent("Questions", { action: "showgo", id: front.Variable.DataUrl[2] });

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
    //       Fn.log("=280e42=", 1123);
    //     },
    //   },
    // ];
    // Events.answers = await Fn.event(urlAns, listenerAns);
    // Fn.log("=550655=", 1);
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
