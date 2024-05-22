import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import awards from "@svg/sections/awards.svg";
import awards_inactive from "@svg/sections/awards_inactive.svg";

export default function () {
  return (
    <div class="relative top-[.125rem] cursor-pointer [padding:0_15px_9px_15px]">
      <i
        onclick={async () => {
          Static.nameCategory = "awards";
          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "awards" },
          );
          //проверка на error
        }}
        style={
          Static.nameCategory === "awards"
            ? `background: no-repeat url('${awards}') center/100%`
            : `background: no-repeat url('${awards_inactive}') center/100%`
        }
        class="block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem]"
        data-profilepage="aboutUser"
      ></i>
    </div>
  );
}
