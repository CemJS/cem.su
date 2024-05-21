import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.destroy = () => {
  front.Variable.hideHeader = false;
  Fn.initAll();
};

front.loader = () => {
  front.Variable.hideHeader = true;
  Fn.initAll();

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
