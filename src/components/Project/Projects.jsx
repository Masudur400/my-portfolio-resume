import project1 from '../../assets/images/project-2.png'
import project2 from '../../assets/images/project-3.png'
import project3 from '../../assets/images/project-4.png'
import project4 from '../../assets/images/brand-tec.png'

const Projects = () => {
    return (
        <div className='text-opacity-80'>
            <h3 className="md:text-3xl text-2xl font-bold text-center text-white mt-8 mb-10">Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {/* project-1 */}
                <div data-aos="zoom-in" className='shadow-md p-3 rounded-md shadow-gray-400'> 
                    <img src={project3} alt="image" className='w-[500px] h-[200px]' />
                    <p className='text-base md:text-xl text-white my-2'>Name : ButterFly (Book Exchange)</p>
                    <p><a href="https://butterfly-books.vercel.app/" target='blank' className='md:text-xl text-lg   text-white underline'>* Project live link</a></p>
                    <p><a href="https://github.com/faisal-shohag/Butterfly" target='blank' className='md:text-xl text-lg   text-white underline'>* Project github link</a></p> 
                </div>
                
                {/* project-2 */}
                <div data-aos="zoom-in" className='shadow-md p-3 rounded-md shadow-gray-400'> 
                    <img src={project4} alt="image" className='w-[500px] h-[200px]' />
                    <p className='text-base md:text-xl text-white my-2'>Name : BrandTec (E-Commerce)</p>
                    <p><a href="https://brand-tec.web.app/" target='blank' className='md:text-xl text-lg   text-white underline'>* Project live link</a></p>
                    <p><a href="https://github.com/Masudur400/Brand-tec-client" target='blank' className='md:text-xl text-lg   text-white underline'>* Project github link</a></p> 
                </div>
                
                {/* project-3  */}
                <div data-aos="zoom-in" className='shadow-md p-3 rounded-md shadow-gray-400'> 
                    <img src={project1} alt="image" className='w-[500px] h-[200px]' />
                    <p className='text-base md:text-xl text-white my-2'>Name : Scholarship Management</p>
                    <p><a href="https://assignment-twelve-182d9.web.app/" target='blank' className='md:text-xl text-lg   text-white underline'>* Project live link</a></p>
                    <p><a href="https://github.com/Masudur400/Scholarship-Management-client-as-12" target='blank' className='md:text-xl text-lg   text-white underline'>* Project github link</a></p>
                </div>
               
                {/* project-4  */}
                <div data-aos="zoom-in" className='shadow-md p-3 rounded-md shadow-gray-400'> 
                    <img src={project2} alt="image" className='w-[500px] h-[200px]' />
                    <p className='text-base md:text-xl text-white my-2'>Name : Ghorer Bazar (E-Commerce)</p>
                    <p><a href="https://ghorer-bazar.web.app/" target='blank' className='md:text-xl text-lg   text-white underline'>* Project live link</a></p>
                    <p><a href="https://github.com/Masudur400/ghorer-bazar-client" target='blank' className='md:text-xl text-lg   text-white underline'>* Project github link</a></p>
                </div>  
            </div>
        </div>
    );
};

export default Projects;