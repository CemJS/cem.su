import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import { Post as PostType } from "types/post.type";
import Post from "@elements/post/Post";

export default function () {
  return (
    <div>
      {Static.posts?.map((item: PostType, index: number) => {
        return <Post item={item} index={index} skipUrl="/api/me/posts" />;
      })}
    </div>
  );
}
