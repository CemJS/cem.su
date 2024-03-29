import { Cemjsx, Fn, front } from "cemjs-all";
import logo from "@svg/logo.svg";
import menu from "@json/menu";

const RenderMenu = function ({ menu }) {
  return (
    <ul class="md:flex gap-x-4 items-center hidden">
      {menu.map((item: any) => {
        return (
          <li
            class="cursor-pointer"
            onclick={async () => {
              Fn.linkChange(`${item.url}`, { item: 5, test: 7, t: "hhh" });
            }}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default function () {
  return (
    <div
      class="wrapper"
      init={($el) => {
        front.Variable.$el.header = $el;
      }}
    >
      <div class="flex items-center justify-between">
        <nav class="flex gap-x-4">
          <a
            href="/"
            onclick={Fn.link}
            class="h-16"
          >
            <img
              class="h-full"
              src={logo}
              alt="Crypto Emergency"
            />
          </a>
          <RenderMenu menu={menu} />
        </nav>

        <div class="flex items-center gap-x-4">
          <div
            class="cursor-pointer md:flex items-center gap-2 hidden"
            onclick={() => Fn.initOne("modalLanguage", { title: "Выбор основного языка" })}
          >
            <span>Русский</span>
            <span class="i i-lang"></span>
          </div>

          {front.Variable.Auth ? (
            <div
              class="cursor-pointer"
              onclick={() => {
                Fn.linkChange(`/user/${front.Variable.myInfo?.nickname}`)
              }}>
              Profile</div>
          ) : (
            <div class="flex items-center gap-2 cursor-pointer">
              <span onclick={() => Fn.initOne("modalAuthtorization", {})}>Вход</span>
              <button
                class="btn"
                onclick={() => Fn.initOne("modalRegistration", {})}>
                Регистрация
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
