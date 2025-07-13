
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        id: 1,
        title: "Frontend developer",
        company: "Sparktech Agency",
        timeline: "December 2024 - (ongoing)",
        technology: ["Tailwind", "React", "Next Js", "Redux", "Fire base", "Type script", "Framer Motion", "Node Js", "Express", "Mongodb",],
        work: ["Working on multiple real-world client and in-house projects.", "Creating dynamic, animated, and visually engaging UI components.", "Actively contributing to backend development by designing and implementing scalable APIs,structuring efficient database schemas, and ensuring reliable data flow between frontend and backend systems"],
        company_logo: "/sparkt.jpeg"
    },
    {
        id: 1,
        title: "React Developer (Internship)",
        company: "Bdtask Limited",
        timeline: "June 2024 - September 2024",
        technology: ["Tailwind", "React", "Next Js", "Redux", "Python", "Django", "Type script"],
        work: ["Gaining experience with framework and tools such as React js, Next.js, Redux, TypeScript, and other relevant technologies.", "Collaborating with senior developers to implement new features and optimize existing ones.", "Integrated RESTful APIs and managed state using Redux and Context API."],
        company_logo: "/bdt.jpeg"
    }
]

const Experiences = () => {
    return (
        <div className="bg-gradient-to-bl from-[#082231] to-[#051620] -mt-32 z-30 pb-28" id='education'>
            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4 py-20">
                <div className="text-center pt-24 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Work Experience</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">My all work Experience is here.</p>
                </div>
                <div className="mx-auto space-y-5">
                    {
                        experiences?.map(i => {
                            return <ExperienceCard key={i?.id} experience={i} />
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Experiences;