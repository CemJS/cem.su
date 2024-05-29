import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import CemIcon from '@svg/cem.svg'


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

front.loader = () => {
  (Static.tabs as Tab[]) = [
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
  ];

  Func.replaceTabContent();

  return;
};

export type Tab = {
  name: string;
  active: boolean;
  border?: boolean;
}
export type ServerResponse = {
  icon: String;
  title: string;
  text: string;
  time: Date;
}
let activeTab: Tab;
front.func.replaceTabContent = async function () {
  const tab = getActiveTab();
  if (tab === activeTab) {
    return
  }
  activeTab = tab;

  (Static.notificationContent as ServerResponse[]) = [
    {
      icon: CemIcon,
      title: "change notification",
      text: "text",
      time: new Date(),
    },
    {
      icon: CemIcon,
      title: "New change",
      text: "text new",
      time: new Date(),
    },
  ];
}

function getActiveTab () {
  return (Static.tabs as Tab[]).find(item => {
    return item.active === true;
  });
}

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
