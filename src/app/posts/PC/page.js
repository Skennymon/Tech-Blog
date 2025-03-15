import Image from 'next/image'
import Link from 'next/link'

export default function PC() {
    return (
        <article className="flex items-center justify-center mt-7">
            
            <section className="flex flex-col items-center justify-center w-[32%] gap-5">
                <div className="border border-neutral-300 rounded-lg overflow-hidden w-[100%]">
                    <Image src="/PC.png" alt="PC" width={1024} height={500}/>
                </div>
                
                <section className="flex flex-col items-start justify-start w-[100%] gap-5">
                    <Link className="font-extrabold text-4xl underline decoration-amber-700 hover:text-amber-700" target="_blank" 
                    href="https://www.amazon.com/dp/B0D458QDVN?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1">
                        My Main PC
                    </Link>

                    <div>
                        <h2 className="text-2xl font-extrabold underline">Specs</h2>
                        <ul className="custom-list">
                            <li><Link target="_blank" className="hover:text-amber-700" href="https://www.amazon.com/AMD-7600-12-Thread-Unlocked-Processor/dp/B0BMQJWBDM?crid=X75GJMDH2N55&dib=eyJ2IjoiMSJ9.mTGhUJwyH8XYlNBozYR3-Pzkxjxuh-lai-MgW7AxZ2AKsrwQhLA24cCpJp7WbMDBey8bXpvidCAiU4crPNwxilLz3Ms_Ttm8NsBztADvgFEXI3nmqFSoEgLDZma3rqaBI2Ja2JMpgFYUmXffq35XfP57cyYxBoUkXeu1lKYfZ-Fnx4UaIZ4u9P2et2mOKzMq-7AoZHf3gLxZHTHxUL2vgNlgx2P2H6UA-QXt8SB_nP0.9El2fKr3MnTMjCPHz67rqh3vEZXS2CjcNC75reX8uXI&dib_tag=se&keywords=amd+r5+7600&qid=1742009305&sprefix=amd+r5+7600%2Caps%2C203&sr=8-1">CPU: Ryzen 5 7600</Link></li>
                            <li><Link target="_blank" className="hover:text-amber-700" href="https://www.amazon.com/Thermalright-Peerless-SE-Aluminium-Technology/dp/B09LGY38L4?crid=13U3C4S4FOL7E&dib=eyJ2IjoiMSJ9.FKtUdF4vktq8dajHPEkZt2CjFiDF5wid_IumkNb6sq4JchDTQxCJc6FkJLnVmgGnfkyUPXiW5Mr5R291OpQLT1FKWydWgrc7dt7tKTCmxOLMRdTE5YEE1V28kIfKxph-1nesTAijGqKsxDjg6Xg1xQmkYAblwwFg7VjNo87B3t0CsxtnnlEoK-xS9fa_yhDsyyj4M_OLXyIWFKtO9Gu4w0C2WmVcVauRYqhacJAgozY.8NS2A9Rda2D0JNYVwRQ_RIwW4Ny5lZGgKL7r6Zdkw44&dib_tag=se&keywords=cpu%2Bcooler%2Bassassin%2B120&qid=1742008941&sprefix=cpu%2Bcooler%2Bassassin%2Caps%2C167&sr=8-3&th=1">CPU Cooler: Thermalright Peerless Assassin 120</Link></li>
                            <li><Link target="_blank" className="hover:text-amber-700" href="https://www.xfxforce.com/where-to-buy-2">GPU: RX 6700XT</Link></li>
                            <li><Link target="_blank" className="hover:text-amber-700" href="https://www.amazon.com/CORSAIR-VENGEANCE-5600MHz-Compatible-Computer/dp/B0CJ8XQBHY?crid=3CG7LP340W6H1&dib=eyJ2IjoiMSJ9.evr5uRKD8rJnQZbe25zED2z7Rg3j6nTWTqJ7MD_ViJ6-dToZX5LSA0LJ6v4EQf0URU5j80uG1g_3ZH5js0KLGqOB2MuFpgzuAM7zFi2QiB1RRYtX93bbeuHy1zgDIgCtjw9VNN6aHI4xp3C6dx1KwcJNxyzpxEmDwqk0zbvQa4dyvRYw5hmjc1VX_Q1mqVZy8nhCzLGhAz2v4zHV5-RLT0CDJypZ3LR5lDLt06sCgo4.Y4BwjoBTGwKh136wfyEDq6EZ_8M2Ve2nUomFmQOLgFQ&dib_tag=se&keywords=corsair+ddr5+32gb&qid=1742009531&sprefix=corasir+ddr5+32gb%2Caps%2C165&sr=8-3&ufe=app_do%3Aamzn1.fos.9fe8cbfa-bf43-43d1-a707-3f4e65a4b666">RAM: Corsair Vengeance DDR5 RAM 32GB 2x16GB</Link></li>
                            <li><Link target="_blank" className="hover:text-amber-700" href="https://www.amazon.com/dp/B093RYWV4B?_encoding=UTF8&th=1">Case: Montech Air 100</Link></li>
                            <li><Link target="_blank" className="hover:text-amber-700" href="https://www.amazon.com/Cooler-Master-Efficiency-Included-Warranty/dp/B08LP6WS35?crid=3VOAUL4F5PDDC&dib=eyJ2IjoiMSJ9.5yOFOif0HAVt4u3oeUKgK76R6f-rMedlQZHjeGZ4RdcnGVj7V30rnLDvu7txMK5WmRBxVjlsmWOZU3ptuKHemVO9X8bNJ8k0-7ZB8FBm9V4rj3QJYW6YOsWXBeStZ8Ye8vFHmYUMSsU8Bq4BqhMo-T7D6i1OPRqcdIQrYGapG4_tSQMlY1Upr_zJyTyM9IEtpV-vtBq9QsDWixHIISralYz5bpxZWfBtbSE95mFefvs--C_0KSXnGyB5qg8hKS1PqpOjR4U5Qm4FpG1Red6zsROcLxlM-OwJDcevDQjrl1pRVur59da0RdjL1srYCTAmki9PN7PpCt_0UIGbtSLNrsZwsf0g4ZbG-cq55tH42BM.LSE9uqIzadMlAlsegFWr6qXSuCRqvH65ozMUZM2hZDQ&dib_tag=se&keywords=cooler+master+v850&qid=1742009579&s=electronics&sprefix=cooler+master+v850%2Celectronics%2C158&sr=1-1">PSU: Cooler Master V850 Gold</Link></li>
                        </ul>
                    </div>

                    <p>
                        I built this PC before my first year at SJSU and it&aspos;s amazing. It runs every game at throw at it with little trouble and I never have to worry if
                        I can run a game or not anymore (for now). Something funny that happened when I was building this PC was that the power supply my Aunt gave me sort of crapped itself
                        on the first boot, so we had to buy another one LMAO.
                    </p>

                </section>

            </section>




        </article>
    )
}