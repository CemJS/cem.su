import { Cemjsx, Fn, Static, front, Func } from "cemjs-all";
import GridGallery from "./GridGallery";
import GallerySkeleton from "@elements/skeletonLoading/GallerySkeleton";
// Инициализируем состояние иконок
Static.blockIcons = {
  infinity: true,
  mountains: false,
  player: false,
};
// Функция для создания иконки
const createIcon = (icon: string, backgroundUrl: string, mediaType: string) => (
  <li>
    <img
      onclick={!Static.blockIcons[icon] ? () => setActiveIcon(icon, mediaType) : null}
      src={backgroundUrl}
      class={[
        "block h-[1.8125rem] w-[1.8125rem]",
        // `[background:no-repeat_url(${infinity})_center_/_90%]`,
        Static.blockIcons[icon]
          ? "cursor-default rounded-[.3125rem] [border:2px_solid_#40f2d0]"
          : "cursor-pointer",
      ]}
    />
  </li>
);

// Функция для установки активной иконки
async function setActiveIcon(icon: string, mediaType: string) {
  // Обновляем состояние иконок
  Object.keys(Static.blockIcons).forEach((key) => {
    Static.blockIcons[key] = key === icon;
  });
  let content = await front.Services.functions.sendApi(
    `/api/users/${Static.record?.nickname}/profile`,
    { category: "gallery", mediaType: mediaType },
  );
  // Переинициализируем компонент
  Fn.init();
}

// Компонент для отображения иконок

const RenderGallery = function () {
  return <GridGallery />;
};

export default function () {
  // if (Static.record?.gallery) {
  //   Func.preloaderClose();
  // }

  return (
    <div class="relative z-[1] m-0 w-full min-w-full px-0 py-0 pb-[1.25rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)] @1200:pt-[.625rem]">
      <div class="mb-[.3125rem] mt-[1.25rem] flex items-center justify-between pb-[.9375rem] pt-[.625rem] max-@1024:px-[.625rem] @1024:mt-[1.5625rem]">
        <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(17px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
          Галерея
        </h2>
        <ul class="m-0 flex list-none items-stretch gap-[.4375rem] p-0 ">
          {createIcon("infinity", "/contents/svg/gallery/infinity.svg", "")}
          {createIcon(
            "mountains",
            "/contents/svg/gallery/mountains.svg",
            "image",
          )}
          {createIcon("player", "/contents/svg/gallery/player.svg", "video")}
        </ul>
      </div>
      <RenderGallery />
    </div>
  );
}
