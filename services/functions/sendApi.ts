export const sendApi = async function (
  url: string,
  data: any,
  method = "POST",
) {
  try {
    data.uuid = localStorage.uuid;
    data.suuid = localStorage.suuid;
    url += `?uuid=${localStorage.uuid}`;
    let answer = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("=ba7fbe=", answer);

    let json = await answer.json();
    return json;
  } catch (error) {
    console.log("data", data);

    return { error };
    
  }
  
};
