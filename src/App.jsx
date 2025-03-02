import "./App.css";
import January from "./components/january/January";
import KeepGoing from "./components/KeepGoing";
import February from "./components/february/February";

function App() {
  return (
    <>
      <main className="bg-black min-h-screen">
        <January />
        <KeepGoing />
        <February />
      </main>
    </>
  );
}

export default App;
