import Image from 'next/image'
import './style.css'

export default function SobreMim(){
    return(
        <div className="w-full flex justify-center">
            <div className="w-10/12">
                <div>
                    <h2 className="w-full my-5 text-left text-3xl border-b border-b-gray-500">#Sobre mim</h2>    
                </div>
                <div className='flex justify-evenly'>
                    <div className=''>
                        <Image src={'/assets/thalles.png'} width={810} height={100} alt='thalles'/>
                    </div>

                    <div className=''>
                        <h3>Conheça Thalles: Um Desenvolvedor Web Experiente</h3>
                        <p>Com três anos de experiência no desenvolvimento de e-commerces, Thalles traz consigo um vasto conhecimento em plataformas populares como Loja Integrada, Tray, Nuvemshop e Baggy. Sua expertise vai além do comércio eletrônico, estendendo-se ao desenvolvimento de webapps utilizando Next.js e implementação de backend com Python. Além disso, Thalles destaca-se na criação de aplicativos móveis com React Native, oferecendo soluções abrangentes e adaptáveis para uma variedade de necessidades de seus clientes.</p>

                        <h3>Excelência em Tecnologia: O Legado de Três Anos de Trabalho Dedicado</h3>
                        <p>Ao longo de sua jornada como desenvolvedor web, Thalles tem se destacado pela sua dedicação em oferecer soluções tecnológicas de alta qualidade. Seja desenvolvendo e-commerces personalizados para empresas de diversos segmentos ou criando webapps eficientes e intuitivos, Thalles demonstra um compromisso constante com a excelência técnica e a satisfação do cliente. Sua habilidade em navegar por diversas plataformas e tecnologias o torna um ativo valioso para qualquer projeto digital.</p>

                        <h3>Visão Futurista e Inovação Constante: O Futuro Brilhante de Thalles no Mundo Digital</h3>
                        <p>Olhando para o futuro, Thalles continua a se desafiar e a buscar novas formas de inovar no mundo digital. Com uma mente aberta e uma paixão pela aprendizagem contínua, ele está sempre pronto para enfrentar novos desafios e abraçar as últimas tendências tecnológicas. Seja desenvolvendo e-commerces mais eficientes, criando experiências de usuário mais envolventes ou explorando novas fronteiras na tecnologia móvel, Thalles está preparado para liderar o caminho rumo a um futuro digital ainda mais brilhante.</p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}