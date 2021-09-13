import { Navbar } from "./components/Navbar";
import { Header } from './components/Header';
import { Card } from './components/Card.jsx';
import { Footer } from './components/Footer';
import commerce from './assets/commerce.gif';
import calculator from './assets/calculator.gif';
import drumpad from './assets/drumpad.gif';
import pomodoro from './assets/pomodoro.gif';
import quotes from './assets/quotes.gif';
import markdown from './assets/markdown.gif';
function App() {

  return (
    <>
      <div id='about' className="flex flex-col min-h-screen  bg-trasparent  text-white items-center">
        <Navbar />
        <div className="svg-background h-screen w-full fixed"></div>
        <Header />

        <div className="pt-60 w-screen flex flex-col justify-center bg-gradient-to-b from-gray-800 to-green-900 min-h-screen z-10 text-center ">

          <div id='proyectos' className='flex flex-col justify-center items-center min-h-screen '>

            <div className='flex justify-between flex-col mx-2 '>

              <span className='block text-4xl lg:text-6xl mb-12'>Proyectos</span>

              <div id='projects' className='mt-12 mx-2 grid grid-cols-1 md:grid-cols-2  place-content-center content-center gap-6'>
                <Card img={markdown} url={'https://markdown-previewer-g5eb422ou-trefu.vercel.app/'} title='Markdown Previewer' />
                <Card img={commerce} url={'https://e-commerce-react-trefu.vercel.app/'} title='E commerce' />
                <Card img={calculator} url={'https://calculator-5czty34ro-trefu.vercel.app'} title='React calculator' />
                <Card img={pomodoro} url={'https://pomodoro-timer-teal.vercel.app//'} title='Pomodoro timer' />
                <Card img={drumpad} url={'https://drum-machine-idomh2ulo-trefu.vercel.app/'} title='Drumpads' />
                <Card img={quotes} url={'https://random-quotes-generator-ebon.vercel.app/'} title='Random quotes generator' />
              </div>

            </div>

          </div>
          <Footer />
        </div>

      </div>

    </>
  );
}

export default App;
