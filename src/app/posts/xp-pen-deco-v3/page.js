import Image from 'next/image'
import Link from 'next/link'

export default function XPPenDecoV3() {
    return (
        <article className="flex items-center justify-center mt-7 mb-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-500 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/XP-Pen.png" alt="XP Pen" width={1024} height={500}/>
                </div>
                
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/dp/B07VKB37HZ?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1">
                        XP-Pen Deco V3
                    </Link>
                    <p>
                        Let me get one thing clear and that is I&apos;m not a good artist by any means lol. I bought this for fun mostly because I wanted to get into drawing.
                        I&apos;ve made a little progress, but school has forced me to push it to the side. I still enjoy it though and I hope to find some time for it soon.
                    </p>

                    <h1 className="text-4xl underline font-extrabold">A thing I drew lol</h1>
                    <div className="flex flex-col gap-0">
                        <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                            <Image src="/KennyDrawing.png" alt="Kenny Drawing" width={1024} height={500}/>
                        </div>
                        <Link className="text-2xl hover:text-amber-700" target="_blank" href="https://www.pinterest.com/pin/222857881552731342/">Reference</Link>    
                    </div>
                </section>

            </section>




        </article>
    )
}