'use client'
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const navItems = [
    {link: "#into",
    p1: 'I',
    p2: 'Intro',
    },
    {link: "#who",
    p1: 'II',
    p2: 'Who I am',
    },
    {link: "#experiences",
    p1: 'III',
    p2: 'Experiences',
    },
    {link: "#archievements",
    p1: 'IV',
    p2: 'Archievements',
    },
    {link: "#industries",
    p1: 'V',
    p2: 'Industries',
    },
    {link: "#recognitions",
    p1: 'VI',
    p2: 'Recognitions',
    },
    {link: "#contact",
    p1: 'VII',
    p2: 'Get In Touch',
    }
]
const Navbar = () => {
    useGSAP(()=>{
        gsap.fromTo(".header", {
            x : -100

        }, {
            x: 0,
            animation: "ease-in"
        })
    })
  return (
    <>
    <header className="header fixed top-0 left-0 bg-nav-bg max-sm:pl-4 max-lg:w-full lg:h-dvh w-16 flex lg:flex-col items-center overflow-hidden gap-6 max-md:justify-between z-501">
        <div className="flex items-center gap-8 py-4">
            <div className="flex flex-col items-start gap-2">
                <span className="w-8 h-0.5 bg-peach-cream"></span>
                <span className="w-5 h-0.5 bg-peach-cream"></span>
            </div>
            <Link href="/" className="text-warm-sand lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" fill="none" viewBox="0 0 31 25"><path fill="currentColor" d="M5.838.705H.5L9.94 24.28l2.743-6.92zM25.162.705H30.5L21.06 24.28l-2.743-6.92zM19.281.73h-7.562l3.732 9.538z"></path><path stroke="currentColor" strokeWidth="0.099" d="M9.917 24.295 19.257.72M21.037 24.295 11.696.72"></path></svg></Link>

        </div>
        
        <nav className="flex-5 nav max-sm:hidden flex lg:flex-col items-center  max-lg:gap-4 w-full relative  max-lg:self-stretch">
            {navItems.map(({link, p1, p2}) => (
                <Link key={link} href={link} className="flex flex-col items-center justify-between flex-none lg:w-full will-change-auto border border-border-socials">
                <div className="group flex items-center justify-center lg:[writing-mode:vertical-rl] lg:min-h-[3.6rem] lg:px-2 font-semi-bold text-dark-gray text-[0.8rem]">
                    <p className="flex-none font-bold text-dark-gray">{p1}.</p>
                    <p className="hidden group-hover:block flex-none">
                        {p2}
                    </p>
                </div>
            </Link>
            ))}
        </nav>
        <button className="lg:flex-2 max-lg:w-30 bg-our-orange max-lg:self-stretch cursor-pointer">
            <p className="text-sm lg:rotate-90 text-our-black font-bold text-nowrap uppercase">Let&apos;s Connect</p>
        </button>
    </header>
    </>
  )
}
export default Navbar