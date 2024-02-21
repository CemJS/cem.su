import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = async () => {
  Static.data = {
    languageCode: "ru",
    forFriends: false,
    text: "",
  };
  Static.origName = "Русский";
  Static.data.action = "create";
  Static.show = "grid";
  Static.isValid = false;

  let url = front.Services.functions.makeUrlEvent("Posts");
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
  Fn.log("=049e78=", Static.records);
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
