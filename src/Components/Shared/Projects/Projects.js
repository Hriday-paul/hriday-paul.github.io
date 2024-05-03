
import parcelImg from '@/images/parcel-web-image.png'
import textEditor from '@/images/richEditor-img.png'
import Project from "@/Components/Ui/Project/Project";

const dataList1 = [
    {
        id: 0,
        name: 'Study Table',
        desc: 'Crafted a web-based Study Table application simplifying academic organization and task management.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712411814/docs/kprfdksscupycl0kvatx.png',
        skills: ['Tailwind', 'React', 'Type script', 'Redux', 'Firebase', 'Express', 'Mongodb'],
        live: 'https://study-table.netlify.app',
        code: 'https://github.com/Hriday-paul/study-tracker'
    },
    {
        id: 1,
        name: 'Diagnostic Center',
        desc: 'Developed a user-friendly web based diagnostic center management system website for efficient appointment booking and result tracking.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712410648/docs/ns41zajpflhotjef6nmq.png',
        skills: ['Tailwind', 'React', 'Firebase', 'Express', 'Mongodb'],
        live: 'https://medico-serve.netlify.app',
        code: 'https://github.com/Hriday-paul/Medical-care'
    }
]
const dataList2 = [
    {
        id: 2,
        name: 'Chat Application',
        desc: 'This chat application facilitates real-time communication through text, video, connecting users across various devices and platforms.',
        photo: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1712411973/docs/wmsfxw4rodj6gkn6ular.png',
        skills: ['Tailwind', 'React', 'Type-script', 'Redux', 'Firebase', 'Express', 'Mongodb', 'Socket-io'],
        live: 'https://message-friend.netlify.app',
        code: 'https://github.com/Hriday-paul/Chat-web'
    },
    {
        id: 3,
        name: 'Parcel Delivery',
        desc: 'Created a Parcel Delivery Management website for easy tracking and scheduling of deliveries.',
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
        desc: 'A Rich Text Editor application enables users to create and edit text with diverse formatting options.',
        photo: textEditor,
        skills: ['Html', 'Css', 'Bootstrap', 'Javascript'],
        live: 'https://hriday-paul.github.io/web-text-editor',
        code: 'https://github.com/Hriday-paul/web-text-editor'
    },
    {
        id: 5,
        name: 'Online Shoping',
        desc: 'Designed an intuitive online shopping website for seamless browsing, ordering, and checkout experiences.',
        photo: 'https://i.ibb.co/h2wyf13/Screenshot-2023-12-31-140130.png',
        skills: ['Tailwind', 'React', 'Firebase', 'Express', 'Mongodb'],
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