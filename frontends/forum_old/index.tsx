import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import partners from "@json/forum/forumPartners";

front.listener.finish = () => {
  window.onresize = () =>
    (Ref.activeTab.style.left = `${Ref.tabItem1.offsetWidth * Static.activeIndex}px`);
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.howMutchSpeakers = 6;
  Static.speakersTabName = "CryptoЮГ2023";
  Static.partnersTabName = "CryptoЮГ2023";
  // Static.partners = partners.filter((item) => item.visited.includes(Static.partnersTabName));
  return;
};

front.display = () => {
  return (
    <div class="[background-color:var(--neutral-900)]">
      <Navigation />
    </div>
  );
};

export { front };
