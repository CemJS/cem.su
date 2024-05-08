import { Cemjsx, front, Func, Events, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.func.showUser = async (url, urlLink) => {
  let urlEvents = front.Services.functions.makeUrlEvent(url, {});
  let listener = [
    {
      type: "get",
      fn: async ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        // console.log("=896749=", json);
        Fn.linkChange(urlLink, { record: json });
      },
    },
    {
      type: "changeCategory",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        // Static.record = json;
        Fn.linkChange(urlLink, { record: json });
        // Fn.initAll();
      },
    },
  ];
  Events.user = await Fn.event(urlEvents, listener);
};
front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  return;
};

front.display = () => {
  return (
    <header class="z-10 border-b-[1px] border-solid border-[#2d3243] bg-[#24283a] py-2 font-medium">
      <Navigation />
    </header>
  );
};

export { front };
