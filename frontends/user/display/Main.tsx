import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Preview from "./Preview";
import ShortPreview from "./ShortPreview";
import Categories from "./Categories";
import UserMainBlock from "./UserMainBlock";

export default function () {
  // Fn.log('Static.record2', Static)
  return (
    <div class="c-main-body">
      <div class="wrapper px-0 @767:px-[1rem]">
        <div class="relative mx-auto my-[.3125rem] w-full rounded-[0] bg-[--black-gray] py-0 @767:right-auto @767:w-[calc(100%--_24px)] @767:px-0 @1240:right-[.4688rem] @1240:w-full @1240:max-w-[1240px] @1240:rounded-[.9375rem]">
          <Preview />
          <ShortPreview />
        </div>
        <Categories />
        <UserMainBlock />
      </div>
    </div>
  );
}
