import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={async (e: Event) => {
        e.preventDefault();

        console.log("=88a782=", Static.data);
        let res = await front.Services.functions.sendApi(
          `/api/posts/${Static.edit?.id}/update`,
          Static.data,
        );

        // Static.edit = undefined;
        // Static.data = {
        //   languageCode: "ru",
        //   forFriends: false,
        //   text: "",
        //   media: [],
        // };
        // Static.isValid = false;
      }}
      class={["btn", "!flex !items-center !justify-center"]}
      disabled={!Static.isValid}
    >
      <span>Сохранить</span>
    </button>
  );
}
