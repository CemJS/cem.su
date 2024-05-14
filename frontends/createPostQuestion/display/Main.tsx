import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import Feed from "./blocks/Feed";
import Create from "./blocks/Create";

export default function () {
  Static.feedState = false;

  return (
    <div class="wrapper wrapper_padding">
      <Create />
      <Feed />
    </div>
  );
}
