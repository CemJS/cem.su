import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import type { ServerResponse } from "..";

export default function () {
  return (
    <main class="relative overflow-hidden">
      <div class="flex flex-col gap-5 p-2 mt-6">
        { (Static.notificationContent as ServerResponse[]).map(el => (
          <div class="py-4 px-6 bg-[#3E4354] rounded-xl">
              <div class="flex content-center  gap-4">
                <div class="flex items-center justify-center"><img class="size-8" src={ el.icon } alt={ el.title } /></div>
                  <div class="">
                    <h3 class="text-lg sm:text-2xl font-bold">{ el.title }</h3>
                    <p class="text-lg">{ el.text }</p>
                </div>
              </div>
              <div class="ml-auto flex justify-end">Day: { el.time.getMilliseconds() }</div>
          </div> 
        ))}
      </div>
    </main>
  );
}
