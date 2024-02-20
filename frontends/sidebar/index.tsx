import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("sidebar_active");
    front.Variable.$el.body.style.overflow = "hidden";
  }, 100);
};

front.func.close = function () {
  Ref.sidebar.classList.remove("sidebar_active");
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
      icon: "faq",
      name: "ICO Рейтинг",
      link: "/list-icostartups",
    },
    {
      icon: "user",
      name: "Стартапы",
      link: "/list-startups",
    },
    {
      icon: "phone",
      name: "Обменники",
      link: "/exchangers",
    },
    {
      icon: "copy",
      name: "Пользователи",
      link: "/users",
    },
    {
      icon: "bubbles2",
      name: "Эксперты",
      link: "/experts",
    },
    {
      icon: "users",
      name: "Создатели контента",
      link: "/content-creator",
    },
  ];

  Static.menu = [
    {
      icon: "user",
      name: "Профиль",
      link: "#",
    },
    {
      icon: "faq",
      name: "Награды",
      link: "#",
    },
    {
      icon: "faq",
      name: "Мои активы",
      link: "/user/wallet",
    },
    {
      icon: "faq",
      name: "Партнерская программа",
      link: "/user/affiliate",
    },
    {
      icon: "user",
      name: "Настройки",
      link: "#",
    },
    {
      icon: "phone",
      name: "Выход",
      link: "#",
    },
  ];

  Static.submenu = [
    {
      icon: "settings",
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
      icon: "support",
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
      icon: "rules",
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
      icon: "cem",
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
      class="sidebar"
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
