import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        <Header />

        <main className="mt-16 space-y-20">
          <Skills />
          <Projects />
          <Experiences />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
