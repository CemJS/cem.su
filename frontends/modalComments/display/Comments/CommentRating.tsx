import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";

export default function ({ item, likeUrl, dislikeUrl, extraData = {} }) {
  return (
    <div class="flex w-16 items-center justify-between">
      <img
        class="h-5 w-5 cursor-pointer rounded-[50%]"
        src={dislike}
        onclick={async () => {
          await Func.sendAuth(dislikeUrl, {
            ...extraData,
          });
        }}
      />
      <span class="relative ml-[0.125rem] min-w-[1.125rem] !bg-clip-text text-center text-[0.9375rem] font-bold tracking-[0.0625rem] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_25%,#9844b7_51%,#ff357f_100%)]">
        {item.statistics?.rating}
      </span>
      <img
        class="h-5 w-5 cursor-pointer rounded-[50%]"
        src={like}
        onclick={async () => {
          await Func.sendAuth(likeUrl, {
            ...extraData,
          });
        }}
      />
    </div>
  );
}
