import ImageColetes from '../../image/coletes.jpg'
import ImageJogador from '../../image/fut.jpg'
import ImageBola from '../../image/bola.png'
import { Link } from 'react-router-dom'


export default function Home() {

    return (

        <div className=" h-screen  flex  justify-center items-center overflow-hidden">
            <section className=' container flex flex-col justify-center items-center'>
                <h1 className='mt-7 text-colorText text-2xl'>FUT VILA GRANADA</h1>

                <div className="h-auto w-full mt-20 flex gap-2 p-2">
                    <button className="w-2/4 " >
                        <Link to="/coletes">
                            <p className="mb-2 text-colorText text-lg">POR COLETE</p>
                            <figure className="h-60 bg-colorSegun  rounded-lg flex justify-center items-center">
                                <img src={ImageColetes} alt='coletes' className='rounded-[30px] max-w-28' />
                            </figure>
                        </Link>
                    </button>

                    <button className="w-2/4 ">
                        <Link to="/jogador">
                            <p className="mb-2 text-colorText text-lg">POR JOGADOR</p>
                            <figure className="h-60 bg-colorSegun  rounded-lg flex justify-center items-center">
                                <img src={ImageJogador} alt='jogador' className='rounded-[30px] max-w-28 ' />
                            </figure>
                        </Link>
                    </button>
                </div>

                <figure className='mt-10'>
                    <img src={ImageBola} alt='bola' className='h-40 bola' />
                </figure>

            </section>
        </div>

    )
}