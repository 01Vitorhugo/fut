import { useState } from "react"



export default function Coletes() {

    const [numeros, setNumeros] = useState(0);

    const numeroAtt = (e) => {
        setNumeros(e.target.value);

    }


    return (
        <div className=" h-screen  flex flex-col justify-center items-center relative">
            <nav className="absolute top-64 right-0 h-9 w-24 text-colorText ">
               <h1>N° times {numeros}</h1> 
            </nav>


            <section className="container w-full flex  justify-center items-center">

                <input type="number"
                    placeholder="Número de times"
                    onChange={numeroAtt}
                    className=" w-80 h-10 rounded-[30px] text-center	" />

            </section>

        </div>

    )
}