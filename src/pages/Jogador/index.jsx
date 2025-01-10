import { useState } from "react"


export default function Jogador() {
    const [jogador, setJogador] = useState('');
    const [arrayJogador, setArrayJogador] = useState([])
    const [times, setTimes] = useState([]);

    const nomeJagador = (e) => {
        setJogador(e.target.value);
    }

    function AdcJogadorArray() {
        var array = arrayJogador;
        array.push(jogador)
        setJogador('');

    }
    const valorAleatorioERemover = (array) => {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        const valor = array[indiceAleatorio];
        array.splice(indiceAleatorio, 1);
        return valor;
    };


    const adicionarJogador = () => {
        const jogadoresDisponiveis = [...arrayJogador];
        const novosTimes = [];
        while (jogadoresDisponiveis.length > 0) {
            const novoTime = {};
            for (let i = 1; i <= 5; i++) {
                if (jogadoresDisponiveis.length > 0) {
                    novoTime[`jogador${i}`] = valorAleatorioERemover(jogadoresDisponiveis);
                }
            }
            novosTimes.push(novoTime);
        }
        setTimes(novosTimes);
        setArrayJogador([]);
    };

    




    return (
        <div className=" h-screen  flex flex-col justify-center items-center ">

            {arrayJogador.length <= 1 ?
                <h1 className="text-colorText">{arrayJogador.length} / Jogador</h1>
                :
                <h1 className="text-colorText">{arrayJogador.length} / Jogadores</h1>
            }



            <input type="text"
                name="jogador"
                placeholder="Nome do jogador"
                className="h-10 w-3/4 text-center rounded-[15px] mb-10 mt-5 "
                value={jogador}
                onChange={nomeJagador}
            />

            <button className="text-colorText mb-8 " onClick={AdcJogadorArray}
            >
                <h1>Adicionar Jogador</h1>
            </button>


            <section className=" h-48 w-3/4 bg-colorTrans overflow-auto touch-auto flex flex-col items-center rounded-[15px]">

                {arrayJogador.map((jogador, index) => (
                    <div className="container h-auto w-3/4 text-colorSegun flex justify-center items-center mt-1 ">
                        <p key={index}>{jogador.toUpperCase()}</p>
                    </div>
                ))}
            </section>

            <button className="mt-10 text-colorText bg-colorTrans w-3/4 h-10 rounded-[15px]"
                onClick={adicionarJogador}>
                <h1>Formar time</h1>
            </button>


            <div className="container h-auto w-3/4  text-colorSegun flex flex-col  items-center mt-8 overflow-auto touch-auto gap-2">
                {times.map((time, index) => (
                    <div key={index} className="bg-colorTrans  w-4/5 flex flex-col  items-center rounded-[15px]">
                        <h1 className="text-white" >Time {index + 1}</h1>
                        {Object.values(time).map((jogador, idx) => (
                            <h3 key={idx} className="text-">{jogador.toUpperCase()}</h3>
                        ))}
                    </div>))}
            </div>


        </div>
    )
}