import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";

export default function () {
  return (
    <div class="relative top-[.125rem] cursor-pointer [padding:0_15px_9px_15px]">
      <i
        onclick={async () => {
          Static.feed = true;
          Static.aboutMe = false;
          Static.questions = false;
          Static.answers = false;
          Static.subscribers = false;
          Static.subscriptions = false;
          Static.awards = false;
          Static.socials = false;
          Static.gallery = false;
          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "feed" }
          );
          //проверка на error
        }}
        class={`block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem] ${
          Static.feed === true
            ? "[background:no-repeat_url('/contents/svg/sections/lentaUserActive.svg')_center_/_100%]"
            : "[background:no-repeat_url('/contents/svg/sections/lentaUser.svg')_center_/_100%]"
        }`}
        data-profilepage="aboutUser"
      ></i>
      <div class="absolute right-[.625rem] top-[-.3125rem] h-[1.375rem] w-[1.375rem] rounded-[50%] bg-[linear-gradient(45deg,_#3bade3_0,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] p-[.125rem]">
        <div class="flex h-full w-full items-center justify-center rounded-[50%] bg-[#30384A]">
          <span class="text-[.6875rem] font-semibold text-[--white]">
            {Static.record?.statistics?.post}
          </span>
        </div>
      </div>
    </div>
  );
}
