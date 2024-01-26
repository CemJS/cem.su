import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import Preview from "./Preview";
import Advantages from "./Advantages";
import How from "./How";
import Profession from "./Profession";
import Vacancies from "./Vacancies";

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <div class="jobs">
          <Preview />
          <Advantages />
          <How />
          <Profession />
          <Vacancies />
        </div>
      </div>
    </div>
  );
}
