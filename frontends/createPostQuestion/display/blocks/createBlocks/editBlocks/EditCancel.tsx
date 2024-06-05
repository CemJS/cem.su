import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={() => {
        Func.reset();
      }}
      class={["btn", "!flex !items-center !justify-center"]}
    >
      <span>{front.Variable?.words?.tools?.cancel}</span>
    </button>
  );
}
