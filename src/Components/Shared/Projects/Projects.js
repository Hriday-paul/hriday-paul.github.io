import Image from "next/image";
import parcelImg from '@/images/parcel-web-image.png'
import textEditor from '@/images/richEditor-img.png'

const dataList1 = [
    {
        id: 0,
        name: 'Diagnostic Center',
        desc: 'It is a Diagnostic Center Managment system website.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712410648/docs/ns41zajpflhotjef6nmq.png',
        skills: ['Tailwind', 'React', 'Firebase', 'Express', 'Mongodb', 'JWT'],
        live: 'https://medico-serve.netlify.app',
        code: 'https://github.com/Hriday-paul/Medical-care'
    },
    {
        id: 1,
        name: 'Study Tracker',
        desc: 'I have developed a Study tracker application.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712411814/docs/kprfdksscupycl0kvatx.png',
        skills: ['Tailwind', 'React', 'Firebase', 'Express', 'Mongodb', 'JWT'],
        live: 'https://study-track.netlify.app',
        code: 'https://github.com/Hriday-paul/study-tracker'
    },
]
const dataList2 = [
    {
        id: 2,
        name: 'Chat Application',
        desc: 'I have developed a web based real time chat application.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712411973/docs/wmsfxw4rodj6gkn6ular.png',
        skills: ['Tailwind', 'React', 'TanStack Query', 'Firebase', 'Express', 'Mongodb', 'JWT'],
        live: 'https://message-friend.netlify.app',
        code: 'https://github.com/Hriday-paul/Chat-web'
    },
    {
        id: 3,
        name: 'Parcel Delivery',
        desc: 'It is a parcel delivery management website. This is role base application.',
        photo: parcelImg,
        skills: ['Tailwind', 'React', 'TanStack Query', 'Firebase', 'Express', 'Mongodb', 'JWT'],
        live: 'https://poetic-toffee-1fafd9.netlify.app',
        code: 'https://github.com/Hriday-paul/parcel-delivary-management'
    },
]
const dataList3 = [
    {
        id: 4,
        name: 'Rich Text Editor',
        desc: 'I am created a web based text editor useing js. This website is only frontend website.',
        photo: textEditor,
        skills: ['Tailwind', 'React', 'TanStack Query', 'Firebase', 'Express', 'Mongodb', 'JWT'],
        live: 'https://hriday-paul.github.io/web-text-editor',
        code: 'https://github.com/Hriday-paul/web-text-editor'
    },
    {
        id: 5,
        name: 'Online Shoping',
        desc: 'I have to developed a Online Shoping website.',
        photo: 'https://i.ibb.co/h2wyf13/Screenshot-2023-12-31-140130.png',
        skills: ['Tailwind', 'React', 'TanStack Query', 'Firebase', 'Express', 'Mongodb', 'JWT'],
        live: 'https://online-shop-ferioyala.netlify.app',
        code: 'https://github.com/Hriday-paul/online-shop-stack'
    }
]

