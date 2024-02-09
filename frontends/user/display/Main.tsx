import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Preview from "./Preview"
import ShortPreview from "./ShortPreview"
import Categories from "./Categories"

export default function () {

  return (
    <div class="c-userpreview c-container">
      <Preview />
      <ShortPreview />
      <Categories />
    </div>
  )
}