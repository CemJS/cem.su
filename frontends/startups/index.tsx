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
  Static.makeFilter = {
    category: Static.catActive == "Все" ? "All" : Static.catActive,
  };
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

  let url = front.Services.functions.makeUrlEvent("startups", {
    category: Static.catActive == "Все" ? "All" : Static.catActive,
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
    let { result } = await front.Services.functions.sendApi(
      `/api/startups/${front.Variable.DataUrl[2]}`,
      {},
    );
    Static.record = result;
  }
};

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
