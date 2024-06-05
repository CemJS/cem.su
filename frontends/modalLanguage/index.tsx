import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import languages from "@json/languages";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("opacity-[1]", "scale-[1]");
    front.Variable.$el.body.style.overflow = "hidden";
  }, 100);
};

front.func.close = function () {
  Ref.modal.classList.remove("opacity-[1]", "scale-[1]");
  setTimeout(() => {
    Fn.clearData();
    front.Variable.$el.body.style.overflow = "auto";
  }, 500);
};

front.loader = async () => {
  if (front.Variable.myInfo) {
    if (!Static.full) {
      Static.languages = await front.Services.functions.IndexDBGetByOne({
        base: "linguaData",
        key: "languages",
      });
      // console.log("get", Static.records);
    } else {
      alert(front.Variable?.words?.notices?.bdClosedReloadPage);
    }
    //  = JSON.parse(localStorage.countries)
  }
  // if (!Static.full) {
  //     Static.languages = languages
  //     return
  // }

  // Static.records = []
  // let url = front.Services.functions.makeUrlEvent("Languages", {})
  // let listener = [
  //     {
  //         type: "get",
  //         fn: ({ data }) => {
  //             let json = front.Services.functions.strToJson(data)
  //             if (!json) { return }
  //             // Fn.log('=0b636f=', "Static.records", "get", json)
  //             Static.records, Static.recordsAll = json
  //         },
  //     },
  //     {
  //         type: "add",
  //         fn: ({ data }) => {
  //             let json = front.Services.functions.strToJson(data)
  //             if (!json) { return }
  //             Static.records.push(...json)
  //         },
  //     }
  // ]
  // Events.languages = await Fn.event(url, listener)

  return;
};

front.display = () => {
  return (
    <div
      class="fixed left-0 top-0 z-10 h-full w-full scale-[1.2] bg-[rgba(0,_0,_0,_0.5)] opacity-0 [transition:transform_0.2s_0s_ease-in-out,_opacity_0.2s_0s_ease-in-out]"
      ref="modal"
      init={Func.show}
      onclick={(e: any) => {
        if (e.target === Ref.modalBody) {
          Func.close();
        }
      }}
    >
      <Navigation />
    </div>
  );
};

export { front };
