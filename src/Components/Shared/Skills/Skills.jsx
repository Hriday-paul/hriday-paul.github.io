import Image from "next/image";

const Skills = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-28 z-30 pb-28 skills" id="skills">
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-36 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Skills</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">Here are some of my skills in web development.</p>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8">
                        <div data-aos="zoom-in-up" className="p-5 border border-[#00ADF5] rounded-2xl shadow-2xl shadow-[#0d161a] w-[350px] md:w-[400px] mx-auto lg:mx-0">
                            <h4 className="text-2xl md:text-3xl font-bold font-popins text-white mb-5 text-center">Frontend</h4>
                            <div className="mt-5">

                                <div className="flex flex-row gap-3 my-4 justify-center">
                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} placeholder='blur' blurDataURL="data:..." src='https://i.ibb.co/fMyFC46/html.png' alt="html logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Html</p>
                                    </div>


                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} placeholder='blur' blurDataURL="data:..." src='https://i.ibb.co/MhT6tdM/CSS3-logo-svg.png' alt="css logo" />
                                        </div>

                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Css</p>
                                    </div>

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                        <div className="h-4 lg:h-6 w-6 lg:w-8 relative mr-1 lg:mr-2">
                                            <Image fill={true} placeholder='blur' blurDataURL="data:..." className="mr-1 lg:mr-2" src='https://i.ibb.co/WWJ4n9m/Tailwind-CSS1-900x0.png' alt="tailwind logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Tailwind</p>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-3 my-4 justify-center">

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} placeholder='blur' blurDataURL="data:..." src='https://i.ibb.co/wJYQJ0v/React-icon-svg.png' alt="react logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">React</p>
                                    </div>

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} placeholder='blur' blurDataURL="data:..."src='https://i.ibb.co/rwwh26r/js-removebg-preview.png' alt="js logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Javascript</p>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-3 my-4 justify-center">
                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                        <div className="h-4 lg:h-6 w-5 lg:w-7 relative mr-1 lg:mr-2">
                                            <Image fill={true} placeholder='blur' blurDataURL="data:..." src='https://i.ibb.co/4SXqN75/bootstrap-5-logo-icon.webp' alt="bootstrap logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Bootstrap</p>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div data-aos="zoom-in-up" className="p-5 border border-[#00ADF5] rounded-2xl shadow-2xl shadow-[#0d161a] w-[350px] md:w-[400px] mx-auto lg:mx-0">
                            <h4 className="text-2xl md:text-3xl font-bold font-popins text-white mb-5 text-center">Backend</h4>
                            <div className="mt-5">

                                <div className="flex flex-row gap-3 my-4 justify-center">

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} src='https://i.ibb.co/2ZF4j6V/mongodb-original-logo-icon-146424.png' alt="mongodb logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Mongodb</p>
                                    </div>

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} src='https://i.ibb.co/5spLHYL/firebase.png' alt="firebase logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Firebase</p>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-3 my-4 justify-center">

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                        <div className="h-4 lg:h-6 w-6 lg:w-8 relative mr-1 lg:mr-2">
                                            <Image fill={true} src='https://i.ibb.co/kKjry6n/node-copy.png' alt="node js logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Node js</p>
                                    </div>

                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} src='https://i.ibb.co/ZNyKfvJ/express.png' alt="express js logo" />
                                        </div>

                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Express js</p>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-3 my-4 justify-center">
                                    <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                        <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                            <Image fill={true} src='https://i.ibb.co/zNrdXWW/python.png' alt="python logo" />
                                        </div>
                                        <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Python</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">
                    <div data-aos="zoom-in-up" className="p-5 border border-[#00ADF5] rounded-2xl shadow-2xl shadow-[#0d161a] w-[350px] md:w-[400px] mx-auto lg:mx-0">
                        <h4 className="text-2xl md:text-3xl font-bold font-popins text-white mb-5 text-center">Others</h4>
                        <div className="mt-5">

                            <div className="flex flex-row gap-3 my-4 justify-center">
                                <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                    <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                        <Image fill={true} src='https://i.ibb.co/fp6kmR7/Git-Hub-Mark-ea2971cee799.png' alt="github logo" />
                                    </div>
                                    <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Github</p>
                                </div>


                                <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                    <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                        <Image fill={true} src='https://i.ibb.co/Vm2P9Pk/Git-icon-svg.png' alt="Git logo" />
                                    </div>
                                    <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Git</p>
                                </div>

                                <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                    <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                        <Image fill={true} src='https://i.ibb.co/WBs41jh/vercel-copy.png' alt="Vercel logo" />
                                    </div>
                                    <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Vercel</p>
                                </div>

                            </div>
                            <div className="flex flex-row gap-3 my-4 justify-center">

                                <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                    <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                        <Image fill={true} src='https://i.ibb.co/yndCP2h/Visual-Studio-Code-1-35-icon-svg.png' alt="Vs code logo" />
                                    </div>
                                    <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Vs code</p>
                                </div>

                                <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">

                                    <div className="h-4 lg:h-6 w-4 lg:w-6 relative mr-1 lg:mr-2">
                                        <Image fill={true} src='https://i.ibb.co/m07d467/netlify-3628945-3030170.webp' alt="Netlify logo" />
                                    </div>
                                    <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Netlify</p>
                                </div>

                            </div>
                            <div className="flex flex-row gap-3 my-4 justify-center">
                                <div className="flex flex-row items-center p-2 lg:p-3 border border-gray-200 rounded-lg">
                                    
                                    <div className="h-4 lg:h-6 w-3 lg:w-5 relative mr-1 lg:mr-2">
                                        <Image fill={true} src='https://i.ibb.co/z4Qbdkd/figma-icon.webp' alt="Figma logo" />
                                    </div>
                                    <p className="uppercase text-sm lg:text-base font-popins font-bold text-gray-400">Figma</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;