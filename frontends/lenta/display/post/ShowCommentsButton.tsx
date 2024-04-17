import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item, index }) {
  return (
    <button
      class="relative block min-h-[2rem] w-max cursor-pointer overflow-hidden rounded-[0.1875rem] border-none bg-transparent pl-[0.625rem] pr-[0.625rem] pt-0 text-center text-[0.875rem] font-semibold text-[--white] no-underline "
      onclick={async (e) => {
        if (!item.comments?.length) {
          await front.Services.functions.sendApi(
            `/api/posts/${item.id}/comments`,
            {},
          );
          Fn.initOne("modalComments", {
            item,
            index,
            CallInit: (CallBack) => {
              Static.modalCallBack = CallBack;
            },
          });
          return;
        }
        Fn.initOne("modalComments", {
          item,
          index,
          CallInit: (CallBack) => {
            Static.modalCallBack = CallBack;
          },
        });
      }}
    >
      {`Комментарии (${item.statistics.comments})`}
      <div class="absolute top-0 z-[-1] inline-block h-[3.4375rem] w-[27.5rem] bg-[#3bade3] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_10%,#9844b7_70%,#ff357f_90%)] [transform:translateX(-20.625rem)]   [transition:transform_400ms_ease-in]"></div>
    </button>
  );
}
