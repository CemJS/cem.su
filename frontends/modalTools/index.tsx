import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

let isDragging = false;
let startY, startHeight;

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("bottomSheet_active");
  }, 100);
};

front.func.close = function () {
  Ref.bottomSheet
    ? Ref.bottomSheet.classList.remove("bottomSheet_active")
    : null;
  setTimeout(() => {
    Fn.clearData();
  }, 500);
};

front.func.dragStart = (e) => {
  isDragging = true;
  startY = e.pageY;
  startHeight = parseInt(Ref.bottomSheetContent.offsetHeight);
  Ref.bottomSheet.classList.add("dragging");
  return;
};

front.func.dragging = (e) => {
  if (!Static.isDragging) return;
  const delta = Static.startY - e.pageY;
  const newHeight = startHeight + (delta / window.innerHeight) * 100;
  Func.updateSheetHeight(newHeight);
  Ref.bottomSheetContent.style.height = `${e.pageY}vh`;
  return;
};

front.func.dragStop = () => {
  isDragging = false;
  Ref.bottomSheet.classList.remove("bottomSheet_dragging");
  return;
};

front.func.updateSheetHeight = (height) => {
  Ref.bottomSheetContent.style.height = `${height}px`;
};

// поделиться

front.func.share = () => {
  navigator.share({
    title: document.title,
    url: window.location.href,
  });
};

// запросы юзер

front.func.complainUser = async () => {
  let res = await front.Services.functions.sendApi(
    `/api/users/${Static.userId}/complain`,
    {},
  );
};

front.func.blacklistUser = async () => {
  let res = await front.Services.functions.sendApi(
    `/api/users/${Static.userId}/blacklist`,
    {},
  );
};

//

front.loader = () => {
  if (Static.userId && front.Variable.myInfo.id != Static.userId) {
    console.log("=83340e=", Static.userId);

    let userId = Static.userId;

    Static.records.push({
      name: "Пожаловаться на пользователя",
      func: () => {
        Fn.initOne("modalComplain", {
          callback: (complains) => {
            console.log("=ec453f=", userId);
            let res = front.Services.functions.sendApi(
              `/api/users/${userId}/complain`,
              { complains },
            );
          },
        });
        Func.complainUser();
      },
      type: "danger",
    });
  }
  if (
    front.Variable.Auth &&
    Static.userId &&
    front.Variable.myInfo.id != Static.userId
  ) {
    !Static.records.find((i) => i.name == "В чёрный список")
      ? (Static.records = [
          ...Static.records,
          {
            name: "В чёрный список",
            func: () => {
              Fn.initOne("alert", {
                text: "Пользователь добавлен в чёрный список",
                type: "danger",
              });
              Func.blacklistUser();
            },
            type: "danger",
          },
        ])
      : null;
  }
  return;
};

front.display = () => {
  return (
    <div
      ref="bottomSheet"
      class="bottomSheet"
      init={Func.show}
      onclick={(e: any) => {
        if (e.target === Ref.bottomSheetOverlay) {
          Func.close();
          Ref.bottomSheetContent.style.height = `50vh`;
        }
      }}
    >
      <Navigation />
    </div>
  );
};

export { front };
