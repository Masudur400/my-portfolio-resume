import { IoSchool } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";


const EducationQualification = () => {
    return (
        <div className="my-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center my-6">Educational Qualifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div data-aos="zoom-in" className="shadow-md p-3 rounded-md shadow-gray-400">
                <h3 className="md:text-2xl text-xl font-bold">Secondary School Certificate</h3>
                <p className="flex gap-2 items-center"><IoSchool className="text-xl my-3"></IoSchool> Aftab Uddin School & College </p>
                <p className="flex gap-2 items-center"><SlCalender className="text-xl my-3"></SlCalender> Year : 2017</p>
            </div>
            <div data-aos="zoom-in" className="shadow-md p-3 rounded-md shadow-gray-400">
                <h3 className="md:text-2xl text-xl font-bold">Higher Secondary Certificate</h3>
                <p className="flex gap-2 items-center"><IoSchool className="text-xl my-3"></IoSchool> Aftab Uddin School & College </p>
                <p className="flex gap-2 items-center"><SlCalender className="text-xl my-3"></SlCalender> Year : 2019-20</p>
            </div>
            <div data-aos="zoom-in" className="shadow-md p-3 rounded-md shadow-gray-400">
                <h3 className="md:text-2xl text-xl font-bold">BBA. Department of Management</h3>
                <p className="flex gap-2 items-center"><IoSchool className="text-xl my-3"></IoSchool>  Mohammadpur Kendriya College </p> 
                <p className="flex gap-2 items-center"><SlCalender className="text-xl my-3"></SlCalender> Year : 2021-present</p>
            </div>
            </div>

        </div>
    );
};

export default EducationQualification;