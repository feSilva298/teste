import { Car, Cloud, Flag } from "lucide-react"

export default function Cards(){
    return(
        <>
        <div className="flex mt-15 ml-40 gap-10">

            
            <div className="grid grid-rows-2 border-2 px-10 py-8 bg-white">
                <p className=" text-2xl">Nº Ocorrências - Ultimas 24 horas</p>
                <div className="flex justify-center gap-8 text-2xl">
                    <div className="flex flex-col items-center">
                        <p className="text-red-600 text-5xl font-bold">4</p>
                        <p className="text-2xl font-semibold">Graves</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-orange-600 text-5xl font-bold">9</p>
                        <p className="text-2xl font-semibold">Medias</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-green-600 text-5xl font-bold">17</p>
                        <p className="text-2xl font-semibold">Leves</p>
                    </div>
                </div>
            </div>

             <div className="grid grid-rows-2 border-2 px-10 py-8 bg-white">
                <p className=" text-2xl">Situação do trânsito</p>
                <div className="flex justify-center gap-18 text-2xl">
                    <div className="flex flex-col">
                        <p className="text-red-600 text-5xl font-bold">3:10 m</p>
                        <p className="text-2xl text-red-600">Acima da média</p>
                    </div>
                    <div className="flex">
                        <Car className="h-20 w-20 bg-red-500 rounded-full p-2"/>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 border-2 px-10 py-8 bg-white">
                <p className=" text-2xl">Clima hoje</p>
                <div className="flex justify-center gap-18 text-2xl">
                    <div className="flex flex-col">
                        <p className=" text-5xl font-bold">24 ºC</p>
                        <p className="text-2xl">12% Chuva</p>
                    </div>
                    <div className="flex">
                        <Cloud className="h-20 w-20 bg-blue-300 rounded-full p-2"/>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 border-2 px-10 py-8 bg-white">
                <p className=" text-2xl">Localização atual</p>
                <div className="flex justify-center gap-18 text-2xl">
                    <div className="flex flex-col">
                        <p className="">Estado de São Paulo</p>
                        <p className="text-2xl font-bold">Taubaté</p>
                    </div>
                    <div className="flex">
                        <Flag className="h-20 w-20 bg-green-600 rounded-full p-4"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}