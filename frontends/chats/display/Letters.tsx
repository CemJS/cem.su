import { Cemjsx } from "cemjs-all"

const RenderMessages = () => {
  return (
    <div>
      <ul class="chat-letters-list">
        <li class="chat-letters-list_item flex hover:bg-slate-700 cursor-pointer p-2 transition-all	">
          <a class="rounded-full block w-[35px] h-[35px] bg-neutral-600"></a>
          <div class="grid">
            <span class="text-base">Someone</span>
            <span class="text-sm truncate">Text message asdasdljahsdjahsdlahcccccccccccccsdl</span>
          </div>
          <div class="flex flex-col text-right justify-between">
            <span class="text-xs text-gray-600 font-medium bg-slate-200 rounded-full p-1">5</span>
            <span class="text-xs text-gray-400 font-medium">12:30</span>
          </div>
        </li>
        <li class="chat-letters-list_item flex hover:bg-slate-700 cursor-pointer p-2 transition-all	">
          <a class="rounded-full block w-[35px] h-[35px] bg-neutral-600"></a>
          <div class="grid">
            <span class="text-base">Someone</span>
            <span class="text-sm truncate">Text message asdasdljahsdjahsdlahcccccccccccccsdl</span>
          </div>
          <div class="flex flex-col text-right justify-between">
            <span class="text-xs text-gray-600 font-medium bg-slate-200 rounded-full p-1">5</span>
            <span class="text-xs text-gray-400 font-medium">12:30</span>
          </div>
        </li>
        <li class="chat-letters-list_item flex hover:bg-slate-700 cursor-pointer p-2 transition-all	">
          <a class="rounded-full block w-[35px] h-[35px] bg-neutral-600"></a>
          <div class="grid">
            <span class="text-base">Someone</span>
            <span class="text-sm truncate">Text message asdasdljahsdjahsdlahcccccccccccccsdl</span>
          </div>
          <div class="flex flex-col text-right justify-between">
            <span class="text-xs text-gray-600 font-medium bg-slate-200 rounded-full p-1">5</span>
            <span class="text-xs text-gray-400 font-medium">12:30</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default function () {
  return (
    <div class="chat-letters h-full">
      <div class="p-2">
        <label for="default-input" class="block mb-2 text-sm font-medium text-white">Поиск</label>
        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Поиск по сообщениям..." />
      </div>
      <RenderMessages />
    </div>
  )
}