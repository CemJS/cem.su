import { Cemjsx, Fn, Func, front, Static, Events } from "cemjs-all";
import addMedia from "@svg/profile/addMedia.svg";
import iconSettings from "@svg/profile/iconSettings.svg";
import { objectGallery } from "./interface";
import Video from "@elements/Video";

let answer;
const changeMediaFile = async () => {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = async (_this) => {
    let filesArray = [...input?.files];
    const result = filesArray[0];
    const extension = result?.name.split(".");
    if (extension[extension?.length - 1] == "svg") {
      alert("Недопустимый формат!");
    } else {
      const formData = new FormData();
      formData.append("media", result);
      const options = {
        method: "POST",
        body: formData,
      };
      let mediaPush = await fetch("/upload/gallery", options).then((res) =>
        res.json(),
      );
      console.log("mediaPush", mediaPush?.mimetype);

      const edit = {
        type: mediaPush?.mimetype, // Установить тип в зависимости от MIME-типа файла
        name: mediaPush?.name,
      };
      answer = await front.Services.functions.sendApi(
        "/api/users/gallery/create",
        edit,
      );
      if (answer?.status === 200) {
        Static.record?.gallery.unshift(answer?.result);
      }
    }
    Fn.init();
  };
  input.click();
};
export default function () {
  console.log("Events.user", Events.user);

  return (
    <div class="grid [grid-template-columns:repeat(3,_minmax(100px,_1fr))]">
      {front.Variable.DataUrl[1] === front.Variable.myInfo?.nickname && (
        <label class="block aspect-square cursor-pointer [border:2px_dashed_#c5b8eb]">
          <figure
            class="relative m-0 flex h-full overflow-hidden"
            onclick={changeMediaFile}
          >
            <img
              class="static m-auto h-[auto] min-h-0 w-[25%] min-w-0 border-0 bg-[#1D2029] bg-none bg-contain bg-no-repeat object-cover"
              src={addMedia}
              alt="addMedia"
            />
          </figure>
        </label>
      )}
      {Static.record?.gallery?.map((item: objectGallery, key: number) => {
        return (
          <div key={key} class="text block aspect-square">
            <figure class="relative z-[1] m-0 h-full overflow-hidden [border-bottom:0.5px_solid_#353C50] [border-left:0.5px_solid_#353C50] [&:nth-child(1)]:[border-top:0.5px_solid_#353C50] [&:nth-child(2)]:[border-top:0.5px_solid_#353C50] [&:nth-child(3)]:[border-top:0.5px_solid_#353C50] [&:nth-child(3n+3)]:[border-right:0.5px_solid_#353C50]">
              {item?.type === "video/quicktime" ? (
                <Video src={`/assets/upload/gallery/${item?.name}`} key />
              ) : (
                <img
                  onclick={() => {
                    // let activeIndex = key;
                    Fn.initOne("modalNewGallery", { images: [item?.name] });
                  }}
                  class="absolute h-auto min-h-full min-w-full cursor-pointer bg-[#1D2029] bg-contain bg-no-repeat object-cover"
                  src={`/assets/upload/gallery/${item?.name}`}
                  alt=""
                />
              )}
              {front.Variable.DataUrl[1] ===
                front.Variable.myInfo?.nickname && (
                <div class="absolute right-[.4375rem] top-[.125rem] z-[10] h-[1.25rem] w-[1.25rem] text-[0]">
                  <img
                    onclick={() => {
                      let records = [
                        {
                          name: "Удалить",
                          type: "danger",
                          func: () =>
                            Fn.initOne("modalAccept", {
                              title: "удалить?",
                              Callback: async (CallBack: boolean) => {
                                if (CallBack) {
                                  const array =
                                    Static.record?.gallery.toSpliced(key, 1);
                                  const del =
                                    await front.Services.functions.sendApi(
                                      `/api/users/gallery/${item?.id}/delete`,
                                      {},
                                    );

                                  if (del?.status === 200) {
                                    console.log("true");

                                    Static.record.gallery = array;
                                  }
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
              )}
            </figure>
          </div>
        );
      })}
    </div>
  );
}
