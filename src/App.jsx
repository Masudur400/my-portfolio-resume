
import './App.css'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import EducationQualification from './components/EducationQualification/EducationQualification'
import Footer from './components/Footer/Footer'
import Projects from './components/Project/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
   <div className='bg-black bg-opacity-90  py-7'>
     <div className='container mx-auto px-3'>
      {/* <h3 className="text-3xl font-bold text-center text-indigo-500 underline mt-3 mb-5">My Portfolio</h3> */}
      <Banner></Banner>
      <div className='md:my-10 my-5'>
        <Skills></Skills>
      </div>
      <Projects></Projects>
      <EducationQualification></EducationQualification>
      <Contact></Contact>
      <Footer></Footer>
    </div>
   </div>
  )
}

export default App
