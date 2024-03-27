import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Avatar from "./Avatar";

let parent = null;

export default function () {
  // Fn.log("Static.record", Static.record);
  return (
    <div class="relative left-[.4375rem] w-[calc(100%_-_14px)] bg-cover bg-no-repeat">
      <Avatar />
      <img
        class="h-full max-h-[25rem] w-full rounded-[0] object-cover @767:rounded-[15px_15px_0_0]"
        src="/contents/images/6625929e37285e89842e.jpg"
      />
      <div class="absolute right-[.625rem] z-[99] translate-y-[-50%] max-[768px]:w-[calc(100%_-_20px)]">
        <div class="c-userpreview__container my-0 flex w-full justify-between [transform:translate(0%,_0%)] @767:mt-[1.875rem] @767:justify-center">
          <a class="c-userpreview__btn 89">
            <span>Написать</span>
          </a>
          <a class="c-userpreview__btn">
            <span class="subscribe_status">Подписаться</span>
          </a>
        </div>
      </div>
    </div>
  );
}
