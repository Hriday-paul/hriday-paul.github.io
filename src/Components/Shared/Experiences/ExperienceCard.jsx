import React from 'react'
import Image from "next/image";

export default function ExperienceCard({ experience }) {

    return (
        <div data-aos="fade-up" className="bg-white/5 border border-[#174d63] w-[350px] md:w-[440px] lg:w-[480px] mx-auto p-5 rounded-lg shadow-xl shadow-[#0d161a]">
            <div className="flex flex-row gap-x-2 md:gap-x-3 lg:gap-x-4">
                <Image src={experience?.company_logo} height={500} width={500} alt="bdtask" className="h-20 w-auto"></Image>
                <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-popins font-bold text-gray-100">{experience?.title}</h3>
                    <p className="text-sm md:text-base lg:text-lg font-bold font-popins text-gray-300">{experience?.company}</p>
                    <p className="text-sm font-bold font-popins text-gray-300 italic">{experience?.timeline}</p>
                </div>
            </div>
            <p className="text-base font-bold font-popins text-gray-300 mt-2">Technology : </p>
            <div className="flex flex-row flex-wrap gap-x-2 items-start gap-y-2 mt-1">
                {
                    experience?.technology?.map(i => {
                        return <span key={i} className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300" >
                            {i}
                        </span>
                    })
                }
                {/* <span className="bg-white/10 py-1 px-2 rounded-full text-xs md:text-sm font-popins text-gray-300" >
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
                </span> */}
            </div>

            <ul className="list-disc px-8 md:px-10 py-3 text-gray-200 text-sm md:text-base space-y-2">
                {
                    experience?.work?.map(i => {
                        return <li key={i}>{i}</li>
                    })
                }
            </ul>
        </div>
    )
}
