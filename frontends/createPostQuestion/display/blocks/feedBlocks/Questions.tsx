import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import { Post as PostType } from "types/post.type";
import Question from "@elements/question/QuestionOne";

export default function () {
  return (
    <div class="flex w-full flex-wrap gap-3">
      {Static.questions?.map((item: PostType, key: number) => {
        return <Question item={item} index={key} skipUrl="/api/me/questions" />;
      })}
    </div>
  );
}
