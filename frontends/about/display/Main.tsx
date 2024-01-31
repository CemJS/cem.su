import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import Preview from "./Preview";
import RoadMap from "./RoadMap";
import Team from "./Team";

export default function () {
  return (
    <div class="about">
      <div class="wrapper">
          {/* <Preview /> */}
          <Team />
          <RoadMap />
          </div>
    </div>
  );
}
