import Scene from "../Components/Scene"
import Image from "next/image"
function About() {

    return (
        <>
            <section>
                <Scene/>
            </section>

            <article className="flex flex-col mt-7 items-center justify-center">
                <div className="flex bg-stone-800 w-[30%] h-24 rounded-full items-center justify-center p-7">
                    <h1 className="text-4xl">Hello, I&apos;m an aspiring FullStack Dev!</h1>
                </div>

                <section className="flex justify-evenly h-44 w-[30%] mt-6 rounded-md relative gap-3 p-7">
                    <div className="flex flex-col justify-center items-start gap-3">
                        <h1 className="font-extrabold text-5xl"> Kenny Nguyen</h1>
                        <h2>Aspiring FullStack / Tailwind / React / ExpressJS / Postgress/ MongoDB</h2>
                    </div>
                    <Image src="/Kenny_2.png" alt={"Kenny"} width={125} height={125} quality={100} className="rounded-full object-cover"/>
                </section>
                <section className="flex flex-col w-[30%] items-center justify-center border px-12">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl underline decoration-stone-700 font-extrabold">Current Interests</h1>
                        <h2 className="text-1xl indent-4">
                            I&apos;m a current fulltime student at San Jose State University going for my bachelors in Computer Science. 
                            I&apos;m currently interested in pursuing FullStack engineering. 
                            I&apos;ve come to really like designing websites and seeing my ideas come to life. Currently deep diving into SQL and system design for the backend. 
                            I&apos;m getting more comfortable with the React Framework, but I still have a lot to learn. Also dabbled in ThreeJS and Blender to import 3D models into my projects.
                            </h2>
                    </div>
                </section>
            </article>


            
        </>
    )
}

export default About;