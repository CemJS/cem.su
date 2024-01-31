import { Cemjsx } from "cemjs-all";
import programs from "json/program.json";

const RenderItem = (img, title, text) => {
  return (
    <div class="program__item">
      <div class="program__item-img">
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2 class="program__item-title">{title}</h2>
      <p class="program__item-text">{text}</p>
    </div>
  );
};

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <p class="program__title program__title_margin">Присоединяйтесь к партнерской программе Crypto Emergency</p>
        <div class="program__list">
          {programs.map((item) => {
            return RenderItem(item.img, item.title, item.text);
          })}
        </div>
      </div>
    </div>
  );
}
