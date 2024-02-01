import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = async () => {
  Static.catActive = 0;
  Static.makeFilter = {
    cat: 0,
    active: "Active",
  };
  // fn("addEvent");
  Static.activeIndex = 0;

  //Categories
  Static.isDrag = false;
  Static.startX;
  Static.startScrollLeft;
  Static.body = document.querySelector("body");
  Static.x1 = null;
  Static.y1 = null;
  Static.records = [];
  Static.categories = [
    {
      name: "Все",
    },
    {
      name: "ICO",
    },
    {
      name: "IDO",
    },
    {
      name: "IEO",
    },
    {
      name: "IGO",
    },
    {
      name: "IFO",
    },
  ];
  let url = front.Services.functions.makeUrlEvent("Icos", {});
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
  Events.icos = await Fn.event(url, listener);

  setTimeout(() => {
    Fn.log(Static.records);
  }, 1000);
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
