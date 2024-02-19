import validator from "validator";

export const validEmail = function (email: string) {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
};

export const validNickName = function (nickname: string) {
  if (nickname.length < 5 || nickname.length > 30) {
    return false;
  }

  let beginWithoutDigit = /^\D.*$/.test(nickname);
  let latinChars = /^[a-zA-Z0-9._]/.test(nickname);
  let withoutSpaces = /^\S*$/.test(nickname);
  let points = /^(?!.*\.\.)(?!\.)(?!.*\.$)/.test(nickname);
  let underscore = /^(?!.*\_\_)(?!\_)(?!.*\_$)/.test(nickname);
  let specialChars = /^(?!.*[!@#$%^&(),+=/\/\]\[{}?><":;!№*|])/.test(nickname);
  let dash = /^(?!.*\-\-)(?!\-)(?!.*\-$)/.test(nickname);

  if (!beginWithoutDigit || !latinChars || !withoutSpaces || !points || !underscore || !specialChars || !dash) {
    return false;
  }

  return true;
};

export const validEmailOrNickName = function (emailOrNick: string) {
  if (emailOrNick.length < 5 || emailOrNick.length > 30) {
    return false;
  }

  return true;
}

export const validName = function (name: string) {
  if (name.length < 1) {
    return false;
  }

  let beginWithoutDigit = /^\D.*$/.test(name);
  let withoutSpaces = /^\S*$/.test(name);
  let points = /^(?!.*\.\.)(?!\.)(?!.*\.$)/.test(name);
  let underscore = /^(?!.*\_\_)(?!\_)(?!.*\_$)/.test(name);
  let specialChars = /^(?!.*[!@#$%^&(),+=/\/\]\[{}?><":;!№*|])/.test(name);
  let dash = /^(?!.*\-\-)(?!\-)(?!.*\-$)/.test(name);

  if (!beginWithoutDigit || !withoutSpaces || !points || !underscore || !specialChars || !dash) {
    return false;
  }

  return true;
};

export const validComment = function (comment: string) {
  if (comment.length < 1) {
    return false;
  }

  return true;
};

export const validTelegram = function (comment: string) {
  if (comment.length < 1) {
    return false;
  }

  return true;
};

export const validLogin = function (login: string) {
  let checkEmail = validEmail(login);
  let checkNickName = validNickName(login);
  let regPhone = /[0-9\+]/;

  if (checkEmail || checkNickName || !regPhone.test(login)) {
    return true;
  } else {
    return false;
  }
};

export const validLang = function (lang: string) {
  if (lang.length == 2) {
    return true;
  } else {
    return false;
  }
};

export const validCountry = function (country: string) {
  if (country.length == 2) {
    return true;
  } else {
    return false;
  }
};

export const validPassword = function (password: string) {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 1,
  });

  // if (password.length < 8 || password.length > 15) {
  //     return false
  // }

  // let beginWithoutDigit = /^\D.*$/.test(password)
  // let latinChars = /^[a-zA-Z0-9._]/.test(password)
  // let specialChars = /^(?!.*[!@#$%^&(),+=/\/\]\[{}?><":;!№*|])/.test(password)

  // if (!beginWithoutDigit || !latinChars || !specialChars) {
  //     return false
  // }

  // return true
};

export const validConfirmPassword = function (password: string, rePass: string) {
  if (!password.length && !rePass.length) {
    return false;
  }

  if (password === rePass) {
    return true;
  } else {
    return false;
  }
};
