import { Cemjsx, Static, front } from "cemjs-all";
import Main from "./display/Main";
import HeaderBack from "./display/HeaderBack";

export default function () {
  if (Static.post) {
    if (front.Variable.$el.header) {
      front.Variable.$el.header.classList.add("hide");
    }
    if (front.Variable.$el.footer) {
      front.Variable.$el.footer.classList.add("hide");
    }
    return (
      <section class="pt-5">
        <HeaderBack />
        <Main />
      </section>
    );
  }
}
