import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.partners = [
    // {
    //   name: "Hunter",
    //   date: "23:08:2023",
    //   cem: 0,
    // },
    // {
    //   name: "Hunter",
    //   date: "23:08:2023",
    //   cem: 0,
    // },
  ];
  Static.refLink = "https://crypto-emergency.com/user/MatveyShul";
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
