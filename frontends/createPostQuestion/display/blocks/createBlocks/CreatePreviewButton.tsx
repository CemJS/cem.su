import { Cemjsx, Fn, Static } from "cemjs-all";

const callModal = () => {
  Fn.initOne("previewModal", {
    item: () => {
      return;
    },
  });
};

export default function () {
  return (
    <button
      onclick={() => (Static.isValid ? callModal() : null)}
      class={[
        "btn",
        "!flex !items-center !justify-center",
        !Static.isValid ? "!btn_reset" : null,
        !Static.edit ? "!w-1/2" : "",
      ]}
    >
      <span>Предпросмотр</span>
    </button>
  );
}
