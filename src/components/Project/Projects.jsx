 import project1 from '../../assets/images/project-2.png'

const Projects = () => {
    return (
        <div >
            <h3 className="md:text-5xl text-3xl font-bold text-center text-white mt-8 mb-10">Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {/* project-1  */}
            <div data-aos="zoom-in" className='shadow-md p-3 rounded-md shadow-gray-400'>
                <img src={project1} alt="" />
               <p><a href="https://assignment-twelve-182d9.web.app/" target='blank' className='md:text-2xl text-lg font-bold text-white underline'>* Project live link</a></p>
                <p><a href="https://github.com/Masudur400/Scholarship-Management-client-as-12" target='blank' className='md:text-2xl text-lg font-bold text-white underline'>* Project github link</a></p>
            </div>
        </div>
        </div>
    );
};

export default Projects;