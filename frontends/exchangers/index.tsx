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
    let url = front.Services.functions.makeUrlEvent("Exchanges");

    let listener = [
        {
          type: "get",
          fn: ({ data }) => {
            let json = front.Services.functions.strToJson(data);
            if (!json) {
              return;
            }
            Fn.log("=68682c=", "get", json);
    
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
            Fn.log("=68682c=", "add", json);
            Static.records.push(...json);
          },
        },
      ];
      Events.exchangers = await Fn.event(url, listener);
      
    return
}

front.display = () => {
    return (
        <div class="wrapper">
            <Navigation />
        </div>
    )
}

export { front }