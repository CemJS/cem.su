import { Cemjsx, Func, Static, front } from "cemjs-all";

export default function ({
  oninput,
  isValid,
  error,
  placeholder,
}: {
  oninput: (e: InputEvent) => void;
  isValid: boolean;
  error: string;
  placeholder: string;
}) {
  return (
    <div
      class={["modalWindow_field", isValid ? "modalWindow_field__valid" : null]}
    >
      <input type="text" required autocomplete="off" oninput={oninput} />
      <div class="modalWindow_field_labelLine">
        <i class="i i-user"></i>
        <span>{placeholder}</span>
      </div>
      <p class="modalWindow_field__status" style="color:#E84142">
        {error}
      </p>
    </div>
  );
}
