import CreateMedia from "@elements/addMedia/CreateMedia";
import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function () {
  return (
    <div ref={`ans${Static.record.id}`} class="hidden">
      <textarea
        class={[
          "w-full resize-none rounded-[0.9375rem] border-[0] bg-[#313543] p-5 text-[1rem] text-[--white]",
          Static.disableForm ? "btn_passive" : null,
        ]}
        cols="20"
        rows="10"
        value={Static.data.text}
        oninput={(e) => {
          Static.data.text = e.target.value;
          Func.checkValid();
        }}
      >
        {Static.data.text}
      </textarea>
      <CreateMedia />
      <div class="flex justify-center p-10">
        <button
          class={[
            "btn",
            !Static.isValid || Static.disableForm ? "btn_passive" : null,
          ]}
          type="button"
          onclick={async () => {
            Static.disableForm = true;
            let data = {
              text: Static.data.text,
              questionId: Static.record.id,
              media: Static.data.media,
            };
            console.log("=1e5279=", Static.data.media);
            Static.open = "Ответить";
            let res = await Func.sendAuth("/api/answers/create", data);
            if (res?.error?.length == 0) {
              Ref[`ans${Static.record.id}`].classList.toggle("!block");
              Func.resetForm();
              Static.isValid = false;
              Static.disableForm = false;
            }
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}