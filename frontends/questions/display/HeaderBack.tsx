import { Cemjsx, Fn, front, Static, Events, Func } from "cemjs-all";

export default function () {
  return (
    <div class="back">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
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
            <i class="i i-arrow-left"></i>
          </span>

          <h5 class="back-title">Вопрос</h5>

          <span
            class="back-ellipsis"
            onclick={() => {
              let records = [];
              records.push({ name: "Поделиться", func: Func.share });
              if (front.Variable.myInfo.id == Static.record.author.id) {
                records.push({ name: "Удалить", func: Func.deleteQuestion });
                records.push({ name: "Закрыть вопрос", func: Func.closeQuestion });
              }
              Fn.initOne("modalTools", { records });
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
