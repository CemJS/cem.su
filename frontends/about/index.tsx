import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import folder from "@svg/about/goal_1.svg";
import safe from "@svg/about/goal_2.svg";
import access from "@svg/about/goal_3.svg";
import pin from "@svg/about/goal_4.svg";
import previewImg from "@images/careerBg.png";
import blockchain from "@images/about/main/blockchain.jpg";
import rocket from "@svg/about/roadmap/rocket.svg";
import wallet from "@svg/about/roadmap/wallet.svg";
import community from "@svg/about/roadmap/community.svg";
import univercity from "@svg/about/roadmap/university.svg";
import exchange from "@svg/about/roadmap/exchange.svg";
import network from "@svg/about/roadmap/network.svg";

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

  Static.roadmap = [
    {
      title: front.Variable?.words?.roadmap?.startProject?.title,
      date: front.Variable?.words?.roadmap?.startProject?.date,
      desc: front.Variable?.words?.roadmap?.startProject?.desc,
      icon: rocket,
    },
    {
      title: front.Variable?.words?.roadmap?.blockchain?.title,
      date: front.Variable?.words?.roadmap?.blockchain?.date,
      desc: front.Variable?.words?.roadmap?.blockchain?.desc,
      icon: blockchain,
    },
    {
      title: front.Variable?.words?.roadmap?.wallet?.title,
      date: front.Variable?.words?.roadmap?.wallet?.date,
      desc: front.Variable?.words?.roadmap?.wallet?.desc,
      icon: wallet,
    },
    {
      title: front.Variable?.words?.roadmap?.community?.title,
      date: front.Variable?.words?.roadmap?.community?.date,
      desc: front.Variable?.words?.roadmap?.community?.desc,
      icon: community,
    },
    {
      title: front.Variable?.words?.roadmap?.university?.title,
      date: front.Variable?.words?.roadmap?.university?.date,
      desc: front.Variable?.words?.roadmap?.university?.desc,
      icon: univercity,
    },
    {
      title: front.Variable?.words?.roadmap?.exchange?.title,
      date: front.Variable?.words?.roadmap?.exchange?.date,
      desc: front.Variable?.words?.roadmap?.exchange?.desc,
      icon: exchange,
    },
    {
      title: front.Variable?.words?.roadmap?.neuralNetwork?.title,
      date: front.Variable?.words?.roadmap?.neuralNetwork?.date,
      desc: front.Variable?.words?.roadmap?.neuralNetwork?.desc,
      icon: network,
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
