import { Cemjsx, Static } from "cemjs-all";

export default function () {
  return (
    <div class="notice_content">
      <div class="notice_icon">
        {Static.icon ? <img src={Static.icon} alt={Static.title} /> : null}
      </div>
      <div class="notice_message">
        {Static.title ? <span>{Static.title}</span> : null}
        <span>{Static.text}</span>
      </div>
    </div>
  );
}
