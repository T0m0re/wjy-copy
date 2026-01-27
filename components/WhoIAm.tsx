import Image from "next/image"

const WhoIAm = () => {
  return (
    <section className="relative overflow-hidden min-h-dvh">
        <div className="h-dvh absolute inset-0">
            <div className="relative w-full h-full">

            <Image src="/about.jpg" alt="about-me" width={1444} height={1444} className="w-full object-cover"/>
            </div>
        </div>
        <div className="relative lg:pl-16 lg:w-[calc(100%-64px)] lg:pt-[40rem] max-w-[800px] mx-auto">
            <h3 className="text-[4.3rem] leading-[85%] font-bold text-center">&quot;My mission is to help create the next generation of design leaders who think differently, challenge boldly, and create with purpose&rdquo;</h3>
        </div>
        {/* <div className="absolute bottom-0">
            <Image src="/about-2.png" width={780} height={700} alt="about"/>
        </div> */}
    </section>
  )
}
export default WhoIAm