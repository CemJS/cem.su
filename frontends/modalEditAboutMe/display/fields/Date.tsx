import { Cemjsx, Static, front, Fn } from "cemjs-all";

export default function Select_Frame_App() {
  return (
    <div>
      <input
        type="date"
        placeholder="Дата рождения"
        value={
          Static?.info?.information?.birthday
            ? Static?.info?.information?.birthday
            : ""
        }
        oninput={(event: InputEvent) => {
          const target = event.target as HTMLInputElement;
          Static.info.information.birthday = target.value;
        }}
        class="dateInput mb-[1.25rem] h-[3.75rem] w-full rounded-[.625rem] bg-[#313543] p-[1.375rem] text-[--white] outline-none [border:1px_solid_#44495C]"
      />
    </div>
  );
}
