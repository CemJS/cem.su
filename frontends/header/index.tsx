import { Cemjsx, front, Func,Events, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.func.showUser = async (url, urlLink) => {
    let urlEvents = front.Services.functions.makeUrlEvent(
        url,
      {},
    );
    let listener = [
      {
        type: "get",
        fn: async ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }
          // console.log("=896749=", json);
          Fn.linkChange(urlLink, { record: json });
        },
      },
    ];
    Events.users = await Fn.event(urlEvents, listener);
  };
front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <header class="font-medium py-2 bg-[#24283a] z-10 border-solid border-[#2d3243] border-b-[1px]">
            <Navigation />
        </header>
    )
}

export { front }