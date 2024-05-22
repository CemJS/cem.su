import { Cemjsx, Static, front, Fn } from "cemjs-all";
import Show from "./display/Show";
import HeaderBack from "./display/HeaderBack";

export default function () {
  if (Static.record) {
    return (
      <section class="pt-4">
        <HeaderBack />
        <Show />
      </section>
    );
  }
  return "";
}
