import { Cemjsx, Fn, Func, front } from "cemjs-all";
import type { Post } from "types/post.type";
import OptionsPost from "./OptionsPost";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import UserPost from "./UserPost";
import StatisticsPost from "./StatisticsPost";
import TimePost from "./TimePost";
import CubeSlider from "@elements/CubeSlider";

// let media = [
//   { type: "image", mediaName: "3f33a923cde6e8874bb6e135bf9dfcfa.png" },
//   { type: "image", mediaName: "26e8fbeac63095ef0c7bace63dc802c6.png" },
//   { type: "image", mediaName: "f7127a7227230e615e78fd9311d4e3bf.png" },
//   { type: "image", mediaName: "f4750386359ee0eb675e00be1fbc796a.png" },
//   { type: "image", mediaName: "ee3fd58d96825233bd7fe2b3e8c4dd5d.png" },
//   { type: "image", mediaName: "8ee9f1da0d7b7c83bba603f28249f9de.png" },
//   { type: "image", mediaName: "23ac33c3e87825e01b19d5ddb9f09f00.png" },
//   { type: "image", mediaName: "4a8ffef8975b9e8d8cf5322e1fc33a29.png" },
// ];

export default function ({ item, index }: { item: Post; index: number }) {
  return (
    <div class="relative mb-[1.2rem] rounded-[--borderR]">
      <div class="relative flex gap-4 rounded-tl-[--borderR] rounded-tr-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <UserPost item={item} />

        <div class="flex w-full items-center justify-between">
          <span class="font-medium">{item?.author?.nickname}</span>
          {/* действия */}
          {/* <OptionsPost index={index} item={item} /> */}
        </div>
      </div>

      <CubeSlider
        items={item?.media?.map((it, i) => {
          return <MediaPost mediaItem={it} index={index + i} />;
        })}
      />

      <div class="rounded-bl-[--borderR] rounded-br-[--borderR] p-[0rem_0rem_2rem] [background:var(--backSecond)]">
        <TextPost item={item} />

        <StatisticsPost item={item} />

        {/* <ShowCommentsButton item={item} index={index} /> */}
      </div>

      <TimePost time={item.showDate} />
      {/* <CommentsPost item={item} index={index} /> */}
    </div>
  );
}
