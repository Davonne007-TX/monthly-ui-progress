import "./App.css";
import January from "./components/january/January";
import KeepGoing from "./components/KeepGoing";
import February from "./components/february/February";

function App() {
  return (
    <>
      <main className="bg-black min-h-screen flex flex-col justify-center items-center">
        <January />
        <KeepGoing
          motivationTxt="Keep Going"
          backgroundColor="bg-linear-65 from-white to-pink-400"
        />
        <February />
        <KeepGoing
          motivationTxt="Quieres Mas"
          backgroundColor="bg-linear-65 from-white to-purple-600"
        />
      </main>
    </>
  );
}

export default App;
