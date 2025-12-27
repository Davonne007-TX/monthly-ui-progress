import "./App.css";
import React, { Suspense } from "react";
import EndOdTheYear from "./components/EndOfTheYear";

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
        <h1 className="font-right text-white text-2xl md:text-5xl text-center mt-6">
          Davonne's 2025 <br />
          UI React & Tailwind CSS Projects
        </h1>
        <January />
        <KeepGoing
          motivationTxt="BUILDING"
          backgroundColor="bg-linear-65 from-white to-pink-300"
        />

        <February />
        <KeepGoing
          motivationTxt="GROWING"
          backgroundColor="bg-linear-65 from-white to-purple-600"
        />
        <March />
        <April />

        <May />
        <KeepGoing
          motivationTxt="Finishing Strong"
          backgroundColor="bg-linear-65 from-white to-green-600"
        />
        <July />

        <EndOdTheYear />
        <KeepGoing
          motivationTxt="Thank You For Visiting"
          backgroundColor="bg-linear-65 from-white to-pink-600"
        />
      </main>
    </Suspense>
  );
}

export default App;
