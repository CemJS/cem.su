import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

// ======== videoplayer start ========

// ======== videoplayer end ========
front.func.updateFilter = async () => {
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
  let res = await front.Services.functions.sendApi(
    "/api/questions",
    Static.makeFilter,
  );
  return;
};

// questions

front.func.getQuestion = async (id) => {
  let url = front.Services.functions.makeUrlEvent(`questions/${id}`);

  Events.questions = await Fn.event(url, Static.questionListener);

  front.Services.functions.sendApi(`/api/questions/${id}/answers`, {});
};

front.loader = async () => {
  Static.showSkeleton = true;

  Static.open = front.Variable?.words?.qa?.toAnswer;

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

        Static.showSkeleton = false;
        Static.questions = json;
      },
    },
    {
      type: "create",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }

        Static.questions.unshift(json);
      },
    },
    {
      type: "skip",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.questions = [...Static.questions, ...json];
      },
    },
    {
      type: "delete",
      fn: ({ data }) => {
        let { id } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }
        console.log("=05c3a3=", id);
        Static.questions = [
          ...Static.questions.filter((record) => record.id != id),
        ];
      },
    },
  ];
  Events.questions = await Fn.event(url, listener);

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
