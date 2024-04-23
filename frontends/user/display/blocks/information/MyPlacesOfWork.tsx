import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import dots from "@svg/questions/dots.svg";

export default function () {
  // Fn.log('=2fc7ab=',Static.aboutMe)
  return (
    <div class="m-0 mb-[1.25rem] w-full @1024:mx-[.5rem] @1024:my-0 @1024:w-[calc(100%_-_16px)]">
      <div class="z-0 m-0 cursor-col-resize rounded-[0] border-x-0 border-b-0 bg-[--black-gray] p-[.1875rem] text-[--white] [border:1px_solid_#363C50] @1024:mt-[2rem] @1024:rounded-[.9375rem]">
        <div class="relative h-full w-full cursor-default rounded-[.9375rem] bg-[--black-gray] px-[1.25rem] py-[2rem]">
          <p class="relative left-[-.375rem] top-[-.375rem] mb-[2.5rem] text-[1rem] font-normal leading-[1.25rem] text-[--white]">
            Мои места работы
          </p>
          <div style="w-full"></div>
          {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] && (
            <div class="absolute right-[1.25rem] top-[1.375rem]">
              <div class="relative ml-[.625rem] h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]">
                <img
                 onclick={() => {
                  Fn.initOne("modalTools", {
                    records: [
                      {
                        name: "Добавить",
                        func: () =>
                          Fn.initOne("modalUserWorkPlace", {
                            interests: Static.record?.interests,
                            edit: false,
                            CallInit: (CallBack: string) => {
                              Static.record.interests = CallBack;
                            },
                          }),
                      },
                    ],
                  });
                }}
                  class="box-content w-[1.375rem] cursor-pointer p-[.625rem]"
                  src={dots}
                />
              </div>
            </div>
          )}
          {Static.record?.work?.map((item: any, key: number) => {
            return (
              <div class="box-border w-full pl-[1.25rem] [border-left:2px_solid_#6948AC]">
                <span class="text-[1rem] font-normal leading-[1.5625rem] text-[--white] before:first:absolute before:first:left-[-1.6875rem] before:first:top-[.3125rem] before:first:box-border before:first:h-[.75rem] before:first:w-[.75rem] before:first:rounded-[50%] before:first:bg-[--black-gray] before:first:content-[''] before:first:[border:3px_solid_#8462C6] [&:nth-child(1)]:relative [&:nth-child(1)]:top-[-.625rem] [&:nth-child(1)]:block [&:nth-child(1)]:text-[1rem] [&:nth-child(1)]:font-bold [&:nth-child(1)]:text-[--white]">
                  {item?.title}
                </span>
                <span class="text-[1rem] font-normal leading-[1.5rem] text-[--white] [&:nth-child(2)]:relative [&:nth-child(2)]:top-[-.625rem] [&:nth-child(2)]:block [&:nth-child(2)]:text-[.875rem] [&:nth-child(2)]:leading-[1.3125rem] [&:nth-child(2)]:text-[--white]">
                  {item?.period}
                </span>
                <span class="text-[1rem] font-normal leading-[1.5rem] text-[--white] [&:nth-child(3)]:relative [&:nth-child(3)]:top-[-.625rem] [&:nth-child(3)]:mt-[.625rem] [&:nth-child(3)]:block [&:nth-child(3)]:pb-[1.25rem] [&:nth-child(3)]:text-[.875rem] [&:nth-child(3)]:leading-[1.3125rem] [&:nth-child(3)]:text-[--white]">
                  {item?.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
