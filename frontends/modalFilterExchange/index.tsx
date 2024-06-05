import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("opacity-[1]", "scale-[1]");
    // front.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
};

front.func.close = function () {
  Ref.modal.classList.remove("opacity-[1]", "scale-[1]");
  setTimeout(() => {
    Fn.clearData();
  }, 500);
};

front.loader = async () => {
  Static.records, (Static.coins = []);
  let url = front.Services.functions.makeUrlEvent("coins", {});
  let listener = [
    {
      type: "get",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.records = json;
        Static.coins = json;
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
  Events.coins = await Fn.event(url, listener);

  return;
};

front.display = () => {
  return (
    <div
      class="fixed left-0 top-0 z-[10] h-full w-full scale-[1.2] bg-[#00000080] opacity-0 [transition:transform_0.2s_0s_ease-in-out,_opacity_0.2s_0s_ease-in-out]"
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
