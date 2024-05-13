import { Cemjsx } from "cemjs-all";

export default function () {
  return (
    <div class="hidden text-[.75rem] leading-[1.25rem] text-[--white] @767:grid @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:50%_10%_15%_20%_5%]">
      <span class="box-border [&:nth-child(1)]:relative [&:nth-child(1)]:left-[1.25rem]">
        Вопрос
      </span>
      <span class="box-border [&:nth-child(2)]:text-center">Ответов</span>
      <span class="box-border [&:nth-child(3)]:text-center">Просмотров</span>
      <span>Лучший ответ</span>
    </div>
  );
}
