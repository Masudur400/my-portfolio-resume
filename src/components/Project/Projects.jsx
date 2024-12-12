import project1 from '../../assets/images/project-2.png'
import project2 from '../../assets/images/project-3.png'
import project3 from '../../assets/images/project-4.png'
import project4 from '../../assets/images/brand-tec.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            img: project3,
            name: 'ButterFly (Book Exchange)',
            liveLink: 'https://butterfly-books.vercel.app/',
            github: 'https://github.com/faisal-shohag/Butterfly'
        },
        {
            id: 2,
            img: project4,
            name: 'BrandTec (E-Commerce)',
            liveLink: 'https://brand-tec.web.app/',
            github: 'https://github.com/Masudur400/Brand-tec-client'
        },
        {
            id: 3,
            img: project1,
            name: 'Scholarship Management',
            liveLink: 'https://assignment-twelve-182d9.web.app/',
            github: 'https://github.com/Masudur400/Scholarship-Management-client-as-12'
        },
        {
            id: 4,
            img: project2,
            name: 'Ghorer Bazar (E-Commerce)',
            liveLink: 'https://ghorer-bazar.web.app/',
            github: 'https://github.com/Masudur400/ghorer-bazar-client'
        },
    ]

    return (
        <div className=''>
            <h3 className="md:text-4xl text-2xl font-medium text-center text-opacity-80 text-white mt-10 mb-10">Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    projects.map(project => <div key={project.id} data-aos="zoom-in" className='shadow-md p-3 rounded-md shadow-gray-400'>

                        <img src={project.img} alt="image" className='w-[500px] h-[200px]' />
                        <p className='text-base md:text-xl text-opacity-80 text-white my-2'>Name : {project.name}</p>
                        <p className=''><a href={project.liveLink} target='blank' className='md:text-xl text-lg text-opacity-80  text-white underline hover:text-red-300'>* Project live link</a></p>
                        <p className=''><a href={project.github} target='blank' className='md:text-xl text-lg text-opacity-80  text-white underline hover:text-red-300'>* Project github link</a></p>

                    </div>)
                }
 
            </div>
        </div>
    );
};

export default Projects;