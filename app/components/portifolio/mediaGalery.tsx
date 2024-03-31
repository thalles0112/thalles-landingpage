import Image from "next/image";
import './style.css'

export default function MediaGalery(){
    return(
        <div className="w-full flex flex-col items-center  justify-center media-galery">
            <h2 className="w-10/12 my-5 text-left text-3xl border-b border-b-gray-500">#Meus projetos</h2>
            <ul className="flex w-10/12 flex-wrap">
                <li>
                    <Image width={1080} height={1080} alt="flau lingeries" src={'/portifolio/FlauLingeries.png'}/>
                </li>
                <li>
                    <Image width={1080} height={1080} alt="flau lingeries" src={'/portifolio/FlauLingeries.png'}/>
                </li>
                <li>
                    <Image width={1080} height={1080} alt="flau lingeries" src={'/portifolio/FlauLingeries.png'}/>
                </li>
                <li>
                    <Image width={1080} height={1080} alt="flau lingeries" src={'/portifolio/FlauLingeries.png'}/>
                </li>
                <li>
                    <Image width={1080} height={1080} alt="flau lingeries" src={'/portifolio/FlauLingeries.png'}/>
                </li>
                <li>
                    <Image width={1080} height={1080} alt="flau lingeries" src={'/portifolio/FlauLingeries.png'}/>
                </li>
            </ul>
        </div>
    )
}