import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  // Fn.log('=f24bd3=',Static.titleHead)
  return (
    <div class="fixed left-0 top-0 z-10 w-full border-b border-[#2d3243] bg-[#1d2029] py-2 ">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center justify-between">
          <span
            class="flex cursor-pointer items-center justify-center"
            onclick={() => Fn.linkChange("/")}
          >
            <i class="i-arrow-left bg-clip-text font-['cemicons'] text-[1.3rem] font-normal normal-case not-italic leading-4"></i>
          </span>

          <h5
            style="-webkit-line-clamp: 1;
              -webkit-box-orient: vertical;"
            class="flex items-center overflow-hidden text-xl font-semibold"
          >
            О нас
          </h5>

          <span
            class="hover:after:origin-1000 
            relative w-[1.925rem]
             cursor-pointer after:absolute 
             after:left-0 after:top-0 
             after:translate-x-[-10%] 
             after:translate-y-[-70%] 
             after:text-[3rem] 
             after:content-['...'] 
             hover:after:text-[#363b4b] 
             hover:after:duration-1000"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  );
}
