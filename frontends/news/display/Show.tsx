import { Cemjsx, Static, Fn, front } from "cemjs-all";

const HeaderBack = function ({ title }) {
  return (
    <div class="fixed z-[5] p-[0.5rem_0] top-0 left-0 right-0 border-b-[1px] border-solid border-[#2d3243] w-full bg-[#1d2029]">
      <div class="wrapper">
        <div class="flex justify-between items-center">
          <span
            class="cursor-pointer flex justify-center items-center"
            onclick={() => {
              Static.record = null;
              Fn.linkChange("/news");
            }}
          >
            <i class="i i-arrow-left text-2xl"></i>
          </span>

          <h5 class="text-xl text-center px-4 line-clamp-1 font-medium">{title}</h5>

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
  Fn.log(Static.record)
  return (
    <div>
      <HeaderBack title={Static.record?.title} />
      <div class="mt-50 new">
        <h1 class="new-title">{Static.record?.title}</h1>

        <div class="new-content">
          <div class="new-img">
            <img
              src={`/assets/upload/news/${Static.record?.image}`}
              alt={Static.record?.title}
            />
          </div>
          <p class="new-preview">{Static.record?.preview}</p>
          <div
            class="new-content__text"
            init={($el) => {
              // this.Services.functions.editText(Static.record?.text, $el)
              // this.Services.functions.searchLink(Static.record?.text, $el);
            }}
          ></div>
        </div>

        <div class="new-statistic mt-[15px]">
          <div class="new-statistic__el">
            {front.Services.functions.timeStampToDate(
              Static.record?.dateCreate,
              ".",
            )}
          </div>
          <div class="new-statistic__el">
            <i class="i i-eye"></i>
            {/* {Static.record.statistic?.rating} */}
          </div>
          <div class="new-statistic__el">
            <i class="i i-comment"></i>
            {Static.record?.statistics?.comments}
          </div>
        </div>
      </div>
    </div>
  );
}
