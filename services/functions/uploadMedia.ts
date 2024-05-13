import { Fn } from "cemjs-all";

export default async function (file: any, type: string, url: string = "posts") {
  let data = new FormData();
  data.append("media", file);

  let errors = {
    video: "видео",
    image: "картинку",
    audio: "аудиозапись",
  };

  try {
    let answer = await fetch(`/upload/${url}`, {
      method: "POST",
      body: data,
    });
    let res = await answer.json();
    return res;
  } catch {
    Fn.initOne("alert", {
      text: `Не удалось загрузить ${errors[type]}`,
      type: "danger",
    });
    return;
  }
}
