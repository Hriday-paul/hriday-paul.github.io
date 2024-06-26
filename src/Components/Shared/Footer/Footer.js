'use client'
import { Link } from "react-scroll";
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { DiGithubBadge } from 'react-icons/di';



const Footer = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-16 z-30 pb-5">
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-24 pb-10 mx-auto">
                    <h2 className="text-center text-3xl font-popins font-bold text-[#008AC2]">Hriday paul</h2>
                    <div className="mt-5 lg:mt-8">
                        <ul className="flex flex-row gap-x-7 items-center justify-center">
                            <li className="text-lg lg:text-xl font-popins font-medium text-white"><Link
                                className="cursor-pointer hover:text-[#008AC2] duration-200"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                About
                            </Link></li>
                            <li className="text-lg lg:text-xl font-medium font-popins text-white"><Link
                                className="cursor-pointer hover:text-[#008AC2] duration-200"
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Skills
                            </Link></li>
                            <li className="text-lg lg:text-xl font-medium font-popins text-white"><Link
                                className="cursor-pointer hover:text-[#008AC2] duration-200"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Projects
                            </Link></li>
                            <li className="text-lg lg:text-xl font-medium font-popins text-white"><Link
                                className="cursor-pointer hover:text-[#008AC2] duration-200"
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Education
                            </Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-center gap-x-5 mt-5 mx-auto lg:mt-8">
                        <a href="https://www.facebook.com/hridaypaul585393/" target="blank" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <BiLogoFacebook className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></BiLogoFacebook>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <BsTwitter className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></BsTwitter>
                        </a>
                        <a href="https://github.com/Hriday-paul" target="blank" className="inline-flex items-center justify-center h-8 md:h-10 w-8 md:w-10 border border-[#008AC2] rounded-full mr-1 hover:bg-[#008AC2] hover:text-gray-300 group">
                            <DiGithubBadge className="text-xl md:text-2xl text-[#008AC2] group-hover:text-gray-300"></DiGithubBadge>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;