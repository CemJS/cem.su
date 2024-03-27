import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";

export default function () {
  return (
    <div class="relative h-[7.1875rem] max-[1720px]:h-auto">
      <div class="relative bottom-auto left-[50%] ml-0 flex translate-x-[-50%] flex-row flex-wrap items-center justify-center text-center max-[1720px]:mb-[.625rem] max-[1720px]:mt-[2.0625rem] @1720:absolute @1720:bottom-[1.375rem] @1720:ml-[-.9375rem]">
        <a class=""></a>
        <a class="inline-block h-[2.5625rem] w-[2.5625rem] rounded-[50%] p-[.125rem] [background:linear-gradient(45deg,_rgb(59,_173,_227)_0px,_rgb(87,_111,_230)_45%,_rgb(152,_68,_183)_57%,_rgb(255,_53,_127)_70%)]">
          {Static.record?.country?.code && (
            <img
              class="relative left-0 top-[.1875rem] h-full w-full translate-y-[-.1875rem]"
              src={[`/contents/svg/flags/${Static.record?.country?.code}.svg`]}
            />
          )}
        </a>
        <input
          id="username"
          class="h-[1.75rem] w-[15.625rem] cursor-pointer border-0 bg-transparent p-0 text-center text-[1.5625rem] font-medium leading-[1.125rem] text-[--white] [outline:none]"
          readonly="true"
          value={Static.record?.nickname ? Static.record?.nickname : ""}
        ></input>
        <a
          href="#"
          class="inline-block h-[2.25rem] w-[2.5625rem] !bg-cover !bg-no-repeat text-[.5625rem] font-semibold leading-[1.75rem] text-[--gray-active] [background:url('/contents/svg/heart.svg')] [text-decoration:none]"
        >
          {Static.record?.statistics?.rating.toFixed(2) || 0}
        </a>
        <p></p>
        {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] ? (
          <input
            style="text-align: center;"
            maxLength="32"
            value={
              Static.record?.status === undefined ? "" : Static.record?.status
            }
            oninput={(event: any) => {
              Static.record.status = event.target.value;
              //   Fn.log("Static.record.status", Static.record.status);
            }}
            onKeyDown={async (event: any) => {
              if (event.key === "Enter" && !event.shiftKey) {
                const edit = {
                  action: "update",
                  information: {
                    status: Static.record?.status,
                  },
                  uuid: `${localStorage?.uuid}`,
                };
                let res = await front.Services.functions.sendApi(
                  "/api/MyInfo",
                  edit,
                );
              }
            }}
            class="flex min-h-[1.75rem] basis-full cursor-pointer items-center justify-center rounded-[.3125rem] border-0 px-[.25rem] my-[.3125rem] font-[.8125rem] leading-[1.125rem] text-[#bbc2d1] [outline:none] [background:0_0] [transition:0.4s] hover:bg-[#3d4252]"
            id="userstatus"
            contenteditable="true"
          >
            {Static.record?.status}
          </input>
        ) : (
          <div
            class="flex min-h-[1.75rem] basis-full cursor-pointer items-center justify-center rounded-[.3125rem] border-0 px-[.25rem] my-[.3125rem] font-[.8125rem] leading-[1.125rem] text-[#bbc2d1] [outline:none] [background:0_0] [transition:0.4s] hover:bg-[#3d4252]"
            id="userstatus"
          >
            {Static.record?.status}
          </div>
        )}
      </div>
      <div class="absolute bottom-0 left-[.4375rem] h-[.375rem] w-[calc(100%_-_14px)] bg-[#514591]">
        <div
          style={`width: ${((Static.record?.statistics?.exp / Static.record?.statistics?.expNext) * 100).toFixed(2)}%;`}
          class="absolute h-full top-0 left-0 bg-[#C126CE]"
        />
        <div class="absolute top-0 h-full w-full text-[.3125rem] text-center z-[100] hidden"></div>
      </div>
    </div>
  );
}
