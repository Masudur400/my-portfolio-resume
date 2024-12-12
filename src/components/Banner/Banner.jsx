import { LuDownload } from 'react-icons/lu';
import img1 from '../../assets/images/image-3.png'
import img2 from '../../assets/images/personal-img.jpg'
const Banner = () => {
    return (
        <div className="avg w-full max-sm:h-[680px]">
            <div className='bg-black bg-opacity-80 h-full py-10'>
                <div className='md:flex gap-9 items-center '>
                    <img src={img2} alt="" data-aos="zoom-in" className='h-72 w-72 border-2 rounded-full lg:ml-20 md:ml-10 mx-1 md:mt-8' />
                    <div className='text-white text-opacity-80 opacity-90 max-sm:ml-4 lg:w-3/6 md:w-2/4 mt-3' data-aos="zoom-in">
                        <p className='lg:text-3xl md:text-2xl text-xl font-bold'>Hi !</p>
                        <p className='lg:text-4xl md:text-3xl text-2xl font-bold lg:ml-12 md:ml-12 mb-3'>I am <span className='text-indigo-500'>Masudur Rahman</span></p> 
                        <p>Aspiring web developer with a solid foundation in front-end and back-end technologies, eager to contribute skills in building
                            dynamic and user-friendly websites. Committed to continuous learning, collaboration, and a proactive approach to mastering
                            new technologies.</p>

                        <a href="https://drive.google.com/file/d/1FerpDVAKFhroVg9YTCStKdZZ233muucb/view?usp=sharing" target='blank' className='text-white w-fit bg-indigo-500 px-4 py-2 rounded-md mt-3 flex gap-1 justify-center items-center'><LuDownload></LuDownload> Download Resume</a>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;