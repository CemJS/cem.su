import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.func.setCurrentPage = (pageNum) => {
  Static.currentPage = pageNum;
  let prevRange = (pageNum - 1) * Static.paginationLimit;
  let currRange = pageNum * Static.paginationLimit;
  Static.limitArray = [];
  Static.data.forEach((item, index) => {
    if (index >= prevRange && index < currRange) {
      Static.limitArray.push(item);
    }
  });
  return;
};

front.func.pagination = (pageNum) => {
  if (
    Static.currentPage == Static.End &&
    Static.currentPage <= Static.lastPage - 2
  ) {
    //Показывает блок с первыми 2 страницами при клике на последнюю страницу среза
    Ref.first_two.classList.remove("hidden");
    Static.Begin += 2; //При клике на последний элемент среза происходит сдвиг пагинатора на 2
    Static.End += 2;
  } else if (
    Static.currentPage == Static.End - 1 &&
    Static.currentPage >= 5 &&
    Static.currentPage <= Static.lastPage - 2
  ) {
    Static.Begin += 1;
    Static.End += 1;
  } else if (Static.Begin == 2 && Static.currentPage <= 4) {
    Ref.first_two.classList.add("hidden");
    Static.Begin -= 2;
    Static.End -= 2;
  } else if (Static.Begin == 3 && Static.currentPage <= 5) {
    Static.Begin -= 1;
    Static.End -= 1;
  } else if (Static.Begin >= 4 && Static.currentPage == Static.Begin + 2) {
    Static.Begin -= 1;
    Static.End -= 1;
  } else if (Static.Begin >= 4 && Static.currentPage == Static.Begin + 1) {
    Static.Begin -= 2;
    Static.End -= 2;
  }

  if (Static.currentPage >= Static.lastPage - 3) {
    Ref.two_last.classList.add("hidden");
  } else if (Static.currentPage <= Static.lastPage - 2) {
    Ref.two_last.classList.remove("hidden");
  }
  return;
};

front.loader = async () => {
  Static.data = [
    {
      img: "transaction_newmember_bonus",
      type: "Awards1",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards15",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards16",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards17",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards18",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards22",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3333",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards13",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards14",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards2",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards3",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards4",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards5",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards6",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards7",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards8",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards9",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards10",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards11",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
    {
      type: "Awards12",
      date: "2023-07-20",
      transaction: "Bonus",
      sum: "0,5",
      status: "done",
    },
  ];
  Static.paginationLimit = 10;
  Static.pageCount = Math.ceil(Static.data.length / Static.paginationLimit);

  Static.outertDigitsNumber = 2;
  Static.Begin = 0;
  Static.End = 5;
  Static.currentPage = 1;
  Static.Pages = [];
  for (let i = 1; i <= Static.pageCount; i++) {
    Static.Pages.push({
      number: i,
      class:
        "m-[0.25rem_0.25rem] h-[35px] w-[35px] cursor-pointer rounded-[0.2rem] border-none bg-transparent text-[16px] font-normal text-[--white] outline-none ease-in-out [transition:all_0.35s] [&.active]:text-[--white] [&.active]:bg-[--noble-black] ",
    });
  }
  Static.test = 1;

  Func.setCurrentPage(1);
  Static.lastPage = Static.Pages.at(-1).number;

  let url = front.Services.functions.makeUrlEvent("wallet");
  let listener = [
    {
      type: "get",
      fn: ({ data }) => {
        let { bonuses, balance } = front.Services.functions.strToJson(data);
        if (!bonuses) {
          return;
        }

        Static.balance = balance;
        Static.records = bonuses;
        Fn.log("=c2a25f=", Static.records);
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
  Events.wallet = await Fn.event(url, listener);
  return;
};

front.display = () => {
  return <Navigation />;
};

export { front };
