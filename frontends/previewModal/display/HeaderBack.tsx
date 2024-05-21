import { Cemjsx, Fn, front, Static, Events, Func } from "cemjs-all";

export default function () {
  return (
    <div class="fixed left-0 right-0 top-0 z-[10] w-full border-b-[1px] border-solid border-[#2d3243] bg-[#1d2029] py-3">
      <div class="wrapper">
        <div class="flex items-center justify-between">
          <span
            class="flex cursor-pointer items-center justify-center"
            onclick={() => {
              Fn.linkChange("/");
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
            Предпросмотр
          </h5>
        </div>
      </div>
    </div>
  );
}
