import { Fn, front } from "cemjs-all";

export const contollers = new Map();
export default async function (
  file: any,
  type: string,
  signal: AbortSignal,
  url: string = "posts",
) {
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
      signal: signal,
    });

    let res = await answer.json();

    return res;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Загрузка отменена");
    } else {
      // ... обработка других ошибок
    }
    return;
  }
  // catch {
  //   Fn.initOne("alert", {
  //     text: `Не удалось загрузить ${errors[type]}`,
  //     type: "danger",
  //   });
  //   return;
  // }

  // вызовите этот метод для отмены загрузки
  // Variable.abort();
}
