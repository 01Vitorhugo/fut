import { useState, useEffect } from "react"
import Azul from '../../image/azul.png'
import Vermelho from '../../image/vermelho.png'
import Scolete from '../../image/semCamisa.png'



export default function Coletes() {

    const [numeros, setNumeros] = useState(0);
    const array = ['azul', 'vermelho', 'semCamisa'];
    const [itemSorteado, setItemSorteado] = useState([]);

    const [azul, setAzul] = useState(0)
    const [vermelho, setVermelho] = useState(0)
    const [Scamisa, setScamisa] = useState(0)


    const numeroAtt = (e) => {
        setNumeros(e.target.value);

    }


    const verificar = () => {
        if (numeros.length <= 2) {
            const indiceAleatorio = Math.floor(Math.random() * array.length);
            return array[indiceAleatorio];

        }
    };
    const sorteio = () => {
        const item = verificar();
        setItemSorteado(item);
    };

    useEffect(() => {
        if (itemSorteado === 'azul') { 
            setAzul(azul + 1); 
        }
        if (itemSorteado === 'vermelho') { 
            setVermelho(vermelho + 1); 
        }
        if (itemSorteado === 'semCamisa') { 
            setScamisa(Scamisa + 1); 
        }

        console.log(`O item sorteado foi: ${itemSorteado}`);
    }, [itemSorteado]);



    return (
        <div className=" h-full  flex flex-col justify-center items-center relative">
            <nav className="absolute top-10 right-0 h-9 w-24 text-colorText ">
                <h1>N° times {numeros}</h1>
            </nav>

            {numeros <= 2 &&
                <div className=" bg-colorTrans absolute top-10 right-60 h-auto w-auto p-5">
                    <h1 className="text-sm">AZUL = {azul}</h1>
                    <h1 className="text-sm">VERMELHO = {vermelho}</h1>
                </div>
            }
            {numeros >= 3 &&
                <div className=" bg-colorTrans absolute top-10 right-60 h-auto w-auto p-5">
                    <h1 className="text-sm">AZUL = {azul}</h1>
                    <h1 className="text-sm">VERMELHO = {vermelho}</h1>
                    <h1 className="text-sm">S/CAMISA = {Scamisa}  </h1>
                </div>
            }


            <section className="container w-full flex flex-col justify-center items-center h-auto">

                <input type="number"
                    placeholder="Número de times"
                    onChange={numeroAtt}
                    className=" w-80 h-10 rounded-[30px] text-center mb-10"
                />

                {numeros !== 0 &&
                    <button
                        className="bg-colorText h-28 w-28 rounded-full  flex  justify-center items-center"
                        onClick={sorteio}
                    >
                        <h1>Sortear</h1>
                    </button>

                }


                <div >

                    {itemSorteado === 'azul' &&

                        <figure className=" w-32 h-32  mt-9 overflow-x-hidden">
                            <img src={Azul} alt="colete azul" 
                            className="w-full h-full"/>
                        </figure>
                    }

                    {itemSorteado === 'vermelho' &&

                        <figure className=" w-32 h-32  mt-9 overflow-x-hidden">
                            <img src={Vermelho} alt="colete vermelho" 
                            className="w-full h-full"/>
                        </figure>
                    }

                    {itemSorteado === 'semCamisa' &&

                        <figure className=" w-32 h-32 mt-9 overflow-x-hidden">
                            <img src={Scolete} alt="sem colete" 
                            className="w-full h-full"/>
                        </figure>
                    }

                </div>

            </section>

        </div>

    )
}