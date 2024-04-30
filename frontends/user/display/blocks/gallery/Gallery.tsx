import { Cemjsx, Fn, Static } from "cemjs-all";
import FormGallery from "./FormGallery";

// Инициализируем состояние иконок
const blockIcons = {
  infinity: true,
  mountains: false,
  player: false,
};
// Функция для создания иконки
const createIcon = (icon: string, backgroundUrl: string) => (
  <li>
    <a
      onclick={() => setActiveIcon(icon)}
      class={[
        "block h-[1.8125rem] w-[1.8125rem]",
        `[background:no-repeat_url(${backgroundUrl})_center_/_90%]`,
        blockIcons[icon]
          ? "cursor-default rounded-[.3125rem] [border:2px_solid_#40f2d0]"
          : "cursor-pointer",
      ]}
    ></a>
  </li>
);

// Функция для установки активной иконки
function setActiveIcon(icon: string) {
  // Получаем ключи объекта blockIcons
  const keys = Object.keys(blockIcons);
  console.log("keys", keys);
  
  // Обновляем состояние иконок
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    blockIcons[key] = key === icon;
  }
  
  // Переинициализируем компонент
  Fn.init();
}// Компонент для отображения иконок
export default function () {
  return (
    <div class="relative z-[1] m-0 w-full min-w-full px-[.625rem] py-0 pb-[1.25rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)] @1200:pt-[.625rem]">
      <div class="mb-[.3125rem] mt-[1.25rem] flex items-center justify-between pb-[.9375rem] pt-[.625rem] @1024:mt-[1.5625rem]">
        <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(17px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
          Заданные вопросы
        </h2>
        <ul class="m-0 flex list-none items-stretch gap-[.4375rem] p-0 max-@1024:pr-[.625rem]">
          {createIcon("infinity", "/contents/svg/gallery/infinity.svg")}
          {createIcon("mountains", "/contents/svg/gallery/mountains.svg")}
          {createIcon("player", "/contents/svg/gallery/player.svg")}
        </ul>
      </div>
      {/* Показываем форму, если это необходимо */}
      {Static.showForm && <FormGallery />}
    </div>
  );
}
