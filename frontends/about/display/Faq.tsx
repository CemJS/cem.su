import { Cemjsx, Fn, Func, Static } from "cemjs-all";

const faq = [
  {
    question: "Цель Crypto Emergency?",
    answer:
      "Объединить криптоэнтузиастов со всего мира на многофункциональной платформе, где собраны все необходимые инструменты для общения, обучения, заработка и создания собственного контента.",
    hidden: true,
  },
  {
    question: "Как заработать или купить токены CEM?",
    answer:
      "Купить CEM можно официально на бирже Bitmart. Также можно вести активную деятельность на платформе и получать новый уровень за действия на платформе и с новым уровнем получать в награду CEM. Следите за новостями в телеграме, могут появляться разные конкурсы где в награду можно получить монету CEM.",
    hidden: false,
  },
  {
    question: "Как вывести заработанные CEM с платформы?",
    answer:
      "Вывести заработанные CEM на нашей платформе за проявленную активность вы можете на свой счет в любое время. Автоматически в личном кабинете во вкладке «Мои активы». Минимальная сумма вывода — 10CEM.",
    hidden: false,
  },
  {
    question: "Проект доступен лишь в России?",
    answer:
      "У нас огромная экосистема которая на данный момент полностью переведена на 16 языков по всему миру, а основными разделами платформы уже сейчас можно пользоваться на 60 языках. Платформа доступна на всех рынках включая Китай.",
    hidden: false,
  },
  {
    question: "Можно ли скачать приложение на телефон?",
    answer:
      "Да! Все проекты нашей экосистемы доступны как на Android так и на iPhone. Найти ссылочки для скачивания можно внизу страницы, либо просто через поиск в маркетах.",
    hidden: false,
  },
];

export default function () {
  return (
    <div class="relative z-50">
      <h2 class="z-[1] mx-0 my-[1.5625rem] text-balance text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        FAQ
      </h2>
      <ul class="mx-auto flex max-w-[1000px] flex-col gap-[0.625rem]">
        {faq.map((item, index) => {
          return (
            <li class="w-full rounded-[--borderR] border border-solid border-[#474c5a] bg-[#313541] p-[0.625rem] shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),_-6px_-6px_10px_-1px_rgba(0,0,0,0.15)]">
              <input
                class="peer hidden"
                type="radio"
                name="accordeon"
                id={`accordeon_${index}`}
                checked={item.hidden}
                onchange={(e) => {
                  //   console.log("=9376f5=", e.target.nextElementSibling);
                }}
              />
              <label
                class="flex cursor-pointer items-center p-[0.625rem] text-[clamp(16px,2vw,20px)] font-semibold leading-[1.5] before:mr-[0.625rem] before:text-2xl before:font-semibold before:content-['+'] peer-checked:before:content-['-']"
                for={`accordeon_${index}`}
              >
                {item.question}
              </label>
              <div class="max-h-0 overflow-hidden leading-[1.5] opacity-0  [transition:max-height_0.3s,padding_0.5s,opacity_0.35s] peer-checked:max-h-[500px] peer-checked:p-[10px_10px_20px] peer-checked:opacity-100">
                <p>{item.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
