import { Cemjsx, Static } from "cemjs-all";

export default function () {
  return (
    <div class="notice_content">
      <div class="notice_icon">
        {Static.icon ? (
          <img
            src={Static.icon}
            alt="Успей записаться на курс от Academy Crypto Emergency!"
          />
        ) : null}
      </div>
      <div class="notice_message">
        <span>{Static.title}</span>
        <span>{Static.text}</span>
      </div>
    </div>
  );
}
