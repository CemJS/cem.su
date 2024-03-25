import { Cemjsx, front } from "cemjs-all";

export default function () {
  return (
    <section class="listExchange effect_lines">
      <h1 class="general__title">Список активных сессий</h1>
      <div class="listExchange_table_wrapper">
        <table class="listExchange__table table">
          <thead class="listExchange__table-head">
            <tr class="listExchange__table-row">
              <th
                class="listExchange__table-name disable-table-name"
                style="justify-content: start;"
              >
                Браузер
              </th>
              <th class="listExchange__table-coins disable-table-name">
                Платформа
              </th>
              <th class="listExchange__table-coins disable-table-name">
                Действия
              </th>
            </tr>
          </thead>
          <tbody class="table_body listExchange__table-body">
            {front.Variable.myInfo?.sessions?.map((item: any, index: any) => {
              return (
                <div>
                  <tr class="table_row listExchange__table-row">
                    <td
                      class="listExchange__table-name"
                      style="justify-content: start;"
                    >
                      {item?.info?.browser}
                    </td>
                    <td class="listExchange__table-coins">
                      {item?.info?.platform}
                    </td>
                    <td class="listExchange__table-btn">
                      <div class="btn_border-wrap mY-auto h100">
                        <button
                          class="btn_border bg-mw"
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
                          Удалить
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
