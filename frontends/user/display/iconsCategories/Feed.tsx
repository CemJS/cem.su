import { Cemjsx, front, Fn, Static, Func, Ref, Events } from "cemjs-all";
import lentaUser from "@svg/sections/lentaUser.svg";
import lentaUser_inactive from "@svg/sections/lentaUser_inactive.svg";
import postsListener from "elements/post/listener/posts.listener";

export default function () {
  // console.log("Static.record?", Static.record);

  return (
    <div class="relative top-[.125rem] cursor-pointer [padding:0_15px_9px_15px]">
      <i
        onclick={async () => {
          Static.nameCategory = "feed";
          let content = await front.Services.functions.sendApi(
            `/api/users/${Static.record?.nickname}/profile`,
            { category: "feed" },
          );
          // const url =
          //   front.Variable.DataUrl[1] === front.Variable.myInfo?.nickname
          //     ? front.Services.functions.makeUrlEvent("me/posts")
          //     : front.Services.functions.makeUrlEvent("me/posts", {
          //         id: Static.record?.id,
          //       });
          // const listener = postsListener;
          // Events.userFeed = await Fn.event(url, listener);
          // Static.feedState = false;
          //проверка на error
        }}
        style={
          Static.nameCategory === "feed"
            ? `background: no-repeat url('${lentaUser}') center/100%`
            : `background: no-repeat url('${lentaUser_inactive}') center/100%`
        }
        class="block h-[2.625rem] w-[2.875rem] @464:h-[4.0625rem] @464:w-[4.4375rem]"
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
