import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  $el.classList.remove('opacity-0', 'pointer-events-none')
  $el.classList.add('opacity-1', 'pointer-events-all')
  setTimeout(() => {
    Ref.sidebarWrap.classList.remove('translate-x-full')
    Ref.sidebarWrap.classList.add('translate-x-0')
    front.Variable.$el.body.style.overflow = "hidden"
  }, 100);
};

front.func.close = function () {
  Ref.sidebar.classList.remove('opacity-1', 'pointer-events-all')
  Ref.sidebar.classList.add('opacity-0', 'pointer-events-all')
  Ref.sidebarWrap.classList.remove('translate-x-0')
  Ref.sidebarWrap.classList.add('translate-x-full')
  setTimeout(() => {
    Fn.clearData();
    front.Variable.$el.body.style.overflow = "auto";
  }, 500);
};


front.loader = async () => {
  Static.tabs = [
    {
      name: 'Вопросы',
      active: true,
    },
    {
      name: 'Награды',
      active: false,
      border: true
    },
    {
      name: 'Системные',
      active: false,
    }
  ]

  return;
};

front.display = () => {
  return (
    <div
      class="fixed top-0 left-0 w-full h-full z-50 opacity-0 pointer-events-none transition-all"
      ref="sidebar"
      init={Func.show}
      onclick={(e: any) => {
        if (e.target === Ref.sidebarOverlay) {
          Func.close();
        }
      }}
    >
      <Navigation />
    </div>
  );
};

export { front };
