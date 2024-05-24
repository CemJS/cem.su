import { Fn, front } from "cemjs-all";

export default async function (
  file: any,
  type: string,
  signal: AbortSignal,
  url: string = "posts",
) {
  let data = new FormData();
  data.append("media", file);

  try {
    let answer = await fetch(`/upload/${url}`, {
      method: "POST",
      body: data,
      signal: signal,
    });

    let res = await answer.json();

    return res;
  } catch (error) {
    return error;
  }

  // вызовите этот метод для отмены загрузки
  // Variable.abort();
}
