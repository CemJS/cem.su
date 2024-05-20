import { Cemjsx, Func, Ref, Static, front } from "cemjs-all";

export default function ({
  oninput,
  // isValid,
  className,
}: {
  oninput: (e: InputEvent) => void;
  // isValid: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
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
      <textarea class="!bg-[#202432]" rows="3" oninput={oninput}></textarea>
    </div>
  );
}
