import Image from "next/image";


const Experiences = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-24 z-30 pb-28" id='education'>
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4 py-20">
                <div className="text-center pt-24 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Work Experience</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">My all work Experience is here.</p>
                </div>
                <div className="mx-auto space-y-8">
                    <div data-aos="fade-up" className="bg-white/5 border border-[#174d63] w-[350px] md:w-[440px] lg:w-[480px] mx-auto p-5 rounded-lg shadow-xl shadow-[#0d161a]">
                        <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4">
                            <Image src={'/bdt.jpeg'} height={500} width={500} alt="bdtask" className="h-20 w-auto"></Image>
                            <div>
                                <h3 className="text-base md:text-lg lg:text-xl font-popins font-bold text-gray-100">Software Developer (Internship)</h3>
                                <p className="text-sm md:text-base lg:text-lg font-bold font-popins text-gray-300">Bdtask Limited</p>
                                <p className="text-sm font-bold font-popins text-gray-300 italic">June 2024 - (running...)</p>
                            </div>
                        </div>
                        <p className="text-base font-bold font-popins text-gray-300 mt-2">Technology : </p>
                        <div className="flex flex-row flex-wrap gap-x-2 items-start gap-y-2 mt-1">
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300" >
                                Tailwind
                            </span>
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300" >
                                React
                            </span>
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300 whitespace-nowrap" >
                                Next Js
                            </span>
                            
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300" >
                                Redux
                            </span>
                            
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300">
                                Python
                            </span>
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300" >
                                Django
                            </span>
                            <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300 text-wrap whitespace-nowrap" >
                                Type script
                            </span>
                        </div>

                        <ul className="list-disc px-8 md:px-10 py-3 text-gray-200 text-sm md:text-base space-y-2">
                            <li>Gaining experience with framework and tools such as React js, Next.js, Redux, TypeScript, and other relevant technologies.</li>
                            <li>Collaborating with senior developers to implement new features and optimize existing ones.</li>
                            <li>Integrated RESTful APIs and managed state using Redux and Context API.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;