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
              <div
                style="background: linear-gradient( 129.93deg, #adb6ce 12.75%, rgba(173, 182, 206, 0) 206.18%);"
                class="!bg-clip-text text-[1.25rem] font-bold text-transparent"
              >
                {"0" + (index + 1)}
              </div>
              <div
                style="background: linear-gradient( 129.93deg, #adb6ce 12.75%, rgba(173, 182, 206, 0) 206.18%);"
                class="mb-1 inline-block !bg-clip-text text-[clamp(0.9rem,2vw,1rem)] font-medium text-transparent"
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
