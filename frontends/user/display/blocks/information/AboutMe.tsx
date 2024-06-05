import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";

function formatDate(dateString: any) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return day + "." + month + "." + year;
}

export default function () {
  // Fn.log('=2fc7ab=',Static.aboutMe)
  return (
    <div class="my-0 w-full max-@1370:mx-[10px] max-@1024:mx-[0] max-@1024:mb-[1.25rem] @1024:w-[calc(100%_-_1rem)] @1370:w-[calc(50%_-_1rem)]">
      <div class="z-0 m-0 cursor-col-resize rounded-[0] border-x-0 border-b-0 bg-[--black-gray] p-[.1875rem] text-[--white] [border:1px_solid_#363C50] @1024:mt-[2rem] @1024:rounded-[.9375rem]">
        <div class="relative h-full w-full cursor-default rounded-[.9375rem] bg-[--black-gray] px-[1.25rem] py-[2rem]">
          <p class="relative left-[-.375rem] top-[-.375rem] mb-[2.5rem] text-[1rem] font-normal leading-[1.25rem] text-[--white]">
            {Static.record?.information?.about
              ? Static.record?.information?.about
              : front.Variable?.words?.user?.aboutMe}
          </p>
          <div class="mt-[1.9375rem]">
            <div class="flex w-full">
              <span class="mr-[.9375rem] block text-[--white] odd:mb-[1.25rem] odd:text-[1rem] odd:font-normal odd:leading-[1.5rem] odd:text-[#ADADAD]">
                Имя
              </span>
              <div>
                <div class="border-0 bg-transparent p-0 text-inherit">
                  {Static.record?.fullName}
                </div>
                {/* <input readonly="true" value={Static.record?.fullName ? Static.record?.fullName : ""} /> */}
              </div>
            </div>
            <div class="flex w-full">
              <span class="mr-[.9375rem] block text-[--white] odd:mb-[1.25rem] odd:text-[1rem] odd:font-normal odd:leading-[1.5rem] odd:text-[#ADADAD]">
                Специализация
              </span>
              <div>
                <div class="border-0 bg-transparent p-0 text-inherit">
                  {Static.record?.information?.speciality}
                </div>
                {/* <input readonly="true" value={Static.record?.information?.speciality ? Static.record?.information?.speciality : ""} /> */}
              </div>
            </div>
            <div class="flex w-full">
              <span class="mr-[.9375rem] block text-[--white] odd:mb-[1.25rem] odd:text-[1rem] odd:font-normal odd:leading-[1.5rem] odd:text-[#ADADAD]">
                {front.Variable?.words?.country?.title}
              </span>
              <div>
                <div class="border-0 bg-transparent p-0 text-inherit">
                  {Static.record?.country?.engName ? Static.record?.country?.engName : Static.record?.country?.origName}
                </div>
                {/* <input readonly="true" value={Static.record?.country?.engName ? Static.record?.country?.engName : ""} /> */}
              </div>
            </div>
            <div class="flex w-full">
              <span class="mr-[.9375rem] block text-[--white] odd:mb-[1.25rem] odd:text-[1rem] odd:font-normal odd:leading-[1.5rem] odd:text-[#ADADAD]">
                {front.Variable?.words?.country?.city}
              </span>
              <div>
                <div class="border-0 bg-transparent p-0 text-inherit">
                  {Static.record?.information?.city}
                </div>
                {/* <input readonly="true" value={Static.record?.information?.city ? Static.record?.information?.city : ""} /> */}
              </div>
            </div>
            <div class="flex w-full">
              <span class="mr-[.9375rem] block text-[--white] odd:mb-[1.25rem] odd:text-[1rem] odd:font-normal odd:leading-[1.5rem] odd:text-[#ADADAD]">
                Зарегистрирован
              </span>
              <div>
                <div class="border-0 bg-transparent p-0 text-inherit">
                  {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1]
                    ? formatDate(front.Variable.myInfo?.dateCreate)
                    : formatDate(Static.record?.information?.dateCreate)}
                </div>
                {/* <input readonly="true" value={Static.record?.information?.dateCreate ? formatDate(Static.record?.information?.dateCreate) : ""} /> */}
              </div>
            </div>
          </div>
          {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] && (
            <div class="absolute right-[1.25rem] top-[1.375rem]">
              <img
                onclick={() => {
                  Fn.initOne("modalEditAboutMe", {
                    info: Static.record,
                    CallBack: (CallBack: string) => {
                      Static.record = CallBack;
                    },
                  });
                }}
                class="box-content w-[1.375rem] cursor-pointer p-[.625rem]"
                src="/contents/svg/editProfile.svg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
