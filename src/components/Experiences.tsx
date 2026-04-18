import Title from "./Title"
import { Code, Server, Palette, Rocket, Zap } from 'lucide-react';

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];

const techCategories = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces",
        icon: <Code className="w-6 h-6 text-accent" />,
        techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Backend Development",
        description: "Creating robust APIs and server-side logic",
        icon: <Server className="w-6 h-6 text-accent" />,
        techs: ["Node.js", "Prisma", "PostgreSQL"]
    },
    {
        id: 3,
        title: "Design & Tools",
        description: "Modern tools for better development experience",
        icon: <Palette className="w-6 h-6 text-accent" />,
        techs: ["HTML5", "CSS3", "JavaScript ES6", "Git"]
    }
];

const Experiences = () => {
    return (
        <div id="Experiences" className="py-8">
            <Title title="Technologies" />
            
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mx-auto">
                {/* Skills Grid */}
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/2">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col group">
                            <div className="w-20 h-20 md:w-24 md:h-24 p-2 rounded-full border-2 border-accent group-hover:scale-110 transition-transform duration-300">
                                <img 
                                    src={skill.image} 
                                    alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-xs md:text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Categories Section */}
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-accent mb-4 text-center md:text-left">
                        What I do
                    </h3>
                    
                    {techCategories.map((category) => (
                        <div 
                            key={category.id}
                            className="bg-base-200 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                {category.icon}
                                <h4 className="text-lg font-semibold">{category.title}</h4>
                            </div>
                            <p className="text-sm text-base-content/70 mb-2">
                                {category.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {category.techs.map((tech, index) => (
                                    <span key={index} className="badge badge-accent badge-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-base-200 p-3 rounded-xl text-center">
                            <Zap className="w-5 h-5 text-accent mx-auto mb-1" />
                            <span className="text-sm font-bold block">3+ years</span>
                            <span className="text-xs text-base-content/70">Experience</span>
                        </div>
                        <div className="bg-base-200 p-3 rounded-xl text-center">
                            <Rocket className="w-5 h-5 text-accent mx-auto mb-1" />
                            <span className="text-sm font-bold block">20+ projects</span>
                            <span className="text-xs text-base-content/70">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences