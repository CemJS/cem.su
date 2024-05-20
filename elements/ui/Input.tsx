import { Cemjsx, Func, Static, front } from "cemjs-all";

export default function ({
  oninput,
}: {
  oninput: (e: Event) => void;
  isValid: boolean;
  error: string;
}) {
  return (
    <div
      class={[
        "modalWindow_field",
        Static.form.question.value.length ? "modalWindow_field__valid" : null,
      ]}
    >
      <input type="text" required autocomplete="off" oninput={oninput} />
      <div class="modalWindow_field_labelLine">
        <i class="i i-user"></i>
        <span>{Static.form.question.placeholder}</span>
      </div>
      <p class="modalWindow_field__status" style="color:#E84142">
        {Static.form.question.error}
      </p>
    </div>
  );
}
