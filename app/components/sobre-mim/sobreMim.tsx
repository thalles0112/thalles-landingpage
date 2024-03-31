import Image from 'next/image'
import './style.css'

export default function SobreMim(){
    return(
        <div className="w-full flex justify-center">
            <div className="w-10/12">
                <div>
                    <h2>#Sobre mim</h2>    
                </div>
                <div className='flex responsive-2-column'>
                    <div className='top-0 overflow-hidden '>
                        <Image src={'/assets/thallespeb.png'} width={810} height={100} alt='thalles'/>
                    </div>

                    <div className='text-container'>
                        <h3>Vou falar um pouco de mim :)</h3>
                        <p>
                            Sem Chat GPT aqui ok? Bom, vamos lá! Me considero desenvolvedor Full Stack pleno/júnior, tenho vários projetos online, tanto de plataformas low code quanto totalmente
                            feitas no código (eu prefiro as com código, são mais divertidas de fazer), alguns desses projetos estão em produção outros na fase de desenvolvimento ainda e por aí vai.
                            Me considero pleno/junior pelo seguinte motivo: Eu sei me virar bem, sei o que, como e onde pesquisar quando necessário, entendo como uma API funciona (até porque nos meus 
                            projetos sou eu quem as desenvolvo), entendo como deve funcionar uma arquitetura de software, ou seja, como o backend e frontend devem se integrar, ter os recursos certos
                            para garantir que a regra do negócio seja cumprida no projeto.
                            <br/>
                            <br/>
                            No entanto eu nunca cheguei participar de um projeto grande de programação do início ao fim, sabe? Não tive a oportunidade ainda de dizer {`"`}Ok, isso aqui está publicado e está
                            tendo vários acessos, é sucesso!{`"`} Apenas tenho terminados alguns projetos de ecommerces feitos em plataformas low code e o de código que eu tenho em produção é para acesso de
                            pessoas específicas dentro de uma organização (acho que não é tão ruim assim né?). Enfim, esse é o motivo de eu me considerar o nível que falei anteriormente.
                        </p>

                        <h3>Meu aprendizado</h3>
                        <p>
                            Tudo que aprendi até hoje está baseado na experiências que obtive no desenvolvimento dos projetos que fiz, uns 3 cursos da udemy, tutorial no YouTube e documentação. Nunca tive
                            a oportunidade de conversar com um desenvolvedor mais experiente, portanto tive que aprender do jeito dificil mesmo ao longo de alguns anos de erros e acertos.
                            <br/>
                            Acredito o aprendizado mais importante que eu tenha obtido até hoje seja a organização do código de forma que se eu passar alguns meses sem mexer no projeto e depois voltar eu 
                            consiga entender facilmente cada componente, página e funcionalidades do aplicativo/site.
                        </p>

                        <h3>Objetivos de carreira</h3>
                        <p>Almejo chegar ao nível que eu possa gerir equipes, coordenar projetos de desenvolvimento, atuar diretamente nos resultados da empresa.</p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}