import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

 
const Skills = () => {
    return (
        <div className="text-white">
             <h3 className="md:text-5xl text-3xl font-bold text-center">Skills</h3>
             <div data-aos="zoom-in" className="my-6 flex gap-2 justify-center items-center px-3">
                <p><FaReact className="text-sky-500 text-2xl md:text-6xl"></FaReact></p>
                <p><RiTailwindCssFill className="text-sky-500 text-2xl md:text-6xl"></RiTailwindCssFill></p>
                <p><IoLogoCss3 className="text-indigo-500 text-2xl md:text-6xl"></IoLogoCss3 ></p>
                <p><SiJavascript className="text-yellow-500 text-2xl md:text-6xl"></SiJavascript></p>
                <p><IoLogoHtml5 className="text-orange-500 text-2xl md:text-6xl"></IoLogoHtml5></p>
                <p><FaNode className="text-green-500 text-2xl md:text-6xl"></FaNode></p>
                <p><SiExpress className="text-white text-2xl md:text-6xl"></SiExpress></p>
                <p><SiMongodb className="text-green-500 text-2xl md:text-6xl"></SiMongodb ></p>
             </div>
        </div>
    );
};

export default Skills;