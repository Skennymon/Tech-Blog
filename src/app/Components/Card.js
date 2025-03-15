import Image from 'next/image'
import Link from 'next/link'
function Card({ photo, text, title, category, url }) {
    
    // commit 
    
    return (
        <Link href={url}>
            <div className="flex flex-col relative items-center justify-start gap-3 hover:bg-neutral-700 p-2 rounded-md">
                <Image src={photo} height={500} width={500} alt="Photo" className="border rounded-4xl border-stone-700 shadow-sm shadow-neutral-600"></Image>
                <h2 className="break-words max-w-full font-extrabold txt-2xl">{title}</h2>
                <h2 className="break-words max-w-full">{text}</h2>
            </div>
        </Link>
    )
}

export default Card;