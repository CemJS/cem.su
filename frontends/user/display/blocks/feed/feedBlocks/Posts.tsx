import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import { Post as PostType } from "types/post.type";
import Post from "@elements/post/Post";
import GallerySkeleton from "@elements/skeletonLoading/user/GallerySkeleton";

export default function () {
  if (Static.posts && Static.nameCategory === "feed") {
    Func.activeBlocksProfile();
  } else {
    Static.showComp = false;
  }

  Static.posts = Static.record?.posts;

  return (
    <div>
      {Static.showComp
        ? Static.posts?.map((item: PostType, index: number) => {
            return (
              <Post
                item={item}
                index={index}
                skipUrl={`/api/users/${Static.record?.nickname}/profile`}
                skipObject={{ category: "feed" }}
                avatar={{
                  id: Static.record?.id,
                  avatarName: Static.record?.avatar?.name,
                  frameName: Static.record?.frame?.name,
                  level: Static.record?.statistics?.level,
                  online: Static.record?.online,
                }}
              />
            );
          })
        : Array.from({ length: 9 }, (_, index) => (
            <GallerySkeleton key={index} />
          ))}
    </div>
  );
}
