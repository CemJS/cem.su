import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import listenerData from "./listener.data";

front.listener.finish = () => {
  return;
};

let isDragging = false;
let startY, startHeight;

front.func.show = function ($el: HTMLElement) {
  front.Variable.$el.body.style.overflow = "hidden";
  setTimeout(() => {
    $el.classList.add("active");
  }, 100);
};

front.func.close = function () {
  Ref.bottomSheet ? Ref.bottomSheet.classList.remove("active") : null;
  front.Variable.$el.body.style.overflow = "auto";
  setTimeout(() => {
    Fn.clearData();
  }, 500);
};

// drag

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

// комменты

front.func.getDate = (timestamp: any) => {
  return new Date(timestamp);
};

front.func.addNull = (str: any) => {
  str = String(str);
  return str.length < 2 ? `0${str}` : str;
};

front.func.isEditable = (timestamp: string | number) => {
  let createDate = new Date(timestamp).getTime();
  let date = new Date().getTime();

  let isOneDayExpired = (date - createDate) / 3600000 < 24;

  return isOneDayExpired;
};

front.func.edit = (id) => {
  Func.hideInputs();
  Static.currentEditing = id;
  Static[`isEditing${id}`] = true;
  console.log("=b5ccd4=", Static);
};

front.func.closeEdit = (id) => {
  Static[`isEditing${id}`] = false;
};

front.func.hideInputs = () => {
  Func.closeEdit(Static.currentEditing);
  let inputs = document.querySelectorAll("#form");
  let arr = [...inputs];
  for (let elem of arr) {
    elem.classList.remove("!flex");
  }
};

front.func.deleteComment = async (
  id: string,
  answerId: string,
  commentId: string,
) => {
  let data = {
    commentId: commentId ? commentId : undefined,
  };
  let res = await front.Services.functions.sendApi(
    `/api/${answerId}/comments/${id}/delete`,
    data,
  );
};

// функция проверки авторизации

front.func.sendAuth = async (url: string, data: object, method = "POST") => {
  if (front.Variable.Auth) {
    let res = await front.Services.functions.sendApi(url, data, method);
    console.log("=55a7bd=", res);
    if (res?.status == 409) {
      Fn.initOne("alert", { text: "Рейтинг уже начислен", type: "danger" });
      return;
    }
    return res;
  } else {
    Fn.initOne("modalAuthtorization", {});
  }
};

// findIndex

front.func.findIndexComment = (id) => {
  return Static.comments.findIndex((item) => item.id == id);
};

front.loader = async () => {
  let url = front.Services.functions.makeUrlEvent(
    `posts/${Static.id}/comments`,
  );
  let listener = listenerData;
  Events.comments = await Fn.event(url, listener);
  return;
};

front.func.findIndexCommentToComment = (id, commentIndex) => {
  return Static.comments[commentIndex].comments.findIndex(
    (item) => item.id == id,
  );
};

front.loader = async () => {
  let url = front.Services.functions.makeUrlEvent(
    `posts/${Static.id}/comments`,
  );
  let listener = listenerData;
  Events.comments = await Fn.event(url, listener);
  return;
};

front.display = () => {
  return (
    // bottomSheet
    <div
      ref="bottomSheet"
      class="pointer-events-none fixed left-0 top-0 z-[65] flex h-full w-full flex-col items-center justify-end opacity-0 [transition:var(--tran-03)] [&.active]:!pointer-events-auto [&.active]:!opacity-100 [&.active_#content]:![transform:translateY(0%)]"
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
