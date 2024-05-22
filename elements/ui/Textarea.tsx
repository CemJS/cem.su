import { Cemjsx, Func, Ref, Static, front } from "cemjs-all";

export default function ({
  oninput,
  // isValid,
  className,
  value,
  ref,
}: {
  oninput: (e: InputEvent) => void;
  // isValid: boolean;
  value: string;
  error?: string;
  placeholder?: string;
  className?: string;
  ref?: string;
}) {
  return (
    <div
      class={[
        "modalWindow_field",
        "mt-[15px]",
        "modalWindow_field-textarea",
        className,
        // isValid ? "modalWindow_field__valid" : null,
      ]}
    >
      <textarea ref={ref} class="!bg-[#202432]" rows="3" oninput={oninput}>
        {value}
      </textarea>
    </div>
  );
}
