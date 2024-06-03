import { Cemjsx, Static, Fn, Func } from "cemjs-all";

const RenderListServices = function () {
  return (
    <div 
      class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] overflow-y-scroll h-[15rem] max-h-[15rem] gap-4"
    >
      {Static.platformServices.map((item) => {
        return (
          <a
            class="flex flex-col justify-between items-center cursor-pointer"
            onclick={() => {
              Fn.linkChange(item.link)
              Func.close();
            }}
          >
            <div 
              class="w-[4rem] h-[4rem] overflow-hidden flex items-center justify-between bg-[linear-gradient(to_left,#2973ff,#8846d3,#ff22ac)] hover:bg-right transition-all rounded"
            >
              <div class="flex justify-center items-center h-full w-full">
                <i class={["i", `i-${item.icon}`, "text-2xl"]}></i>
              </div>
            </div>
            <span 
              class="whitespace-nowrap text-base"
            >
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default function () {
  return (
    <main>
      <div class="mt-[15px]">
        <RenderListServices />
      </div>
    </main>
  );
}
