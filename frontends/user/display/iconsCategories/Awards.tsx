import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import awards from "@svg/sections/awards.svg";
import awards_inactive from "@svg/sections/awards_inactive.svg";

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
          Static.awards = true;
          Static.socials = false;
          Static.gallery = false;
          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "awards" },
          );
          //проверка на error
        }}
        style={
          Static.awards === true
            ? `background: no-repeat url('${awards}') center/100%`
            : `background: no-repeat url('${awards_inactive}') center/100%`
        }
        class="block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem]"
        data-profilepage="aboutUser"
      ></i>
    </div>
  );
}
