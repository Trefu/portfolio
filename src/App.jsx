import { Navbar } from "./components/Navbar";
import { Header } from './components/Header';
import { GradientText } from './components/GradientTitle';
import { Card } from './components/Card.jsx'
import calculator from './assets/calculator.jpg'
import drumpad from './assets/drumpad.jpg'
import pomodoro from './assets/pomodoro.jpg'
import quotes from './assets/quotes.jpg'
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen  bg-trasparent  text-white items-center">
        <Navbar />
        <div className="svg-background h-screen w-full fixed"></div>

        <Header />

        <div className=" pt-60 w-screen flex flex-col justify-center bg-gradient-to-b from-gray-800 to-green-900 min-h-screen z-10 text-center">

          <div id='proyectos' className='flex flex-col justify-center items-center min-h-screen bg-cover bg-right md:bg-center bg-hero bg-opacity-50'>

            <div className='flex justify-between flex-col container mx-auto'>

              <GradientText title={'Proyectos'} />
              <div className='flex flex-col md:flex-row flex-wrap justify-between items-center'>
                <Card img={calculator} />
                <Card img={pomodoro} />
                <Card img={quotes} />
                <Card img={drumpad} />
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
