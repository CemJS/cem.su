import { Cemjsx, Static, Fn } from "cemjs-all";

let listBtnState: boolean = true;

export default function () {
  return (
    <div>
      <div class="relative w-full rounded-[12px] bg-[#2B3040] @600:w-[268px]">
        <div
          class={[
            "relative z-[2] mb-[.8125rem] pl-[1.375rem] pr-[.625rem] last:rounded-[12px_12px] last:pb-[8px]",
            Static.burger
              ? "overflow-hidden [background:linear-gradient(107.19deg,_#444A5F_1.5%,_#2B3040_109.67%)] [&_.list-line]:block [&_.list-title]:mb-[.3125rem] [&_.list-title]:after:hidden [&_.list-subcategory]:block"
              : "",
          ]}
        >
          <p
            class="list-title relative m-0 mb-[.3125rem] cursor-pointer pt-[.5rem] text-[16px] font-semibold leading-[2rem] before:absolute before:right-[1.25rem] before:top-0 before:px-0 before:py-[.1875rem] before:content-[url('/contents/icons/personalSettings/minus.svg')] after:absolute after:right-[1rem] after:top-[.25rem] after:block after:rotate-[90deg] after:px-0 after:py-[.1875rem] after:content-[url('/contents/icons/personalSettings/minus.svg')]"
            onclick={() => {
              Static.burger = !Static.burger;
            }}
          >
            Социальная сеть
          </p>
          <div
            style="-webkit-background-clip: text"
            class={[
              "list-subcategory hidden pb-[.625rem] pl-[.375rem]",
              Static.category == "security"
                ? "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,_#2973FF_0%,_#8846D3_51.56%,_#FF22AC_105.28%)]"
                : "",
            ]}
          >
            <a href="/profile/settings/security" onclick={Fn.link}>
              <span
                onclick={() => {
                  Static.category = "security";
                }}
              >
                Безопасность
              </span>
            </a>
          </div>
          <div
            style="-webkit-background-clip: text"
            class={[
              "list-subcategory hidden pb-[.625rem] pl-[.375rem]",
              Static.category == "blacklist"
                ? "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,_#2973FF_0%,_#8846D3_51.56%,_#FF22AC_105.28%)]"
                : null,
            ]}
          >
            <a href="/profile/settings/blacklist" onclick={Fn.link}>
              <span
                onclick={() => {
                  Static.category = "blacklist";
                }}
              >
                Чёрный список
              </span>
            </a>
          </div>
          <div class="list-line [background:linear-gradient(89.03deg,_#2C66B8 0.54%,_#8859EC_97.66%)] absolute bottom-0 left-0 z-[1] hidden h-full w-[.1875rem]" />
        </div>
      </div>
    </div>
  );
}
