import Filter from "@elements/ui/Filter";
import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

import type { Post as PostType } from "types/post.type";

const types = [
  {
    name: "audio",
    icon: "/contents/images/lentaAll/types/audio.svg",
  },
  {
    name: "all",
    icon: "/contents/images/lentaAll/types/all.svg",
  },
  {
    name: "video",
    icon: "/contents/images/lentaAll/types/video.svg",
  },
  {
    name: "audio",
    icon: "/contents/images/lentaAll/types/audio.svg",
  },
  {
    name: "text",
    icon: "/contents/images/lentaAll/types/text.svg",
  },
];

export default function () {
  return (
    <div id="types" class="flex justify-between">
      {types.map((type) => {
        return (
          <div class="cursor-pointer" id="type">
            <img class="max-w-[70px]" src={type.icon} alt={type.name} />
          </div>
        );
      })}
    </div>
  );
}
