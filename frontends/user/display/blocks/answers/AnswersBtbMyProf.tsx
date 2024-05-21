import { Cemjsx, Fn, Static, front, Func } from "cemjs-all";
import dots from "@svg/questions/dots.svg";

export default function ({ item, key }) {
  return (
    <div class="absolute right-[1.25rem] top-[.625rem] z-[10] box-border cursor-pointer">
      <div
        class="relative ml-[.625rem] box-border h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"
        onclick={() => {
          const records = [];
          if (front.Variable?.DataUrl[1] === front.Variable?.myInfo?.nickname) {
            records.push({
              name: "Удалить",
              type: "danger",
              func: () =>
                Fn.initOne("modalAccept", {
                  title: "удалить свой ответ",
                  Callback: async (CallBack: boolean) => {
                    if (CallBack) {
                      const url = `/api/answers/${item?.id}/delete`;
                      const array = Static.record?.answers?.toSpliced(key, 1);
                      const name = "answer";
                      Func.delete(url, array, name);
                    }
                  },
                }),
            });
          } else {
            records.push({
              name: "Пожаловаться на ответ",
              type: "danger",
              func: () =>
                Fn.initOne("modalAccept", {
                  title: "оставить жалобу?",
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
          class="absolute left-[50%] top-[50%] box-border translate-x-[-50%] translate-y-[-50%]"
          src={dots}
        />
      </div>
    </div>
  );
}
