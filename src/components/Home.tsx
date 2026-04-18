import { Linkedin } from "lucide-react"
import img from '../assets/MaPhoto.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

           <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Hello, <br /> I'm {" "}
                    <span className="text-accent text-4xl">YELEMCOURE</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left mt-2">
                    <span className="badge badge-accent badge-lg text-white">Software Engineer</span>
                </h2>

                <p className="my-4 text-md text-center md:text-left">
                    Fullstack developer with 3 years of experience, <br />
                    passionate about Next Js. <br />
                    Contact me for your projects!
                </p>
    
                <a 
                    href="https://www.linkedin.com/in/ouahabou-yelemcoure-b6232a341" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary text-white md:w-fit gap-2"
                >
                    <Linkedin className="w-5 h-5" />
                    Contact me
                </a>
            </div>

            <div className="md:ml-60 flex justify-center">
                <img 
                    src={img} 
                    alt="Profile" 
                    className="w-34 h-34 md:w-96 md:h-96 object-cover border-4 md:border-8 border-accent shadow-xl" 
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>
        </div>
    )
}

export default Home