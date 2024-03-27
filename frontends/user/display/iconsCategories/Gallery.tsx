import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";

export default function () {
  return (
    <div class="relative top-[.125rem] cursor-pointer [padding:0_15px_9px_15px]">
      <i
        onclick={async () => {
          Static.feed = false;
          Static.aboutMe = false;
          Static.questions = false;
          Static.answers = false;
          Static.subscribers = false;
          Static.subscriptions = false;
          Static.awards = false;
          Static.socials = false;
          Static.gallery = true;
          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "gallery" },
          );
          //проверка на error
        }}
        class={`block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem] ${
          Static.gallery === true
            ? "[background:no-repeat_url('/contents/svg/sections/gallery.svg')_center_/_100%]"
            : "[background:no-repeat_url('/contents/svg/sections/gallery_inactive.svg')_center_/_100%]"
        }`}
        data-profilepage="aboutUser"
      ></i>
    </div>
  );
}
