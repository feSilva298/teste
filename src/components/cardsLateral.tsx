import { Clock, Car, Users } from "lucide-react"

export default function CardsLaterais(){
    return(
        <>
        <div className="mt-15 flex flex-col gap-4 xl:px-4 xl:ml-4 max-w-sm">
      
            <div className="flex flex-col items-center gap-6 border-2 bg-white px-6 py-6 w-full">
                <div className="flex items-center justify-center gap-2">
                    <Clock className="h-14 w-14"/>
                    <p className="text-xl md:text-2xl">
                    Tempo Médio de deslocamento
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-black text-4xl md:text-5xl font-bold">12:52</p>
                    <p className="text-lg text-black md:text-2xl">Minutos</p>
                </div>
            </div>


            <div className="flex flex-col items-center gap-6 border-2 bg-white px-6 py-6 w-full">
                <div className="flex items-center justify-center gap-2">
                    <Car className="h-14 w-14"/>
                    <p className="text-xl md:text-2xl">
                    Veículos disponíveis
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-black text-4xl md:text-5xl font-bold">26</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-6 border-2 bg-white px-6 py-6 w-full">
                <div className="flex items-center gap-2 justify-center">
                    <Users className="h-14 w-14"/>
                    <p className="text-xl md:text-2xl">
                    Agentes disponíveis
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-black text-4xl md:text-5xl font-bold">72</p>
                </div>
            </div>
        </div>
        </>
    )
}