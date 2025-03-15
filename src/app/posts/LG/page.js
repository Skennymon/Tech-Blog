import Image from 'next/image'
import Link from 'next/link'

export default function LG() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/LG.png" alt="LG Monitor" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/dp/B093MTSTKD?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1">
                        LG 27GP850-B Ultragear
                    </Link>
                    <p>
                        This monitor is pretty good for the price I got it for which was around $250. The 185hz is a night and day difference from my previous 75hz monitor and jumping from 1080p to 1440p was amazing.
                        The colors are pretty accurate in my unporfessional opinion. My biggest gripe with this monitor is that the contrast ratio is really bad (even for an IPS monitor). The blacks look very gray in dark scenes and the backlight bleed
                        is horrendous (especially if you like to game in darker environments). The backlight bleed in particular isn&apos;t too noticeable in a lit room, but it&apos;s very very noticeable in a dark room. I wouldn&apos;t recommend this
                        if want the best picture quality for watching movies or playing single player games. Other than that, it&apos;s fine for my use case.
                    </p>

                </section>

            </section>




        </article>
    )
}