import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "./post/Post";

export default function () {
  return (
    <div class="mx-auto w-full max-w-[700px]">
      {Static.records?.map((item, index) => {
        console.log("=5b08bc=", item);
        return <Post item={item} index={item.id} />;
      })}
    </div>
  );
}
