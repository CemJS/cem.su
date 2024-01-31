import { Cemjsx, Fn, Static } from "cemjs-all";
import tags from "json/icoTags.json";

export default function () {
  //   Fn.log("records", Static.records);
  return (
    <div class="wrapper">
      <div class="ico">
        <div class="ico__tags">
          {tags.map((item) => {
            return <div class="ico__tag">{item.text}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
