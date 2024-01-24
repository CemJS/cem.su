import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import languages from "@json/languages";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("sidebar_active");
    // this.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
};

front.func.close = function () {
  Ref.sidebar.classList.remove("sidebar_active");
  setTimeout(() => {
    Fn.clearData();
    // this.Variable.$el.body.style.overflow = 'auto';
  }, 500);
};

front.func.searchLang = function (e: any, languages) {
  let inputValue = e.target.value.toLowerCase();
  Static.listLanguages = languages.filter((item) => item.name.toLowerCase().includes(inputValue) == true);
  return;
};

front.loader = () => {
  Static.activeLangList = false;
  Static.listLanguages = languages;

  Static.sections = [
    {
      icon: "lenta",
      name: "Лента пользователей",
      link: "#",
    },
    {
      icon: "qa",
      name: "Вопросы и ответы",
      link: "#",
    },
    {
      icon: "faq",
      name: "ICO Рейтинг",
      link: "#",
    },
    {
      icon: "user",
      name: "Стартапы",
      link: "#",
    },
    {
      icon: "phone",
      name: "Обменники",
      link: "#",
    },
    {
      icon: "copy",
      name: "Пользователи",
      link: "#",
    },
    {
      icon: "bubbles2",
      name: "Эксперты",
      link: "#",
    },
    {
      icon: "users",
      name: "Создатели контента",
      link: "#",
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
      link: "#",
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
          link: "#",
        },
        {
          name: "Карьера",
          link: "#",
        },
        {
          name: "Lite Paper",
          link: "#",
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
        },
        {
          name: "Партнёрская программа",
          link: "#",
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
        },
        {
          name: "Политика использования данных",
          link: "/data-policy",
        },
        {
          name: "Политика cookies",
          link: "/cookies-policy",
        },
      ],
    },
    {
      icon: "cem",
      name: "CEM",
      options: [
        {
          name: "CEM Blockchain",
          link: "#",
        },
        {
          name: "CEM Explorer",
          link: "#",
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
