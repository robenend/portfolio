import Certification from './components/certification';
import Hero from './components/hero';
import HeroForm from './components/hero-form';
import { Navbar } from './components/navbar';
import Project from './components/project';
import Skill from './components/skill';
import Testimony from './components/testimony';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroForm />
      <Certification />
      <Testimony />
      <Project />
      <Skill />
    </>
  );
}

export default App;
