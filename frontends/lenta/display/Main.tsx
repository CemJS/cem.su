import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import OptionsPost from "./post/OptionsPost";
import MediaPost from "./post/MediaPost";
import TextPost from "./post/TextPost";
import UserPost from "./post/UserPost";
import StatisticsPost from "./post/StatisticsPost";
import CommentsPost from "./post/CommentsPost";
import ShowCommentsButton from "./post/ShowCommentsButton";

const RenderPost = function ({ item, index }) {
  return (
    <div
      init={($el: any) => Func.initPost($el, index)}
      class="mb-[1.2rem] rounded-[--borderR]"
    >
      <div class="relative flex gap-4 rounded-tl-[--borderR] rounded-tr-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <UserPost item={item} />

        <OptionsPost item={item} />
      </div>

      <MediaPost item={item} index={index} />

      <div class="rounded-bl-[--borderR] rounded-br-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <TextPost item={item} />

        <StatisticsPost item={item} />

        <ShowCommentsButton item={item} index={index} />
      </div>

      <CommentsPost item={item} index={index} />
    </div>
  );
};

export default function () {
  return (
    <div class="mx-auto w-full max-w-[900px]">
      {Static.records?.map((item, index) => {
        return <RenderPost item={item} index={index} />;
      })}
    </div>
  );
}
