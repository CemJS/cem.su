import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <button
      onclick={() => {
        console.log("=88a782=", Static.data);
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
      disabled={!Static.isValid}
    >
      <span>Сохранить</span>
    </button>
  );
}
