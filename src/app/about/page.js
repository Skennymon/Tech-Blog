import Scene from "../Components/Scene"

function About() {
    return (
        <>
            <section>
                <Scene/>
            </section>

            <article className="flex flex-col w-[69%] mt-7 items-center justify-center">
                <div className="flex bg-stone-700">
                    <h2>Hello</h2>
                </div>
            </article>
        </>
    )
}

export default About;