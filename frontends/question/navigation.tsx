import { Cemjsx, Static, front, Fn } from "cemjs-all";
import Show from "./display/Show";
import HeaderBack from "./display/HeaderBack";

export default function () {
  console.log("=c919f4=", Static);
  if (Static.record) {
    if (front.Variable.$el.header) {
      front.Variable.$el.header.classList.add("hide");
    }
    if (front.Variable.$el.footer) {
      front.Variable.$el.footer.classList.add("hide");
    }
    return (
      <section>
        <HeaderBack />
        <Show />
      </section>
    );
  }
  return 123;
}
