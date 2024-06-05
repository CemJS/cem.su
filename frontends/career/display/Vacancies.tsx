import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import vacancies from "json/career/careerVacancies.json";

export default function () {
  return (
    <section class="mb-[0.625rem] text-[clamp(0.9rem,2vw,1.1rem)] leading-[1.3]">
      {vacancies.map((item) => {
        return (
          <div class="mb-[0.625rem] rounded-[--borderR] border border-solid border-[--border-color] bg-[--black-gray] p-5">
            <div class="relative mb-5 flex items-center justify-between gap-[0.625rem]">
              <img src={item.img} alt={item.title} class="h-auto max-w-full" />
              <h2 class="inline-block text-[clamp(1rem,5vw,1.625rem)] font-semibold">
                {item.title}
              </h2>
              <p
                class="absolute -top-2 right-0
      bg-[linear-gradient(225deg,#72ffb6_0%,#10d194_100%)]
      bg-clip-text font-extrabold
      uppercase text-transparent no-underline sm:relative"
              >
                {item.status}
              </p>
            </div>
            <p class="mb-[0.625rem]">
              {item.experience.map((item) => {
                return <p class="text-[--textGray-light]">{item}</p>;
              })}
            </p>
            <p class="mb-4">
              {item.textTop.map((item) => {
                return <p>{item}</p>;
              })}
            </p>
            <div class="mb-5 flex flex-col justify-between gap-[0.625rem] xl:flex-row">
              <div class="mr-[0.625rem] rounded-[0.3125rem] border border-solid border-[--border-color] bg-[--light-gray-2] p-[0.625rem]">
                <h4 class="mb-4 text-[clamp(0.9rem,2vw,1.0625rem)] font-semibold">
                  {front.Variable?.words?.career?.duties}:
                </h4>
                {item.responsibilities.map((item) => {
                  return (
                    <p class="mb-[0.4375rem] text-[clamp(0.8rem,2vw,0.875rem)] text-[--textGray-light]">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div class="mr-[0.625rem] rounded-[0.3125rem] border border-solid border-[--border-color] bg-[--light-gray-2] p-[0.625rem]">
                <h4 class="mb-4 text-[clamp(0.9rem,2vw,1.0625rem)] font-semibold">
                  {front.Variable?.words?.career?.duties}:
                </h4>
                {item.requirements.map((item) => {
                  return (
                    <p class="mb-[0.4375rem] text-[clamp(0.8rem,2vw,0.875rem)] text-[--textGray-light]">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div class="mb-4">
              {item.text.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
            <h4 class="mb-4 text-[clamp(0.9rem,2vw,1.0625rem)] font-semibold">
              {front.Variable?.words?.career?.keySkills}:
            </h4>
            <div class="flex flex-wrap gap-[0.3125rem]">
              {item.skills.map((item) => {
                return (
                  <p class="rounded-[0.3125rem] border border-solid border-[--light-gray-2] bg-[--light-gray-2] p-[0.3125rem]">
                    {item}
                  </p>
                );
              })}
            </div>
            <div class="btn_border-wrap !mt-5">
              <button
                onclick={() =>
                  Fn.initOne("modalVacancy", { title: item.title })
                }
                class="btn_border"
              >
                {front.Variable?.words?.tools?.respond}
              </button>
            </div>
          </div>
        );
      })}
      <h2 class="mx-auto max-w-[43.5rem] py-12 text-center text-[clamp(2rem,3vw,4rem)] font-bold">
        {front.Variable?.words?.career?.waitYou}
        <br />{front.Variable?.words?.career?.inOur}
        <br />
        {front.Variable?.words?.career?.team}
      </h2>
    </section>
  );
}
