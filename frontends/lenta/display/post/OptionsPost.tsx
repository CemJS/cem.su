import { Cemjsx, Fn, Func, front } from "cemjs-all";
import points from "@svg/lenta/points.svg";

export default function ({ item }) {
  return (
    <div class="flex w-full items-center justify-between">
      <span class="font-medium">{item?.author?.nickname}</span>
      {/* действия */}
      <div
        class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
        onclick={() => {
          let records = [];

          if (
            front.Variable.myInfo.id != item.author.id &&
            front.Variable.Auth
          ) {
            records.push({
              name: "Подписаться",
              func: () => Func.follow(item?.id),
            });
          }

          Fn.initOne("modalTools", {
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
