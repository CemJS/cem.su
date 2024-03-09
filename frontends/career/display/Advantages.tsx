import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import advantages from "json/career/careerAdvantages.json";

export default function () {
  return (
    <section class="mb-40">
      <h2 class="mx-auto mb-[3.75rem] max-w-[43.5rem] text-center text-[clamp(2.5rem,4vw,4.75rem)] font-bold">
        Преимущества
      </h2>
      <div class="grid grid-cols-1 gap-[0.625rem] sm:grid-cols-2 xl:grid-cols-4">
        {advantages.map((item) => {
          return (
            <div class="w-full max-w-[300px] justify-self-center rounded-[--borderR] border border-solid border-[--border-color] bg-[--black_light] p-7 odd:justify-self-center sm:odd:justify-self-end sm:even:justify-self-start xl:odd:justify-self-center xl:even:justify-self-center">
              <div class="mb-7 flex h-20 w-20 items-center justify-center rounded-[50%] bg-[--light-gray]">
                <img
                  src={item.img}
                  alt={item.title}
                  class="jobs__advantages-img"
                />
              </div>
              <h4 class="mb-2 text-[clamp(1rem,2vw,1.25rem)] font-semibold leading-[1.2] text-[--white]">
                {item.title}
              </h4>
              <p class="mb-0 max-w-[14.625rem] text-[clamp(0.8rem,1.5vw,0.9375rem)] font-normal text-[--gray]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
