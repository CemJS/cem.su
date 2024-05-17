import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "@elements/post/Post";

export default function () {
  return (
    <div class="mx-auto w-full max-w-[700px]">
      {Static.post ? (
        <Post item={Static.post} index={-1} hideOptions={true} />
      ) : null}
    </div>
  );
}
