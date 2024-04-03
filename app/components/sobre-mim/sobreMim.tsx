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
                        <Image className='w-fit mx-auto rounded-lg' src={'/assets/thalles.jpg'} width={810} height={100} alt='thalles'/>
                    </div>

                    <div className='text-container w-6/12'>
                        <h3>Desenvolvedor pleno especialista em operações e-commerce</h3>
                        <p>
                           Thalles é profissional da área de ecommerce apaixonado por desenvolver sites, integrar ferramentas, conhecer
                           novas plataformas. O que o faz ser diferente é o olhar estratégico, compromisso e responsabilidade com o sonho
                           dos seus clientes.
                        </p>

                        <br/>
                        <p>
                            Ao longo da sua carreira já participou de projetos de todos os tamanhos e de inúmeros segmentos de mercado, de moda
                            fitness até insumos para empresas.
                        </p>

                        <br/>
                        <p>Com todo esse background, Thalles será uma peça essencial para construir seu <strong>ecommerce do zero</strong></p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}