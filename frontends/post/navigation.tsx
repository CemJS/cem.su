import { Cemjsx, Static, front } from "cemjs-all";
import Main from "./display/Main";
import HeaderBack from "./display/HeaderBack";

export default function () {
  if (Static.post) {
    return (
      <section class="pt-14">
        <HeaderBack />
        <Main />
      </section>
    );
  }
}
