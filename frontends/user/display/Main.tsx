import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Preview from "./Preview"
import ShortPreview from "./ShortPreview"
import Categories from "./Categories"
import UserMainBlock from "./UserMainBlock"

export default function () {
  // Fn.log('=dfbb213=', Static.record)
  return (
    <div class="c-main__body">
      <div class="wrapper">
        <div class="c-userpreview">
          <Preview />
          <ShortPreview />
        </div>
        <Categories />
        <UserMainBlock />
      </div>
    </div>
  )
}