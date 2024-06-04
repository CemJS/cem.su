import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  // Fn.log('=f24bd3=',Static.titleHead)
  return (
    <div class="fixed left-0 right-0 top-0 z-[10] w-full border-b-[1px] border-solid border-[#2d3243] bg-[#1d2029] py-3">
      <div class="wrapper">
        <div class="flex items-center justify-between">
          <span
            class="flex cursor-pointer items-center justify-center"
            onclick={() => Fn.linkChange("/")}
          >
            <i class="i i-chevron-left"></i>
          </span>

          <h5 class="line-clamp-1 px-4 text-center text-base font-medium @700:text-xl">
            {front.Variable.words?.chapters?.career}
          </h5>

          <span
            class="relative w-8 cursor-pointer after:absolute after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%] after:text-5xl after:content-['...']"
            onclick={() =>
              Fn.initOne("modalTools", {
                shareUrl: window.location,
                copyURL: true,
              })
            }
          ></span>
        </div>
      </div>
    </div>
  );
}
