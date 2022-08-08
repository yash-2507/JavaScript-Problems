const toggler = (arr) => {
   let temp = -1;
   const n = arr.length;
   return function () {
      temp = (temp + 1) % n;
      console.log(arr[temp]);
   };
};

const toggle = toggler([1, 2, 3]);
toggle();
toggle();
toggle();
