import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all"
import Navigation from "./navigation"

// Static.search = "";
//   Static.checkBox = {
//     basic: true,
//     expert: true,
//     creator: true
//   }

//   front.func.updateFilter = async () => {
//     const areAllFalse = Object.values(Static.checkBox).every(value => value === false);

//     Static.makeFilter = {
//       search: Static.search,
//       lang: Static.lang?.code,
//       country: Static.country?.code
//     };

//     if (!areAllFalse) {
//       Static.makeFilter.role = Static.checkBox;
//     }

//     Static.makeFilter.action = "get";
//     let res = await front.Services.functions.sendApi("/api/events/Users", Static.makeFilter);
//     return;
//   };


front.listener.finish = () => {
  return
}

front.func.test = () => {
  return
}

front.loader = async () => {

  Static.search = "";
  Static.checkBox = {
    basic: true,
    expert: true,
    creator: true
  }
  // Static.lang.code ="ru"

  front.func.showMore = async (className: string, $el: any) => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          let res = await front.Services.functions.sendApi("/api/Users", {
            ...Static.makeFilter,
            "action": "skip",
            "skip": Static.records?.length,
          })
        }
      })
    })

    const arr = document.querySelectorAll(className);
    if (arr?.length) {
      observer.observe(arr[arr.length - 1])
    }
  }

  front.func.updateFilter = async () => {
    Static.makeFilter = {
      role: Static.checkBox,
      search: Static.search,
      lang: Static.lang?.code,
      country: Static.country?.code
    };
    Static.makeFilter.action = "get";
    // Fn.log("=827b36=", Static.makeFilter);
    let res = await front.Services.functions.sendApi("/api/events/Users", Static.makeFilter);
    front.func.showMore(".users__item")
    // console.log("=f9b841=", res);
    return;
  };


  Func.updateFilter();

  let url = front.Services.functions.makeUrlEvent("Users", { action: "get" })

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
  Events.users = await Fn.event(url, listener);

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