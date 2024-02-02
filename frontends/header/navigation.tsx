import { Cemjsx, front, Fn } from "cemjs-all";
import Main from "./display/Main";

export default function () {
  // Fn.log("=273fa1=", front.Variable.hideHeader);
  if (!front.Variable.hideHeader) {
    return <Main />;
  }

  return <div></div>;
}
