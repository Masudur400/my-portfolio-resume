
import './App.css';
import Banner from './components/Banner/Banner';
import EducationQualification from './components/EducationQualification/EducationQualification';
import Footer from './components/Footer/Footer';
import Projects from './components/Project/Projects';
import Skills from './components/Skills/Skills';
import bg from './assets/images/bg.gif';
import BlurryCursor from './components/BlurryCursor/BlurryCursor';
import { ContactForm } from './components/Contact/ContactForm';
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="container mx-auto"
    >
      <BlurryCursor></BlurryCursor>
      <div className="container mx-auto px-3 py-7 bg-black bg-opacity-70">
        <Banner />
        <div className="md:my-10 my-5">
          <Skills />
        </div>
        <Projects />
        <EducationQualification />
        <ContactForm></ContactForm>
        <Footer />
      </div>
    </div>
  );
}

export default App;
