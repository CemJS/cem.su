import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "./post/Post";

export default function () {
  console.log("=4fb157=", Static.post);

  return (
    <div class="mx-auto w-full max-w-[900px]">
      {Static.post ? <Post item={Static.post} index={-1} /> : null}
    </div>
  );
}
