import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import logo from "@svg/logo.svg";
import transaction_newmember_bonus from "@images/personalWallet/transaction_newmember_bonus.svg";
import crem_logo from "@images/personalWallet/crem_logo.svg";
import done from "@images/personalWallet/done.svg";
import nav_arrow from "@svg/events/show/nav_arrow.svg";

const RenderTop = () => {
  return (
    <div class="relative">
      <h1 class="mt-0 flex justify-center text-[1.3rem]">Мои активы</h1>

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
    <div class="mt-10">
      <div
        id="card"
        class="relative mb-[10px] aspect-[0] w-full max-w-[420px] rounded-[20px] bg-cover p-[40px_60px_40px_30px] [background-image:url('/contents/images/wallet/card.png')]"
      >
        <div class="mb-5 flex flex-col text-[20px] font-semibold leading-[1]">
          <p class="mb-[10px] text-[15px] font-medium leading-[1]">Мой счет</p>
          <div class="flex gap-[10px]">
            <p class="mb-0 text-[36px] font-semibold leading-[1]">
              {Static.balance}
            </p>
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
    const RenderButton = ({
      page,
      active = false,
      hidden = false,
      position = "",
    }) => {
      console.log("=cd63cb=", page);

      return (
        <button
          onclick={() => {
            Func.setCurrentPage(page);
          }}
          class={[
            "relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-200 transition-all hover:bg-gray-200/10 active:bg-gray-200/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none [&#second]:hidden @600:[&#second]:block",
            active
              ? "!focus:shadow-none !active:opacity-[0.85] !bg-gray-200 !text-gray-900 !shadow-md !shadow-gray-200/10 active:shadow-none"
              : null,
            hidden ? "!hidden" : null,
          ]}
          id={[position]}
          type="button"
        >
          <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            {page ? page : null}
          </span>
        </button>
      );
    };
    const RenderPrevButton = ({ page, disabled = false }) => {
      return (
        <button
          disabled={disabled}
          onclick={() => {
            Func.setCurrentPage(page);
          }}
          class="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-200 transition-all hover:bg-gray-200/10 active:bg-gray-200/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none @767:px-6 [&_#text]:hidden @767:[&_#text]:inline"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          <span id="text">Previous</span>
        </button>
      );
    };
    const RenderNextButton = ({ page, disabled = false }) => {
      return (
        <button
          disabled={disabled}
          onclick={() => {
            Func.setCurrentPage(page);
          }}
          class="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-200 transition-all hover:bg-gray-200/10 active:bg-gray-200/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none @767:px-6 [&_#text]:hidden @767:[&_#text]:inline"
          type="button"
        >
          <span id="text">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      );
    };
    return (
      <div class="flex items-center gap-4 pt-2">
        <div class="flex items-center gap-2">
          <RenderPrevButton
            page={Static.currentPage - 1}
            disabled={Static.currentPage - 1 < 1}
          />
          <RenderButton
            position="second"
            page={1}
            hidden={Static.currentPage - 3 <= 0}
          />
          <span
            class={[
              "pointer-events-none hidden select-none @600:inline",
              Static.currentPage - 3 <= 0 ? "!hidden" : null,
            ]}
          >
            ...
          </span>
          <RenderButton
            position="second"
            page={Static.currentPage - 2}
            hidden={Static.currentPage - 2 <= 0}
          />
          <RenderButton
            page={Static.currentPage - 1}
            hidden={Static.currentPage - 1 <= 0}
          />
          <RenderButton page={Static.currentPage} active={true} />
          <RenderButton
            page={Static.currentPage + 1}
            hidden={Static.currentPage + 1 > Static.pageCount}
          />
          <RenderButton
            position="second"
            page={Static.currentPage + 2}
            hidden={Static.currentPage + 2 > Static.pageCount}
          />
          <span
            class={[
              "pointer-events-none hidden select-none @600:inline",
              Static.currentPage + 3 > Static.pageCount ? "!hidden" : null,
            ]}
          >
            ...
          </span>
          <RenderButton
            position="second"
            page={Static.pageCount}
            hidden={Static.currentPage + 3 > Static.pageCount}
          />
          <RenderNextButton
            page={Static.currentPage + 1}
            disabled={Static.currentPage + 1 > Static.pageCount}
          />
        </div>
      </div>
    );
  };
  return (
    <div class="relative mb-[50px] flex min-h-[800px] flex-col items-center p-[1rem_1rem_3rem]">
      <div class="relative w-full overflow-auto overflow-y-visible overflow-x-scroll p-0">
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
            {Static.records?.map((item, index) => {
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
                  <td class="text-nowrap [padding-inline:5px]">
                    {front.Services.functions.timeStampToDate(
                      item.dateCreate,
                      "-",
                    )}
                  </td>
                  <td>{item.operation}</td>
                  <td>{item.value}</td>
                  <td class="flex items-center justify-center">
                    {item.status ? <img src={done} alt="" /> : null}
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

        {Static.pageCount ? <RenderCard /> : null}
        {Static.pageCount ? <RenderTable /> : null}
      </div>
    </div>
  );
}
