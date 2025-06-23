import { useEffect, useState } from "react";

function Loader({ delay = 2000 }) {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/10">
      <div className="px-8 py-4 rounded-xl bg-gray/20 border border-white/30 shadow-lg backdrop-blur-lg">
        <h1 className="font-bold text-3xl text-blue-500">Loading...</h1>
      </div>
    </div>
  );
}

export default Loader;
