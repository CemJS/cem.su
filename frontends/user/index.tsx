import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.func.follow = async (item) => {
  if (!front.Variable.Auth) {
    Fn.initOne("modalAuthtorization", {});
    return;
  }

  const action = item?.subscribed ? "unsubscribe" : "subscribe";
  let res = await front.Services.functions.sendApi(
    `/api/users/${item?.id}/${action}`,
    {},
  );

  if (res?.status === 409) {
    Fn.initOne("alert", { text: "Рейтинг уже начислен", type: "danger" });
    return;
  }

  if (res?.error) {
    Fn.initOne("alert", { text: "Ошибка запроса" });
    return;
  }

  if (res?.status === 200) {
    item.subscribed = !item?.subscribed;
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
  Static.feedState = true;

  Static.aboutMe = true;
  Static.questions = false;
  Static.answers = false;
  Static.subscribers = false;
  Static.subscriptions = false;
  Static.awards = false;
  Static.socials = false;
  Static.feed = false;
  Static.galary = false;

  // Fn.log('=be3efb=', 5555)
  if (front.Variable.DataUrl[0] && front.Variable.DataUrl[0] == "user") {
    let url = front.Services.functions.makeUrlEvent(
      `users/${front.Variable?.DataUrl[1]}/profile`,
      {},
    );
    // Fn.log('=2b8a89=',url)
    let listener = [
      {
        type: "get",
        fn: ({ data }) => {
          let json = front.Services.functions.strToJson(data);
          if (!json) {
            return;
          }
          Static.record = json;
          Fn.log("Static.record", Static.record);
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
