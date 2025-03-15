import Image from 'next/image'
import Link from 'next/link'

export default function AudioTechnicaM40x() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/KennyWearingM40.JPG" alt="Kenny wearing airpods" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/Audio-Technica-ATHM40x-Professional-Monitor-Headphones/dp/B00HVLUR54?th=1">
                        Audio Technica ATH M40x
                    </Link>
                    <p>
                        I got these gifted from an aunt around 2-3 years ago and it&apos;s pretty good. It&apos;s more geared toward people who work in production for music and audio engineering, but it&apos;s not bad for general listening.
                        I will say if you are a bass head, these are NOT it. Because it&apos;s a studio headphone, the sound is very neutral in order to get the most accurate sound. If you&apos;re into that type of this, then these heaphones are a solid pick 👍.
                    </p>

                </section>

            </section>




        </article>
    )
}

