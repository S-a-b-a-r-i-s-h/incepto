import React from "react";

const Button = () => {
    // focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
    // bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]

// background-color: #182b3a;
// background-image: linear-gradient(315deg, #182b3a 0%, #20a4f3 74%);
// bg-[linear-gradient(110deg,#182b3a,45%,#20a4f3,55%,#000103)]

  return (
    <button className="inline-flex hover:scale-[1.02] h-12 animate-shimmer items-center justify-center rounded-md border m-6 border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[length:200%_100%] px-6 font-medium text-zinc-400 transition-colors focus:outline-none">
      Register
    </button>
  );
};

export default Button;

  
        