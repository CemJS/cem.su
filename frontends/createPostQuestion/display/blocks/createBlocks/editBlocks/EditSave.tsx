import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={async (e: Event) => {
        e.preventDefault();
        if (Static.page == "posts") {
          let res = await front.Services.functions.sendApi(
            `/api/posts/${Static.edit?.id}/update`,
            Static.data,
          );
        }
        if (Static.page == "questions") {
          let res = await front.Services.functions.sendApi(
            `/api/questions/${Static.edit?.id}/update`,
            Static.data,
          );
        }

        Func.reset();
      }}
      class={["btn", "!flex !items-center !justify-center"]}
      disabled={!Static.isValid}
    >
      <span>{front.Variable?.words?.tools?.save}</span>
    </button>
  );
}
