import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";

export default function () {
  // Fn.log("Static.records", Static.records);

  interface exchangersData {
    change: number;
    coin: string;
    id: string;
    price: number;
  }

  return (
    <table class="relative w-full border-collapse border-inherit text-inherit">
      <thead class="text-[1.125rem]">
        <tr class="@330:[grid-template-columns:0.5fr_0.5fr_0.5fr] hidden grid-cols-1 @410:grid-cols-3 @650:grid @650:min-h-[5rem] @650:items-center @650:[grid-template-columns:1fr_1fr_2fr_2fr]">
          <th>#</th>
          <th class="flex items-center justify-start">Название</th>
          <th>Цена (USDT)</th>
          <th>Изм.(24ч)</th>
        </tr>
      </thead>
      <tbody class="@450:[border:1px_solid_var(--border)] block rounded-tl-[--borderR] rounded-tr-[--borderR] text-[1rem] font-medium [border:none]">
        {Static.records?.map((item: exchangersData, index: number) => {
          Fn.log("=item=", item);
          return (
            <tr class="@330:grid-cols-3 @450:[&:not(:last-child)]:[border-bottom:1px_solid_var(--border)] mb-[.625rem] grid min-h-[5rem] grid-cols-1 items-center max-[450px]:rounded-[--borderR] max-[450px]:bg-[#3b3d49] @650:[grid-template-columns:1fr_1fr_2fr_2fr]">
              <td class="mx-[.9375rem] my-[.625rem] hidden @650:flex @650:items-center @650:justify-center">
                {index + 1}
              </td>

              <td class="mx-[.9375rem] my-[.625rem] flex items-center justify-center @650:justify-start">
                <div class="mr-[.625rem] flex items-center justify-center">
                  <img src={`/contents/coins/${item?.coin}.svg`}></img>
                </div>
                <span>{item?.coin.toUpperCase()}</span>
              </td>

              <td class="mx-[.9375rem] my-[.625rem] flex items-center justify-center">
                <div>
                  <span class="whitespace-nowrap">
                    {item?.price.toLocaleString("en-US").replace(/,/g, " ")}
                  </span>
                </div>
              </td>

              <td class="mx-[.9375rem] my-[.625rem] flex items-center justify-center">
                <div>
                  <span
                    style="white-space: nowrap;"
                    class={`exchange-rates_percent ${item?.change >= 0 ? "text-[#2DCA73]" : "text-[#E84142]"}`}
                  >
                    {item?.change >= 0 ? "+" : null}
                    {item?.change.toFixed(2)}
                    {" " + "%"}
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
