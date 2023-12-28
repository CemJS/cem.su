import { v4 as uuidv4 } from 'uuid';

export const strToJson = function (data: string) {
  try {
    return JSON.parse(data)
  } catch (error) {
    return null
  }
}

export const makeUrlEvent = function (url: string, params: any = {}) {
  url = `/api/events/${url}?uuid=${localStorage.uuid}`
  for (let key in params) {
    url += `&${key}=${params[key]}`
  }
  return url
}

export const loader = async function (Variable: any, Fn: any) {

  if (!localStorage.uuid) {
    localStorage.uuid = uuidv4()
  }
  let eventSource = new EventSource(`/api/events/MyInfo?uuid=${localStorage.uuid}`)
  eventSource.addEventListener('update', (answ) => {
    console.log('=5dcbec=', answ)
    if (!answ.data || answ.data == "null") {
      return
    }
    let myInfo = JSON.parse(answ.data)
    Variable.myInfo = Object.assign(Variable.myInfo, myInfo)
  });
  return
}