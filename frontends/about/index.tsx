import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import folder from "@svg/about/goal_1.svg";
import safe from "@svg/about/goal_2.svg";
import access from "@svg/about/goal_3.svg";
import pin from "@svg/about/goal_4.svg";

export const start = function () {};

front.listener.finish = () => {
  Static.root = document.documentElement;
  Static.marqueeElementsDisplayed = getComputedStyle(
    Static.root,
  ).getPropertyValue("--marquee_elements_displayed");

  Static.root.style.setProperty(
    "--marquee_elements",
    Ref.marqueeContentStart?.children?.length,
  );
  Static.root.style.setProperty(
    "--marquee_elements",
    Ref.marqueeContentEnd?.children?.length,
  );

  for (let i = 0; i < Static.marqueeElementsDisplayed; i++) {
    Ref.marqueeContentStart?.appendChild(
      Ref.marqueeContentStart?.children?.[i]?.cloneNode(true),
    );
    Ref.marqueeContentEnd?.appendChild(
      Ref.marqueeContentEnd?.children?.[i]?.cloneNode(true),
    );
  }
};

front.loader = () => {
  Static.goals = [
    {
      img: folder,
      title: front.Variable?.words?.goals?.title1,
      description: front.Variable?.words?.goals?.desc1,
      classItem: "crypto",
    },
    {
      img: safe,
      title: front.Variable?.words?.goals?.title2,
      description: front.Variable?.words?.goals?.desc2,
      classItem: "unite",
    },
    {
      img: access,
      title: front.Variable?.words?.goals?.title3,
      description: front.Variable?.words?.goals?.desc3,
      classItem: "access",
    },
    {
      img: pin,
      title: front.Variable?.words?.goals?.title4,
      description: front.Variable?.words?.goals?.desc4,
      classItem: "meta",
    },
  ];
  return;
};

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
