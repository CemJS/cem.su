import { Cemjsx, Fn, Static } from "cemjs-all";

export default function () {
  return (
    <div
      class="block !min-h-[90px] rounded-[0_0_10px_10px] bg-[#313543] p-[10px_25px] [border:1px_solid_#44495c]"
      contenteditable="plaintext-only"
      onkeyup={(e) => {
        Static.data.text = e.target.textContent;
        Static.data?.text.length > 1
          ? (Static.isValid = true)
          : (Static.isValid = false);
      }}
    />
  );
}
