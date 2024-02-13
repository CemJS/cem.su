import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Preview from "./Preview"
import ShortPreview from "./ShortPreview"
import Categories from "./Categories"
import UserMainBlock from "./UserMainBlock"

export default function () {

  return (

    <div class="c-main__body">
      <div>
        <div class="c-userpreview c-container">
          <Preview />
          <ShortPreview />
        </div>
        <Categories />
        <UserMainBlock />
      </div>
    </div>
  )
}