import { Cemjsx, Static, front, Fn, Func } from "cemjs-all";
import AboutMe from "./fields/AboutMe";
import Name from "./fields/Name";
import Spec from "./fields/Spec";
import Date from "./fields/Date";
import City from "./fields/City";
import Select from "./fields/Select";

const editAboutMe = async () => {
  if (Static.CallBack) {
    let res = await front.Services.functions.sendApi("/api/users/update", {
      information: {
        city: Static?.info?.information?.city,
        speciality: Static?.info?.information?.speciality,
        birthday: Static?.info?.information?.birthday,
        about: Static?.info?.information?.about,
      },
      fullName: Static?.info?.fullName,
      country: {
        code: Static.info.country.code,
        origName: Static.info.country.origName,
      },
    });
    Static.CallBack(Static?.info);
    Func.close();
  }
};
export default function () {
  return (
    <div class="p-0">
      <div>
        <AboutMe />
        <Name />
        <Spec />
        <Date />
        <City />
        <Select />
      </div>
      <div class="flex items-stretch py-[1.25rem]">
        <button
          onclick={front.Services.functions.throttle(editAboutMe, 2000)}
          class="relative z-[1] mr-0 flex h-[3.125rem] w-[16.875rem] flex-grow-[1] items-center justify-center overflow-hidden rounded-[.375rem] px-[1.25rem] py-0 text-center text-[.875rem] font-semibold uppercase leading-[110%] tracking-[1px] text-[--white] no-underline after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.125rem] after:w-[93.75rem] after:translate-x-[-5rem] after:content-[''] after:[background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] after:[transition:transform_400ms_ease-in] hover:after:translate-x-[.3125rem]"
        >
          {front.Variable?.words?.tools?.edit}
        </button>
      </div>
    </div>
  );
}
