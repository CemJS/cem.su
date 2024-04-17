import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <span
      class="relative mx-auto block overflow-hidden break-words p-[0_0.5rem] text-[1rem] font-medium leading-[1.375rem] text-[--white]"
      html={item.text}
    ></span>
  );
}
