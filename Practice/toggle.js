const toggler = (arr) => {
   let current = -1;
   const n = arr.length;
   return function () {
      current = (current + 1) % n;
      console.log(arr[current]);
   };
};

const toggle = toggler([1, 2, 3]);
toggle();
toggle();
toggle();
