import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = async () => {
  Static.records = [];
  Static.catActive = "Все";
  Static.categories = [
    {
      name: "Все",
    },
    {
      name: "DeFi",
    },
    {
      name: "Web3",
    },
    {
      name: "IT",
    },
    {
      name: "Games",
    },
    {
      name: "NFT",
    },
    {
      name: "Blockchain",
    },
    {
      name: "Bridge",
    },
    {
      name: "Wallet",
    },
    {
      name: "Cloud",
    },
    {
      name: "Services",
    },
  ];

  //СЛАЙДЕР
  Static.currentSlide = 0;
  Static.maxSlidesPerShift = 2;
  // Слайдер onmouse
  Static.isDragging = false;
  Static.startX;
  Static.startScrollLeft;
  Static.x1 = null;
  Static.y1 = null;

  //Categories
  Static.isDrag = false;
  Static.startX;
  Static.startScrollLeft;
  Static.body = document.querySelector("body");
  Static.x1 = null;
  Static.y1 = null;

  let url = front.Services.functions.makeUrlEvent("Startups", { action: "get", category: Static.catActive == "Все" ? "All" : Static.catActive });

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
    let url = front.Services.functions.makeUrlEvent("Startups", { action: "show", id: front.Variable.DataUrl[2] });

    let listener = [
      {
        type: "get",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }
          Static.record = json;
          // Fn.initAll();
        },
      },
    ];
    Events.icos = await Fn.event(url, listener);
  }
  // Fn.log("=872519=", front.Variable.DataUrl);

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
