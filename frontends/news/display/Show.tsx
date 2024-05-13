import { Cemjsx, Static, Fn, front } from "cemjs-all";

const HeaderBack = function ({ title }) {
  return (
    <div class="fixed z-[5] py-3 top-0 left-0 right-0 border-b-[1px] border-solid border-[#2d3243] w-full bg-[#1d2029]">
      <div class="wrapper">
        <div class="flex justify-between items-center">
          <span
            class="cursor-pointer flex justify-center items-center"
            onclick={() => {
              Static.record = null;
              Fn.linkChange("/news");
            }}
          >
            <i class="i i-chevron-left text-2xl"></i>
          </span>

          <h5 class="@700:text-xl text-center px-4 line-clamp-1 font-medium text-base">{title}</h5>

          <span
            class="relative cursor-pointer w-8 after:content-['...'] after:absolute after:text-5xl after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%]"
            onclick={() => Fn.initOne("modalTools", {
              records: [
                {
                  name: "Скопировать URL"
                },
                {
                  name: "Поделиться"
                }
              ]
            })}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default function () {
  return (
    <div>
      <HeaderBack title={Static.record?.title} />
      <div class="mt-[65px]">
        <h1 class="text-center text-lg @700:text-xl mb-4 font-medium">{Static.record?.title}</h1>

        <div class="mt-4 text-base @700:text-lg">
          <div class="w-full @600:w-2/4 float-left max-h-max mt-0 mr-5 mb-5 ml-0">
            <img
              class="w-full rounded-2xl"
              src={`/assets/upload/news/${Static.record?.mediaName}`}
              alt={Static.record?.title}
            />
          </div>
          <p >{Static.record?.preview}</p>
          <div
            class=" mt-4"
            init={($el) => {
              // this.Services.functions.editText(Static.record?.text, $el)
              this.Services.functions.searchLink(Static.record?.text, $el);
            }}
          ></div>
        </div>

      </div>
      <div class="mt-4 flex items-center justify-between text-[#909cbf] w-full">
        <div class="new-statistic__el">
          {front.Services.functions.timeStampToDate(
            Static.record?.dateCreate,
            ".",
          )}
        </div>
        <div class="flex items-center gap-1">
          <i class="i i-eye"></i>
          {/* {Static.record.statistics?.rating} */}
        </div>
        <div class="flex items-center gap-1">
          <i class="i i-comment"></i>
          {Static.record?.statistics?.comments}
        </div>
      </div>
    </div>
  );
}
