import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "@elements/post/Post";
import Filters from "./blocks/filters/Filters";

import type { Post as PostType } from "types/post.type";

export default function () {
  return (
    <div class="mx-auto w-full max-w-[700px]">
      <Filters />
      {Static.posts?.map((item: PostType, index: number) => {
        return !item.hide ? <Post item={item} index={index} /> : "";
      })}
    </div>
  );
}
