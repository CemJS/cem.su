import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import dots from "@svg/questions/dots.svg";

export default function ({ item, key }) {
  return (
    <div class="absolute right-[1.25rem] top-[.625rem] box-border cursor-pointer">
      <div
        class="relative ml-[.625rem] box-border h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"
        onclick={() => {
          let records = [];
          if (front.Variable?.DataUrl[1] === front.Variable?.myInfo?.nickname) {
            records.push(
              {
                name: front.Variable?.words?.tools?.delete,
                type: "danger",
                func: () =>
                  Fn.initOne("modalAccept", {
                    title: "удалить свой вопрос",
                    Callback: async (CallBack: boolean) => {
                      if (CallBack) {
                        const array = Static.record?.questions?.toSpliced(
                          key,
                          1,
                        );
                        const url = `/api/questions/${item?.id}/delete`;
                        const name = "question";
                        Func.delete(url, array, name);
                      }
                    },
                  }),
              },
              {
                name: front.Variable?.words?.qa?.closedQuestion,
                func: () =>
                  Fn.initOne("modalAccept", {
                    title: front.Variable?.words?.qa?.closedYourQuestion,
                    Callback: async (CallBack: boolean) => {
                      if (CallBack) {
                        item.isClosed = true;
                        const url = `/api/questions/${item?.id}/close`;
                        Func.sendAuth(url, {});
                      }
                    },
                  }),
              },
            );
            if (item?.isClosed) {
              records?.splice(1, 1);
            }
          } else {
            records.push({
              name: "Пожаловаться на вопрос",
              type: "danger",
              func: () =>
                Fn.initOne("modalAccept", {
                  title: "удалить свой вопрос",
                  Callback: async (CallBack: boolean) => {
                    if (CallBack) {
                      const array = Static.record?.questions?.toSpliced(key, 1);
                      const url = `/api/questions/${item?.id}/delete`;
                      const name = "question";
                      Func.delete(url, array, name);
                    }
                  },
                }),
            });
          }
          Fn.initOne("modalTools", {
            userId:
              front.Variable?.DataUrl[1] === front.Variable?.myInfo?.nickname
                ? null
                : Static.record?.id,
            records,
          });
        }}
      >
        <img
          class="absolute left-[50%] top-[50%] box-border translate-x-[-50%]
          translate-y-[-50%]"
          src={dots}
        />
      </div>
    </div>
  );
}
