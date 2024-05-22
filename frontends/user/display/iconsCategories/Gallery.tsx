import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import gallery from "@svg/sections/gallery.svg";
import gallery_inactive from "@svg/sections/gallery_inactive.svg";

export default function () {
  return (
    <div class="relative top-[.125rem] cursor-pointer [padding:0_15px_9px_15px]">
      <i
        onclick={async () => {
          Static.nameCategory = "gallery";
          Static.blockIcons = {
            infinity: true,
            mountains: false,
            player: false,
          };

          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "gallery" },
          );
          // console.log("content", content);

          //проверка на error
        }}
        style={
          Static.nameCategory === "gallery"
            ? `background: no-repeat url('${gallery}') center/100%`
            : `background: no-repeat url('${gallery_inactive}') center/100%`
        }
        class="block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem]"
        data-profilepage="aboutUser"
      ></i>
    </div>
  );
}
