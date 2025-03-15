import Image from 'next/image'
import Link from 'next/link'

export default function KeychronC1() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/Keychron-C1_2.png" alt="Kenny wearing airpods" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/Keychron-Swappable-Mechanical-Keyboard-Tenkeyless/dp/B08CNBL4Z4">
                        Keychron C1
                    </Link>
                    <p>
                        Bought this around 2 years ago and it&apos;s pretty good. I got the gatern brown switch variant as I prefer tacticle switches or linears. It&apos;s mostly made of plastic, but it&apos;s pretty durable as
                        I once spilled some Coca-Cola over it and it was fine. It comes prelubed but you could easily lube it more if you like. The spacebar sounds okay as you could hear some rattling from the stabilizers, but it seems to vary from unit to unit. 
                        Something that&apos;s nice about this keyboard is that it&apos;s hot swappable which means you can easily mod it. 
                        I do plan on switching out the switches and keycaps in the future for a more creamy sounding profile.
                    </p>

                </section>

            </section>




        </article>
    )
}

