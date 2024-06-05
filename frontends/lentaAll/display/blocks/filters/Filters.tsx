import Filter from "@elements/ui/Filter";
import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

import type { Post as PostType } from "types/post.type";
import ChooseLanguage from "./components/ChooseLanguage";
import ChooseType from "./components/ChooseType";

export default function () {
  return (
    <div class="mb-2 flex flex-col gap-2">
      <div id="sorts" class="flex items-center justify-between gap-2">
        <Filter
          onChoose={(value) => {
            Static.sort = value;
            Func.updateFilter();
          }}
          filters={[
            { name: "lentaUsers", text: front.Variable?.words?.user?.lentaUser },
            { name: "forFriends", text: front.Variable?.words?.user?.lentaMyFriends },
          ]}
          key={"forFriends"}
        />
        <ChooseLanguage />
      </div>
      <ChooseType />
    </div>
  );
}
