
import textEditor from '@/images/richEditor-img.png'
import Project from "@/Components/Ui/Project/Project";

const dataList1 = [
    {
        id: 0,
        name: 'TACT VIP',
        desc: 'Tact VIP is a sponsored promotional gaming platform. It was built with a strong focus on performance, UI, animation and seamless integration.',
        photo: 'https://media.licdn.com/dms/image/v2/D4E22AQG0nuo7nazmXg/feedshare-shrink_1280/B4EZbzwD50HYAw-/0/1747846185747?e=1755129600&v=beta&t=jw78w2EJqCV4AhwJbxN72WjFckT_AyYLL0ndhJDUHYQ',
        skills: ['Tailwind', 'Next Js', 'Type script', "Framer Motion", 'Redux query'],
        live: 'https://tact.vip',
        code : ''
    },
    {
        id: 0,
        name: 'ANY JOB',
        desc: 'Developed a real-world job marketplace where users can post job requirements and service providers can browse, apply, and deliver services',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1752406884/test/Screenshot_2025-07-13_173856_is3pku.png',
        skills: ['Tailwind', 'Next Js', 'Type script', "Framer Motion", 'Redux', 'Express', 'Mongodb'],
        live: 'https://anyjob.ie',
        code: ''
    },
]
const dataList2 = [
    {
        id: 0,
        name: 'Construction',
        desc: 'Developed a real-life web application to manage and streamline construction processes, from project planning to completion.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1726817613/test/cgxctlrjdflmg0qjmt0z.png',
        skills: ['Tailwind', 'Next Js', 'Redux query', 'JWT', 'Mysql'],
        live: 'https://nanccooman.org',
        code : ''
    },
    {
        id: 0,
        name: 'Study Table',
        desc: 'Crafted a web-based Study Table application simplifying academic organization and task management.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712411814/docs/kprfdksscupycl0kvatx.png',
        skills: ['Tailwind', 'React', 'Type script', 'Redux', 'Firebase', 'Express', 'Mongodb'],
        live: 'https://study-table.netlify.app',
        code: 'https://github.com/Hriday-paul/study-tracker'
    },
]
const dataList3 = [
     {
        id: 2,
        name: 'Diagnostic Center',
        desc: 'Developed a user-friendly web based diagnostic center management system website for efficient appointment booking and result tracking.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712410648/docs/ns41zajpflhotjef6nmq.png',
        skills: ['Tailwind', 'Next Js', 'Next Auth', 'Type Script', 'Firebase', 'Express', 'Mongodb'],
        live: 'https://daigo-bd.vercel.app',
        code: 'https://github.com/Hriday-paul/daigo-bd'
    },
    {
        id: 3,
        name: 'Chat Application',
        desc: 'This chat application facilitates real-time communication through text, video, connecting users across various devices and platforms.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712411973/docs/wmsfxw4rodj6gkn6ular.png',
        skills: ['Tailwind', 'React', 'Type-script', 'Redux', 'Firebase', 'Express', 'Mongodb', 'Socket-io'],
        live: 'https://message-friend.netlify.app',
        code: 'https://github.com/Hriday-paul/Chat-web'
    }, 
]

const Projects = () => {
    return (
        <div className="bg-[#082231] -mt-16 pb-20 z-20 projects relative" id="projects">
            <div className='absolute top-0 left-0 h-full w-full opacity-30 !bg-[linear-gradient(#464646_1px,_transparent_1px),_linear-gradient(to_right,_#464646_1px,_#082231_1px)] [background-size:22px_22px]'>
            </div>

            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4 z-30">
                <div className="text-center pt-20 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Projects</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">Here are some of my best projects in web development.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8">

                    {
                        dataList1.map((item) => {
                            return <Project key={item.id} item={item} />
                        })
                    }

                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">

                    {
                        dataList2.map((item) => {
                            return <Project key={item.id} item={item} />
                        })
                    }

                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">

                    {
                        dataList3.map((item) => {
                            return <Project key={item.id} item={item} />
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;