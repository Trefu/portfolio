import { Navbar } from "./components/Navbar";
import { Header } from './components/Header'


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-white  text-white items-center z-0">
        <Navbar />
        <div className="svg-background">
          <Header />
        </div>
        <div className="bg-gray-600 min-h-screen"></div>
      </div>
    </>
  );
}

export default App;
