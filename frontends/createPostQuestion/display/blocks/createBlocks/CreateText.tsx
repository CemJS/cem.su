import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <textarea
      class="block max-h-[165px] w-full resize-none rounded-[0_0_10px_10px] bg-[#313543] p-[10px_25px] [border:1px_solid_#44495c]"
      contenteditable="plaintext-only"
      onkeyup={(e) => {
        Static.data.text = e.target.value;
        Static.data?.text.length > 1
          ? (Static.isValid = true)
          : (Static.isValid = false);
      }}
    >
      {Static.data?.text}
    </textarea>
  );
}
