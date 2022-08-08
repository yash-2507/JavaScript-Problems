const toggler = (...args) => {
   if(typeof args[0] === "object") {
      args = args[0]
   }
   let temp = -1;
   const n = args.length;
   return function () {
      temp = (temp + 1) % n;
      console.log(args[temp]);
   };
};

const toggle = toggler(1, 2, 3);
toggle();
toggle();
toggle();
