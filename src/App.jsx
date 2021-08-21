import { Navbar } from "./components/Navbar";
import { Header } from './components/Header';
import { GradientText } from './components/GradientTitle';
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-red-200  text-white items-center">
        <Navbar />
        <div className="svg-background h-screen w-full fixed"></div>

        <Header />

        <div className="flex flex-col justify-center bg-gradient-to-b from-gray-800 to-green-900 min-h-screen w-screen z-10 text-center">
          <div id='proyectos' className='flex flex-col justify-center items-center min-h-screen bg-cover bg-right md:bg-center bg-hero bg-opacity-50'>
            <GradientText title={'Proyectos'} />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
