import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={() => {
        Static.edit = undefined;
        Static.data = {
          languageCode: "ru",
          forFriends: Static.page == "posts" ? false : undefined,
          title: Static.page == "questions" ? "" : undefined,
          text: "",
          media: [],
        };
      }}
      class={["btn", "!flex !items-center !justify-center"]}
    >
      <span>Отменить</span>
    </button>
  );
}
