import Image from 'next/image'
import Link from 'next/link'

export default function LG() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/Acer.png" alt="LG Monitor" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5 mb-7">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.bestbuy.com/site/acer-s200hql-19-5-led-monitor-black/4281801.p?skuId=4281801">
                        Acer S200HQL
                    </Link>
                    <p>
                        This monitor is a hand-me-down from my brother and it works fine for it&apos;s intended use (discord lol). Although, ever since I&apos;ve upgraded my main monitor to 185hz, going from that to the pewny 75hz on this monitor
                        feels very janky haha.
                    </p>

                </section>

            </section>




        </article>
    )
}