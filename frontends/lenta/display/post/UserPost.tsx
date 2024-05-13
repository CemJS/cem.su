import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import leveGray from "@svg/lenta/level_gray.svg";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";

export default function ({ item }) {
  return (
    <div id="user-circle" class="relative inline-block h-16 w-16 rounded-[50%]">
      <img
        class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
        src={
          item.author?.avatar?.name
            ? `/assets/upload/avatar/${item.author.avatar?.name}`
            : avatarDefault
        }
      />
      <img
        class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
        src={
          item.author?.frame?.name
            ? `/contents/images/lenta/${item.author.frame?.name}`
            : frameDefault
        }
      />
      {item.author?.status?.team ? (
        <img
          class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
          src={item.author?.status?.team ? teamLogo : null}
        />
      ) : (
        <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
          <div class="relative flex h-full w-full items-center justify-center">
            <img class="h-full" src={leveGray} />
            <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
              {item.author?.statistics?.level}
            </span>
            <div
              class={[
                "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                item.online
                  ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                  : null,
              ]}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
