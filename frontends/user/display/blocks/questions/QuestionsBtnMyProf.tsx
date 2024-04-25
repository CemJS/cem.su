import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import dots from "@svg/questions/dots.svg";

export default function ({ item, key }) {
  return (
    <div class="absolute right-[1.25rem] top-[.625rem] box-border cursor-pointer">
      <div
        class="relative ml-[.625rem] box-border h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"
        onclick={() => {
          let records = [
            {
              name: "Удалить",
              type: "danger",
              func: () =>
                Fn.initOne("modalAccept", {
                  title: "удалить свой вопрос",
                  Callback: async (CallBack: boolean) => {
                    if (CallBack) {
                      const array = [...Static.record?.questions];
                      array.splice(key, 1);
                      const url = `/api/questions/${item?.id}/delete`;
                      const name = "question";
                      Func.delete(url, array, name);
                    }
                  },
                }),
            },
            {
              name: "Закрыть вопрос",
              func: () =>
                Fn.initOne("modalAccept", {
                  title: "закрыть свой вопрос",
                  Callback: async (CallBack: boolean) => {
                    if (CallBack) {
                      item.isClosed = true;
                      let res = await front.Services.functions.sendApi(
                        `/api/questions/${item?.id}/close`,
                        {},
                      );

                      if (res?.status === 200) {
                        // Static.record.work = array;
                      }
                    }
                  },
                }),
            },
          ];
          if (item?.isClosed) {
            records.splice(1, 1);
          }
          Fn.initOne("modalTools", {
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
