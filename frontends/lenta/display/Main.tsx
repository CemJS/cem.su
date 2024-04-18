import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "./post/Post";

export default function () {
  return (
    <div class="mx-auto w-full max-w-[900px]">
      {Static.records?.map((item, index) => {
        return <Post item={item} index={index} />;
      })}
    </div>
  );
}
