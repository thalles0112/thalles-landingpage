import Image from 'next/image'
import './style.css'

export default function SobreMim(){
    return(
        <div className="w-full flex justify-center">
            <div className="w-10/12">
                <div className='mb-5'>
                    <h2>#Sobre mim</h2>    
                </div>
                <div className='flex responsive-2-column gap-x-40 items-center'>
                    <div className='top-0 overflow-hidden mx-auto  '>
                        <Image className='w-fit mx-auto rounded-lg' src={'/assets/thallesbonito.jpeg'} width={410} height={100} alt='thalles'/>
                    </div>

                    <div className='text-container w-6/12'>
                        <h3>Desenvolvedor web full stack</h3>
                        <p>
                        Com uma sólida experiência em desenvolvimento web frontend, trago uma 
                        paixão pela criação de interfaces intuitivas e visualmente atraentes. 
                        Com proficiência em linguagens como HTML, CSS e JavaScript.
                        </p>

                        <br/>
                        <p>
                            busco constantemente integrar as últimas tendências e 
                            melhores práticas para proporcionar uma experiência de usuário excepcional. 
                        </p>

                        <br/>
                        <p> Ao longo da minha jornada, adquiri habilidades em frameworks como  
                            <strong> ReactJS</strong> e <strong>NextJS</strong>, além de uma compreensão profunda de design responsivo 
                            e acessibilidade. Estou comprometido em transformar conceitos em realidade 
                            digital, elevando a experiência do usuário a novos patamares.
                        </p>
                        <br/>
                        <p>
                            Com uma bagagem sólida no backend, especialmente no uso do framework <strong>Django</strong>, 
                            minha jornada foi marcada por uma constante busca pelo aprimoramento e pela aplicação prática dos conhecimentos adquiridos. 
                            Com cada linha de código escrita, cada problema resolvido e cada projeto concluído, 
                            minha confiança e habilidade no uso do Django cresceram significativamente. 
                            A familiaridade com suas funcionalidades principais, como models, views, templates e ORM, 
                            tornou-se natural, permitindo-me focar em soluções inovadoras e eficientes para as demandas específicas de cada projeto.
                        </p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}