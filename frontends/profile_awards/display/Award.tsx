import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import plusIcon from "@svg/personalAwards/plus.svg";
import type { Award as TAward } from '..';

interface Award extends TAward  {
  classes?: string;
  style?: string;
  ariaLabelStart: number;
  ariaLabelEnd: number;
}
export default function ({ icon, title, reward, description, progress, maxProgress, classes, style, ariaLabelStart, ariaLabelEnd }: Award ) {
  return (
    <div class={ classes + " w-full h-full" } style={ style } role="group" aria-label={ ariaLabelStart + ' / ' + ariaLabelEnd }>

      <div class="relative flex flex-col sm:items-center p-7 sm:pt-10 sm:pb-8 sm:px-11 cursor-grab bg-[#33394a] rounded-md border border-[#52586A] w-full sm:max-w-60 h-full">

        <div class="absolute right-0 top-3 flex items-center gap-2 font-extrabold text-xs bg-white rounded-l-3xl text-[#3E3F5E] uppercase py-3 px-2">
          <img src={ plusIcon } alt="plus reward" />
          { reward}
        </div>

        <div class="relative mb-9">
          <img src={ icon } alt={ description } class="size-20 sm:size-32" />
          <img src={ icon } alt={ description } class="size-10 absolute top-0 left-0 -ml-4 -mt-4 hidden sm:block" />
        </div>

        <div class="flex-auto">
          <h2 class="font-semibold text-xl sm:text-center mb-4">{ title }</h2>
          <p class="sm:mb-16 text-[#9CA3B8] font-medium text-lg sm:text-center ">{ description }</p>
        </div>

        { progress === true ?

          <div class="w-full flex-initial">
              <div class="bg-[#10d194] rounded-2xl h-1 w-full mb-6" />
              <div class="font-bold text-sm text-[#10d194] sm:text-center">ПОЛУЧЕНО</div> 
          </div>
      
        :
          <div class="font-bold text-sm text-[#8859ec] flex-initial">{ progress } / { maxProgress }</div>
        }

      </div>

    </div>
  )
}
