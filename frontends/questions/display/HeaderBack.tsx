import { Cemjsx, Fn, front, Static, Events, Func } from "cemjs-all";

export default function () {
  return (
    <div class="fixed left-0 right-0 top-0 z-[5] w-full border-b-[1px] border-solid border-[#2d3243] bg-[#1d2029] py-3">
      <div class="wrapper">
        <div class="flex items-center justify-between">
          <span
            class="flex cursor-pointer items-center justify-center"
            onclick={() => {
              Fn.linkChange("/questions");
              if (front.Variable.$el.header) {
                front.Variable.$el.header.classList.remove("hide");
                front.Variable.$el.footer.classList.remove("hide");
                Static.record = null;
                Events.questions.close();
              }
            }}
          >
            <i class="i i-arrow-left text-2xl"></i>
          </span>

          <h5 class="line-clamp-1 px-4 text-center text-base font-medium @700:text-xl">
            Вопрос
          </h5>

          <span
            class="relative w-8 cursor-pointer after:absolute after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%] after:text-5xl after:content-['...']"
            onclick={() => {
              let records = [];
              records.push({ name: "Поделиться", func: Func.share });
              if (front.Variable.myInfo.id == Static.record.author.id) {
                records.push({ name: "Удалить", func: Func.deleteQuestion });
                !Static.record.closed
                  ? records.push({
                      name: "Закрыть вопрос",
                      func: Func.closeQuestion,
                    })
                  : null;
              }
              Fn.initOne("modalTools", {
                records,
              });
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
