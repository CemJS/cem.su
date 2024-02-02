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

  //Categories
  Static.isDrag = false;
  Static.startX;
  Static.startScrollLeft;
  Static.body = document.querySelector("body");
  Static.x1 = null;
  Static.y1 = null;

  let url = front.Services.functions.makeUrlEvent("Startups", { category: Static.catActive == "Все" ? "All" : Static.catActive });
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
