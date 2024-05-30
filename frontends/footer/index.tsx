import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {

  Static.footer = [
    {
      title: front.Variable.words?.company,
      items: [
        front.Variable.words?.chapters?.about, 
        front.Variable.words?.chapters?.career, 
        "Lite Paper"
      ],
      href: ["/about", "/career", "#"]
    },
    {
      title: front.Variable.words?.support,
      items: [ front.Variable.words?.chapters?.contacts ],
      href: ["/contacts"]
    },
    {
      title: front.Variable.words?.rules,
      items: [
        front.Variable.words?.chapters?.userInvitation, 
        front.Variable.words?.chapters?.dataUsagePolicy, 
        front.Variable.words?.chapters?.cookiePolicy
      ],
      href: ["/terms-of-service", "/data-policy", "/cookies-policy"]
    },
    {
      title: "CEM",
      items: ["CEM Blockchain", "CEM Explorer"],
      href: ["https://cemblockchain.com/", "https://cemscan.com/"],
      target: ["_blank", "_blank"]
    }
  ]

  return;
};

front.display = () => {
  return <Navigation />;
};

export { front };
