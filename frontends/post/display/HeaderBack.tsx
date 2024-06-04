import { Cemjsx, Fn, front, Static, Events, Func } from "cemjs-all";

export default function () {
  return (
    <div class="fixed left-0 right-0 top-0 z-[10] w-full border-b-[1px] border-solid border-[#2d3243] bg-[#1d2029] py-3">
      <div class="wrapper">
        <div class="flex items-center justify-between">
          <span
            class="flex cursor-pointer items-center justify-center"
            onclick={() => {
              Fn.linkChange(Static.link ? Static.link : "/");
              if (front.Variable.$el.header) {
                front.Variable.$el?.header?.classList?.remove("hide");
                front.Variable.$el?.footer?.classList?.remove("hide");
                Static.post = null;
                Events.post?.close();
              }
            }}
          >
            <i class="i i-chevron-left text-2xl"></i>
          </span>

          <h5 class="line-clamp-1 px-4 text-center text-base font-medium @700:text-xl">
            Лента пользователя
          </h5>

          <span
            class="relative w-8 cursor-pointer after:absolute after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%] after:text-5xl after:content-['...']"
            onclick={() => {
              let records = [];

              if (front.Variable?.myInfo.id == Static.post?.author.id) {
                records.push({
                  name: front.Variable?.words?.tools?.edit,
                  func: () => {
                    Fn.linkChange("/create/pst", { edit: Static.post });
                    Static.post = null;
                    Events.post?.close();
                  },
                });

                records.push({
                  name: front.Variable?.words?.tools?.delete,
                  func: () => {
                    Fn.initOne("modalAccept", {
                      title: "удалить свой пост",
                      Callback: async (CallBack: boolean) => {
                        if (CallBack) {
                          Func.delete(Static.post);
                        }
                      },
                    });
                  },
                  type: "danger",
                });
              }

              if (
                front.Variable?.myInfo.id != Static.post?.author.id &&
                front.Variable?.Auth
              ) {
                records.push({
                  name: !Static.post?.subscribed ? "Подписаться" : "Отписаться",
                  func: () => Func.follow(Static.post),
                });
              }

              Fn.initOne("modalTools", {
                shareUrl: `/post/show/${Static.post.id}`,
                records,
                userId: Static.post?.author.id,
                complainTo: {
                  name: "posts",
                  text: "пост",
                  id: Static.post?.id,
                },
              });
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
