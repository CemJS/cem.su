import { Cemjsx, Static, Fn, front } from "cemjs-all";

const HeaderBack = function ({ title }) {
  return (
    <div class="fixed left-0 right-0 top-0 z-[5] w-full border-b-[1px] border-solid border-[#2d3243] bg-[#1d2029] py-3">
      <div class="wrapper">
        <div class="flex items-center justify-between">
          <span
            class="flex cursor-pointer items-center justify-center"
            onclick={() => {
              Static.record = null;
              Fn.linkChange("/news");
            }}
          >
            <i class="i i-chevron-left text-2xl"></i>
          </span>

          <h5 class="line-clamp-1 px-4 text-center text-base font-medium @700:text-xl">
            {title}
          </h5>

          <span
            class="relative w-8 cursor-pointer after:absolute after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%] after:text-5xl after:content-['...']"
            onclick={() =>
              Fn.initOne("modalTools", {
                records: [
                  {
                    name: `${front.Variable.words?.tools?.copy} URL`
                  },
                  {
                    name: front.Variable.words?.tools?.share
                  }
                ],
              })
            }
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
        <h1 class="mb-4 text-center text-lg font-medium @700:text-xl">
          {Static.record?.title}
        </h1>

        <div class="mt-4 text-base @700:text-lg">
          <div class="float-left mb-5 ml-0 mr-5 mt-0 max-h-max w-full @600:w-2/4">
            <img
              class="w-full rounded-2xl"
              src={`/assets/upload/news/${Static.record?.mediaName}`}
              alt={Static.record?.title}
            />
          </div>
          <p>{Static.record?.preview}</p>
          <div
            class=" mt-4"
            init={($el) => {
              // this.Services.functions.editText(Static.record?.text, $el)
              this.Services.functions.searchLink(Static.record?.text, $el);
            }}
          ></div>
        </div>
      </div>
      <div class="mt-4 flex w-full items-center justify-between px-4 text-[#909cbf]">
        <div class="new-statistic__el">
          {front.Services.functions.timeStampToDate(
            Static.record?.dateCreate,
            ".",
          )}
        </div>
        <div class="flex items-center gap-1">
          <i class="i i-eye"></i>
        </div>
        <div class="flex items-center gap-1">
          <i class="i i-comment"></i>
          {Static.record?.statistics?.comments}
        </div>
      </div>
    </div>
  );
}
