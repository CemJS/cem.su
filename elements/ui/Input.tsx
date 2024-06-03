import { Cemjsx, Func, Ref, Static, front } from "cemjs-all";

export default function ({
  value,
  oninput,
  isValid,
  error,
  placeholder,
  className,
  classNameStatus,
}: {
  oninput: (e: InputEvent) => void;
  isValid: boolean;
  error: string;
  placeholder: string;
  className?: string;
  classNameStatus?: string;
  value: string;
}) {
  return (
    <div
      class={[
        "modalWindow_field",
        className,
        isValid || error || Ref[placeholder]?.value > 1
          ? "modalWindow_field__valid"
          : null,
      ]}
    >
      <input
        value={value}
        class="!bg-[#202432]"
        ref={placeholder + "input"}
        type="text"
        required
        autocomplete="off"
        oninput={oninput}
      />
      <div class="modalWindow_field_labelLine top-[1px] z-[3] h-[calc(100%_-_2px)]">
        <i class="i i-user"></i>
        <span>{placeholder}</span>
      </div>
      <p
        class={["modalWindow_field__status", classNameStatus]}
        style="color:#E84142"
      >
        {error}
      </p>
    </div>
  );
}
