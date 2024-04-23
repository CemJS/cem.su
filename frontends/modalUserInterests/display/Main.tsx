import { Cemjsx, Static, front, Fn } from "cemjs-all";

Static.dataInterests = {
  title: "",
  description: "",
};

const RenderFieldName = function () {
  return (
    <div class="p-0">
      <div class="mt-[1.25rem]">
        <label class="mb-[.5rem] block text-[1rem] font-medium leading-[115%] text-[#9CA2B5]">
          Введите название
        </label>
        <input
          type="text"
          value={
            Static.edit ? Static?.interests[Static.key]?.title : ""
          }
          placeholder="Название"
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            Static.edit
              ? (Static.interests[Static.key].title = target.value)
              : (Static.dataInterests.title = target.value);
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
          Укажите подробности
        </label>
        <textarea
          type="text"
          placeholder="Поле для ввода"
          oninput={(event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            Static.edit
              ? (Static.interests[Static.key].description = target.value)
              : (Static.dataInterests.description = target.value);
          }}
          class="mb-[1.25rem] h-[3.75rem] w-full rounded-[.625rem] bg-[#313543] p-[1.375rem] text-[--white] outline-none [border:1px_solid_#44495C]"
        >
          {Static.edit
            ? Static?.interests[Static.key]?.description
            : Static.dataInterests?.description}
        </textarea>
      </div>
    </div>
  );
};

// const RenderField = function ({ field, placeholder }) {
//   return (
//     <div
//       class={[
//         "modalWindow_field relative h-[3.125rem] w-full leading-[3.125rem]",
//         field?.length ? "modalWindow_field__valid" : null,
//       ]}
//     >
//       <input
//         class="test absolute z-[3] w-full rounded-[--borderR] bg-transparent px-[1.875rem] py-0 text-[1rem] leading-[3.125rem] text-[--white] outline-none [border:1px_solid_var(--fiolet)] [transition:border_0.1s_ease] focus:z-[5] focus:leading-[1.875rem] focus:[transform:translate(-15px,_-16px)_scale(0.88)] [&.test:focus]:h-[1.875rem] [&.test]:bg-black"
//         type="text"
//         value={field}
//         autocomplete="off"
//         oninput={(e: any) => {
//           field = e.target.value;
//         }}
//       />
//       <div class="absolute mx-[.625rem] my-0 flex items-center gap-[.625rem] bg-[#202432] px-[.625rem] py-0 text-[1rem] text-[--secondary_text]">
//         <i></i>
//         <span>{placeholder}</span>
//       </div>
//     </div>
//   );
// };

export default function () {
  console.log("interest", Static?.edit);

  return (
    <div>
      {/* <RenderField
        field={Static?.info?.fullName ? Static?.info?.fullName : ""}
        placeholder="Введите название"
      /> */}
      <RenderFieldName />
      <RenderFielddetails />
    </div>
  );
}
