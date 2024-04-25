import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

let isDragging = false;
let startY, startHeight;

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("active");
  }, 100);
};

front.func.close = function () {
  Ref.bottomSheet ? Ref.bottomSheet.classList.remove("active") : null;
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
    url: Static.shareUrl,
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
  // if (Static.shareUrl) {
  //   Static.records.push({
  //     name: "Поделиться",

  //     func: () => Func.share,
  //   });
  // }
  if (Static.userId && front.Variable.myInfo.id != Static.userId) {
    console.log("=83340e=", Static.complainTo);

    let userId = Static.userId;

    if (Static.complainTo) {
      let { name, text, id } = Static.complainTo;

      Static.records.push({
        name: `Пожаловаться на ${text}`,
        func: () => {
          Fn.initOne("modalComplain", {
            callback: (categories) => {
              let res = front.Services.functions.sendApi(
                `/api/${name}/${id}/complain`,
                { categories },
              );
            },
          });
        },
        type: "danger",
      });
    }

    Static.records.push({
      name: "Пожаловаться на пользователя",
      func: () => {
        Fn.initOne("modalComplain", {
          callback: (categories) => {
            let res = front.Services.functions.sendApi(
              `/api/users/${userId}/complain`,
              { categories },
            );
          },
        });
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
              Fn.initOne("modalAccept", {
                title: "Добавить пользователя в черный список",
                Callback: async (CallBack: boolean) => {
                  if (CallBack) {
                    Fn.initOne("alert", {
                      text: "Пользователь добавлен в чёрный список",
                      type: "danger",
                    });
                    Func.blacklistUser();
                  }
                },
              });
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
    // bottomSheet
    <div
      ref="bottomSheet"
      class="pointer-events-none fixed left-0 top-0 z-[66] flex h-full w-full flex-col items-center justify-end opacity-0 [transition:var(--tran-03)] [&.active]:!pointer-events-auto [&.active]:!opacity-100 [&.active_#content]:![transform:translateY(0%)]"
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
