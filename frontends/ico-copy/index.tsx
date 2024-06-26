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

// front.func.checkPosition = () => {
//   const height = document.body.offsetHeight;
//   const screenHeight = window.innerHeight;

//   const scrolled = window.scrollY;

//   const threshold = height - screenHeight / 4;

//   const position = scrolled + screenHeight;

//   if (position >= threshold) {
//     Fn.log("=447881=", 1);
//     front.Services.functions.sendApi("/api/events/Icos", {
//       action: "skip",
//       category: Static.makeFilter.cat == "Все" ? "All" : Static.makeFilter.cat,
//       type: Static.makeFilter.active,
//       skip: 20,
//     });
//   }
// };

front.loader = async () => {
  Fn.log("=38f35e=", Static.record);
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
  let url = front.Services.functions.makeUrlEvent("Icos", { action: "get", category: Static.makeFilter.cat, type: Static.makeFilter.active });
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
  Events.icos = await Fn.event(url, listener);

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
