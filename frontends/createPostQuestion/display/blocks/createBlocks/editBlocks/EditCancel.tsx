import { Cemjsx, Fn, Func, Static } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={() => {
        Func.reset();
      }}
      class={["btn", "!flex !items-center !justify-center"]}
    >
      <span>Отменить</span>
    </button>
  );
}
