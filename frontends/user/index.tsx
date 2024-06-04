import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import { subscriberObject } from "./display/blocks/subscribers/interface";

Static.showComp = false;

front.func.activeBlocksProfile = () => {
  setTimeout(() => {
    Static.showComp = true;
  }, 300);
};
front.func.sendAuth = async (url: string, data: object, method = "POST") => {
  if (front.Variable.Auth) {
    let res = await front.Services.functions.sendApi(url, data, method);
    if (res?.status == 409) {
      Fn.initOne("alert", { text: front.Variable?.words?.notices?.ratingAccrued, type: "danger" });
      return;
    }
    if (res?.error) {
      Fn.initOne("alert", { text: front.Variable?.words?.notices?.requestError });
    }
    return res;
  } else {
    Fn.initOne("modalAuthtorization", {});
  }
};

front.func.follow = async (item: subscriberObject) => {
  const action = item?.subscribed ? "unsubscribe" : "subscribe";
  let res = await Func.sendAuth(`/api/users/${item?.id}/${action}`, {});
  if (res?.status === 200) {
    item.subscribed = !item?.subscribed;
  }
};

// Удаление где не требуется указывать id обьекта!
front.func.delete = async (url: string, array: object, name: string) => {
  let res = await Func.sendAuth(url, { [name]: array });
  if (res?.status === 200) {
    Static.record[name + "s"] = array;
  } else {
    Fn.initOne("alert", {
      title: "Ошибка!",
      text: "Соединение не удалось, попробуйте позже",
    });
  }
};

front.listener.clickAny = function (e) {
  if (
    Ref.filterCategoryv &&
    !Ref.filterCategory.contains(e.target) &&
    Static.categoryStatus == "open"
  ) {
    Static.categoryStatus = "close";
    Ref.filterCategory.classList.remove("filter_item_active");
  }
  return;
};

front.loader = async () => {
  Static.nameCategory = "aboutMe";
  Fn.log("=be3efb=", 5555);
  if (front.Variable.DataUrl[0] && front.Variable.DataUrl[0] == "user") {
    let url = front.Services.functions.makeUrlEvent(
      `users/${front.Variable?.DataUrl[1]}/profile`,
      {},
    );
    // Fn.log("=2b8a89=", url);
    let listener = [
      {
        type: "get",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          Fn.log("json", json);

          if (!json) {
            return;
          }
          Static.record = json;
          // Fn.log("Static.record", Static.record);
        },
      },
      {
        type: "changeCategory",
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
  return;
};

front.display = () => {
  // Fn.log('=1255b6=',1243)
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
