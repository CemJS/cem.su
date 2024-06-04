import { Cemjsx, Func, Ref, Static, front } from "cemjs-all";

export default function ({
  oninput,
  // isValid,
  className,
  value,
  ref,
  error,
  classNameStatus,
  classNameTextarea,
  classNameStyle,
}: {
  oninput: (e: InputEvent) => void;
  // isValid: boolean;
  value: string;
  error?: string;
  placeholder?: string;
  className?: string;
  classNameStatus?: string;
  classNameTextarea?: string;
  classNameStyle?: string;
  ref?: string;
}) {
  return (
    <div
      class={[
        "mt-[15px]",
        "relative h-auto w-full leading-normal",
        className,
        // isValid ? "modalWindow_field__valid" : null,
      ]}
    >
      <textarea
        value={value}
        ref={ref}
        class={[
          "w-full resize-none rounded-[--borderR] !bg-[#202432] bg-transparent p-[0.625rem_1.875rem] text-white outline-none [border:1px_solid_var(--fiolet)]",
          classNameTextarea,
        ]}
        style={classNameStyle}
        rows="3"
        oninput={oninput}
      >
        {value}
      </textarea>
      <p
        class={[
          "absolute right-[0.9375rem] top-[-24px] text-[clamp(0.7rem,2vw,0.8rem)] font-medium text-[#E84142] [transition:color_0.3s_ease-in-out]",
          classNameStatus,
        ]}
        style="color:#E84142"
      >
        {error}
      </p>
    </div>
  );
}
