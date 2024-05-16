import { Cemjsx, Fn, Static, front } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={async (e) => {
        if (Static.isValid) {
          let res = await front.Services.functions.sendApi(
            "/api/posts/create",
            Static.data,
          );
          if (res.error == "") {
            Fn.linkChange("/");
          }
        } else {
          Fn.initOne("alert", { text: "Заполните пост", type: "danger" });
        }
      }}
      class={[
        "btn",
        "!flex !w-1/2 !items-center !justify-center",
        !Static.isValid ? "!btn_reset" : null,
      ]}
    >
      <span>Создать</span>
    </button>
  );
}
