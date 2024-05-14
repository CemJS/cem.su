import { Cemjsx, Fn, Func, front } from "cemjs-all";
import points from "@svg/lenta/points.svg";
import type { Post } from "types/post.type";

export default function ({ item, index }: { item: Post; index: number }) {
  return (
    <div
      class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
      onclick={() => {
        let records = [];

        if (front.Variable?.myInfo.id == item?.author.id) {
          records.push({
            name: "Удалить",
            func: () => Func.delete(item),
            type: "danger",
          });
        }

        if (
          front.Variable?.myInfo.id != item?.author.id &&
          front.Variable?.Auth
        ) {
          records.push({
            name: !item?.subscribed ? "Подписаться" : "Отписаться",
            func: () => Func.follow(item),
          });
        }

        Fn.initOne("modalTools", {
          shareUrl: `/post/show/${item.id}`,
          records,
          userId: item?.author.id,
          complainTo: {
            name: "posts",
            text: "пост",
            id: item?.id,
          },
        });
      }}
    >
      <img src={points} />
    </div>
  );
}
