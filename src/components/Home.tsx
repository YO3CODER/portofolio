import { Linkedin } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import img from '../assets/MaPhoto.jpg'

const WhatsAppButton = () => {
    const [position, setPosition] = useState({ x: 20, y: 20 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const [hasDragged, setHasDragged] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null)

    const phoneNumber = "2250160759928"
    const message = encodeURIComponent("Bonjour, je vous contacte depuis votre portfolio !")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    // Inject keyframes via DOM to avoid JSX parsing issues
    useEffect(() => {
        const styleId = "whatsapp-ping-style"
        if (!document.getElementById(styleId)) {
            const styleEl = document.createElement("style")
            styleEl.id = styleId
            styleEl.textContent = `
                @keyframes waPing {
                    0% { transform: scale(1); opacity: 0.6; }
                    75%, 100% { transform: scale(2); opacity: 0; }
                }
                .wa-ping {
                    animation: waPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `
            document.head.appendChild(styleEl)
        }
        return () => {
            const el = document.getElementById(styleId)
            if (el) el.remove()
        }
    }, [])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setHasDragged(false)
        setShowTooltip(false)
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        })
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0]
        setIsDragging(true)
        setHasDragged(false)
        setDragOffset({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        })
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return
            setHasDragged(true)
            setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y,
            })
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return
            setHasDragged(true)
            const touch = e.touches[0]
            setPosition({
                x: touch.clientX - dragOffset.x,
                y: touch.clientY - dragOffset.y,
            })
        }

        const handleMouseUp = () => setIsDragging(false)
        const handleTouchEnd = () => setIsDragging(false)

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("touchmove", handleTouchMove)
        window.addEventListener("touchend", handleTouchEnd)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("touchmove", handleTouchMove)
            window.removeEventListener("touchend", handleTouchEnd)
        }
    }, [isDragging, dragOffset])

    const handleClick = () => {
        if (!hasDragged) {
            window.open(whatsappUrl, "_blank")
        }
    }

    return (
        <div
            ref={buttonRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={handleClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{
                position: "fixed",
                bottom: `${position.y}px`,
                right: `${position.x}px`,
                zIndex: 9999,
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: "none",
                touchAction: "none",
            }}
        >
            {/* Pulse ring */}
            <span
                className="wa-ping"
                style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "9999px",
                    backgroundColor: "#4ade80",
                    opacity: 0.6,
                    display: "block",
                }}
            />

            {/* Tooltip */}
            {showTooltip && !isDragging && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "64px",
                        right: 0,
                        backgroundColor: "#1f2937",
                        color: "white",
                        fontSize: "12px",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                >
                    💬 Écrire sur WhatsApp
                </div>
            )}

            {/* Main button */}
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    transform: isDragging ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.15s, box-shadow 0.15s",
                    boxShadow: isDragging
                        ? "0 8px 30px rgba(37,211,102,0.6)"
                        : "0 4px 15px rgba(37,211,102,0.4)",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    fill="white"
                >
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.477 2.027 7.785L0 32l8.456-2.004A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.856l-.486-.29-5.02 1.19 1.216-4.887-.317-.502A13.266 13.266 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.398-.2-2.354-1.163-2.72-1.296-.365-.133-.63-.2-.895.2-.265.398-1.03 1.296-1.262 1.562-.232.265-.465.298-.863.1-.398-.2-1.68-.62-3.2-1.977-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.598-.697.2-.232.265-.398.398-.664.133-.265.067-.497-.033-.697-.1-.2-.895-2.16-1.227-2.958-.323-.776-.65-.67-.895-.683l-.762-.013c-.265 0-.697.1-1.063.497-.365.398-1.394 1.362-1.394 3.322 0 1.96 1.427 3.854 1.627 4.12.2.265 2.808 4.288 6.803 6.017.951.411 1.694.657 2.272.84.955.304 1.824.261 2.511.158.765-.114 2.354-.962 2.688-1.89.333-.927.333-1.72.232-1.89-.1-.165-.365-.265-.763-.464z" />
                </svg>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
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
                        style={{ borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%" }}
                    />
                </div>
            </div>

            <WhatsAppButton />
        </>
    )
}

export default Home