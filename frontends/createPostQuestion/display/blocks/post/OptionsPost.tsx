import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import points from "@svg/lenta/points.svg";
import type { Post } from "types/post.type";

export default function ({ item, index }: { item: Post; index: number }) {
  return (
    <div class="flex w-full items-center justify-between">
      <span class="font-medium">{item?.author?.nickname}</span>
      {/* действия */}
      <div
        class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
        onclick={() => {
          let records = [];

          if (front.Variable?.myInfo.id == item?.author.id) {
            records.push({
              name: "Редактировать",
              func: () => {
                Fn.linkChange("/create/pst", { edit: item });
              },
            });
            records.push({
              name: "Удалить",
              func: () => {
                Fn.initOne("modalAccept", {
                  title: "удалить свой пост",
                  Callback: async (CallBack: boolean) => {
                    if (CallBack) {
                      Func.delete(item);
                    }
                  },
                });
              },
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
    </div>
  );
}
