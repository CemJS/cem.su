import { Cemjsx, Func, Static } from "cemjs-all";
import sendMessage from "@svg/lenta/send_message.svg";

export default function ({ key, sendUrl, extraData = {}, show = false }) {
  return (
    <div
      id="form"
      ref={key}
      class={[
        "relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] flex w-full max-w-[64rem] items-stretch justify-between",
        !show ? "hidden" : "flex",
      ]}
    >
      <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
        <textarea
          class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
          rows="1"
          data-max-height="200"
          data-scroll-last="48"
          value={Static[`edit${key}`]}
          oninput={(e) => {
            Static[`edit${key}`] = e.target.value;
          }}
        ></textarea>
      </div>
      <button
        class={[
          "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
          !Static[`edit${key}`] ? "btn_passive" : null,
        ]}
        onclick={() => {
          let data = {
            text: Static[`edit${key}`],
            ...extraData,
          };
          Static[`edit${key}`] = "";
          Func.closeEdit(key);
          Func.sendAuth(sendUrl, data);
        }}
      >
        <img src={sendMessage} />
      </button>
    </div>
  );
}
