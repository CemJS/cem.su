import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import guests from "@json/forum/forumGuests";

export default function () {
  return (
    <section class="relative z-[2]">
      <h2 class="mb-20 text-center text-[clamp(3rem,6vw,5.625rem)]">
        Гости Crypto Emergency
      </h2>
      <div class="@1000:[grid-template-columns:repeat(3,minmax(7.375rem,1fr))] grid w-full gap-[1.875rem] [grid-template-columns:repeat(2,minmax(7.375rem,1fr))] xl:[grid-template-columns:repeat(4,minmax(7.375rem,1fr))]">
        {guests.map((item) => {
          return (
            <a
              href={item.href}
              target="_blank"
              class="mx-auto w-full max-w-[18.75rem] text-center"
            >
              <div class="mb-4 aspect-[1.77] w-full overflow-hidden rounded-[0.625rem]">
                <img src={item.image} alt={item.name} class="w-full" />
              </div>

              <h4 class="mb-2 text-center text-[clamp(0.8rem,2vw,1.5rem)] font-medium leading-[1.2] text-[--white]">
                {item.name}
              </h4>
              <p class="text-[clamp(0.75rem,2vw,1rem)] leading-[1.2]">
                {item.desc}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
