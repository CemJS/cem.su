import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const RenderSteps = function ({ steps, current }) {
  return (
    <div class="relative flex items-center justify-between">
      {steps.map((item) => {
        return (
          <span
            class={[
              "relative z-[1] flex h-12 w-12 items-center justify-center rounded-full border-2  border-solid bg-[#202432] text-base font-bold  transition-all max-@464:h-10 max-@464:w-10 @700:text-lg",
              item <= current
                ? "border-[#5f479b] text-[#5f479b]"
                : "border-[#e0e0e0] text-[#999]",
            ]}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
      <div class="absolute z-0 h-[2px] w-[99%] bg-[#e0e0e0]">
        <div
          class="absolute h-1 w-[0%] bg-[#5f479b] transition-all"
          ref="indicator"
        ></div>
      </div>
    </div>
  );
};

export default function () {
  return (
    <main id="modal_main">
      <RenderSteps steps={Static.steps} current={Static.currentStep} />
      <div class="w-full overflow-hidden">
        <div class="mt-6 flex w-[400%]">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
        </div>
      </div>
    </main>
  );
}
