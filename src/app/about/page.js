import Scene from "../Components/Scene"
import Image from "next/image"
function About() {

    return (
        <>
            <section>
                <Scene/>
            </section>

            <article className="flex flex-col mt-7 items-center justify-center gap-7 mb-7">
                <div className="flex bg-stone-800 w-[40%] h-24 rounded-md items-center justify-center p-7">
                    <h1 className="text-4xl">Hello, I&apos;m an aspiring FullStack Dev!</h1>
                </div>

                <section className="flex justify-between items-center h-auto w-[30%] mt-6 rounded-md relative">
                    <div className="flex flex-col justify-center items-start gap-3">
                        <h1 className="font-extrabold text-5xl"> Kenny Nguyen</h1>
                        <h2>Aspiring FullStack / Tailwind / React / ExpressJS / Postgress/ MongoDB</h2>
                    </div>
                    <div className="w-auto h-auto rounded-full border overflow-hidden">
                        <Image src="/Kenny_2.png" alt={"Kenny"} quality={100} width={300} height={300} objectPosition="top"/>
                    </div>
                
                </section>

                <section className="w-[30%] flex flex-col gap-2">
                    <h1 className="text-4xl underline decoration-stone-700 font-extrabold">Current Interests</h1>
                    <h2 className="font-normal indent-4">
                        I&apos;m a current fulltime student at San Jose State University going for my bachelors in Computer Science. 
                        I&apos;m currently interested in pursuing FullStack engineering. 
                        I&apos;ve come to really like designing websites and seeing my ideas come to life. Currently deep diving into SQL and system design for the backend. 
                        I&apos;m getting more comfortable with the React Framework, but I still have a lot to learn. Also dabbled in ThreeJS and Blender to import 3D models into my projects.
                    </h2>
                </section>

                <section className="w-[30%] flex flex-col gap-4">          
                    <h1 className="text-4xl underline decoration-stone-700 font-extrabold">My Links</h1>
                    <a className="flex items-center gap-2" href="https://www.linkedin.com/in/kennyiscool/" target="_blank">
                        <h2 className="font-bold">LinkedIn</h2>
                        <Image src="/LinkedIn_icon.svg.png" alt={"LinkedIn Photo"} height={25} width={25} quality={50}/>
                    </a>
                    <a className="flex items-center gap-2" href="https://github.com/Skennymon" target="_blank">
                        <h2 className="font-bold">Github</h2>
                        <Image src="/github-logo.png" alt={"LinkedIn Photo"} height={25} width={25} quality={50}/>
                    </a>
                </section>
            </article>


            
        </>
    )
}

export default About;