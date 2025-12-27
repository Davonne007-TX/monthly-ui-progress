import "./App.css";
import React, { Suspense, useEffect, useState } from "react";

const January = React.lazy(() => import("./components/January"));
import KeepGoing from "./components/KeepGoing";
const February = React.lazy(() => import("./components/February"));
const Spring = React.lazy(() => import("./components/Spring"));
const July = React.lazy(() => import("./components/July"));
const EndOfTheYear = React.lazy(() => import("./components/EndOfTheYear"));
function LoadingMagic() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black ">
      <span className="text-white font-press text-3xl tracking-widen">...</span>
    </div>
  );
}

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <span className="text-white text-3xl font-press tracking-wide">
          Loading Projects…
        </span>
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-right text-white text-2xl md:text-5xl text-center mt-6">
        Davonne's 2025 <br />
        UI React & Tailwind CSS Projects
      </h1>
      <Suspense fallback={<LoadingMagic />}>
        <January />
      </Suspense>

      <KeepGoing
        motivationTxt="BUILDING"
        backgroundColor=" bg-gradient-to-br from-white to-pink-300"
      />

      <Suspense fallback={<LoadingMagic />}>
        <February />
      </Suspense>

      <KeepGoing
        motivationTxt="GROWING"
        backgroundColor=" bg-gradient-to-br from-white to-purple-600"
      />

      <Suspense fallback={<LoadingMagic />}>
        <Spring />
      </Suspense>

      <KeepGoing
        motivationTxt="Finishing Strong"
        backgroundColor=" bg-gradient-to-br from-white to-green-600"
      />

      <Suspense fallback={<LoadingMagic />}>
        <July />
      </Suspense>

      <Suspense fallback={<LoadingMagic />}>
        <EndOfTheYear />
      </Suspense>

      <KeepGoing
        motivationTxt="Thank You For Visiting"
        backgroundColor="bg-gradient-to-br from-white to-pink-600"
      />
    </main>
  );
}

export default App;
