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
    <div
      onclick={() => (Static.isValid ? callModal() : null)}
      class={[
        "btn",
        "!flex !w-1/2 !items-center !justify-center",
        !Static.isValid ? "!btn_reset" : null,
      ]}
    >
      <span>Предпросмотр</span>
    </div>
  );
}
