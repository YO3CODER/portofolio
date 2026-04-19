import Title from "./Title"

import img1 from '../assets/projects/eTrack.png';
import img2 from '../assets/projects/7 (5).png';
import img3 from '../assets/projects/7 (6).png';
import img4 from '../assets/projects/img4.png';

import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "eTrack - Budget Manager",
        description: "eTrack is a web application for managing budgets and transactions. Users can create budgets, add expenses or income and track their finances in real time.",
        technologies: ["Next.js", "TypeScript", "Neon", "Tailwind CSS"],
        demoLink: "https://budget-psi-five.vercel.app/",
        repoLink: "#",
        image: img1
    },
    {
        id: 2,
        title: "YoLinks - Link Sharing Platform",
        description: "YoLinks is a platform that allows you to group and easily share multiple important links in a single personalized page.",
        technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "Neon"],
        demoLink: "https://yolinkify.vercel.app/",
        repoLink: "#",
        image: img2
    },
    {
        id: 3,
        title: "YoLogo - Logo Generator",
        description: "YoLogo is a web application that allows you to quickly create simple logos with an intuitive interface and customization options.",
        technologies: ["Next.js", "TypeScript" , "Lucide React", "Tailwind CSS"],
        demoLink: "http://yologo.netlify.app/",
        repoLink: "#",
        image: img3
    } , 

   {
    id: 4,
    title: "Plateforme de vente en ligne",
    description: "Application e-commerce complète avec système de paiement en ligne, gestion des commandes et tableau de bord administrateur.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    demoLink: "https://commerce.42web.io/",
    repoLink: "#",
    image: img4
}
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Some of my projects" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-48 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold text-accent">
                                {project.title}
                            </h1>
                            <p className="text-sm text-base-content/80">{project.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex gap-2">
                            <a 
                                className="btn btn-accent flex-1 gap-1" 
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                                <ExternalLink className="w-4 h-4" />
                            </a>

                            <a 
                                className="btn btn-neutral gap-1" 
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects