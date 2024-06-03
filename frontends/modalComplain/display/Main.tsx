import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";

const RenderCheckbox = ({ text, value, other = false }) => {
  return (
    <div class="flex items-center">
      <div
        onclick={(e) => {
          if (other) {
            Static.currentComplains.splice(0, Static.currentComplains.length);
            Static.showOther = !Static.showOther;
            console.log("=f9a222=", Static.currentComplains);

            return;
          }

          if (Static.showOther) {
            Static.currentComplains.splice(0, Static.currentComplains.length);
            Static.showOther = false;
            console.log("=7a45ff=", Static.showOther);
          }
          let isActive = Static.currentComplains.findIndex((i) => i == value);
          !(isActive >= 0)
            ? Static.currentComplains.push(value)
            : Static.currentComplains.splice(isActive, 1);
          console.log("=f9a222=", Static.currentComplains);
        }}
        class={[
          "relative inline-block h-6 w-full max-w-6 appearance-none rounded border border-gray-300 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600",
          !other
            ? Static.currentComplains.find((i) => i == value) &&
              "!border-transparent !bg-blue-600 [&_svg]:block"
            : Static.showOther &&
              "!border-transparent !bg-blue-600 [&_svg]:block",
        ]}
      >
        <input
          id={`checkbox-${value}`}
          ref="checkbox"
          type="checkbox"
          class="peer pointer-events-none opacity-0"
        />
        <svg
          class="pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 translate-x-[-50%] translate-y-[-50%] fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <label
        id="checkmark"
        for={`checkbox-${value}`}
        class="ml-2 flex select-none items-center text-sm text-[--white]"
      >
        {text}
      </label>
    </div>
  );
};

export default function () {
  return (
    <main id="modal_main">
      <div class="mt-[15px] flex flex-col gap-[15px]">
        <div class="flex flex-col gap-2">
          {Static.complains?.map((item) => {
            return <RenderCheckbox text={item.text} value={item.value} />;
          })}
          <RenderCheckbox text="Другое" value="" other={true} />
          <div
            class={[
              `hidden ${Static.showOther ? "!block" : null}`,
              "modalWindow_field",
              "mt-[15px]",
              "modalWindow_field-textarea",
              Static.complains[0].length > 0
                ? "modalWindow_field__valid"
                : null,
            ]}
          >
            <textarea
              rows="3"
              value={Static.currentComplains[0]}
              oninput={(e: any) => {
                Static.currentComplains[0] = e.target.value;
              }}
            ></textarea>
          </div>
        </div>

        <button
          onclick={(e) => {
            Static.callback(Static.currentComplains);
            Func.close();
          }}
          class={[
            "btn self-center",
            !(Static.currentComplains[0]?.length > 0) ? "btn_passive" : null,
          ]}
        >
          {front.Variable?.words?.tools?.send}
        </button>
      </div>
    </main>
  );
}
