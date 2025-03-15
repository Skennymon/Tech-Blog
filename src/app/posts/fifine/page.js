import Image from 'next/image'
import Link from 'next/link'

export default function Fifine() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/Fifine.png" alt="Razer Viper Mini" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/dp/B0D458QDVN?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1">
                        Fifine K688 + Boom Arm
                    </Link>
                    <p>
                        I was looking for a dynamic mic that didn&apos;t need an audio interface for and this fitted the bill. It takes both USB-C and XLR inputs which
                        means I could switch over to an audio interface setup in the future. The sound quality is very nice and my a lot of my buddies said it&apos;s way
                        better than my previous mic. The boom arm is a nice plus and I have no complaints with it.
                    </p>

                </section>

            </section>




        </article>
    )
}