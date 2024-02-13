import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.howMutchSpeakers = 8;
  Static.speakersTabName = "CryptoЮГ2023";
  // Static.partnersTabName = "CryptoЮГ2023";
  Static.partners2022 = Static.partners.filter((item) => item.visited.includes("CryptoЮГ2022"));
  Static.partners2023 = Static.partners.filter((item) => item.visited.includes("CryptoЮГ2023"));

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
