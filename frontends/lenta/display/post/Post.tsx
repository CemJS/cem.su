import { Cemjsx, Fn, Func, front } from "cemjs-all";
import OptionsPost from "./OptionsPost";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import UserPost from "./UserPost";
import StatisticsPost from "./StatisticsPost";
import TimePost from "./TimePost";

export default function ({ item, index }) {
  return (
    <div
      init={($el: any) => Func.initPost($el, index)}
      class="relative mb-[1.2rem] rounded-[--borderR]"
    >
      <div class="relative flex gap-4 rounded-tl-[--borderR] rounded-tr-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <UserPost item={item} />

        <OptionsPost item={item} />
      </div>

      <MediaPost item={item} index={index} />

      <div class="rounded-bl-[--borderR] rounded-br-[--borderR] p-[0.7rem_1rem_2rem] [background:var(--backSecond)]">
        <TextPost item={item} />

        <StatisticsPost item={item} />

        {/* <ShowCommentsButton item={item} index={index} /> */}
      </div>

      <TimePost time={item.showDate} />
      {/* <CommentsPost item={item} index={index} /> */}
    </div>
  );
}
