import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={async (e: Event) => {
        e.preventDefault();
        if (Static.page == "posts") {
          if (Static.isValid) {
            let res = await front.Services.functions.sendApi(
              "/api/posts/create",
              Static.data,
            );
            if (res.error == "") {
              Func.reset();
              Fn.initOne("alert", { text: front.Variable?.words?.post?.createdPost, type: "success" });
            }
          } else {
            Fn.initOne("alert", { text: front.Variable?.words?.post?.fillPost, type: "danger" });
          }
        }
        if (Static.page == "questions") {
          if (Static.isValid) {
            let res = await front.Services.functions.sendApi(
              "/api/questions/create",
              Static.data,
            );
            if (res.error == "") {
              Func.reset();
              Fn.initOne("alert", { text: front.Variable?.words?.qa?.createdQuestion, type: "success" });
            }
          } else {
            Fn.initOne("alert", { text: front.Variable?.words?.qa?.fillQuestion, type: "danger" });
          }
        }
      }}
      class={[
        "btn",
        "!flex !w-1/2 !items-center !justify-center",
        !Static.isValid ? "!btn_reset" : null,
      ]}
    >
      <span>{front.Variable?.words?.tools?.create}</span>
    </button>
  );
}
