import Image from 'next/image'
import Link from 'next/link'

export default function RazerViperMini() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/Razer-Viper-Mini.png" alt="Razer Viper Mini" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/Razer-Viper-Gaming-8500dpi-Buttons/dp/B084W6W9WB?crid=2MUUE2GYJDGHN&dib=eyJ2IjoiMSJ9.e6mxoqJPBAovyJDLrgIrjhr78HTVELRAt5-V9zvQx9kSt8ZqT45plnMzbzEH7I8VRb5XBB79inc_gnzh1hMAPu8Zg8YK-wfWsZpOd0yJW2lM__7xl_qNhsBB0v8wuCmGo4j_BQOwvHGGOo4IXWUgpfLgB47ME5VedVbpe9v6q_s5xkNKXQYlhn-NzVNFtrzkPk_b2fbE741jQZosw7XQ--DltfSjqo8JVnMEWfOzX0kD5oNWJhdSWCFIJYiI7suktjZJ7HTDJ-LbEcC3fu_6AUJPW-Gmx-LPDsIWHsiW4JZ8O7CzOYbXnIlR9zAk07Yy6rFPti_E5lN4666igXfo2nzfEX9JYVvKYJAlaPthEi4.B52lBlT_aMQCaV-W9PnBvGi9PaeWsI26mgZjX-G2bTc&dib_tag=se&keywords=razer%2Bviper%2Bmini&qid=1742005876&s=electronics&sprefix=razer%2Bviper%2Bmini%2Celectronics%2C174&sr=1-3&th=1">
                        Razer Viper Mini
                    </Link>
                    <p>
                        Got this gifted from a friend during COVID (thanks Navid hehe). I honestly have no complaints with this mouse besides the scroll wheel tends to glitch out from time to time, but
                        this problems is easily fixed from blowing into the crevices where the wheel sits. It weighs at an astounding 61g so it&apos;s very light compared to a normal office mouse.
                        I&apos;ve been using this for 5 years and have no complaints 👍.
                    </p>

                </section>

            </section>




        </article>
    )
}