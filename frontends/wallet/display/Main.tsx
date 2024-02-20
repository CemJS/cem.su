import { Cemjsx, Fn, Func, Ref, Static } from "cemjs-all";
import logo from "@svg/logo.svg";
import transaction_newmember_bonus from "@images/personalWallet/transaction_newmember_bonus.svg";
import crem_logo from "@images/personalWallet/crem_logo.svg";
import done from "@images/personalWallet/done.svg";
import nav_arrow from "@svg/events/show/nav_arrow.svg";

export default function () {
  return (
    <div class="page wallet">
      <div class="wrapper">
        <div class="wallet__top">
          <h1 class="wallet__title">Мои активы</h1>

          <div class="wallet__return">
            <img
              src={nav_arrow}
              alt=""
            />
            <a
              href="/"
              onclick={Fn.link}
            >
              <span>Назад</span>
            </a>
          </div>
        </div>

        <div class="cards-container">
          <div class="card">
            <div class="card__balance card__balance_margin">
              <p>Мой счет</p>
              <div class="card__balance-total">
                <p class="card__balance-amount">0.50</p>
                <p class="card__coin">CEMD</p>
              </div>
            </div>
            <div class="card__footer">
              <div class="card__balance-usd">
                <p class="card__currency">Доллары</p>
                <p class="card__balance">0.50</p>
              </div>
              <div class="card__actual-rate">
                <p class="card__title">Актуальный курс</p>
                <p class="card__amount">1.00</p>
              </div>
            </div>
            <img
              src={crem_logo}
              alt=""
              class="card__crem-logo"
            />
            <div class="card__info-content">
              <p>
                Обмен CEM доступен
                <br />
                от 10 CEMD
              </p>
            </div>

            <button
              class="btn mt-20"
              // onclick={() => {
              //   Fn.initOne({
              //     name: "modalWithdrawalCem",
              //     ifOpen: (front) => {
              //       setTimeout(() => {
              //         front.clearData();
              //       }, 500);
              //     },
              //   });
              // }}
            >
              Обменять
            </button>
          </div>
        </div>

        <div class="test-container">
          <div class="outer_container">
            <table class="table_bonus">
              <thead class="table_bonus_head">
                <tr class="table_bonus_row">
                  <th class="table_bonus_row_start">Type</th>
                  <th>Date</th>
                  <th>Transaction</th>
                  <th>Sum</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody
                class="table_bonus_body"
                ref="elementContainer"
              >
                {Static.limitArray?.map((item, index) => {
                  return (
                    <tr class="table_bonus_row">
                      <td class="table_bonus_row_start">
                        <img
                          src={transaction_newmember_bonus}
                          alt=""
                          class="bonus_type"
                        />
                        {item.type}
                      </td>
                      <td class="table_bonus_row_date">{item.date}</td>
                      <td>{item.transaction}</td>
                      <td>{item.sum}</td>
                      <td>
                        <img
                          src={done}
                          alt=""
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <nav class="pagination-container">
            <button
              class="pagination-button"
              id="prev-button"
              aria-label="Previous page"
              title="Previous page"
            >
              &lt;
            </button>

            <div
              id="pagination-numbers"
              ref="paginationNumbers"
            >
              <span
                class="hidden"
                ref="first_two"
              >
                {Static.Pages?.slice(0, Static.outertDigitsNumber)?.map((item, index) => {
                  return (
                    <button
                      class={item.class}
                      onclick={(e) => {
                        Static.Pages.forEach((element) => {
                          element.class = "pagination-number ";
                        });
                        Static.currentPage = item.number;
                        Func.setCurrentPage(Static.currentPage);
                        Func.pagination(Static.currentPage);
                        item.class += "active";
                        if (Static.currentPage < 3) {
                          Ref.first_two.classList.add("hidden");
                          Static.Begin = 0;
                          Static.End = 5;
                        }
                      }}
                    >
                      {item.number}
                    </button>
                  );
                })}

                <span
                  class="dots"
                  ref="first_two_dots"
                >
                  ...
                </span>
              </span>
              {Static.Pages?.slice(Static.Begin, Static.End)?.map((item, index) => {
                return (
                  <button
                    class={item.class}
                    ref="pagination_number"
                    onclick={(e) => {
                      Static.Pages.forEach((element) => {
                        element.class = "pagination-number ";
                      });
                      Static.currentPage = item.number;
                      Func.setCurrentPage(Static.currentPage);
                      Func.pagination(Static.currentPage);
                      item.class += "active";
                    }}
                  >
                    {item.number}
                  </button>
                );
              })}
              <span
                class=""
                ref="two_last"
              >
                <span class="dots">...</span>
                {Static.Pages?.slice(-Static.outertDigitsNumber)?.map((item, index) => {
                  return (
                    <button
                      class={item.class}
                      onclick={(e) => {
                        Static.Pages.forEach((element) => {
                          element.class = "pagination-number ";
                        });
                        Static.currentPage = item.number;
                        Static.currentPageClass = item.class;
                        Func.setCurrentPage(Static.currentPage);
                        Func.pagination(Static.currentPage);
                        item.class += "active";
                        if (Static.currentPage >= Static.lastPage - 3) {
                          Ref.two_last.classList.add("hidden");
                          Ref.first_two.classList.remove("hidden");
                          Static.Begin = Static.Pages.at(-6).number;
                          Static.End = Static.lastPage;
                        }
                      }}
                    >
                      {item.number}
                    </button>
                  );
                })}
              </span>
            </div>
            <button
              class={["pagination-button", Static.test == 2 ? "test" : "ffhff"]}
              id="next-button"
              aria-label="Next page"
              title="Next page"
              onclick={() => {
                if (Static.currentPage < Static.lastPage) {
                  Static.Pages.forEach((element) => {
                    element.class = "pagination-number ";
                  });
                  console.log("=01d334=", Static.currentPage);
                  Static.currentPage += 1;

                  Func.setCurrentPage(Static.currentPage);
                  Func.pagination(Static.currentPage);
                }
              }}
            >
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
    // <div class="wallet pt-30">
    //   <div class="wrapper wrapper_padding">
    //     <div class="wallet__card mb-50">
    //       <div class="wallet__top">
    //         <p class="wallet__name">Мой счет</p>
    //         <p class="wallet__score">1.00 CEMD</p>
    //       </div>
    //       <div class="wallet__bottom">
    //         <div class="wallet__info">
    //           <p class="wallet__info-name">Долларов</p>
    //           <p class="wallet__info-score">1.00</p>
    //         </div>
    //         <div class="wallet__info">
    //           <p class="wallet__info-name">Актуальный курс</p>
    //           <p class="wallet__info-score">1.00</p>
    //         </div>
    //       </div>
    //       <img
    //         src={logo}
    //         alt="Crypto Emergency"
    //         class="wallet__logo"
    //       />
    //     </div>

    //     <h2 class="wallet__title">Бонусы</h2>

    //     <div class="wallet__table">
    //       <div class="wallet__transaction wallet__transaction_label">
    //         <div class="wallet__transaction-item">Тип</div>
    //         <div class="wallet__transaction-item">Дата</div>
    //         <div class="wallet__transaction-item">Операция</div>
    //         <div class="wallet__transaction-item">Сумма</div>
    //         <div class="wallet__transaction-item">Статус</div>
    //       </div>
    //       <div class="wallet__transaction">
    //         <div class="wallet__transaction-item">AWARDS</div>
    //         <div class="wallet__transaction-item">2024-02-08 13:12</div>
    //         <div class="wallet__transaction-item">BONUS</div>
    //         <div class="wallet__transaction-item">0.5</div>
    //         <div class="wallet__transaction-item"></div>
    //       </div>
    //       <div class="wallet__transaction wallet__transaction_label">
    //         <div class="wallet__transaction-item"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
