import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Form from "./Form";

export default function () {
  return (
    <div class="absolute bottom-0 left-0 right-0 z-10 w-full border-t-[1px] border-solid border-[#2d3243] bg-[--backModal] px-[0.625rem]">
      <Form
        key={Static.id}
        sendUrl={`/api/posts/${Static.id}/comment`}
        show={true}
        scrollBottom={true}
      />
    </div>
  );
}
