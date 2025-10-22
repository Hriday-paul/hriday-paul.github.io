import school from '@/images/school.jpeg'
import polytecnic from '@/images/politechnic.jpeg'
import university_logo from '@/images/university_logo.png'
import Image from "next/image";
import DiplomaShort from '@/Components/Ui/DiplomaShort/DiplomaShort';

const Education = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-16 z-30 pb-28" id='education'>
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-24 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Education</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">My all education information is here.</p>
                </div>
                <div className="mx-auto space-y-8">
                    <div data-aos="fade-up" className="bg-white/5 border border-[#174d63] w-[350px] md:w-[440px] lg:w-[480px] mx-auto p-5 rounded-lg shadow-xl shadow-[#0d161a]">
                        <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4">
                            <Image
                             className="rounded-lg h-12 w-auto md:h-16" src={university_logo} alt="polytechnic logo" />
                            <div>
                                <h3 className="text-base md:text-lg lg:text-xl font-popins font-bold text-gray-300">World University Of Bangladesh</h3>
                                <p className="text-sm md:text-base lg:text-lg font-bold font-popins text-gray-400">Computer Science & Engineering</p>
                                <p className="text-xs  font-bold font-popins text-gray-400">July 2025 - February 2029</p>
                            </div>
                        </div>
                        {/* <h4 className="text-sm font-popins font-bold text-gray-400 mt-2">Running...</h4> */}
                        <div className="text-sm text-gray-300 font-mono  mt-5">{"I'm currently studying BSC in Computer Science & Engineering. Here I'm learning data structures, algorithms, object-oriented"} <DiplomaShort /></div>
                    </div>
                    <div data-aos="fade-up" className="bg-white/5 border border-[#174d63] w-[350px] md:w-[440px] lg:w-[480px] mx-auto p-5 rounded-lg shadow-xl shadow-[#0d161a]">
                        <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4">
                            <Image
                             className="rounded-lg h-12 w-auto md:h-16" src={polytecnic} alt="polytechnic logo" />
                            <div>
                                <h3 className="text-base md:text-lg lg:text-xl font-popins font-bold text-gray-300">Cumilla Polytechnic Institute, Cumilla</h3>
                                <p className="text-sm md:text-base lg:text-lg font-bold font-popins text-gray-400">Computer Technology (CMT)</p>
                                <p className="text-xs  font-bold font-popins text-gray-400">June 2020 - August 2024</p>
                            </div>
                        </div>
                        <h4 className="text-sm font-popins font-bold text-gray-400 mt-2">Grade : 3.74 / 4</h4>
                        <div className="text-sm text-gray-300 font-mono  mt-5">{"I studied Diploma in Engineering in Computer Science. We have already covered basic data structures, algorithms, object-oriented"} <DiplomaShort /></div>
                    </div>
                    <div data-aos="fade-up" className="bg-white/5 border border-[#174d63] w-[340px] md:w-[440px] lg:w-[480px] mx-auto p-5 rounded-lg shadow-xl shadow-[#0d161a]">
                        <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4">
                            <Image className="rounded-lg h-12 md:h-16 w-auto" src={school} alt="polytechnic logo" />
                            <div>
                                <h3 className="text-base md:text-lg lg:text-xl font-popins font-bold text-gray-300">Nimsar High School, Cumilla</h3>
                                <p className="text-sm md:text-base lg:text-lg font-bold font-popins text-gray-400">VI - X (science)</p>
                                <p className="text-xs  font-bold font-popins text-gray-400">January 2015 - February 2020</p>
                            </div>
                        </div>
                        <h4 className="text-sm font-popins font-bold text-gray-400 mt-2">Grade : 4.78 / 5</h4>
                        <p className="text-sm text-gray-300 font-mono mt-2">I completed my class 6 to 10 education at Nimsar High School, Nimsar, Cumilla. Where I studied science in class 9th and 10th. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Education;