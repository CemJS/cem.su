import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import steps from "json/career/careerSteps.json";

export default function () {
  return (
    <section class="mb-40">
      <h2 class="mx-auto mb-[3.75rem] max-w-[43.5rem] text-center text-[clamp(2.5rem,4vw,4.75rem)] font-bold">
        Как устроиться в нашу компанию?
      </h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((item, index) => {
          return (
            <div class="relative max-w-80 justify-self-center overflow-hidden pt-9 odd:justify-self-center sm:justify-self-end">
              <div class="jobs__how-number">{"0" + (index + 1)}</div>
              <div class="jobs__how-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
