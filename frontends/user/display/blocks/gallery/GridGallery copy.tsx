import { Cemjsx, Fn, Func, front, Static, Events, Ref } from "cemjs-all";
import addMedia from "@svg/profile/addMedia.svg";
import iconSettings from "@svg/profile/iconSettings.svg";
import { objectGallery } from "./interface";
import Video from "@elements/Video";
import GallerySkeleton from "@elements/skeletonLoading/user/GallerySkeleton";

let answer;
let mediaLoading = false;
let abortController; // Добавляем переменную для контроллера

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
      abortController = new AbortController(); // Создаем новый экземпляр AbortController
      const options = {
        method: "POST",
        body: formData,
        signal: abortController.signal, // Добавляем сигнал в опции запроса
      };
      mediaLoading = true;
      try {
        let mediaPush = await fetch("/upload/gallery", options).then((res) =>
          res.json(),
        );
        if (mediaPush) {
          mediaLoading = false;
        }
        console.log("mediaPush", mediaPush);

        const edit = {
          type: mediaPush?.mimetype,
          name: mediaPush?.name,
        };
        answer = await front.Services.functions.sendApi(
          "/api/users/gallery/create",
          edit,
        );
        if (answer?.status === 200) {
          Static.record?.gallery.unshift(answer?.result);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Загрузка отменена');
        } else {
          console.error('Произошла ошибка при загрузке', error);
        }
      }
      Fn.init();
    }
  };
  input.click();
};

// Функция для отмены загрузки
const cancelUpload = () => {
  if (mediaLoading && abortController) {
    abortController.abort(); // Отменяем запрос
    mediaLoading = false;
  }
};

const RenderStopLoading = () => {
  return (
    <div
      id="stop_loading"
      // onclick={cancelUpload}
      class="z-[2] h-6 w-6 cursor-pointer rounded-[4px] bg-white"
    ></div>
  );
};

const RenderLoader = () => {
  return (
    <div
      id="loader"
      class="relative flex h-[70px] w-[70px] items-center justify-center rounded-full"
    >
      <div id="circle">
        <div
          init={(e) => {
            setTimeout(() => {
              Ref[`full`].style.transform = "rotate(360deg)";
            }, 100);
          }}
          id="full"
          ref={`full`}
          class="absolute left-0 top-0 h-full w-full rounded-full [clip:rect(0px,70px,70px,35px)] [transform:rotate(180deg)] [transition:1s]"
        >
          <div class="absolute left-0 top-0 h-full w-full rounded-full [background:radial-gradient(rgba(0,0,0,0)_57%,#F8F8F8_60%)] [transform:rotate(0deg)] [transition:1s]"></div>
        </div>
        <div
          init={(e) => {
            setTimeout(() => {
              Ref[`half`].style.opacity = "1";
              Ref[`half`].style.transform = "rotate(180deg)";
            }, 1000);
          }}
          id="half"
          ref={`half`}
          class="absolute left-0 top-0 h-full w-full rounded-full opacity-0 [clip:rect(0px,70px,70px,35px)] [transform:rotate(0deg)] ![transition-delay:0.5s] [transition:transform_1s]"
        >
          <div class="absolute left-0 top-0 h-full w-full rounded-full [background:radial-gradient(rgba(0,0,0,0)_57%,#F8F8F8_60%)] [transform:rotate(0deg)] [transition:1s]"></div>
        </div>
      </div>
      <RenderStopLoading />
    </div>
  );
};
export default function () {
  if (Static.record?.gallery && Static.nameCategory === "gallery") {
    Func.activeBlocksProfile();
  } else Static.showComp = false;

  return (
    <div class="grid [grid-template-columns:repeat(3,_minmax(100px,_1fr))]">
      {front.Variable.DataUrl[1] === front.Variable.myInfo?.nickname && (
        <label class="flex aspect-square cursor-pointer items-center justify-center [border:2px_dashed_#c5b8eb]">
          {!Static.mediaLoading ? (
            <figure
              class="relative m-0 flex h-full w-full items-center justify-center overflow-hidden"
              onclick={changeMediaFile}
            >
              <img
                class="static h-[auto] max-h-full w-[25%] max-w-full border-0 bg-[#1D2029] bg-none bg-contain bg-no-repeat object-cover"
                src={addMedia}
                alt="addMedia"
              />
            </figure>
          ) : (
            <div>
              <RenderLoader />
            </div>
          )}
        </label>
      )}

      {Static.showComp
        ? Static.record?.gallery?.map((item: objectGallery, key: number) => {
            return (
              <div
                key={key}
                class="text block aspect-square last:[border-right:0.5px_solid_#353C50]"
              >
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
                              name: front.Variable?.words?.tools?.delete,
                              type: "danger",
                              func: () =>
                                Fn.initOne("modalAccept", {
                                  title: "удалить?",
                                  Callback: async (CallBack: boolean) => {
                                    if (CallBack) {
                                      const array =
                                        Static.record?.gallery.toSpliced(
                                          key,
                                          1,
                                        );
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
                        alt="iconSettings"
                      />
                    </div>
                  )}
                </figure>
              </div>
            );
          })
        : Array.from({ length: 6 }, (_, index) => (
            <GallerySkeleton key={index} />
          ))}
    </div>
  );
}
