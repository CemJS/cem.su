import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

// front.degubStatic = true;

front.listener.finish = () => {
  return;
};

front.func.throttle = (timeout) => {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      Func.checkPosition(...args);

      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
};

front.loader = async () => {
  Static.makeFilter = {
    cat: "All",
    active: "Active",
  };
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
  let url = front.Services.functions.makeUrlEvent("icos", {
    category: Static.makeFilter.cat,
    type: Static.makeFilter.active,
  });
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
  Events.icos = await Fn.event(url, listener);

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    let url = front.Services.functions.makeUrlEvent(
      `icos/${front.Variable.DataUrl[2]}`,
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
    ];
    Events.icos = await Fn.event(url, listener);
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
