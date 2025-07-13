import TypeAnim from '@/Components/Ui/TypeAnim/TypeAnim';
import Link from 'next/link';
import React from 'react';

const HomeAbout = () => {
    return (
        <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
            <div className="flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-5 mt-6 md:mt-0 text-white items-center pt-10 pb-28 md:py-40 lg:py-48 xl:py-60">

                    <div data-aos="zoom-in-right" className="order-2 md:order-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-popins mb-4 md:mb-5">{`Hi, I'm`}</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-popins mb-4 md:mb-5">Hriday Paul</h1>
                        <h1 className="inline font-popins text-white text-2xl lg:text-3xl font-bold">{`I'm a `}</h1>

                        {/* Typer animation is here  */}
                        <TypeAnim />

                        <h5 className="mt-5 mb-7 md:mb-8 lg:mb-10 text-lg lg:text-xl font-popins text-gray-400">{`I'm`} a passionate fullstack web developer from Bangladesh. As a web developer, my goal is to bring ideas to life through thoughtful and impactful web applications, creating memorable experiences for users.</h5>

                        <Link target="_blank" href='https://drive.google.com/file/d/1bFjDExps9D7rZrAgC2kXt73GtDEaX0z4/view?usp=sharing' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#00A4E6] rounded-xl group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0082B6] rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0082B6] rounded-2xl group-hover:mb-12 group-hover:translate-x-0">
                            </span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Download Resume</span>

                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/hriday-pal" className="relative mx-5 px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#008dd3] group-hover:bg-[#0076B3] group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#0076B3] group-hover:bg-[#008dd3] group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#008dd3] -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#00a3ef] -rotate-12"></span>
                            <span className="relative">in</span>
                        </Link>
                    </div>

                    <div data-aos="zoom-in-left" className="mx-auto order-1 md:order-2">

                        <div className="mockup-code w-80 md:w-40 lg:w-full bg-white/5 text-gray-300">
                            <pre data-prefix="1"><code>{`const AboutMe = {`}</code></pre>
                            <pre data-prefix="2"><code>{`  Name: "Hriday Chandra Paul",`}</code></pre>
                            <pre data-prefix="3"><code>{`  Role: "Full Stack Developer",`}</code></pre>
                            <pre data-prefix="4"><code>{`  Age: 23,`}</code></pre>
                            <pre data-prefix="5"><code>{`  Gender: "Male",`}</code></pre>
                            <pre data-prefix="6"><code>{`  Address: "Mohakhali, Dhaka, Bangladesh"`}</code></pre>
                            <pre data-prefix="7"><code>{`  Phone: "01892814892"`}</code></pre>
                            <pre data-prefix="8"><code>{`  Email: "hridoychandrapaul.10@gmail.com",`}</code></pre>
                            <pre data-prefix="9"><code>{`  Language: [`}</code></pre>
                            <pre data-prefix="10"><code>{`       "Bangla", "English"`}</code></pre>
                            <pre data-prefix="11"><code>{`    ]`}</code></pre>
                            <pre data-prefix="12"><code>{`  }; `}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;