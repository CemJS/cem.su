import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import information from "@svg/sections/information.svg";
import information_inactive from "@svg/sections/information_inactive.svg";

export default function () {
  return (
    <div class="relative top-[.125rem] cursor-pointer [padding:0_15px_9px_15px]">
      <i
        onclick={async () => {
          Static.nameCategory = "aboutMe";
          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "information" },
          );
        }}
        style={
          Static.nameCategory === "aboutMe"
            ? `background: no-repeat url('${information}') center/100%`
            : `background: no-repeat url('${information_inactive}') center/100%`
        }
        class="block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem]"
        data-profilepage="aboutUser"
      ></i>
    </div>
  );
}
