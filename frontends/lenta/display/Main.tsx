import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "@elements/post/Post";

import type { Post as PostType } from "types/post.type";

export default function () {
  console.log("=c053f3=", Static.records);
  return (
    <div class="mx-auto w-full max-w-[700px]">
      {Static.records?.map((item: PostType, index: number) => {
        return !item.hide ? (
          <Post item={item} index={index} initFunction={Func.initPost} />
        ) : (
          ""
        );
      })}
    </div>
  );
}
