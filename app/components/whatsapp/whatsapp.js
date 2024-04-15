import { AiOutlineWhatsApp } from "react-icons/ai"
export default function Whatsapp(){
    return(
        <a target="_blank" href="https://wa.me/5522988545967" className="fixed bottom-20 right-10 bg-green-500 rounded-full p-2 flex justify-center items-center">
            <AiOutlineWhatsApp color="#fff" size={50}/>
        </a>
    )
}