import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import frameDefault from "@svg/lenta/default.svg";

let image = `/contents/images/lenta/avatar_default.png`;

export default function ({ item }) {
  return (
    <div class="relative z-[1] ml-[0.625rem] h-[2.625rem] w-[2.25rem] min-w-[2.9375rem]">
      <img
        class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] [object-fit:cover] [transform:translateX(-50%)_translateY(-50%)]"
        src={
          item.author.avatar?.name
            ? `/assets/upload/avatar/${item.author.avatar?.name}`
            : image
        }
      />
      <img
        class="absolute left-1/2 top-[0] z-[2] h-full !w-auto [transform:translateX(-50%)]"
        src={
          item.author.frame?.name && item.author.frame?.name != "default.svg"
            ? `/contents/images/lenta/${item.author.frame?.name}`
            : frameDefault
        }
      />
      {item.author.status?.team ? (
        <img
          class="absolute bottom-[0] right-0 z-[2] h-[1.0625rem] w-[1.0625rem] rounded-[50%] bg-[--white] p-[0.1875rem]"
          src={item.author.status?.team ? teamLogo : null}
        />
      ) : (
        <div>
          <div class="absolute !top-[auto] bottom-0 right-[0] z-[2] h-[1.125rem]">
            <img class="h-full" src={leveGray} />
            <span class="absolute left-1/2 top-1/2 text-[0.625rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
              {item.author.statistics.level}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
