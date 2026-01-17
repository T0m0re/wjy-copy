import Link from "next/link"

const Navbar = () => {
  return (
    <header className="pl-4 sticky top-0 left-0 max-md:w-full lg:h-dvh bg-nav-bg lg:w-fit flex lg:flex-col items-center justify-between overflow-hidden">
        
        <div className="flex items-center gap-8 py-4">
            <div className="flex flex-col items-start gap-4">
                <span className="w-8 h-0.5 bg-our-orange"></span>
                <span className="w-5 h-0.5 bg-our-orange"></span>
            </div>

            <Link href="/" className=""><svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" fill="none" viewBox="0 0 31 25"><path fill="currentColor" d="M5.838.705H.5L9.94 24.28l2.743-6.92zM25.162.705H30.5L21.06 24.28l-2.743-6.92zM19.281.73h-7.562l3.732 9.538z"></path><path stroke="currentColor" stroke-width="0.099" d="M9.917 24.295 19.257.72M21.037 24.295 11.696.72"></path></svg></Link>
        </div>
        
        <nav className="nav max-md:hidden flex lg:flex-col gap-8 items-center justify-between w-full">
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className=" h-auto flex">
                    <p className="">I.</p>
                    <p className="hidden">Intro</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className="h-auto">
                    <p className="">II.</p>
                    <p className="hidden">Who I am</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className="w-full flex">
                    <p className="w-full">III.</p>
                    <p className="hidden">Experiences</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className="w-full flex">
                    <p className="w-full">IV.</p>
                    <p className="hidden">Archievements</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className="w-full flex">
                    <p className="w-full">V.</p>
                    <p className="hidden">Industries</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className="w-full flex">
                    <p className="w-full">VI.</p>
                    <p className="hidden">Recognitions</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90">
                <div className="w-full flex flex-nowrap">
                    <p className="w-full">VII.</p>
                    <p className="hidden">Get in Touch</p>
                </div>
                <div className="relative scroll w-full h-1 bg-white">
                    <div className="abosulte inset-0 bg-red-400"></div>
                </div>
            </Link>
        </nav>
        <button className="w-35 bg-our-orange text-our-black font-bold  self-stretch">Let&apos;s Connect</button>
    </header>
  )
}
export default Navbar