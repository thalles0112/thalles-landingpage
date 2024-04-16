import Image from "next/image";
import './style.css'
import Link from "next/link";

export default function MediaGalery(){
    const portifolio = [
        {
            id: 1,
            name: 'FastCMS',
            image: '/portifolio/fastcms.png',
            desc: 'CMS Portátil inspirado no contentful que estou desenvolvendo para integrar com qualquer projeto seja web ou nativo.',
            technology: 'ReactJS'
        },
        {
            id: 2,
            name: 'Task Manager',
            image: '/portifolio/taskmanager.png',
            desc: 'Web App baseado no Trello, com conceito de cards e listas, automações, opção de convidar usuário para o quadro, etc.',
            technology: 'ReactJS'

        },
        {
            id: 3,
            name: 'Movegiro',
            image: '/portifolio/movegiro.png',
            desc: 'Ecommerce voltado para venda de peças de motocicletas majoritariamente utilizadas por motoboys.',
            technology: 'Loja integrada'
        },
        {
            id: 4,
            name: 'ISirius',
            image: '/portifolio/isirius.png',
            desc: 'Loja online de acessórios como capa, case e carregador para equipamentos apple como Iphone, Mac, etc.',
            technology: 'Tray'
        },
        {
            id: 5,
            name: 'Hentfy',
            image: '/portifolio/hentfy.png',
            desc: 'Um projeto pessoal que comecei desenvolver com o intuito de criar uma plataforma de assistir vídeo fácil de usar e visualmente organizada.',
            technology: 'Next JS'
        },
        {
            id: 6,
            name: 'LTV Dashboard',
            image: '/portifolio/ltvdashboard.png',
            desc: 'Uma dashboard que mede o ciclo de vida de um cliente em um ecommerce. Ela consegue identificar de quanto em quanto tempo os clientes compram no site e mmuito mais.',
            technology: 'React JS'
        },
    ]
    return(
        <div className="w-full flex flex-col items-center  justify-center media-galery">
            <div className="w-10/12">
                <h2  className='mb-5'>#Meus projetos</h2>
                
                <ul className="flex flex-wrap mx-auto">
                    {portifolio.map(projeto=>{
                        return(

                            <li key={projeto.id}>
                                <Link href={`/project/${projeto.id}`}>
                                <Image width={1080} height={1080} alt={projeto.name} src={projeto.image}/>
                                <div className="project-description">
                                    <h2>{projeto.name}</h2>
                                    {projeto.desc}
                                    <br/>
                                    
                                    <div className="mt-4">tecnologia: {projeto.technology}</div>
                                </div>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )
}