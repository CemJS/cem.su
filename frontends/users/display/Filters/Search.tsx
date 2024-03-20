import { Cemjsx, Fn, Static, front } from "cemjs-all";
import search_icon from "@svg/questions/search_icon.svg";

function debounce(func: any, delay: number) {
  let timeoutId: any;
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

export default function () {
  return (
    <div
      class={[
        "relative m-auto mt-[1.25rem] before:absolute before:left-[1.25rem] before:top-[1rem] before:h-[1.5625rem] before:w-[1.5625rem] before:content-[''] before:![background-size:100%] max-[650px]:w-[70%] max-[550px]:w-full",
        "before:[background:url('/contents/svg/search_icon.svg')]",
      ]}
    >
      <input
        class="tsext-[--white] m-0 h-[3.4375rem] w-full rounded-[1.875rem] border-0 bg-[--black-gray] pl-[4.375rem] text-[1rem] [background-position:_left_1.25rem_bottom_1.25rem] [transition:0.5s]"
        type="text"
        placeholder="Найти друзей"
        value={Static.search}
        oninput={debounce(async (e: any) => {
          Static.search = e.target.value.toLocaleLowerCase();
          front.func.updateFilter();
        }, 400)}
      />
    </div>
  );
}
