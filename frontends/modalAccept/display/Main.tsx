import { Cemjsx, Static, front, Fn, Func } from "cemjs-all";

// Your specific function to be throttled
const clickEvent = () => {
  Static.CallBackState = true;
  Static.Callback(Static.CallBackState);
  Func.close();
};

export default function () {
  return (
    <div>
      <h2 class="m-0 w-full text-balance text-center text-[clamp(1.2rem,_3vw,_1.5rem)] font-bold leading-[125%] text-inherit">
        Вы уверены что хотите {Static.title} ?
      </h2>
      <div class="flex items-stretch py-[1.25rem]">
        <button
          onclick={front.Services.functions.throttle(clickEvent, 1000)}
          class="relative z-[1] m-4 flex h-[3.125rem] w-[16.875rem] flex-grow-[1] items-center justify-center overflow-hidden rounded-[.375rem] px-[1.25rem] py-0 text-center text-[.875rem] font-semibold uppercase leading-[110%] tracking-[1px] text-[--white] no-underline after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.125rem] after:w-[93.75rem] after:translate-x-[-5rem] after:content-[''] after:[background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] after:[transition:transform_400ms_ease-in] hover:after:translate-x-[.3125rem]"
        >
          Да
        </button>
        <button
          onclick={async () => {
            Static.CallBackState = false;
            Static.Callback(Static.CallBackState);
            Func.close();
          }}
          class="relative z-[1] m-4 flex h-[3.125rem] w-[16.875rem] flex-grow-[1] items-center justify-center overflow-hidden rounded-[.375rem] px-[1.25rem] py-0 text-center text-[.875rem] font-semibold uppercase leading-[110%] tracking-[1px] text-[--white] no-underline after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.125rem] after:w-[93.75rem] after:translate-x-[-5rem] after:content-[''] after:[background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] after:[transition:transform_400ms_ease-in] hover:after:translate-x-[.3125rem]"
        >
          Нет
        </button>
      </div>
    </div>
  );
}
