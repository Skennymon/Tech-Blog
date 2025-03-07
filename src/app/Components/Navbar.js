import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    
    return (
        <div className="justify-evenly items-center flex p-8 bg-linear-to-b from-background from-90% to-gray-800 rounded-2xl">
            <div className="justify-center items-center flex gap-7">
                <h2>Kenny Nguyen</h2>
                <Link href="/">About</Link>
                <a className="flex items-center justify-center" href="https://github.com/Skennymon" target="_blank">
                    <Image src="/github-logo.png" width={50} height={50} alt="Picture of github logo"/>
                    <h2>My Github</h2>
                </a>
            </div>

            <div className="flex">
                <Image src="/hamburger.svg" width={25} height={25} alt="Hamburger Icon"></Image>
            </div>
        </div>

    )
    
}

export default Navbar;