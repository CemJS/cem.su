import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";

const RenderCheckbox = ({ text, value, other = false }) => {
  return (
    <div class="flex items-center">
      <div class="relative inline-block h-6 w-full max-w-6 appearance-none rounded border border-gray-300 bg-gray-100 checked:border-transparent checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800">
        <input
          id={`checkbox-${value}`}
          ref="checkbox"
          type="checkbox"
          checked={
            !other
              ? !!Static.currentComplains.find((i) => i == value)
              : !!Static.showOther
          }
          onchange={(e) => {
            if (other) {
              Static.showOther = true;
              return;
            }

            if (Static.showOther) {
              Static.currentComplains.splice(0, Static.currentComplains);
              Static.showOther = false;
              console.log("=7a45ff=", Static.showOther);
            }
            let isActive = Static.currentComplains.findIndex((i) => i == value);
            !(isActive >= 0)
              ? Static.currentComplains.push(value)
              : Static.currentComplains.splice(isActive, 1);
          }}
          class="peer hidden [&:checked_+_svg]:block"
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
    <main class="modal_main">
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
              oninput={(e: any) => {
                Static.complains[0] = e.target.value;
                // front.Services.functions.formComment(Static.form.comment)
                // Func.checkForm()
              }}
            ></textarea>
          </div>
        </div>

        <button
          onclick={(e) => Static.callback(Static.currentComplains)}
          class={[
            "btn self-center",
            !(Static.currentComplains.length > 0) ? "btn_passive" : null,
          ]}
        >
          Отправить
        </button>
      </div>
    </main>
  );
}
console.log("=4c6dd3=", Ref);
