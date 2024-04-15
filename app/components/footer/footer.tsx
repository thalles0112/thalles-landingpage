import { AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";


export default function Footer(){
    const social = [
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
            name: 'Mail',
            link: 'mailto:athalles80@gmail.com',
            icone: AiOutlineMail
        },
        {
            name: 'Whatsapp',
            link: 'https://wa.me/5522988545967',
            icone: AiOutlineWhatsApp
        }
    ]

    return (
        <footer id="contato" className="w-full flex justify-center items-center h-80 flex-col relative border-t mt-10">
            <div className="w-10/12 flex flex-col justify-evenly items-center">
                <h1 className="text-2xl font-bold mb-5">Thalles Oliveira</h1>
                
                <div>
                    <h2 className="font-normal mb-3 text-md">Minhas redes sociais, entre em contato!</h2>
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

           
        </footer>
    )
}