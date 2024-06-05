import { Cemjsx, Func, Static, front } from "cemjs-all";



export default function () {
  const addInterest = async () => {
    if (Static.CallBack) {
      if (!Static.edit) {
        Static.interests.push(Static.dataInterests);
      }
      let res = await front.Services.functions.sendApi("/api/users/update", {
        interest: Static.interests,
      });
      if (res?.status === 200) {
        Static.CallBack(Static?.interests);
        Func.close();
      }
    }
  };
  return (
    <footer class="modal-footer">
      <div class="flex items-stretch py-[1.25rem]">
        <button
          onclick={front.Services.functions.throttle(addInterest, 2000)}
          class="relative z-[1] mr-0 flex h-[3.125rem] w-[16.875rem] flex-grow-[1] items-center justify-center overflow-hidden rounded-[.375rem] px-[1.25rem] py-0 text-center text-[.875rem] font-semibold uppercase leading-[110%] tracking-[1px] text-[--white] no-underline after:absolute after:top-0 after:z-[-1] after:inline-block after:h-[3.125rem] after:w-[93.75rem] after:translate-x-[-5rem] after:content-[''] after:[background:linear-gradient(45deg,_#3bade3_0%,_#576fe6_45%,_#9844b7_57%,_#ff357f_70%)] after:[transition:transform_400ms_ease-in] hover:after:translate-x-[.3125rem]"
        >
          {Static.edit ? front.Variable?.words?.tools?.edit : front.Variable?.words?.tools?.add}
        </button>
      </div>
    </footer>
  );
}
