import { Cemjsx, Fn, Static, front } from "cemjs-all";
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
              Fn.linkChange("/profile/chats");
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
                      func: () => {
                        let params;
                        if (
                          front.Variable.DataUrl[1] == "pst" ||
                          front.Variable.DataUrl[1] == "qst"
                        ) {
                          params = {
                            edit: undefined,
                            reload: true,
                          };
                        }
                        Fn.linkChange("/create/pst", params);
                      },
                    },
                    {
                      name: front.Variable?.words?.qa?.askQuestion,
                      func: () => {
                        let params;
                        if (
                          front.Variable.DataUrl[1] == "qst" ||
                          front.Variable.DataUrl[1] == "pst"
                        ) {
                          params = {
                            edit: undefined,
                            reload: true,
                          };
                        }
                        Fn.linkChange("/create/qst", params);
                      },
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
              Fn.linkChange("/qsts");
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
