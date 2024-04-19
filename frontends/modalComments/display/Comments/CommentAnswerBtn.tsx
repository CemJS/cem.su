import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <span
      class="m-0 !ml-[0.3125rem] inline-block cursor-pointer select-none !bg-clip-text text-[0.75rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
      onclick={(e) => {
        let isShow = Ref[`answer${item.id}`].classList.contains("!flex");
        Func.hideInputs();
        if (!isShow) {
          Ref[`answer${item.id}`].classList.add("!flex");
          Ref[`inputanswer${item.id}`].focus();
        } else {
          Ref[`answer${item.id}`].classList.remove("!flex");
        }
      }}
    >
      Ответить
    </span>
  );
}
