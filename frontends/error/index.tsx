import { Cemjsx, front, Func, Static, Fn, Events } from "cemjs-all";
import Navigation from "./navigation";

front.degubStatic = true;
front.InitIgnore.push("test");

front.listener.finish = () => {
  return;
};

front.loader = async () => {
  Static.color = "purple";
  Static.doneTimeout = null;
  Static.resetTimeout = null;
  Static.t = 0;

  Static.records = [];
  
  let url = front.Services.functions.makeUrlEvent("CoinsCourses", {
    live: true,
  });
  let listener = [
    {
      type: "add",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.records = json;
      },
    },
    {
      type: "update",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.records.forEach((item, index) => {
          if (item._id == json._id) {
            Static.records[index] = json;
          }
        });
      },
    },
  ];

  Events.course = await Fn.event(url, listener);
  return;
};

front.display = () => {
  return (
    <div class="mx-auto flex w-full items-center gap-[1.5625rem] bg-no-repeat [background-image:url(/assets/background_image-WTFH7ZBE.jpg)] [background-position:calc(50%_-_4.375rem)_-1%;]  sm:[background-size:unset]">
      <Navigation />
    </div>
  );
};

export { front };
