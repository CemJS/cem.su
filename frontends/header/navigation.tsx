import { Cemjsx, front, Fn } from "cemjs-all";
import Main from "./display/Main";

export default function () {
  if (!front.Variable.hideHeader) {
    return <Main />;
  }

  return <div></div>;
}
