import Image from "next/image"

const WhoIAm = () => {
  return (
    <section className="relative overflow-hidden">
        <div className="w-full">
            <Image src="/about.jpg" alt="about-me" width={1444} height={1444} className="w-full"/>
        </div>
    </section>
  )
}
export default WhoIAm