import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import donation from "@images/donation.png";

const RenderForm = () => {
  return (
    <form class="w-full rounded-[1.25rem] border border-solid border-[--border-color] bg-[--backModal] p-5 lg:w-1/2 lg:p-10">
      <h4 class="mb-2 text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-[1.2]">
        Обратная связь
      </h4>
      <p class="mb-[1.625rem]">Напишите нам, и мы с вами свяжемся!</p>
      <div class="mb-8 flex flex-col">
        <div
          class={[
            "relative h-[3.125rem] w-full leading-[3.125rem]",
            Static.form.name.valid || Static.form.name.error ? "valid" : null,
          ]}
        >
          <input
            value={Static.form.name.value}
            disabled={front.Variable.Auth ? "disabled" : null}
            oninput={(e) => {
              Static.form.name.value = e.target.value;
              front.Services.functions.formName(Static.form.name);
              Func.checkForm();
            }}
            class={[
              "peer absolute z-[3] w-full resize-none rounded-[--borderR] border border-solid border-[--fiolet] bg-transparent px-[1.875rem] text-base leading-[3.125rem] text-[--white] outline-none [transition:border_0.1s_ease]",
              Static.form.name.error ? "!border-red-600" : null,
              Static.form.name.valid ? "!border-[--success-color]" : null,
            ]}
            type="text"
          />
          <div
            class={[
              "absolute mx-[1.25rem] flex items-center gap-[0.625rem] bg-[#202432] px-[0.625rem] text-[--secondary_text] [transition:0.2s_ease] peer-focus:z-[5] peer-focus:h-[1.875rem] peer-focus:leading-[1.875rem] peer-focus:[transform:translate(-15px,_-16px)_scale(0.88)]",
              Static.form.name.valid || Static.form.name.error
                ? "z-[5] h-[1.875rem] leading-[1.875rem] [transform:translate(-15px,_-16px)_scale(0.88)]"
                : null,
            ]}
          >
            <i class="i i-user"></i>
            <span>Имя*</span>
          </div>
          <div class="absolute right-[0.9375rem] top-[-2.375rem] text-[clamp(0.7rem,2vw,0.8rem)] font-medium text-[#E84142] [transition:color_0.3s_ease-in-out]">
            {Static.form.name.error}
          </div>
        </div>
      </div>
      <div class="mb-8 flex flex-col">
        <div
          class={[
            "relative h-[3.125rem] w-full leading-[3.125rem]",
            Static.form.email.valid || Static.form.email.error ? "valid" : null,
          ]}
        >
          <input
            value={Static.form.email.value}
            disabled={front.Variable.Auth ? "disabled" : null}
            oninput={(e) => {
              Static.form.email.value = e.target.value;
              front.Services.functions.formEmail(Static.form.email);
              Func.checkForm();
            }}
            class={[
              "peer absolute z-[3] w-full resize-none rounded-[--borderR] border border-solid border-[--fiolet] bg-transparent px-[1.875rem] text-base leading-[3.125rem] text-[--white] outline-none [transition:border_0.1s_ease]",
              Static.form.email.error ? "!border-red-600" : null,
              Static.form.email.valid ? "!border-[--success-color]" : null,
            ]}
            type="text"
          />
          <div
            class={[
              "absolute mx-[1.25rem] flex items-center gap-[0.625rem] bg-[#202432] px-[0.625rem] text-[--secondary_text] [transition:0.2s_ease] peer-focus:z-[5] peer-focus:h-[1.875rem] peer-focus:leading-[1.875rem] peer-focus:[transform:translate(-15px,_-16px)_scale(0.88)]",
              Static.form.email.valid || Static.form.email.error
                ? "z-[5] h-[1.875rem] leading-[1.875rem] [transform:translate(-15px,_-16px)_scale(0.88)]"
                : null,
            ]}
          >
            <i class="i i-messanger"></i>
            <span>Email*</span>
          </div>
          <div class="absolute right-[0.9375rem] top-[-2.375rem] text-[clamp(0.7rem,2vw,0.8rem)] font-medium text-[#E84142] [transition:color_0.3s_ease-in-out]">
            {Static.form.email.error}
          </div>
        </div>
      </div>
      <div class="mb-8 flex flex-col">
        <div
          class={[
            "relative h-[3.125rem] w-full leading-[3.125rem]",
            Static.form.telegram.valid || Static.form.telegram.error
              ? "valid"
              : null,
          ]}
        >
          <input
            value={Static.form.telegram.value}
            oninput={(e) => {
              Static.form.telegram.value = e.target.value;
              front.Services.functions.formTelegram(Static.form.telegram);
              Func.checkForm();
            }}
            class={[
              "peer absolute z-[3] w-full resize-none rounded-[--borderR] border border-solid border-[--fiolet] bg-transparent px-[1.875rem] text-base leading-[3.125rem] text-[--white] outline-none [transition:border_0.1s_ease]",
              Static.form.telegram.error ? "!border-red-600" : null,
              Static.form.telegram.valid ? "!border-[--success-color]" : null,
            ]}
            type="text"
          />
          <div
            class={[
              "absolute mx-[1.25rem] flex items-center gap-[0.625rem] bg-[#202432] px-[0.625rem] text-[--secondary_text] [transition:0.2s_ease] peer-focus:z-[5] peer-focus:h-[1.875rem] peer-focus:leading-[1.875rem] peer-focus:[transform:translate(-15px,_-16px)_scale(0.88)]",
              ,
              Static.form.telegram.valid || Static.form.telegram.error
                ? "z-[5] h-[1.875rem] leading-[1.875rem] [transform:translate(-15px,_-16px)_scale(0.88)]"
                : null,
            ]}
          >
            <i class="i i-user"></i>
            <span>Телеграм</span>
          </div>
          <div class="absolute right-[0.9375rem] top-[-2.375rem] text-[clamp(0.7rem,2vw,0.8rem)] font-medium text-[#E84142] [transition:color_0.3s_ease-in-out]">
            {Static.form.telegram.error}
          </div>
        </div>
      </div>
      <div class="mb-8 flex flex-col">
        <div
          class={[
            "relative h-[10rem] w-full resize-none leading-[3.125rem]",
            Static.form.comment.valid || Static.form.comment.error
              ? "valid"
              : null,
          ]}
        >
          <textarea
            value={Static.form.comment.value}
            oninput={(e) => {
              Static.form.comment.value = e.target.value;
              front.Services.functions.formComment(Static.form.comment);
              Func.checkForm();
            }}
            placeholder="Введите ваше сообщение*"
            class={[
              "peer absolute z-[3] w-full resize-none rounded-[--borderR] border border-solid border-[--fiolet] bg-transparent px-[1.875rem] pt-3 text-base leading-[1.5rem] text-[--white] outline-none [transition:border_0.1s_ease]",
              Static.form.comment.error ? "!border-red-600" : null,
              Static.form.comment.valid ? "!border-[--success-color]" : null,
            ]}
            type="text"
          />
          <div class="absolute right-[0.9375rem] top-[-2.375rem] text-[clamp(0.7rem,2vw,0.8rem)] font-medium text-[#E84142] [transition:color_0.3s_ease-in-out]">
            {Static.form.comment.error}
          </div>
        </div>
      </div>
      <button
        onclick={(e) => {
          e.preventDefault();
          Func.sendForm();
        }}
        class={[
          "btn !w-full grayscale",
          Static.form.isValid ? "grayscale-0" : null,
        ]}
      >
        {front.Variable?.words?.tools?.send}
      </button>
    </form>
  );
};

