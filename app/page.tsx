import Image from "next/image";
import HomeBanner from "./components/main-banner/banner";
import MediaGalery from "./components/portifolio/mediaGalery";
import SobreMim from "./components/sobre-mim/sobreMim";
import Clientes from "./components/clientes/clientes";
import Footer from "./components/footer/footer";
import Whatsapp from './components/whatsapp/whatsapp'
export default function Home() {
  return (
    <main className="page-height">

    

     <section>
      <HomeBanner/>
     </section>

     <section className="mt-10" id="portifolio">
      <MediaGalery/>
     </section>
     
     <section className="mt-10" id="sobre-mim">
      <SobreMim/>
     </section>

     <section className="mt-10" id="stacks">
      <Clientes/>
     </section>

     <Footer/>

     <Whatsapp/>
    </main>
  );
}
