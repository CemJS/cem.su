import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  $el.classList.remove('opacity-0', 'pointer-events-none')
  $el.classList.add('opacity-1', 'pointer-events-all')
  Ref.sidebarWrap.classList.remove('translate-x-full')
  Ref.sidebarWrap.classList.add('translate-x-0')
  setTimeout(() => {
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
      name: "Лента пользователей",
      link: "/lenta",
    },
    {
      icon: "qa",
      name: "Вопросы и ответы",
      link: "/questions",
    },
    {
      icon: "chart-bar",
      name: "ICO Рейтинг",
      link: "/list-icostartups",
    },
    {
      icon: "rocket-launch",
      name: "Стартапы",
      link: "/list-startups",
    },
    {
      icon: "arrow-path-rounded-square",
      name: "Обменники",
      link: "/exchanges",
    },
    {
      icon: "users",
      name: "Пользователи",
      link: "/users",
    },
    // {
    //   icon: "academic-cap",
    //   name: "Эксперты",
    //   link: "/experts",
    // },
    // {
    //   icon: "users",
    //   name: "Создатели контента",
    //   link: "/content-creator",
    // },
  ];

  Static.menu = [
    {
      icon: "user",
      name: "Профиль",
      link: `/user/${front.Variable.myInfo.nickname}`,
    },
    {
      icon: "trophy",
      name: "Награды",
      link: "#",
    },
    {
      icon: "currency-dollar",
      name: "Мои активы",
      link: "/profile/wallet",
    },
    {
      icon: "user-group",
      name: "Партнерская программа",
      link: "/user/affiliate",
    },
    {
      icon: "cog-6-tooth",
      name: "Настройки",
      link: "/profile/settings",
    },
    {
      icon: "arrow-right-start-on-rectangle",
      name: "Выход",
      link: "#",
    },
  ];

  Static.submenu = [
    {
      name: "Компания",
      options: [
        {
          name: "О нас",
          link: "/about",
          target: false,
        },
        {
          name: "Карьера",
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
      name: "Поддержка",
      options: [
        {
          name: "Контакты",
          link: "/contacts",
          target: false,
        },
      ],
    },
    {
      name: "Правила",
      options: [
        {
          name: "Пользовательское соглашение",
          link: "/terms-of-service",
          target: false,
        },
        {
          name: "Политика использования данных",
          link: "/data-policy",
          target: false,
        },
        {
          name: "Политика cookies",
          link: "/cookies-policy",
          target: false,
        },
      ],
    },
    {
      name: "CEM",
      options: [
        {
          name: "CEM Blockchain",
          link: "https://cemblockchain.com/",
        },
        {
          name: "CEM Explorer",
          link: "https://cemscan.com/",
        },
      ],
    },
  ];
  return;
};

front.display = () => {
  return (
    <div
      // class="sidebar"
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
