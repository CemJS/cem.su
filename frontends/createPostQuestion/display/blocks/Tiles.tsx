import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import play_btn from "@svg/icons/play_button.svg";
import { Post as PostType } from "types/post.type";
import Post from "./post/Post";

export default function () {
  // Fn.log("wtf?", Static.record?.feed[0]);

  return (
    <div>
      {Static.posts?.map((item: PostType, key: number) => {
        return <Post item={item} index={key} />;
      })}
    </div>
  );
}
