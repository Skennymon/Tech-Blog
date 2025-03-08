import Image from 'next/image'
import Link from 'next/link'
function Card({ photo, text, title, category }) {
    return (
        <Link href="/">
            <div className="flex flex-col relative items-center justify-start gap-3">
                <Image src={photo} height={500} width={500} alt="Photo"></Image>
                <h2 className="break-words max-w-full font-extrabold txt-2xl">{title}</h2>
                <h2 className="break-words max-w-full">{text}</h2>
            </div>
        </Link>
    )
}

export default Card;