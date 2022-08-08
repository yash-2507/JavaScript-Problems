function debounce(func, timeout = 1000) {
   let timer;
   return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         func.apply(this, args);
      }, timeout);
   };
}

function saveInput() {
   console.log('Saving data');
}
// processChanges will be called on "onKeyUp" or "onClick" events
const processChanges = debounce(() => saveInput());
