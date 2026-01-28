import Image from "next/image"

const WhoIAm = () => {
  return (
    <section className="relative overflow-hidden min-h-dvh">
        <div className="h-dvh absolute inset-0">
            <div className="relative w-full h-full">

            <Image src="/about.jpg" alt="about-me" width={1444} height={1444} className="w-full object-cover"/>
            </div>
        </div>
        <div className="relative lg:pl-16 lg:w-[calc(100%-64px)] lg:pt-[35rem] lg:mb-20 max-w-[800px] mx-auto">
            <h3 className="text-[4.5rem] leading-[95%] font-bold text-center text-warm-sand">&quot;My mission is to help create the next generation of design leaders who think differently, challenge boldly, and create with purpose&rdquo;</h3>
        </div>
        <div className="relative min-h-dvh w-full flex items-center border border-amber-700 lg:w-[calc(100%-64px)] lg:ml-16 overflow-hidden z-1000">
            <Image src="/about-2.png" width={500} height={700} alt="about" className="relative border border-red-400"/>
            
            <div className="absolute inset-0 top-0 bottom-0 flex flex-col items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316">
                    <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316">
                    <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316">
                    <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                    </path>
                </svg>
            </div>
        </div>
        <div className="relative min-h-svh flex justify-end border border-white lg:w-[calc(100%-64px)] lg:ml-16">
            <Image src="/about-3.png" width={900} height={800} alt="about" className="relative lg:-mr-105 h-full lg:w-230"/>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border text-center text-warm-sand">
                <h1 className="text-[5.4rem] leading-[88%] font-bold">RetroFuturist</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Visual Minamalist</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Tech Optimist</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Design Geek</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Change Agent</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Vibestigator</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Caffeine Addict</h1>
                <h1 className="text-[5.4rem] leading-[88%] font-bold">Community Builder</h1>
            </div>

        </div>
    </section>
  )
}
export default WhoIAm