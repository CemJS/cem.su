import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <div class="preview">
      <div class="wrapper wrapper_padding">
        <div
          onclick={() => {
            Fn.clearData();
          }}
          class="preview__arrow"
        >
          <i class="i i-chevron-left"></i>
          <span>Назад</span>
        </div>
        <div class="preview__body">{Static.item()}</div>
      </div>
    </div>
  );
}
