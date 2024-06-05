import Filter from "@elements/ui/Filter";
import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

import type { Post as PostType } from "types/post.type";

const types = [
  {
    name: "all",
  },
  {
    name: "image",
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
              onclick={async () => {
                Static.type = type.name;
                Func.updateFilter();
                const filterRequest = await front.Services.functions.sendApi(
                  `/api/posts/filter`,
                  {
                    type: type.name,
                    lang: front.Variable.words?.code,
                    skip: 0,
                  },
                );
                Fn.log(filterRequest);
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
