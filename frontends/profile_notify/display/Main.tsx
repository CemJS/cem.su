import { Cemjsx, Fn, Static, front } from "cemjs-all";
import question from "@svg/profile_notify/questions.svg";

export default function () {
  console.log("=2641e1=", front.Variable);
  return (
    <div class="page !pt-0">
      <div id="notifications" class="wrapper">
        {/* header */}
        <div class="mt-[10px] w-full rounded-[5px] p-6 !pb-0 text-[16px] font-bold leading-[20px] text-[--white] [background:#2e3340]">
          <h2 class="text-[18px] @479:text-[24px]">Ваши уведомления</h2>
          <ul class="mt-[30px] flex justify-around">
            <li
              class={[
                "cursor-pointer pb-[10px] text-[13px] text-[#dbdbdb]",
                Static.notify == "questions"
                  ? "pb-[10px] text-[--white] [border-bottom:3px_solid] [border-image-slice:0%_0%_100_0%] [border-image-source:linear-gradient(89.03deg,#679fef_0.54%,#a87fff_97.66%)]"
                  : null,
              ]}
              onclick={() => {
                Static.notify = "questions";
                Static.actualNotify = Static.questionsList;
              }}
            >
              Вопросы
            </li>
            <li
              class={[
                "cursor-pointer pb-[10px] text-[13px] text-[#dbdbdb]",
                Static.notify == "awards"
                  ? "pb-[10px] text-[--white] [border-bottom:3px_solid] [border-image-slice:0%_0%_100_0%] [border-image-source:linear-gradient(89.03deg,#679fef_0.54%,#a87fff_97.66%)]"
                  : null,
              ]}
              onclick={() => {
                Static.notify = "awards";
                Static.actualNotify = Static.awardsList;
              }}
            >
              Награды
            </li>
            <li
              class={[
                "cursor-pointer pb-[10px] text-[13px] text-[#dbdbdb]",
                Static.notify == "system"
                  ? "pb-[10px] text-[--white] [border-bottom:3px_solid] [border-image-slice:0%_0%_100_0%] [border-image-source:linear-gradient(89.03deg,#679fef_0.54%,#a87fff_97.66%)]"
                  : null,
              ]}
              onclick={() => {
                Static.notify = "system";
                Static.actualNotify = null;
              }}
            >
              Системные
            </li>
          </ul>
        </div>
        {/* items */}
        <div id="list">
          <div id="inner">
            <ul>
              {Static.actualNotify?.map((item) => {
                return (
                  <a
                    href={`/${item.url}/show/${item.urlId}`}
                    class="block cursor-pointer p-[20px_25px_20px_25px] [transition:0.5s] hover:[background:#3E4354]"
                  >
                    <div id="wrapper">
                      <div class="flex items-center">
                        <img
                          class="mr-[10px] h-[25px]"
                          src={
                            item.icon
                              ? `/contents/svg/personalAwards/${item.icon}`
                              : question
                          }
                        />
                        <p class="inline-block text-[12px] font-bold leading-[125%] text-[#efefef] @479:text-[15px]">
                          {front.Variable.words[item.name]}
                        </p>
                      </div>

                      <span class="mt-[15px] block text-[12px] font-medium leading-[125%] text-[#767c85] [font-style:normal] @479:text-[14px]">
                        {front.Variable.words[item.description]}
                      </span>
                    </div>
                    {item.nickName ? (
                      <span class="mt-[5px] block text-[12px] font-medium leading-[125%] text-[#b8c0cd] @479:text-[14px]">
                        Пользователь:
                        <a
                          class="ml-[5px] mt-0 !bg-clip-text text-[14px] font-semibold text-[#b8c0cd] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0,#576fe6_45%,#9844b7_57%,#ff357f_70%)]"
                          href={`/user/${item.nickName}`}
                          onclick={(e) => {
                            e.stopPropagation();
                            Fn.link(e);
                          }}
                        >
                          {item.nickName}
                        </a>
                      </span>
                    ) : null}
                    <span class="mt-[15px] block text-[12px] font-medium leading-[125%] text-[#767c85] @479:text-[14px]">
                      {front.Services.functions.timeStampToDate(
                        item.dateCreate,
                        ".",
                      )}
                    </span>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
