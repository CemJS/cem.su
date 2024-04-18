import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <ul class="mt-4 flex items-center justify-between">
      <li class="flex items-center gap-8">
        <div
          onclick={(e) => {
            e.currentTarget.classList.toggle("i_likes");
            Func.likePost(item.id);
          }}
          class="flex cursor-pointer items-center gap-2"
        >
          <i class="i i-likeFull"></i>
          {item?.statistics.rating}
        </div>
        <div
          onclick={(e) => {
            e.currentTarget.classList.toggle("i_likes");
            Func.dislikePost(item.id);
          }}
          class="flex cursor-pointer items-center gap-2"
        >
          <i class="i i-dislikeFull"></i>
          {item?.statistics.rating}
        </div>
      </li>
      <li class="flex items-center gap-8">
        <div
          onclick={() => {
            Fn.initOne("modalComments", {
              id: item.id,
            });
          }}
          class="flex cursor-pointer items-center gap-2"
        >
          <i class="i i-comments"></i>
          {item?.statistics.comments}
        </div>
        <div class="flex items-center gap-2">
          <i class="i i-eye"></i>
          {item?.statistics.views}
        </div>
      </li>
    </ul>
  );
}
