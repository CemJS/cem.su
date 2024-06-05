import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    <div
      id="for_friends"
      class="mb-4 [&_input:checked_+_label_#after]:opacity-100 [&_input:checked_+_label_#before]:[background:linear-gradient(56.57deg,#2973ff_0%,#8846d3_51.56%,#ff22ac_105.28%)]"
    >
      <input
        class="hidden"
        type="checkbox"
        id="friends"
        checked={Static.data?.forFriends}
        onclick={(e) => {
          Static.data.forFriends = e.target.checked;
          Func.checkValid();
        }}
      />
      <label
        class="relative cursor-pointer select-none pl-10 text-[1rem] font-semibold leading-[32px] text-[#9ca2b5]"
        for="friends"
      >
        <div
          id="before"
          class="absolute left-0 top-[-2px] z-[1] block h-6 w-6 rounded-[4px] border bg-white content-[''] [border:2px_solid_#dfdfdf] [transition:background_0.1s_linear,border_0.1s_linear]"
        ></div>
          {front.Variable?.words?.filters?.forFriends}
        <div
          id="after"
          class="absolute left-[3px] top-[2px] z-[2] block h-6 w-6 opacity-0 content-[''] ![background-size:18px_16px] [background:url('/contents/svg/users/checked.svg')_no-repeat] [transition:opacity_0.1s_linear]"
        ></div>
      </label>
    </div>
  );
}
