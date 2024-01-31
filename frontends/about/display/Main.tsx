import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import Preview from "./Preview"
import RoadMap from "./RoadMap"
import Team from "./Team"
import Faq from "./Faq";
import Goals from "./Goals";

export default function () {
  return (
    <div class="about">
      <div class="wrapper">
        {/* <Preview /> */}
        <Goals />
        <Faq />
        <Team />
        <RoadMap />
      </div>
    </div>
  );
}