const RenderDestination = () => {
  return (
    <div class="order-[-1] flex w-full max-w-[33.4375rem] flex-col gap-[1.5625rem] lg:order-1 lg:gap-[3.75rem]">
      <div class="flex flex-col gap-[0.5rem]">
        <h4 class="text-[clamp(1rem,1.5vw,1.3rem)] font-light leading-[1.375rem] text-[--white]">
          Филиал в России:
        </h4>
        <p class="text-[clamp(1rem,3vw,2rem)] leading-8 text-[--white]">
          г. Новороссийск​, ул.Набережная им. Адмирала Серебрякова, 27а, ​4
          этаж, офис 39
        </p>
      </div>
      <div class="flex flex-col gap-[0.5rem]">
        <h4 class="text-[clamp(1rem,1.5vw,1.3rem)] font-light leading-[1.375rem] text-[--white]">
          Адрес:
        </h4>
        <p class="text-[clamp(1rem,3vw,2rem)] leading-8 text-[--white]">
          Business address: Didzioji Str. 14-1, Vilnius, the Republic of
          Lithuania
        </p>
      </div>
      <div class="flex flex-col gap-[0.5rem]">
        <h4 class="text-[clamp(1rem,1.5vw,1.3rem)] font-light leading-[1.375rem] text-[--white]">
          E-mail:
        </h4>
        <a
          onclick={Fn.link}
          href="mailto:support@crypto-emergency.com"
          class="link whitespace-nowrap text-[clamp(1rem,3vw,2rem)] leading-[2.3rem] text-[--white]"
        >
          support@crypto-emergency.com
        </a>
      </div>
    </div>
  );
};

export default function () {
  return (
    <div class="page bg-[url('/assets/contactsBg-TV4OZ2JC.png')] bg-cover bg-no-repeat [background-position:top_center] lg:[background-position:unset]">
      <div class="wrapper">
        <div class="flex flex-col items-center justify-between gap-[3.4375rem] px-[1.25rem] lg:flex-row lg:p-[1.875rem]">
          <RenderForm />
          <RenderDestination />
        </div>
        {/* <div class="help__wrapper">
          <a
            href="https://www.donationalerts.com/r/crypto_emergency"
            class="help"
            onclick={Fn.link}
          >
            <img
              src={donation}
              alt="Поддержать проект"
              class="help__img"
            />
            <p class="help__text">Поддержать проект</p>
          </a>
        </div> */}
      </div>
    </div>
  );
}
