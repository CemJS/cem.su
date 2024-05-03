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
        src={
          Static.record?.background?.name
            ? `/assets/upload/background/${Static.record?.background?.name}`
            : "/contents/images/6625929e37285e89842e.jpg"
        }
      />
      {front.Variable.DataUrl[1] !== front.Variable.myInfo?.nickname && (
        <div class="absolute right-[.625rem] translate-y-[-50%] max-md:w-[calc(100%_-_20px)]">
          <div class="my-0 flex w-full justify-between [transform:translate(0%,_0%)] @767:justify-center">
            <a class="relative z-[1] block h-[1.6875rem] w-[7.5rem] cursor-pointer overflow-hidden rounded-[.75rem] px-[.625rem] text-center text-[.875rem] tracking-[.0625rem] text-[--white] no-underline [border:2px_solid_#AEAFBF] [text-shadow:none] after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.4375rem] after:w-[27.5rem] after:translate-x-[-20.625rem] after:overflow-hidden after:rounded-[.75rem] after:content-[''] after:![background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_25%,_#9844b7_51%,_#ff357f_100%)] after:[transition:transform_400ms_ease-in] first:mr-4 @767:h-[3.4375rem] @767:px-0">
              <span class="relative top-0 inline-block transform-none text-[.5625rem] font-bold text-[--white] @767:top-[50%] @767:translate-y-[-50%] @767:text-[.875rem]">
                Написать
              </span>
            </a>
            <a class="relative z-[1] block h-[1.6875rem] w-[7.5rem] cursor-pointer overflow-hidden rounded-[.75rem] px-[.625rem] text-center text-[.875rem] tracking-[.0625rem] text-[--white] no-underline [border:2px_solid_#AEAFBF] [text-shadow:none] after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.4375rem] after:w-[27.5rem] after:translate-x-[-20.625rem] after:overflow-hidden after:rounded-[.75rem] after:content-[''] after:![background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_25%,_#9844b7_51%,_#ff357f_100%)] after:[transition:transform_400ms_ease-in] after:last:w-[48.125rem] @767:h-[3.4375rem] @767:px-0">
              <span class="relative top-0 inline-block transform-none text-[.5625rem] font-bold text-[--white] @767:top-[50%] @767:translate-y-[-50%] @767:text-[.875rem]">
                Подписаться
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
