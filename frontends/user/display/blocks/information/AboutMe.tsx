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
    <div class="@1370:w-[calc(50%_-_1rem)] mx-[.5rem] my-0 w-[calc(100%_-_16px)] max-[1240px]:mb-[1.25rem]">
      <div class="user__info__section-row_type-3">
        <div class="z-0 m-0 cursor-col-resize rounded-[0] border-x-0 border-b-0 bg-[--black-gray] p-[.1875rem] text-[--white] [border:1px_solid_#363C50] @1024:mt-[2rem] @1024:rounded-[.9375rem]">
          <div class="relative h-full w-full cursor-default rounded-[.9375rem] bg-[--black-gray] px-[1.25rem] py-[2rem]">
            <p>Обо мне</p>
            <div class="mt-[1.9375rem]">
              <div class="flex w-full">
                <span class="mr-[.9375rem] block text-[--white] odd:mb-[1.25rem] odd:text-[1rem] odd:font-normal odd:leading-[1.5rem] odd:text-[#ADADAD]">
                  Имя
                </span>
                <div>
                  <div>{Static.record?.fullName}</div>
                  {/* <input readonly="true" value={Static.record?.fullName ? Static.record?.fullName : ""} /> */}
                </div>
              </div>
              <div class="flex w-full">
                <span class="mr-[.9375rem] block text-[--white]">
                  Специализация
                </span>
                <div>
                  <div>{Static.record?.information?.speciality}</div>
                  {/* <input readonly="true" value={Static.record?.information?.speciality ? Static.record?.information?.speciality : ""} /> */}
                </div>
              </div>
              <div class="flex w-full">
                <span>Страна</span>
                <div>
                  <div>{Static.record?.country?.engName}</div>
                  {/* <input readonly="true" value={Static.record?.country?.engName ? Static.record?.country?.engName : ""} /> */}
                </div>
              </div>
              <div class="flex w-full">
                <span>Город</span>
                <div>
                  <div>{Static.record?.information?.city}</div>
                  {/* <input readonly="true" value={Static.record?.information?.city ? Static.record?.information?.city : ""} /> */}
                </div>
              </div>
              <div class="flex w-full">
                <span>Зарегистрирован</span>
                <div>
                  <div>
                    {formatDate(Static.record?.information?.dateCreate)}
                  </div>
                  {/* <input readonly="true" value={Static.record?.information?.dateCreate ? formatDate(Static.record?.information?.dateCreate) : ""} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
