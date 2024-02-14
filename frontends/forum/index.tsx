import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import partners from "@json/forumPartners";

front.listener.finish = () => {
  window.onresize = () => (Ref.activeTab2.style.left = `${Ref.tabItem2.offsetWidth * Static.activeIndex}px`);
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.howMutchSpeakers = 8;
  Static.speakersTabName = "CryptoЮГ2023";
  Static.partnersTabName = "CryptoЮГ2023";
  Static.partners = partners.filter((item) => item.visited.includes(Static.partnersTabName));
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
