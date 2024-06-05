import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};
const filterCoin = function ({ choosenCoin }) {
  this.Static.network = choosenCoin;
};

front.func.test = () => {
  return;
};

front.loader = async () => {
  Static.tradeFilter = {
    cat: "CEX",
  };
  let url = front.Services.functions.makeUrlEvent("exchangers", {
    category: Static.tradeFilter.cat,
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
        Static.records.push(...json);
      },
    },
  ];
  Events.exchangers = await Fn.event(url, listener);
  return;
};

front.display = () => {
  return (
    <div class="wrapper">
      <Navigation />
    </div>
  );
};

export { front };
