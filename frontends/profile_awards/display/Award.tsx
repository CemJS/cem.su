import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import plusIcon from "@svg/personalAwards/plus.svg";
import type { Award } from '..';


export default function ({ icon, title, reward, description, progress, maxProgress }: Award) {
  return (
    <div class="relative flex flex-col sm:items-center p-7 sm:pt-10 sm:pb-8 sm:px-11 cursor-grab bg-[#33394a] rounded-md border border-[#52586A] sm:min-h-96 sm:max-w-60">

      <div class="absolute right-0 top-3 flex items-center gap-2 font-extrabold text-xs bg-white rounded-l-3xl text-[#3E3F5E] uppercase py-3 px-2">
        <img src={ plusIcon } alt="plus reward" />
        { reward}
      </div>

      <div class="relative mb-9">
        <img src={ icon } alt={ description } class="size-20 sm:size-32" />
        <img src={ icon } alt={ description } class="size-10 absolute top-0 left-0 -ml-4 -mt-4 hidden sm:block" />
      </div>

      <h2 class="font-semibold text-xl sm:text-center mb-4">{ title }</h2>
      <p class="mb-10 sm:mb-16 text-[#9CA3B8] font-medium text-lg sm:text-center ">{ description }</p>

      { progress === true ?

        <div class="w-full">
            <div class="bg-[#10d194] rounded-2xl h-1 w-full mb-6" />
            <div class="font-bold text-sm text-[#10d194] sm:text-center">ПОЛУЧЕНО</div> 
        </div>
    
      :
        <div class="font-bold text-sm text-[#8859ec]">{ progress } / { maxProgress }</div>
      }

    </div>
  )
}