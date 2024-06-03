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

front.func.searchLang = function (e: any, languages) {
  let inputValue = e.target.value.toLowerCase();
  Static.listLanguages = languages.filter((item) => item.name.toLowerCase().includes(inputValue) == true);
  return;
};

front.loader = async () => {
  Static.activeLangList = false;
  Static.currentYear = new Date().getFullYear();

  Static.sections = [
    {
      icon: "lenta",
      name: front.Variable.words?.chapters?.lenta,
      link: "/lenta",
    },
    {
      icon: "qa",
      name: front.Variable.words?.chapters?.qa,
      link: "/qsts",
    },
    // {
    //   icon: "chart-bar",
    //   name: "ICO Рейтинг",
    //   link: "/list-icostartups",
    // },
    // {
    //   icon: "rocket-launch",
    //   name: "Стартапы",
    //   link: "/list-startups",
    // },
    {
      icon: "arrow-path-rounded-square",
      name: front.Variable.words?.chapters?.exchanges,
      link: "/exchangers",
    },
    {
      icon: "arrow-path-rounded-square",
      name: front.Variable.words?.chapters?.exchangers,
      link: "/exchanges",
    },
    {
      icon: "users",
      name: front.Variable.words?.chapters?.users,
      link: "/users",
    }
  ];

  Static.menu = [
    {
      icon: "user",
      name: front.Variable.words?.chapters?.profile,
      link: `/user/${front.Variable?.myInfo?.nickname}`,
    },
    {
      icon: "trophy",
      name: front.Variable.words?.chapters?.awards,
      link: "#",
    },
    {
      icon: "currency-dollar",
      name: front.Variable.words?.chapters?.assets,
      link: "/profile/wallet",
    },
    // {
    //   icon: "user-group",
    //   name: "Партнерская программа",
    //   link: "/user/affiliate",
    // },
    {
      icon: "cog-6-tooth",
      name: front.Variable.words?.chapters?.settings,
      link: "/profile/settings",
    },
    {
      icon: "arrow-right-start-on-rectangle",
      name: front.Variable.words?.exit,
      link: "#",
    },
  ];

  Static.submenu = [
    {
      name: front.Variable.words?.company,
      opened: false,
      options: [
        {
          name: front.Variable.words?.chapters?.about,
          link: "/about",
          target: false,
        },
        {
          name: front.Variable.words?.chapters?.career,
          link: "/career",
          target: false,
        },
        {
          name: "Lite Paper",
          link: "/contents/docs/LitePaperRu.pdf",
          target: true,
        },
      ],
    },
    {
      name: front.Variable.words?.support,
      opened: false,
      options: [
        {
          name: front.Variable.words?.chapters?.contacts,
          link: "/contacts",
          target: false,
        },
      ],
    },
    {
      name: front.Variable.words?.rules,
      options: [
        {
          name: front.Variable.words?.chapters?.userInvitation,
          link: "/terms-of-service",
          target: false,
        },
        {
          name: front.Variable.words?.chapters?.dataUsagePolicy,
          link: "/data-policy",
          target: false,
        },
        {
          name: front.Variable.words?.chapters?.cookiesPolicy,
          link: "/cookies-policy",
          target: false,
        },
      ],
    },
    {
      name: front.Variable.words?.cem,
      opened: false,
      options: [
        {
          name: "CEM Blockchain",
          link: "https://cemblockchain.com/",
          target: true,
        },
        {
          name: "CEM Explorer",
          link: "https://cemscan.com/",
          target: true,
        },
      ],
    },
  ];
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
