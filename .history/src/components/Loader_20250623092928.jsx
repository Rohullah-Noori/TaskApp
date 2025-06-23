import { useEffect, useState } from "react";

function Loader({ delay = 2000 }) {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // اصلاح اینجا
  }, [delay]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
      <h1 className="font-bold text-3xl text-blue-400">Loading...</h1>
    </div>
  );
}

export default Loader;
