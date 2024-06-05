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
      text: front.Variable?.words?.qa?.filters?.all,
    },
    {
      name: "opened",
      text: front.Variable?.words?.qa?.filters?.opened,
    },
    {
      name: "closed",
      text: front.Variable?.words?.qa?.filters?.closed,
    },
    {
      name: "best",
      text: front.Variable?.words?.qa?.filters?.best,
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
      text: front.Variable?.words?.qa?.filters?.date,
    },
    {
      name: "views",
      text: front.Variable?.words?.qa?.filters?.views,
    },
    {
      name: "answers",
      text: front.Variable?.words?.qa?.filters?.answers,
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
