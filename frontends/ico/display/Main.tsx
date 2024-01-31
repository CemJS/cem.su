import { Cemjsx, Fn, Static } from "cemjs-all";
import tags from "json/icoTags.json";

export default function () {
  //   Fn.log("records", Static.records);
  return (
    <div class="wrapper wrapper_ico">
      <div class="ico">
        <div class="ico__tags">
          {tags.map((item) => {
            return <div class="ico__tag">{item.text}</div>;
          })}
        </div>
        <div class="ico__list">
          <div class="ico__navs">
            <div class="ico__nav">Активные</div>
            <div class="ico__nav">Предстоящие</div>
            <div class="ico__nav">Завершённые</div>
          </div>
          <div class="ico__items">
            {Static.records.map((item) => {
              return <div class="ico__item"></div>;
            })}
            <div class="ico__item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
