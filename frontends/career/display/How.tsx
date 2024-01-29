import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import steps from "json/career/careerSteps.json";

export default function () {
  return (
    <section class="jobs__how">
      <h2 class="jobs__title">Как устроиться в нашу компанию?</h2>
      <div class="jobs__how-list">
        {steps.map((item, index) => {
          return (
            <div class="jobs__how-item">
              <div class="jobs__how-number">{"0" + (index + 1)}</div>
              <div class="jobs__how-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
