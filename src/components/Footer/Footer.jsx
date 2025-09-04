import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="shadow-purple-700 shadow">
            <footer className="footer footer-center border border-base-300 p-10">
                <aside> 
                    <nav>
                        <p className="text-center text-white text-xl font-medium my-4 underline">Socials</p>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com/MD.RANA.MIA.VAI" target="blank"><FaFacebookSquare className="text-4xl text-blue-500"></FaFacebookSquare></a>
                            <a href="https://www.linkedin.com/in/md-masudur-rahman-profile/" target="blank"><FaLinkedin className="text-4xl text-sky-500"></FaLinkedin ></a>
                            <a href="https://github.com/Masudur400" target="blank"><FaGithub className="text-4xl text-gray-400"></FaGithub  ></a>
                        </div>
                    </nav>
                    <p className="text-white">Copyright © ${new Date().getFullYear()} - All right reserved <span className="font-bold text-lg">Masudur Rahman</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;