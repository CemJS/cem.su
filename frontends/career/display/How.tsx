import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import steps from "json/career/careerSteps.json";

export default function () {
  return (
    <section class="mb-40">
      <h2 class="mx-auto mb-[3.75rem] max-w-[43.5rem] text-center text-[clamp(2.5rem,4vw,4.75rem)] font-bold">
        {front.Variable?.words?.career?.chapters?.howWorkCompany}
      </h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((item, index) => {
          return (
            <div class="relative max-w-80 justify-self-center overflow-hidden pt-9 odd:justify-self-center sm:odd:justify-self-end sm:even:justify-self-start">
              <div
                id="before"
                style="background: var(--mainGradient)"
                class="absolute left-0 top-0 h-6 w-6 rounded-[50%]"
              ></div>
              <div
                id="after"
                style="background: no-repeat
          url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODMiIGhlaWdodD0iMiIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2UtZGFzaGFycmF5PSIyIDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMSAxaDE4MSIgb3BhY2l0eT0iLjQiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB4Mj0iMTcuMDY3IiB5MT0iMi42NzgiIHkyPSItNTAuMTc3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzY3OUZFRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E4N0ZGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==)
          left center;"
                class="absolute left-12 top-0 h-6 w-[11.43rem]"
              ></div>
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
