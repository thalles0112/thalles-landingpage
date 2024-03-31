import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";


export default function Footer(){
    const social = [
        {
            name: 'Whatsapp',
            link: 'https://wa.me/5522988545967',
            icone: AiOutlineWhatsApp
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/thalles-oliveira-90aab7178/',
            icone: AiOutlineLinkedin
        },

        {
            name: 'GitHub',
            link: 'https://github.com/thalles0112/',
            icone: AiOutlineGithub
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/naosouthalles/',
            icone: AiOutlineInstagram
        },
    ]

    return (
        <footer className="w-full flex justify-center items-center h-96 flex-col relative border-t mt-10">
            <div className="w-10/12 flex justify-evenly items-center">
                <div>
                    <h2 className="font-bold text-2xl">Vamos bater um papo?</h2>
                    <a href="mailto:athalles80@gmail.com" className="flex justify-center w-fit items-center h-12 rounded-3xl px-8 mt-5 button-bg">Contato</a>
                </div>
                
                <div>
                    <h2 className="font-normal text-xl">Minhas redes sociais</h2>
                    <div className="flex justify-evenly">
                    {social.map(rede=>{
                        return(
                            <a target="_blank" key={rede.name} href={rede.link} className="rounded-full border w-10 h-10 flex items-center justify-center">
                                <rede.icone size={28}/>
                            </a>
                        )
                    })}
                    </div>
                    
                </div>
            </div>

            <div className="bg-slate-900 w-full h-10 absolute bottom-0 left-0">
                <div className="w-fit mx-auto mt-2">Thalles Oliveira de Aguiar</div>
            </div>
        </footer>
    )
}