import "./App.css";
import React, { Suspense } from "react";

const January = React.lazy(() => import("./components/January"));
const KeepGoing = React.lazy(() => import("./components/KeepGoing"));
const February = React.lazy(() => import("./components/February"));
const March = React.lazy(() => import("./components/March"));
const April = React.lazy(() => import("./components/April"));
const May = React.lazy(() => import("./components/May"));
const July = React.lazy(() => import("./components/July"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="text-white bg-black min-h-screen flex-col justify-center items-center font-bold text-4xl">
          Loading...
        </div>
      }
    >
      <main className="bg-black min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-press text-white text-2xl md:text-4xl text-center mt-6">
          Davonne's 2025 UI Projects
        </h1>
        <January />
        <KeepGoing
          motivationTxt="BUILDING"
          backgroundColor="bg-linear-65 from-white to-pink-300"
        />

        <February />
        <KeepGoing
          motivationTxt="LEARNING"
          backgroundColor="bg-linear-65 from-white to-purple-600"
        />
        <March />

        <April />
        <KeepGoing
          motivationTxt="CREATING"
          backgroundColor="bg-linear-65 from-white to-blue-500"
        />
        <May />
        <KeepGoing
          motivationTxt="GROWING"
          backgroundColor="bg-linear-65 from-white to-green-500"
        />
        <July />
        <KeepGoing
          motivationTxt="Thank You For Visiting"
          backgroundColor="bg-linear-65 from-white to-pink-600"
        />
      </main>
    </Suspense>
  );
}

export default App;
