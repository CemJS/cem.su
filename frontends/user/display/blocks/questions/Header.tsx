import { Cemjsx, Static } from 'cemjs-all';

// Функция для создания классов для элементов
const createClassNames = (baseClasses, conditionClasses, isConditionMet) => {
  return `${baseClasses} ${isConditionMet ? '' : conditionClasses}`;
};

export default function () {
  // Базовые классы для всех элементов
  const baseClasses = 'box-border';
  // Классы для анимации, если компонент не показан
  const pulseClasses = 'animate-pulse rounded-[.625rem] bg-slate-700 text-[#ffffff00]';

  return (
    <div class="hidden text-[.75rem] leading-[1.25rem] text-[--white] @767:grid @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:50%_10%_15%_20%_5%]">
      <span
        class={createClassNames(
          `${baseClasses} [&:nth-child(1)]:relative [&:nth-child(1)]:left-[1.25rem]`,
          `w-[6.25rem] ${pulseClasses}`,
          Static.showComp
        )}
      >
        Вопрос
      </span>
      <span
        class={createClassNames(
          `${baseClasses} [&:nth-child(2)]:text-center`,
          `mr-[.3125rem] w-[4.25rem] ${pulseClasses}`,
          Static.showComp
        )}
      >
        Ответов
      </span>
      <span
        class={createClassNames(
          `${baseClasses} [&:nth-child(3)]:text-center`,
          `w-[6.25rem] ${pulseClasses}`,
          Static.showComp
        )}
      >
        Просмотров
      </span>
      <span
        class={createClassNames(
          baseClasses,
          `w-[8.25rem] ${pulseClasses}`,
          Static.showComp
        )}
      >
        Лучший ответ
      </span>
    </div>
  );
}