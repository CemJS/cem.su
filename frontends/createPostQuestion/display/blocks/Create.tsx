import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

import CreateLang from "./createBlocks/CreateLang";
import CreateForFriends from "./createBlocks/CreateForFriends";
import CreateFiles from "./createBlocks/CreateFiles";
import CreateText from "./createBlocks/CreateText";
import CreatePreviewButton from "./createBlocks/CreatePreviewButton";
import CreateCreateButton from "./createBlocks/CreateCreateButton";
import CreateMediaButtons from "./createBlocks/CreateMediaButtons";
import EditCancel from "./createBlocks/editBlocks/EditCancel";
import EditSave from "./createBlocks/editBlocks/EditSave";
import Input from "@elements/ui/Input";

export default function () {
  return (
    <div id="post-create">
      <h2 class="mb-5 mt-10 text-[26px] font-medium text-white" id="title">
        Создать/редактировать {Static.pageMap[Static.page]}
      </h2>
      <form id="create__form">
        <CreateLang />
        {Static.page == "posts" ? <CreateForFriends /> : ""}
        {Static.page == "questions" ? (
          <Input
            value={Static.data?.title}
            className="mb-4"
            isValid={Static.data?.title?.length > 0}
            error={Static.form?.title?.error}
            placeholder="Вопрос"
            oninput={(e) => {
              const target = e.target as HTMLInputElement;
              Static.form.title.value = target.value;
              Static.data.title = target.value;
              front.Services.functions.formQuestion(Static.form.title);
              Func.checkForm();
              Func.checkValid();
            }}
          />
        ) : (
          ""
        )}
        {Static.data?.media?.length ? <CreateFiles /> : null}
        <CreateText />
        <CreateMediaButtons />

        <div class="mx-auto flex max-w-[500px] gap-4 py-[20px] @410:gap-[30px]">
          <CreatePreviewButton />
          {Static.edit && <EditCancel />}
          {Static.edit && <EditSave />}
          {!Static.edit && <CreateCreateButton />}
        </div>
      </form>
    </div>
  );
}
