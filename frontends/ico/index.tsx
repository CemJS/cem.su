import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  front.Services.functions.sendApi("/api/events/Icos", {
    action: "get",
    category: Static.makeFilter.cat == "Все" ? "All" : Static.makeFilter.cat,
    type: Static.makeFilter.active,
  });
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
  Static.makeFilter = {
    cat: "ICO",
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
  // let url = front.Services.functions.makeUrlEvent("Icos", { action: "category", category: Static.makeFilter.cat });
  let url = front.Services.functions.makeUrlEvent("Icos", {});
  Fn.log("=7e27b3=", url);
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

  front.Services.functions.sendApi("/api/events/Icos", {
    action: "get",
    category: Static.makeFilter.cat == "Все" ? "All" : Static.makeFilter.cat,
    type: Static.makeFilter.active,
  });
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
