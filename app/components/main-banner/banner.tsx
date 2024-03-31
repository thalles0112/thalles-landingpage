import Image from "next/image";
import './style.css'
import Link from "next/link";

export default function HomeBanner(){
    return(
        <div className="flex justify-center banner-wrapper">
           <div className="flex items-center h-full justify-between w-10/12 relative">
            <div className="banner-text-wrapper z-10">
                <p className="text-3xl font-light">
                    Desenvolvo sites<br/> 
                    bonitos, responsivos<br/>
                    e escaláveis que <br/>
                    <strong className="font-bold">geram resultados</strong>
                </p>


                <Link href={"#contato"} className="flex justify-center w-fit items-center h-12 rounded-3xl px-8 bg-purple-700 mt-5 ">
                    Solicitar orçamento
                </Link>
            </div>

            <div className="bottom-0 right-0 absolute banner-image-wrapper h-full">
                <Image className="absolute bottom-0 left-0" src={'/assets/thalles.png'} width={550} height={700} alt="thalles oliveira"/>
            </div>
            
            </div>
        </div>
    )
}