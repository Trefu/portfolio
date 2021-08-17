import { Navbar } from "./components/Navbar";
import { Header } from './components/Header'


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-gray-700  text-white items-center z-0">
        <Navbar />


        <Header />


      </div>
    </>
  );
}

export default App;
