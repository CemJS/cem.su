import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Form from "./Form";

export default function ({ item }) {
  return (
    <div class="absolute bottom-0 left-0 right-0 z-10 w-full border-t-[1px] border-solid border-[#2d3243] bg-[--backModal] px-[0.625rem]">
      <Form
        key={item.id}
        sendUrl={`/api/posts/${item.id}/comment`}
        show={true}
      />
    </div>
  );
}
