import { Cemjsx, Fn, Static, front } from "cemjs-all";

export default function () {
  return (
    <div
      onclick={async (e) => {
        if (Static.isValid) {
          Fn.log("=d03a2d=", Static.data);
          // let res = await front.Services.functions.sendApi(
          //   "/api/Posts",
          //   Static.data,
          // );
          // console.log("=b433f7=", res);
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
    </div>
  );
}
