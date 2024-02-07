import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = async () => {
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
    let url = front.Services.functions.makeUrlEvent("Icos", { action: "show", id: front.Variable.DataUrl[2] });

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
