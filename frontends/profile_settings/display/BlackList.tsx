import { Cemjsx, front } from "cemjs-all";

export default function () {
  return (
    <section class="listExchange effect_lines">
      <h1 class="mx-0 mb-[1.5625rem] mt-[0.625rem] text-center text-[clamp(2rem,_2vw,_2.75rem)] font-bold leading-[3.625rem]">
        Чёрный список
      </h1>
      <div class="listExchange_table_wrapper">
        <table class="table w-full border-collapse">
          <thead class="text-[1.125rem]">
            <tr class="grid [grid-template-columns:1fr_1fr_1fr]">
              <th
                class="flex items-center"
                style="justify-content: start;"
              >
                Пользователь
              </th>
              <th class="flex items-center justify-center">Дата</th>
              <th class="flex items-center justify-center">
                Действия
              </th>
            </tr>
          </thead>
          <tbody class="text-[1rem] font-medium rounded-t-[--borderR] block [border:1px_solid_var(--border)]">
            {front.Variable.myInfo?.sessions?.map((item: any, index: any) => {
              return (
                <div>
                  <tr class="last:[border-bottom:1px_solid_var(--border)] grid [grid-template-columns:1fr_1fr_1fr]">
                    <td
                      class="justify-start py-[.625rem] px-[.9375rem] flex items-center"
                    >
                      {item?.info?.browser}
                    </td>
                    <td class="justify-center py-[.625rem] px-[.9375rem] flex items-center">
                      {item?.info?.platform}
                    </td>
                    <td class="justify-end py-[.625rem] px-[.9375rem] flex items-center">
                      <div class="btn_border-wrap">
                        <button
                          class="btn_border bg-[#1d2029] min-w-[9.375rem]"
                          onclick={async () => {
                            let answer = await front.Services.functions.sendApi(
                              `/api/MyInfo`,
                              {
                                action: "deleteSession",
                                id: item?.id,
                              },
                            );

                            if (answer.error) {
                              alert(answer.error);
                              return;
                            }
                          }}
                        >
                          Удалить из списка
                        </button>
                      </div>
                    </td>
                  </tr>
                  <div class="body-card">
                    <div class="body-card__container">
                      <div
                        class="body-card__container__main-block"
                        style="flex-direction: column"
                      >
                        <div class="body-card__container_font-size pt-10">
                          {item?.info?.browser}
                        </div>
                        <div class="body-card__container_font-size coins_wrap pt-20">
                          {item?.info?.platform}
                        </div>
                      </div>
                      <div class="body-card__container__btn-block w-full pb-10 pt-10">
                        <div class="btn_border-wrap body-card__container_btn_size mY-auto h100">
                          <button
                            class="btn_border bg-mw"
                            onclick={async () => {
                              let answer =
                                await front.Services.functions.sendApi(
                                  `/api/MyInfo`,
                                  {
                                    action: "deleteSession",
                                    id: item?.id,
                                  },
                                );

                              if (answer.error) {
                                alert(answer.error);
                                return;
                              }
                            }}
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
