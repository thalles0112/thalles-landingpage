import Image from "next/image";
import Link from "next/link";
import './style.css'

export default function HeaderDesktop(){
    return(
        <nav className="desktop-only nav-height w-full flex  border-slate-500 justify-center">
            <div className="h-full flex w-10/12 justify-between items-center">
                <Link href={'/'} className="h-full flex p-0">
                    <Image src={'/assets/to-logo.png'} width={128} height={128} alt="webdesigner"/>
                </Link>
                
                <ul className="flex items-center justify-evenly w-6/12">
                    <li>
                        <Link href={'#'}>
                            Início
                        </Link>
                        <div className="underline active"></div>
                    </li>

                    <li>
                        <Link href={'#portifolio'}>
                            Portifólio
                        </Link>
                        <div className="underline"></div>
                    </li>

                    <li>
                        <Link href={'#sobre-mim'}>
                            Sobre mim
                        </Link>
                        <div className="underline"></div>
                    </li>

                    <li>
                        <Link href={'#clientes'}>
                            Clientes
                        </Link>
                        <div className="underline"></div>
                    </li>
                </ul>

                <Link className="flex items-center h-12 rounded-3xl px-8 bg-purple-700" href={'#contato'}>
                    Contato
                </Link>
            </div>
        </nav>
    )
}