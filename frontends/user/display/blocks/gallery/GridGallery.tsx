import { Cemjsx, Fn, Func, front, Static } from "cemjs-all";
import addMedia from "@svg/profile/addMedia.svg";
import iconSettings from "@svg/profile/iconSettings.svg";
import { objectGallery } from "./interface";
export default function () {
  return (
    <div class="grid [grid-template-columns:repeat(3,_minmax(100px,_1fr))]">
      <label class="block aspect-square cursor-pointer [border:2px_dashed_#c5b8eb]">
        <figure class="relative m-0 flex h-full overflow-hidden">
          <img
            class="static m-auto h-[auto] min-h-0 w-[25%] min-w-0 border-0 bg-[#1D2029] bg-none bg-contain bg-no-repeat object-cover"
            src={addMedia}
            alt="addMedia"
          />
        </figure>
      </label>
      {Static.record?.gallery?.map((item: objectGallery, key: number) => {
        return (
          <div key={key} class="text block aspect-square">
            <figure class="relative m-0 h-full overflow-hidden [border-bottom:0.5px_solid_#353C50] last:[border-right:0.5px_solid_#353C50] [&:nth-child(1)]:[border-top:0.5px_solid_#353C50] [&:nth-child(3)]:[border-left:0.5px_solid_#353C50]">
              <img
                class="absolute h-auto min-h-full min-w-full bg-[#1D2029] bg-contain bg-no-repeat object-cover"
                src={`/assets/upload/gallery/${item?.name}`}
                alt=""
              />
              <div class="absolute right-[.4375rem] top-[.125rem] z-[2] h-[1.25rem] w-[1.25rem] text-[0]">
                <img
                  onclick={() => {
                    let records = [
                      {
                        name: "Удалить",
                        type: "danger",
                        func: () =>
                          Fn.initOne("modalAccept", {
                            title: "удалить",
                            Callback: async (CallBack: boolean) => {
                              if (CallBack) {
                                const array = [...Static.record?.gallery];
                                array.splice(key, 1);
                                const url = `/api/users/update`;
                                const name = "gallery";
                                Func.delete(url, array, name);
                              }
                            },
                          }),
                      },
                    ];
                    Fn.initOne("modalTools", {
                      records,
                    });
                  }}
                  class="w-[1.25rem] cursor-pointer"
                  src={iconSettings}
                  alt=""
                />
              </div>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
