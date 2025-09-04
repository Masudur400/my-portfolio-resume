import { AllProjects } from "./ProjectData";


const Projects = () => {


    return (
        <div className=''>
            <h3 className="md:text-4xl text-2xl font-medium text-center text-opacity-80 text-white mt-16 mb-10">Projects Overview</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    AllProjects.map(project => <div key={project.id} data-aos="zoom-in" className='p-3 rounded-md shadow-purple-500 shadow-md hover:shadow-purple-300 flex flex-col'>
                        <img src={project.img} alt="image" className='w-[500px] h-[200px]' />
                        <p className='text-base md:text-xl text-opacity-80 text-white my-2'>  {project.name}</p>
                        <div className="flex-grow">
                            {
                                project?.description?.map((point, idx) => <p key={idx} className="text-sm my-2">✅ {point}</p>)
                            }
                        </div>
                        <div className="flex justify-between items-center mt-8 mb-3">
                            <p><a href={project.liveLink} target='blank' className='px-4 py-2 bg-indigo-600 rounded-md hover:cursor-pointer max-sm:text-sm'>View live link</a></p>
                            <p><a href={project.github} target='blank' className='px-4 py-2 bg-indigo-600 rounded-md hover:cursor-pointer max-sm:text-sm'>View github link</a></p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;