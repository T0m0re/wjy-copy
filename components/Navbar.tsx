import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <header className="fixed top-0 left-0 bg-nav-bg max-sm:pl-4 max-md:w-full lg:h-dvh w-16 flex lg:flex-col items-center overflow-hidden lg:gap-6">
        <div className="flex items-center gap-8 py-4">
            <div className="flex flex-col items-start gap-2">
                <span className="w-8 h-0.5 bg-peach-cream"></span>
                <span className="w-5 h-0.5 bg-peach-cream"></span>
            </div>
            <Link href="/" className="text-peach-cream lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" fill="none" viewBox="0 0 31 25"><path fill="currentColor" d="M5.838.705H.5L9.94 24.28l2.743-6.92zM25.162.705H30.5L21.06 24.28l-2.743-6.92zM19.281.73h-7.562l3.732 9.538z"></path><path stroke="currentColor" stroke-width="0.099" d="M9.917 24.295 19.257.72M21.037 24.295 11.696.72"></path></svg></Link>

        </div>
        
        <nav className="lg:flex-5 nav max-md:hidden flex lg:flex-col gap-4 items-center w-full relative">
            <Link href="#intro" className="flex flex-col justify-between w-border flex-none">
                <div className="group flex items-center lg:rotate-90 h-auto">
                    <p className="flex-none">I.</p>
                    <p className="w-0 group-hover:w-full flex-none overflow-hidden">
                            Intro
                    </p>
                </div>
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90 ">
                <div className="h-auto">
                    <p className="">II.</p>
                    <p className="hidden">Who I am</p>
                </div>
                
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90 ">
                <div className="w-full flex">
                    <p className="w-full">III.</p>
                    <p className="hidden">Experiences</p>
                </div>
                
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90 ">
                <div className="w-full flex">
                    <p className="w-full">IV.</p>
                    <p className="hidden">Archievements</p>
                </div>
            
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90 ">
                <div className="w-full flex">
                    <p className="w-full">V.</p>
                    <p className="hidden">Industries</p>
                </div>
                
            </Link>
            <Link href="#intro" className="flex flex-col justify-between lg:rotate-90 border border-white">
                <div className="w-full flex">
                    <p className="w-full">VI.</p>
                    <p className="hidden">Recognitions</p>
                </div>
                
            </Link>
            <Link href="#intro" className="flex flex-col justify-between border border-white w-fit">
                <div className="w-full flex items-center  group border border-pink-800 lg:rotate-90">
                    <p className="">VII.</p>
                    <p className=" border border-red-300">Get in Touch</p>
                </div>
                
            </Link>
        </nav>
        <button className="lg:flex-2 max-md:w-30  bg-our-orange">
            <p className="text-sm lg:rotate-90 text-our-black font-bold text-nowrap uppercase">Let&apos;s Connect</p>
        </button>
    </header>
    </>
  )
}
export default Navbar