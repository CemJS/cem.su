import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";

export const start = function () { }

front.listener.finish = () => {
  Static.root = document.documentElement;
  Static.marqueeElementsDisplayed = getComputedStyle(Static.root).getPropertyValue("--marquee_elements_displayed")

  Static.root.style.setProperty("--marquee_elements", Ref.marqueeContentStart.children.length)
  Static.root.style.setProperty("--marquee_elements", Ref.marqueeContentEnd.children.length)

  for (let i = 0; i < Static.marqueeElementsDisplayed; i++) {
      Ref.marqueeContentStart.appendChild(Ref.marqueeContentStart.children[i].cloneNode(true));
      Ref.marqueeContentEnd.appendChild(Ref.marqueeContentEnd.children[i].cloneNode(true));
  }
}

front.loader = () => {
  return;
}

front.display = () => {

  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
