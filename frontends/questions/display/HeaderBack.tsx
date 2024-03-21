import { Cemjsx, Fn, front, Static, Events, Func } from "cemjs-all";

export default function () {
  return (
    <div class="fixed z-[5] p-[0.5rem_0] top-0 left-0 right-0 border-b-[1px] border-solid border-[#2d3243] w-full bg-[#1d2029]">
      <div class="wrapper">
        <div class="flex justify-between items-center">
          <span
            class="cursor-pointer flex justify-center items-center"
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

          <h5 class="@700:text-xl text-center px-4 line-clamp-1 font-medium text-base">Вопрос</h5>

          <span
            class="relative cursor-pointer w-8 after:content-['...'] after:absolute after:text-5xl after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%]"
            onclick={() => {
              let records = [];
              records.push({ name: "Поделиться", func: Func.share });
              if (front.Variable.myInfo.id == Static.record.author.id) {
                records.push({ name: "Удалить", func: Func.deleteQuestion });
                !Static.record.closed ? records.push({ name: "Закрыть вопрос", func: Func.closeQuestion }) : null;
              }
              Fn.initOne("modalTools", { records });
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}