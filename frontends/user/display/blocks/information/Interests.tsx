import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import MyPlacesOfWork from "./MyPlacesOfWork";
import dots from "@svg/questions/dots.svg";
import editIcon from "@svg/profile/editIcon.svg";
import deleteIcon from "@svg/profile/deleteIcon.svg";

export default function () {
  // Fn.log('=2fc7ab=',Static.aboutMe)
  return (
    <div class="m-0 w-full last:mb-0 max-@1024:mb-[1.25rem] @1370:mx-[.5rem] @1370:my-0 @1370:w-[calc(50%_-_16px)]">
      <div class="m-0 mb-[1.25rem] w-full @1024:mx-[.5rem] @1024:my-0 @1024:!w-[calc(100%_-_16px)]">
        <div class="z-0 m-0 cursor-col-resize rounded-[0] border-x-0 border-b-0 bg-[--black-gray] p-[.1875rem] text-[--white] [border:1px_solid_#363C50] @1024:mt-[2rem] @1024:rounded-[.9375rem]">
          <div class="relative h-full w-full cursor-default rounded-[.9375rem] bg-[--black-gray] px-[1.25rem] py-[2rem]">
            <p>Мои интересы</p>

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
                              Fn.initOne("modalUserInterests", {
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

            {Static.record?.interests?.map((item: any, key: number) => {
              return (
                <div key={key} style="position: relative;">
                  <b class="mb-[.9375rem] mt-[1.4375rem] block text-[1rem] font-bold leading-[1.5rem] text-[--white]">
                    {item?.title}
                    <img
                      onclick={() => {
                        Fn.initOne("modalUserInterests", {
                          interests: Static.record?.interests,
                          key: key,
                          edit: true,
                          CallInit: (CallBack: string) => {
                            Static.record.interests = CallBack;
                          },
                        });
                      }}
                      src={editIcon}
                      alt="editIcon"
                      class="absolute right-[1rem] mr-[.5rem] inline w-[1.125rem] cursor-pointer"
                    />
                    <img
                      onclick={() => {
                        Fn.initOne("modalAccept", {
                          title: "свой интерес",
                          CallInit: async (CallBack: boolean) => {
                            if (CallBack) {
                              Static.record?.interests.splice(key, 1);
                              let res = await front.Services.functions.sendApi(
                                "/api/users/update",
                                {
                                  interest: Static.record?.interests,
                                },
                              );

                              if (res?.status === 200) {
                                // Static.record.interests = array;
                              }
                            }
                          },
                        });
                      }}
                      src={deleteIcon}
                      alt="editIcon"
                      class="absolute right-[-.875rem] mr-[.5rem] inline w-[1.125rem] cursor-pointer"
                    />
                  </b>
                  <div>
                    <span class="text-[1rem] font-normal leading-[1.5rem] text-[--white]">
                      {item?.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MyPlacesOfWork />
    </div>
  );
}
