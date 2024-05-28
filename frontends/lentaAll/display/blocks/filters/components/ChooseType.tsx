import Filter from "@elements/ui/Filter";
import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

import type { Post as PostType } from "types/post.type";

const types = [
  {
    name: "all",
  },
  {
    name: "photo",
  },
  {
    name: "video",
  },
  {
    name: "audio",
  },
  {
    name: "text",
  },
];

export default function () {
  return (
    <div id="types" class="flex justify-between">
      {types.map((type) => {
        return (
          <div class="cursor-pointer" id="type">
            <img
              onclick={() => {
                Static.type = type.name;
                Func.updateFilter();
              }}
              class="max-w-[70px]"
              src={`/contents/images/lentaAll/types/${type.name + (Static.type == type.name ? "-active" : "")}.svg`}
              alt={type.name}
            />
          </div>
        );
      })}
    </div>
  );
}
