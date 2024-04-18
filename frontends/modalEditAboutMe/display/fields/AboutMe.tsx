import { Cemjsx, Static, front, Fn } from "cemjs-all";

export default function Select_Frame_App() {
  return (
    <textarea
      placeholder="Обо мне"
      value={Static?.info?.information?.about}
      oninput={(event: InputEvent) => {
        const target = event.target as HTMLInputElement;
        Static.info.information.about = target.value;
      }}
      class="relative box-border flex max-h-full min-h-[2.0625rem] w-full resize-none rounded-[.625rem] bg-[#313543] px-[.9375rem] py-[.5rem] text-[1rem] font-medium leading-[1.5rem] text-[--white] outline-none [border:1px_solid_#44495c] first:rounded-tl-[.625rem] first:rounded-tr-[.625rem]"
    >
      {Static?.info?.information?.about}
    </textarea>
  );
}
