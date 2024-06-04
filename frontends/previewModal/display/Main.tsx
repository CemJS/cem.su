import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <div class="preview pt-20">
      <div class="wrapper wrapper_padding">
        <div class="preview__body">{Static?.item()}</div>
      </div>
    </div>
  );
}
