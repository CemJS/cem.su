import { Cemjsx, Static, front, Fn } from "cemjs-all";
import Main from "./display/Main";
import Show from "./display/Show";
import HeaderBack from "./display/HeaderBack";

export default function () {
  if (Static.record) {
    if (front.Variable.$el.header) {
      front.Variable.$el.header.classList.add("hide");
      Fn.log("=1581ce=", front.Variable.$el.header.classList);
    }
    return (
      <section>
        <HeaderBack />
        <Show />
      </section>
    );
  }

  return <Main />;
}
