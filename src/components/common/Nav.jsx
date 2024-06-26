import { useState } from "react"

export const Nav = () => {

    const [isCliked, setCliked] = useState(false)

    const links = [
        {
            label: "Sobre Nosotros",
            href: "/blog/aboutus",
        },
        {
            label: "GitHub",
            href: "https://github.com/LUISEDOCCOR/EduTask",
        },
        {
            label: "Contacto",
            href: "/blog/contact",
        }
    ]

    return (
        <>
             <style>{`
                .slide-down {
                    animation: slideDown 0.3s ease;
                }

                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                    }
                    to {
                        transform: translateY(0);
                    }
            `}</style>
            <nav className="w-full flex items-center h-20 absolute top-0 justify-between px-6 md:px-12 z-10">

                <section className="flex items-center gap-4 xl:gap-6">
                    <img
                        className="aspect-square rounded-full object-cover object-center h-8 w-8 xl:w-12 xl:h-12"
                        src="/icon.webp"
                        alt="Icon Edutask"
                    />
                    <a href="/"><h1 className="text-xl font-bold">EduTask</h1></a>
                </section>

                <section className="space-x-12 hidden xl:block">
                    {
                        links.map(({ href, label }, index) => (
                            <a
                                key={index}
                                className="text-lg font-light xl:hover:opacity-70 transition-opacity"
                                href={href}
                            >{label}
                            </a>
                        ))
                    }
                </section>

                <section className="animate-pulse xl:hidden">
                    <button 
                        onClick={() => {setCliked(!isCliked)}} 
                        className={`transition-transform ${isCliked ? "rotate-180" : "rotate-0"}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8">
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            />
                            <path d="M6 10l6 6l6 -6h-12" />
                        </svg>
                    </button>
                </section>

            </nav>
            <section id="mobile-nav" className={`h-screen w-screen pt-40 px-12 flex-col gap-8
            bg-black/50 backdrop-blur-lg absolute bottom-0 xl:hidden delay-200 ${isCliked ? "flex slide-down" : "hidden"}`}>
                {
                    links.map(({ href, label}, index) => (
                        <a
                            key={index}
                            className="item-nav-mobile text-2xl xl:hover:opacity-70 transition-opacity"
                            href={href}
                        >{label}
                        </a>
                    ))
                }
            </section>
        </>
    )
}