import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import { Post as PostType } from "types/post.type";
import Post from "@elements/post/Post";
import PostSkeleton from "@elements/skeletonLoading/post/PostSkeleton";

export default function () {
  return (
    <div>
      {!Static.showPostSkeleton
        ? Static.posts?.map((item: PostType, index: number) => {
            return <Post item={item} index={index} skipUrl="/api/me/posts" />;
          })
        : Array.from({ length: 3 }, (_, index) => <PostSkeleton />)}
    </div>
  );
}
