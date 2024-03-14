import { Cemjsx, Fn, Func, Ref, Static } from "cemjs-all";
import logo from "@svg/logo.svg";
import transaction_newmember_bonus from "@images/personalWallet/transaction_newmember_bonus.svg";
import crem_logo from "@images/personalWallet/crem_logo.svg";
import done from "@images/personalWallet/done.svg";
import nav_arrow from "@svg/events/show/nav_arrow.svg";

const RenderTop = () => {
  return (
    <div class="relative">
      <h1 class="mt-0 flex justify-center">Мои активы</h1>

      <div class="absolute top-[50%] mb-10 flex cursor-pointer items-center justify-start gap-[12px] [transform:translateY(-50%)]">
        <img src={nav_arrow} alt="" />
        <a href="/" onclick={Fn.link}>
          <span>Назад</span>
        </a>
      </div>
    </div>
  );
};

const RenderCard = () => {
  return (
    <div class="mt-6">
      <div
        id="card"
        class="relative mb-[10px] aspect-[0] w-full max-w-[420px] rounded-[20px] bg-[url(/assets/card-R2FX7L43.png)] bg-cover p-[40px_60px_40px_30px]"
      >
        <div class="mb-5 flex flex-col text-[20px] font-semibold leading-[1]">
          <p class="mb-[10px] text-[15px] font-medium leading-[1]">Мой счет</p>
          <div class="flex gap-[10px]">
            <p class="mb-0 text-[36px] font-semibold leading-[1]">0.50</p>
            <p class="mb-0 text-[36px] font-semibold leading-[1]">CEMD</p>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col gap-[5px]">
            <p class="mb-[7px] text-[14px] font-medium leading-[1]">Доллары</p>
            <p class="mb-0 flex flex-col text-[20px] font-semibold leading-[1]">
              0.50
            </p>
          </div>
          <div class="flex flex-col gap-[5px]">
            <p class="mb-[7px] text-[14px] font-medium leading-[1]">
              Актуальный курс
            </p>
            <p class="mb-0 text-[20px] font-semibold leading-[1]">1.00</p>
          </div>
        </div>
        <img
          src={crem_logo}
          alt=""
          class="absolute right-[10px] top-[10px] w-[130px] rounded-[20px] align-middle"
        />
        <div class="absolute bottom-[-10px] right-[10px] rounded-[8px] p-[5px_5px] text-center text-[8px] font-semibold text-[#a8d7e0] [transform:translateY(-50%)] ">
          <p>
            Обмен CEM доступен
            <br />
            от 10 CEMD
          </p>
        </div>

        <button
          class="btn mt-[20px]"
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
  );
};

const RenderTable = () => {
  const RenderPagination = () => {
    return (
      <nav class="absolute bottom-[-32px] flex w-[calc(100%_-_2rem)] items-center justify-center rounded-[--borderR] p-[0.5rem_0] [background:--mainGradient]">
        <button
          class="pagination-button"
          id="prev-button"
          aria-label="Previous page"
          title="Previous page"
          onclick={() => {
            if (Static.currentPage > 1) {
              Static.Pages.forEach((element) => {
                element.class = "pagination-number ";
              });

              Static.currentPage -= 1;
              console.log("=01d334=", Static.currentPage);

              Func.setCurrentPage(Static.currentPage);
              Func.pagination(Static.currentPage);
            }
          }}
        >
          &lt;
        </button>

        <div id="pagination-numbers" ref="paginationNumbers">
          <span class="hidden" ref="first_two">
            {Static.Pages?.slice(0, Static.outertDigitsNumber)?.map(
              (item, index) => {
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
              },
            )}

            <span class="dots" ref="first_two_dots">
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
          <span class="" ref="two_last">
            <span class="dots">...</span>
            {Static.Pages?.slice(-Static.outertDigitsNumber)?.map(
              (item, index) => {
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
              },
            )}
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
              Static.currentPage += 1;
              console.log("=01d334=", Static.currentPage);

              Func.setCurrentPage(Static.currentPage);
              Func.pagination(Static.currentPage);
            }
          }}
        >
          &gt;
        </button>
      </nav>
    );
  };
  return (
    <div class="relative mb-[50px] min-h-[800px] p-[1rem_1rem_3rem]">
      <div class="relative overflow-auto overflow-y-visible overflow-x-scroll p-0">
        <table class="w-full border-collapse text-center indent-0 align-middle">
          <thead>
            <tr class="text-[13px] font-medium text-[#8991a8] [border-bottom:1px_solid_#8991a8] [&_th]:p-[10px_15px]">
              <th class="sticky left-0 flex items-center justify-start gap-[17px] bg-[#1d2029]">
                Type
              </th>
              <th>Date</th>
              <th>Transaction</th>
              <th>Sum</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody ref="elementContainer">
            {Static.limitArray?.map((item, index) => {
              return (
                <tr class="[border-bottom:1px_solid_#8991a8] [&_td]:min-w-[140px] [&_td]:items-center [&_td]:p-[15px_0px]">
                  <td class="sticky left-0 flex items-center justify-start gap-[17px] bg-[#1d2029]">
                    <img
                      src={transaction_newmember_bonus}
                      alt=""
                      class="w-[35px]"
                    />
                    {item.type}
                  </td>
                  <td class="text-nowrap [padding-inline:5px]">{item.date}</td>
                  <td>{item.transaction}</td>
                  <td>{item.sum}</td>
                  <td>
                    <img src={done} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <RenderPagination />
    </div>
  );
};

export default function () {
  return (
    <div class="page wallet">
      <div class="wrapper">
        <RenderTop />

        <RenderCard />

        <RenderTable />
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
