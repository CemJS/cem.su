import { Cemjsx, Fn, front } from "cemjs-all";
import cem from "@svg/cem.svg";

export default function () {
  return (
    <div class="mx-auto max-w-4xl">
      <ul class="relative flex w-full justify-between px-4 py-3">
        <li>
          <a
            class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
            onclick={() => {
              Fn.linkChange("/");
            }}
          >
            <img src={cem} alt="Главная страница" class="w-[1.8rem]" />
          </a>
        </li>
        <li>
          <a
            class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
            onclick={() => {
              Fn.linkChange("/lenta");
            }}
          >
            <i class={["i", `i-lenta`, `text-2xl`]}></i>
          </a>
        </li>
        <li>
          <a
            class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
            onclick={() => {
              Fn.linkChange("/messanger");
            }}
          >
            <i class={["i", `i-messanger`, `text-2xl`]}></i>
          </a>
        </li>
        <li>
          <a
            class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
            onclick={(e) => {
              if (!front.Variable.Auth) {
                e.preventDefault();
                Fn.initOne("modalAuthtorization", {});
              } else {
                Fn.initOne("modalTools", {
                  records: [
                    {
                      name: "Опубликовать пост",
                      func: () => Fn.linkChange("/profile/public/post"),
                    },
                    {
                      name: "Задать вопрос",
                      func: () => Fn.linkChange("/profile/public/question"),
                    },
                  ],
                });
              }
            }}
          >
            <i class={["i", `i-add`, `text-2xl`]}></i>
          </a>
        </li>
        <li>
          <a
            class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
            onclick={() => {
              Fn.linkChange("/questions");
            }}
          >
            <i class={["i", `i-qa`, `text-2xl`]}></i>
          </a>
        </li>
        <li
          class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
          onclick={(e) => {
            if (!front.Variable.Auth) {
              e.preventDefault();
              Fn.initOne("modalAuthtorization", {});
            } else {
              Fn.initOne("modalNotifications", {});
            }
          }}
        >
          <i class={["i", `i-notice`, `text-2xl`]}></i>
        </li>
        <li
          class="relative flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full text-white"
          onclick={() => Fn.initOne("sidebar", {})}
        >
          <i class="i i-burger text-2xl"></i>
        </li>
      </ul>
    </div>
  );
}
