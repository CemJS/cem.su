import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.func.setCurrentPage = async (page) => {
  Static.currentPage = page;
  let result = await front.Services.functions.sendApi("/api/wallet", {
    page,
  });

  return;
};

front.loader = async () => {
  Func.setCurrentPage(1);

  let url = front.Services.functions.makeUrlEvent("wallet");
  let listener = [
    {
      type: "get",
      fn: ({ data }) => {
        let { bonuses, balance, pagesCount } =
          front.Services.functions.strToJson(data);
        if (!bonuses) {
          return;
        }

        Static.pageCount = pagesCount;
        Static.balance = balance;
        Static.records = bonuses;
      },
    },
  ];
  Events.wallet = await Fn.event(url, listener);
  return;
};

front.display = () => {
  return <Navigation />;
};

export { front };
