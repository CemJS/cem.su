import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = () => {
  return
}

const filterCoin = function ({ choosenCoin }) {
  this.Static.network = choosenCoin
}

front.func.test = () => {
  return
}

front.loader = async () => {
  Static.filterCoins = []

  let url = front.Services.functions.makeUrlEvent("exchanges");

  let listener = [
    {
      type: "get",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        console.log("json", json);
        
        if (!json) {
          return;
        }
        // Fn.log("=68682c=", "get", json);

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
  Events.exchangers = await Fn.event(url, listener);

  return
}

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  )
}

export { front }