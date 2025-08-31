import project1 from '../../assets/images/project-2.png'
import project2 from '../../assets/images/project-3.png'
import project3 from '../../assets/images/project-4.png'
import project4 from '../../assets/images/brand-tec.png'
import project5 from '../../assets/images/project-5.png'
import project6 from '../../assets/images/project-6.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            img: project6,
            name: 'Ride Booking System',
            liveLink: 'https://client-ride-booking-management-syst.vercel.app/',
            github: 'https://github.com/Masudur400/client-ride-booking-management-system'
        },
        {
            id: 2,
            img: project3,
            name: 'ButterFly (Book Exchange)',
            liveLink: 'https://butterfly-books.vercel.app/',
            github: 'https://github.com/faisal-shohag/Butterfly'
        },
        {
            id: 3,
            img: project4,
            name: 'BrandTec (E-Commerce)',
            liveLink: 'https://brand-tec.web.app/',
            github: 'https://github.com/Masudur400/Brand-tec-client'
        },
        {
            id: 4,
            img: project1,
            name: 'Scholarship Management',
            liveLink: 'https://assignment-twelve-182d9.web.app/',
            github: 'https://github.com/Masudur400/Scholarship-Management-client-as-12'
        },
        {
            id: 5,
            img: project5,
            name: 'NextGen (Service Site)',
            liveLink: 'https://job-portal-18a73.web.app/',
            github: 'https://github.com/Masudur400/job-portal-client'
        },
        {
            id: 6,
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
                    projects.map(project => <div key={project.id} data-aos="zoom-in" className='p-3 rounded-md shadow-purple-500 shadow-md hover:shadow-purple-300'>

                        <img src={project.img} alt="image" className='w-[500px] h-[200px]' />
                        <p className='text-base md:text-xl text-opacity-80 text-white my-2'>  {project.name}</p>
                        <p className=''><a href={project.liveLink} target='blank' className='md:text-xl text-lg text-opacity-80  text-white   hover:text-purple-300'>* Project live link</a></p>
                        <p className=''><a href={project.github} target='blank' className='md:text-xl text-lg text-opacity-80  text-white   hover:text-purple-300'>* Project github link</a></p>

                    </div>)
                }
 
            </div>
        </div>
    );
};

export default Projects;