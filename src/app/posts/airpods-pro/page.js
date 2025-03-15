import Image from 'next/image'
import Link from 'next/link'

export default function Airpods() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-500 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/KennyWearingAirpods.png" alt="Kenny wearing Airpods" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/Apple-Cancellation-Transparency-Personalized-High-Fidelity/dp/B0D1XD1ZV3?crid=19QBO44XZ7OU9&dib=eyJ2IjoiMSJ9.ir_WKDO0H7oSrG8hvmFA7ZoDkJtfPrbcND03OU-_rNQXxYfPcIizMLy23aSycKoRYNAfZIpg3btOwaN6Or0JfRR5pWKOCblUk_YlFsk8GjlL9BayuTT_QSUSSZYSNJ7CsHJ2WWTl_F0yos5GTjXIB0mgcG-u8m4nYZuYALHQmAprUTBDGRfBA8IfUV3LbI0VpNP62Xtbm3kDwELzLzPaXBAnEfU9oqueUXXwbNeG5T0.TqrHE7YJx29GpbA4OXvH4IHB6coQ08NRzlIOXM1y2yI&dib_tag=se&keywords=airpods+pro+2&qid=1741935043&sprefix=airpods+pro+%2Caps%2C1030&sr=8-3">
                        Airpods Pro Gen 2
                    </Link>
                    <p>The good ol&apos; earbuds that most of you guys probably already know. I bought these a couple years ago because my previous pair, &nbsp; 
                        <Link href="https://www.amazon.com/Sony-WF-1000XM4-Industry-Canceling-Headphones/dp/B094C4VDJZ" target="_blank"><span className="underline font-bold decoration-amber-700 hover:text-amber-700">The Sony WF-1000XM4,</span></Link>
                         &nbsp;hit the can after the battery died. In terms of sound quality, it does the job just fine, it&apos;s just not anything mind blowing in my opinion. The noise cancellation is excellent in my opinion because
                         of my experience of riding public transporation frequently to school. It completely blocks out any engine noise or people that may be talking near me. The noise transparency is good, but in my experience, it might
                         be a bit too good because I hear more of the evironment around me than my music.
                    </p>

                </section>

            </section>




        </article>
    )
}

