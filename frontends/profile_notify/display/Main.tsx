import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import type { ServerResponse, Notify } from "..";

type HeaderItem = {
  text: string;
  nameNotify: "questions" | "awards" | "system";
}
function HeaderItem({ text, nameNotify }: HeaderItem ) {
  const nonActiveStyle = "relative flex z-[1] h-10 w-full cursor-pointer items-center justify-center rounded-[--borderR] [background:rgba(255,255,255,0.09)] [transition:all_0.35s_ease-in-out] max-w-80 [&amp;.active_#active]:opacity-100 [&amp;.active_span]:font-bold [&amp;:hover_span]:font-bold"
  const activeStyle = `${nonActiveStyle} [&.active_#active]:opacity-100 active`

  return (
    <button 
      class={ Static.activeNotify === nameNotify ? activeStyle : nonActiveStyle }
      onclick={ () => { 
        Static.activeNotify = nameNotify;
        toggleAnimation();
      }}
    >
      <div id="active" class="absolute left-0 top-0 z-[-1] h-full w-full rounded-[3.125rem] opacity-0 [background:var(--darkBlueGradient)] [transition:1s]" />
      <span class="text-[clamp(1rem,2vw,1.125rem)] [transition:all_0.35s_ease-in-out]">{ text }</span>
    </button>
  )
}

function toggleAnimation () {
  (Ref.notifications as Element).classList.add("animated");

  setTimeout(() => {
    (Ref.notifications as Element).classList.remove("animated");
  }, 500);
}

export default function () {
  return (
    <div class="wrapper">

      <nav class="mt-[10px] w-full rounded-[5px] p-6 !pb-0 text-[16px] font-bold leading-[20px] text-[--white] [background:#2e3340]">
        <h2 class="text-[18px] @479:text-[24px] text-center">Ваши уведомления</h2>
        <ul class="mt-[30px] flex flex-wrap justify-around items-center gap-5 pb-5">

          <HeaderItem text="Вопросы" nameNotify="questions" />

          <HeaderItem text="Награды" nameNotify="awards" />

          <HeaderItem text="Вопросы" nameNotify="system" />

        </ul>
      </nav>

      <ul class="flex justify-between flex-wrap my-6 gap-y-5" ref="notifications" init={ toggleAnimation }>
        {(Static.notifyList as ServerResponse)?.[Static.activeNotify]?.map((item: Notify) =>
        
          <li class="flex flex-col gap-5 w-full md:w-[49%] cursor-pointer rounded-[--borderR] p-[--borderR] [background:rgba(255,255,255,0.09)] [border:0.0625rem_solid_transparent] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:0.5s] hover:[background:transparent] hover:[border:0.0625rem_solid_var(--border)] hover:[transform:scale(0.98)] @767:grid-cols-[20%_80%]">

            <div class="flex items-center gap-5">
              <img class="size-20" src={ item.icon } alt={ item.title } />
              <h3 class="text-xl md:text-3xl font-bold break-all">{ item.title }</h3>
            </div>

            <p class="text-lg break-all">{ item.text }</p>
            <time class="text-lg self-end" datetime={ item.date.getMilliseconds() }>{ item.date.getMilliseconds() }</time>
          </li>
        )}
      </ul>

    </div>
  );
}
