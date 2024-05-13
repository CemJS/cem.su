export { debounce };
let timeout: any;
function debounce(func: Function, wait: number) {
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
// function debounce(func: Function, wait: number) {
//   return function perform(...args) {
//     let previousCall = this.lastCall

//     this.lastCall = Date.now()

//     if (previousCall && this.lastCall - previousCall <= wait) {
//       clearTimeout(this.lastCallTimer)
//     }

//     this.lastCallTimer = setTimeout(() => func(...args), wait)
//   }
// }
