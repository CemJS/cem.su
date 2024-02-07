import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all"
import Navigation from "./navigation"

front.listener.clickAny = function (e) {
  if (Ref.filterCategoryv && !Ref.filterCategory.contains(e.target) && Static.categoryStatus == 'open') {
    Static.categoryStatus = 'close';
    Ref.filterCategory.classList.remove('filter_item_active');
  }
  return
}

front.loader = async () => {

  if (front.Variable.DataUrl[0] && front.Variable.DataUrl[0] == "user") {
    let url = front.Services.functions.makeUrlEvent("Users", { action: "show", id: front.Variable.DataUrl[1] });

    let listener = [
      {
        type: "get",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }
          Static.record = json;
          // Fn.initAll();
        },
      },
    ];
    Events.user = await Fn.event(url, listener);
  }

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