import { Cemjsx, Static, front, Fn } from "cemjs-all";

const RenderFieldTitle = function () {
  return (
    <div class="p-0">
      <div class="mt-[1.25rem]">
        <label class="mb-[.5rem] block text-[1rem] font-medium leading-[115%] text-[#9CA2B5]">
        {front.Variable?.words?.form?.enterTitle} 
        </label>
        <input
          type="text"
          value={Static.edit ? Static?.work[Static.key]?.title : ""}
          placeholder={front.Variable.words?.title}
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            Static.edit
              ? (Static.work[Static.key].title = target.value)
              : (Static.dataWork.title = target.value);
          }}
          class="mb-[1.25rem] h-[3.75rem] w-full rounded-[.625rem] bg-[#313543] p-[1.375rem] text-[--white] outline-none [border:1px_solid_#44495C]"
        />
      </div>
    </div>
  );
};

const RenderFieldRange = function () {
  return (
    <div class="p-0">
      <div class="mt-[1.25rem]">
        <label class="mb-[.5rem] block text-[1rem] font-medium leading-[115%] text-[#9CA2B5]">
          {front.Variable?.words?.filters?.selectTime}
        </label>
        <input
          type="text"
          value={Static.edit ? Static?.work[Static.key]?.period : ""}
          placeholder={front.Variable?.words?.filters?.deadlines}
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            Static.edit
              ? (Static.work[Static.key].period = target.value)
              : (Static.dataWork.period = target.value);
          }}
          class="mb-[1.25rem] h-[3.75rem] w-full rounded-[.625rem] bg-[#313543] p-[1.375rem] text-[--white] outline-none [border:1px_solid_#44495C]"
        />
      </div>
    </div>
  );
};

const RenderFielddetails = function () {
  return (
    <div class="p-0">
      <div class="mt-[1.25rem]">
        <label class="mb-[.5rem] block text-[1rem] font-medium leading-[115%] text-[#9CA2B5]">
          {front.Variable?.words?.notices?.details}
        </label>
        <textarea
          type="text"
          placeholder="Поле для ввода"
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            Static.edit
              ? (Static.work[Static.key].description = target.value)
              : (Static.dataWork.description = target.value);
          }}
          class="mb-[1.25rem] h-[3.75rem] w-full rounded-[.625rem] bg-[#313543] p-[1.375rem] text-[--white] outline-none [border:1px_solid_#44495C]"
        >
          {Static.edit
            ? Static?.work[Static.key]?.description
            : Static.dataWork?.description}
        </textarea>
      </div>
    </div>
  );
};

export default function () {

  return (
    <div>
      <RenderFieldTitle />
      <RenderFieldRange />
      <RenderFielddetails />
    </div>
  );
}
