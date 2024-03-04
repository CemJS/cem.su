import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import professions from "json/career/careerProfessions.json";

export default function () {
  return (
    <section class="mb-40">
      <h2 class="mx-auto mb-[3.75rem] max-w-[43.5rem] text-center text-[clamp(2.5rem,4vw,4.75rem)] font-bold">
        Выбери свою профессию
      </h2>
      <div class="grid grid-cols-1 gap-[1.375rem] sm:grid-cols-2 xl:grid-cols-3">
        {professions.map((item, index) => {
          return (
            <div class="cursor-pointer rounded-[0.9375rem] bg-[linear-gradient(106.76deg,rgba(112,128,176,0.4)0%,rgba(40,28,71,0)109.61%)] p-[0.0625rem] text-inherit hover:bg-[linear-gradient(89.03deg,#2c66b8_0.54%,#8859ec_97.66%)]">
              <div class="flex h-full items-center gap-6 rounded-[--borderR] bg-[#242834] px-[1.875rem] py-[1.0625rem] duration-1000 hover:bg-transparent">
                <img src={item.img} alt="Профессия" />
                <div class="jobs__professions-text">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
