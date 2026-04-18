import Title from "./Title"
import { BookOpen, Clock, Award, ChevronRight, Youtube, FileText } from 'lucide-react';

// Import des PDF (façon React/Vite)
import certif1 from '../assets/udemy/certif1.pdf'
import certif2 from '../assets/udemy/certif2.pdf'

const certifications = [
    {
        id: 1,
        name: "Double your confidence and self-esteem",
        instructor: "Jamal Lazaar",
        progress: 100,
        hours: "12h",
        level: "Personal Development",
        color: "border-purple-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        pdf: certif1
    },
    {
        id: 2,
        name: "JavaScript: The ULTIMATE training",
        instructor: "Louis Nicolas Leuillet, Believemy .com",
        progress: 100,
        hours: "68h",
        level: "Beginner to Expert",
        color: "border-yellow-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
        pdf: certif2
    }
];

const Certification = () => {
    return (
        <div id="certifications" className="py-8">
            <Title title="Certifications & YouTube Channel" />
            
            {/* YouTube Channel */}
            <div className="flex justify-center mb-6">
                <a 
                    href="https://youtube.com/@ouahabouyelemcoure?si=TayA60EZklb6U31V" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors"
                >
                    <Youtube className="w-5 h-5" />
                    <span className="text-sm font-medium">My YouTube Channel</span>
                    <ChevronRight className="w-4 h-4" />
                </a>
            </div>

            {/* Certifications List */}
            <div className="space-y-3 max-w-3xl mx-auto">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className={`card card-side bg-base-100 shadow-md hover:shadow-xl transition-all border-l-4 ${cert.color}`}
                    >
                        <div className="card-body p-4">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-accent text-lg">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-base-content/70 flex items-center gap-1 mt-1">
                                        <Award className="w-4 h-4" />
                                        {cert.instructor}
                                    </p>
                                </div>
                                <BookOpen className="w-5 h-5 text-accent" />
                            </div>

                            {/* Metadata */}
                            <div className="flex flex-wrap gap-3 mt-2 text-sm">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {cert.hours}
                                </span>
                                <span className="badge badge-sm badge-outline">
                                    {cert.level}
                                </span>
                                <span className="badge badge-sm badge-accent">100% completed</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-3">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>Progress</span>
                                    <span className="font-bold text-accent">{cert.progress}%</span>
                                </div>
                                <div className="w-full bg-base-200 rounded-full h-2">
                                    <div 
                                        className="bg-accent h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${cert.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="card-actions justify-end mt-2">
                                <a 
                                    href={cert.pdf} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost btn-sm gap-1 text-accent"
                                >
                                    <FileText className="w-3 h-3" />
                                    View Certificate
                                    <ChevronRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Message */}
            <div className="text-center mt-8 p-4 bg-base-200 rounded-xl max-w-2xl mx-auto">
                <p className="text-sm text-base-content/80">
                    <span className="font-bold text-accent">2 certifications completed</span>
                    <br />
                    Always learning and improving!
                </p>
            </div>
        </div>
    )
}

export default Certification