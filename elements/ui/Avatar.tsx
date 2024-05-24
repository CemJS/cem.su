import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import avatarDefault from "@images/lenta/avatar_default.png";

export default function ({
  avatarData,
}) {
  return (
    <a
      href={`/user/${avatarData?.id}`}
      class={[
        "left-[-.9375rem] w-[5rem] pl-0 text-inherit no-underline",
        // nickname === "" && "flex justify-center",
      ]}
    >
      <div class="relative z-[1] ml-[.625rem] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
        <img
          class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
          src={
            avatarData?.avatarName ? `/assets/upload/avatar/${avatarData?.avatarName}` : avatarDefault
          }
        />
        <img
          class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
          src={avatarData?.frameName ? `/contents/images/lenta/${avatarData?.frameName}` : defaultGray}
        />
        <div>
          <div class="absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.75rem]">
            <img class="h-full" src={leveGray} />
            <span class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[.75rem] font-bold tracking-[0.6px] text-[--white]">
              {avatarData?.level}
            </span>
          </div>
          <div
            class={[
              "absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [border:3px_solid_#ffffff]",
              avatarData?.online
                ? "[background:linear-gradient(225deg,_#72FFB6_0,_#10D194_100%)]"
                : "[background:linear-gradient(225deg,_#FF7272_0%,_#D93030_100%)]",
            ]}
          ></div>
        </div>
      </div>
    </a>
  );
}
