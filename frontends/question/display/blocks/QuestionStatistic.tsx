import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <div class="flex h-auto flex-wrap items-center justify-between pb-[0.625rem] text-[0.875rem] text-[#838ba3] [border-bottom:0.0625rem_solid] ![border-color:var(--border-answer)] [row-gap:1.25rem] @767:col-[1/span_2] @767:h-[3.875rem] @767:text-[0.8125rem] [&_span]:flex [&_span]:gap-[0.625rem]">
      <span>
        <i class="i i-chat-bubble-left-right"></i>
        {item?.statistics.answers}
      </span>
      <span>
        <i class="i i-eye"></i>
        {item?.statistics.views}
      </span>
      <span>
        <i class="i i-clock"></i>
        {`${front.Services.functions.timeStampToDate(item?.showDate, ".")} ${Func.addNull(Func.getDate(item?.showDate).getHours())}:${Func.addNull(Func.getDate(item?.showDate).getMinutes())}`}
      </span>
      {!item?.closed && front.Variable?.myInfo?.id != item?.author?.id ? (
        <div class="btn_border-wrap !m-0 !w-full @600:!w-[12.625rem] ">
          <button
            onclick={(e: any) => {
              Static.open == "Ответить"
                ? (Static.open = "Отменить")
                : (Static.open = "Ответить");
              Ref[`ans${item?.id}`].classList.toggle("!block");
            }}
            class="btn_border"
          >
            {Static.open}
          </button>
        </div>
      ) : null}
    </div>
  );
}

front.func.getDate = (timestamp: any) => {
  return new Date(timestamp);
};

front.func.addNull = (str: any) => {
  str = String(str);
  return str.length < 2 ? `0${str}` : str;
};
