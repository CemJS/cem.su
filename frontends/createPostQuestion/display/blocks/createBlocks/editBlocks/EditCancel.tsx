import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={() => {
        Static.edit = undefined;
        Static.data = {
          languageCode: "ru",
          forFriends: false,
          text: "",
          media: [],
        };
        Static.isValid = false;
      }}
      class={["btn", "!flex !items-center !justify-center"]}
    >
      <span>Отменить</span>
    </button>
  );
}
