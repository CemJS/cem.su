import { Cemjsx, Fn, front, Static, Events } from "cemjs-all";

export default function () {
  return (
    <div class="fixed z-[5] p-[0.5rem_0] top-0 left-0 right-0 border-b-[1px] border-solid border-[#2d3243] w-full bg-[#1d2029]">
      <div class="wrapper">
        <div class="flex justify-between items-center">
          <span
            class="cursor-pointer flex justify-center items-center"
            onclick={() => {
              Fn.linkChange("/")
            }}
          >
            <i class="i i-chevron-left text-2xl"></i>
          </span>

          <h5 class="text-xl text-center px-4 line-clamp-1 font-medium">{front.Variable?.words?.chapters?.contacts}</h5>

          <span
            class="relative cursor-pointer w-8 after:content-['...'] after:absolute after:text-5xl after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%]"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  );
}


