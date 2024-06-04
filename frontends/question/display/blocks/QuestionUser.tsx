import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

Static.showComments = front.Variable?.words?.comments?.showComments;
let image = `/contents/images/lenta/avatar_default.png`;

export default function ({ item }) {
  return (
    <div id="user">
      <a
        onclick={Fn.link}
        class="relative inline-flex h-auto w-auto"
        href={`/user/${item?.author.nickname}`}
      >
        <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
          <img
            class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
            src={
              item?.author.avatar?.name
                ? `/assets/upload/avatar/${item?.author.avatar?.name}`
                : image
            }
          />
          <img
            class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
            src={
              item?.author.frame?.name
                ? `/contents/images/lenta/${item?.author.frame?.name}`
                : frameDefault
            }
          />
          {item?.author.status?.team ? (
            <img
              class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
              src={item?.author.status?.team ? teamLogo : null}
            />
          ) : (
            <div>
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <img class="h-full" src={leveGray} />
                <span class="text-[0.75rem absolute left-1/2 top-1/2 font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                  {item.author?.statistics.level}
                </span>
              </div>
            </div>
          )}
        </div>
        <div class="absolute left-20 top-5 mb-2 block leading-[24px]">
          <span class="inline text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
            {item.author?.nickname}
          </span>
        </div>
      </a>
    </div>
  );
}
