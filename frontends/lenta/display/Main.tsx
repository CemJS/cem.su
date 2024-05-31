import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "@elements/post/Post";

import type { Post as PostType } from "types/post.type";
import PostSkeleton from "@elements/skeletonLoading/post/PostSkeleton";

export default function () {
  return (
    <div>
      <div class="mx-auto w-full max-w-[700px]">
        {!Static.showPostSkeleton &&
          Static.posts?.map((item: PostType, index: number) => {
            return <Post item={item} index={index} />;
          })}
      </div>
      <div class="mx-auto w-full max-w-[700px]">
        {Static.showPostSkeleton &&
          Array.from({ length: 9 }, (_, index) => <PostSkeleton />)}
      </div>
    </div>
  );
}
