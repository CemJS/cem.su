import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <div class="absolute left-[3.75rem] top-[0.625rem] block w-[8.125rem]">
      <div class="text-[0.625rem] leading-[1.25rem] text-[--white] [font-weight:600]">
        {item.author.nickname}
      </div>
      <div class="relative top-[-0.4375rem] inline-block leading-[1.375rem] text-[#b0b7cd] [font-size:0.8125rem] [font-weight:500]">{`${front.Services.functions.timeStampToDate(item.showDate, ".")} ${Func.addNull(Func.getDate(item.showDate).getHours())}:${Func.addNull(Func.getDate(item.showDate).getMinutes())}`}</div>
    </div>
  );
}