const Projects = () => {
    return (
        <div className=" bg-[#082231] -mt-16 pb-20 z-20 projects" id="projects">
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4">
                <div className="text-center pt-20 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Projects</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">Here are some of my best projects in web development.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8">

                    {
                        dataList1.map((item) => {
                            return <div key={item.id} data-aos={item.id % 2 == 0 ? "zoom-in-right" : "zoom-in-left"} className="w-[340px] p-4 bg-[#061c28] shadow-xl shadow-[#041721] mx-auto md:mx-0">
                                <div className='relative h-36 w-auto'>
                                    <Image fill={true} placeholder='blur' blurDataURL="data:..." className="mb-5 rounded-md" src={item.photo} alt="project image" />
                                </div>
                                <div className="my-3 flex flex-row flex-wrap gap-2">
                                    {
                                        item.skills.map((skill, indx) => {
                                            return <span key={skill + indx} className="bg-[#005f84] py-1 px-2 rounded-full text-xs font-popins text-gray-300" >
                                                {skill}
                                            </span>
                                        })
                                    }
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-popins text-gray-200">{item.name}</h3>
                                    <p className="mt-3 text-base font-medium font-popins text-gray-400">{item.desc}</p>
                                </div>
                                <div className="flex flex-row gap-x-8 items-center justify-between mt-5">
                                    <a href={item.live} target="blank" className="bg-transparent hover:bg-[#00A6E8] text-[#00A6E8] font-medium hover:text-white py-2 px-2.5 text-sm border border-[#00A6E8] hover:border-transparent rounded-full font-popins w-full text-center">
                                        Live Demo
                                    </a>
                                    <a href={item.code} target="blank" className="bg-transparent hover:bg-[#00A6E8] text-[#00A6E8] font-medium hover:text-white py-2 px-2.5 text-sm border border-[#00A6E8] hover:border-transparent rounded-full font-popins w-full text-center">
                                        Source code
                                    </a>
                                </div>
                            </div>
                        })
                    }


                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">

                    {
                        dataList2.map((item) => {
                            return <div key={item.id} data-aos={item.id % 2 == 0 ? "zoom-in-right" : "zoom-in-left"} className="w-[350px] p-4 bg-[#061C28] shadow-xl shadow-[#15151E] mx-auto md:mx-0">
                                <div className='relative h-44 w-auto'>
                                    <Image fill={true} placeholder='blur' blurDataURL="data:..." className="mb-5 rounded-md" src={item.photo} alt="project image" />
                                </div>
                                <div className="my-3 flex flex-row flex-wrap gap-2">
                                    {
                                        item.skills.map((skill, indx) => {
                                            return <span key={skill + indx} className="bg-[#005f84] py-1 px-2 rounded-full text-xs font-popins text-gray-300" >
                                                {skill}
                                            </span>
                                        })
                                    }
                                </div>
                                <div className='grow'>
                                    <h3 className="text-xl font-bold font-popins text-gray-200">{item.name}</h3>
                                    <p className="mt-3 text-base font-medium font-popins text-gray-400">{item.desc}</p>
                                </div>
                                <div className="flex flex-row gap-x-8 items-center justify-between mt-5">
                                    <a href={item.live} target="blank" className="bg-transparent hover:bg-[#00A6E8] text-[#00A6E8] font-medium hover:text-white py-2 px-2.5 text-sm border border-[#00A6E8] hover:border-transparent rounded-full font-popins w-full text-center">
                                        Live Demo
                                    </a>
                                    <a href={item.code} target="blank" className="bg-transparent hover:bg-[#00A6E8] text-[#00A6E8] font-medium hover:text-white py-2 px-2.5 text-sm border border-[#00A6E8] hover:border-transparent rounded-full font-popins w-full text-center">
                                        Source code
                                    </a>
                                </div>
                            </div>
                        })
                    }


                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">

                    {
                        dataList3.map((item) => {
                            return <div key={item.id} data-aos={item.id % 2 == 0 ? "zoom-in-right" : "zoom-in-left"} className="w-[350px] p-4 bg-[#061C28] shadow-xl shadow-[#15151E] mx-auto md:mx-0">
                                <div className='relative h-44 w-auto'>
                                    <Image fill={true} placeholder='blur' blurDataURL="data:..." className="mb-5 rounded-md" src={item.photo} alt="project image" />
                                </div>
                                <div className="my-3 flex flex-row flex-wrap gap-2">
                                    {
                                        item.skills.map((skill, indx) => {
                                            return <span key={skill + indx} className="bg-[#005f84] py-1 px-2 rounded-full text-xs font-popins text-gray-300" >
                                                {skill}
                                            </span>
                                        })
                                    }
                                </div>
                                <div className='grow'>
                                    <h3 className="text-xl font-bold font-popins text-gray-200">{item.name}</h3>
                                    <p className="mt-3 text-base font-medium font-popins text-gray-400">{item.desc}</p>
                                </div>
                                <div className="flex flex-row gap-x-8 items-center justify-between mt-5">
                                    <a href={item.live} target="blank" className="bg-transparent hover:bg-[#00A6E8] text-[#00A6E8] font-medium hover:text-white py-2 px-2.5 text-sm border border-[#00A6E8] hover:border-transparent rounded-full font-popins w-full text-center">
                                        Live Demo
                                    </a>
                                    <a href={item.code} target="blank" className="bg-transparent hover:bg-[#00A6E8] text-[#00A6E8] font-medium hover:text-white py-2 px-2.5 text-sm border border-[#00A6E8] hover:border-transparent rounded-full font-popins w-full text-center">
                                        Source code
                                    </a>
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>
        </div>
    );
};

export default Projects;