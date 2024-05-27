import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import OptionsPost from "./OptionsPost";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import UserPost from "./UserPost";
import StatisticsPost from "./StatisticsPost";
import TimePost from "./TimePost";

export default function () {
  return (
    // Func.initPost($el, index)
    <div class="relative mb-[1.2rem] animate-pulse rounded-[--borderR] bg-[#3341551f] [border:_1px_solid_#363C50]">
      <div class="relative flex items-center gap-4 rounded-tl-[--borderR] rounded-tr-[--borderR] p-[0.7rem_1rem]">
        {<UserPost />}

        <div class="flex w-full items-center justify-between">
          <span class="font-medium"></span>
          {/* действия */}
          <OptionsPost />
        </div>
      </div>

      <MediaPost />

      <div class="rounded-bl-[--borderR] rounded-br-[--borderR] p-[0rem_0rem_2rem] px-4">
        <TextPost />

        <StatisticsPost />
      </div>

      <TimePost />
    </div>
  );
}
