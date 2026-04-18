import { Container, Facebook, Twitter, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                <Container className="w-10 h-10" />
                <p className="font-bold">
                    YO
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://youtube.com/@ouahabouyelemcoure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        <Youtube className="w-6 h-6" />
                    </a>
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer