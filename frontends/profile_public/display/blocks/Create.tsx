import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

import CreateLang from "./createBlocks/CreateLang";
import CreateForFriends from "./createBlocks/CreateForFriends";
import CreateFiles from "./createBlocks/CreateFiles";
import CreateText from "./createBlocks/CreateText";
import CreatePreviewButton from "./createBlocks/CreatePreviewButton";
import CreateCreateButton from "./createBlocks/CreateCreateButton";
import CreateMediaButtons from "./createBlocks/CreateMediaButtons";

export default function () {
  return (
    <div id="post-create">
      <h2 class="mb-5 mt-10 text-[26px] font-medium text-white" id="title">
        Создать/редактировать {Static.pageMap[Static.page]}
      </h2>
      <form id="create__form">
        <CreateLang />
        <CreateForFriends />
        {Static.data?.media.length ? <CreateFiles /> : null}
        <CreateText />
        <CreateMediaButtons />

        <div class="mx-auto flex max-w-[500px] gap-4 py-[20px] @410:gap-[30px]">
          <CreateCreateButton />
          <CreatePreviewButton />
        </div>
      </form>
    </div>
  );
}
