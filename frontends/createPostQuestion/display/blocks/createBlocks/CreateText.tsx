import Textarea from "@elements/ui/Textarea";
import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    // <textarea
    //   class="block max-h-[165px] w-full resize-none rounded-[0_0_10px_10px] bg-[#313543] p-[10px_25px] [border:1px_solid_#44495c]"
    //   contenteditable="plaintext-only"
    //   onkeyup={(e) => {
    //     Static.form.text.value = e.target.value;
    //     Static.data.text = e.target.value;
    //     Func.checkForm();
    //     Func.checkValid();
    //   }}
    // >
    //   {Static.data?.text}
    // </textarea>
    <Textarea
      ref={"text"}
      value={Static.data?.text}
      error={Static.form?.text?.error}
      oninput={(e) => {
        const target = e.target as HTMLInputElement;
        Static.form.text.value = target?.value;
        Static.data.text = target?.value;
        front.Services.functions.formQuestion(Static.form.text);
        Func.checkForm();
        Func.checkValid();
      }}
    />
  );
}
