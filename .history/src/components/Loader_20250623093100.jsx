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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="px-10 py-6 rounded-xl bg-white/10 border border-white/30 backdrop-blur-lg shadow-lg">
        <h1 className="font-bold text-3xl text-blue-300">Loading...</h1>
      </div>
    </div>
  );
}

export default Loader;
