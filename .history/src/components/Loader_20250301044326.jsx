import { useEffect, useState } from "react";

function Loader({ delay = 2000 }) {
  const [loading, setIsloading] = useState(true);

  useEffect(
    function () {
      const timer = setTimeout(() => {
        setIsloading(false);
      }, delay);
      return clearTimeout(timer);
    },
    [delay]
  );

  return loading ? (
    <div className="bg:backdrop-blur bg-black/50 absolute top-0 left-0 w-full min-h-full  blur-[2px]  bg-opacity-70 z-50 flex justify-center items-center ">
      <h1 className="font-bold text-3xl text-blue-400  ">Loading...</h1>
    </div>
  ) : null;
}

export default Loader;
