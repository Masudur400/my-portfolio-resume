import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";


const Contact = () => {
    return (
        <div className="my-10 text-white text-opacity-80">
            <h3 className="text-2xl md:text-3xl font-bold text-center">Contact Me</h3>
            <div data-aos="zoom-in" className=" shadow-md shadow-gray-400 p-3 lg:w-2/5 md:w-3/5 mx-auto mt-8 rounded-md">
                <div>
                    <p className="flex gap-1 md:text-xl items-center"><MdOutlineMail></MdOutlineMail> Email : md8004210@gmail.com
                    </p>
                    <p className="flex gap-1 md:text-xl items-center"><FaPhoneAlt></FaPhoneAlt> Phone : +8801327286000</p>
                    <p className="flex gap-1 md:text-xl items-center"><MdOutlineLocationOn></MdOutlineLocationOn> Address : Kishoregonj, Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;