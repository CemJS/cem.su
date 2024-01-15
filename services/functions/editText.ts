
const editText = function (text: string, parent: HTMLElement) {
  const rows = text.split(/\r\n|\r|\n/g);

  let result = rows.map((row) => {
    return (
      `<p>${row}</p>`
    )
  })

  parent.innerHTML = `${result.join(" ")}`
}

const searchLink = function (text: string, parent: HTMLElement) {
  let message = text.split(/[ \n]/)
  let RegValue = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/

  for (let i = 0; i <= message.length; i++) {
    console.log('=556419=', message[i])
    if (RegValue.test(message[i])) {
      message[i] = `<a href="${message[i]}" target="_blank">${message[i]}</a>`
    }
    if (message[i] == '') {
      message[i] = `<p></p>`
    }
  }



  console.log('=c0300e=', message)
  parent.innerHTML = `${message.join(" ")}`
}

export { editText, searchLink }