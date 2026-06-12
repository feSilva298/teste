import { Car, Cloud, Flag, TriangleAlert, OctagonMinus, Thermometer, MapPin } from "lucide-react"

export default function Cards() {
  return (
    <>
    <div className="mt-15 flex flex-col items-center gap-4 px-4 lg:flex-row lg:flex-wrap lg:justify-center">
      
      <div className="grid grid-rows-2 border-2 bg-white px-6 py-6 gap-10 w-full max-w-md">
        <div className="flex items-center gap-2">
            <TriangleAlert className="h-14 w-14"/>
            <p className="text-xl md:text-2xl">
                Nº Ocorrências - Últimas 24 horas
            </p>
        </div>

        <div className="flex justify-center gap-12 md:gap-20 text-2xl">
          <div className="flex flex-col items-center">
            <p className="text-red-600 text-4xl md:text-5xl font-bold">4</p>
            <p className="text-lg text-red-600 md:text-2xl font-semibold">Graves</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-orange-600 text-4xl md:text-5xl font-bold">9</p>
            <p className="text-lg text-orange-600 md:text-2xl font-semibold">Médias</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-green-600 text-4xl md:text-5xl font-bold">17</p>
            <p className="text-lg text-green-600 md:text-2xl font-semibold">Leves</p>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 border-2 bg-white px-6 py-6 gap-10 w-full max-w-md">
        <div className=" flex items-center gap-2">
            <OctagonMinus className="h-14 w-14"/>
          
            <p className="text-xl md:text-2xl">
                Situação do trânsito
            </p>
        </div>
        <div className="flex justify-center gap-6 md:gap-25">
          <div className="flex flex-col items-center">
            <p className="text-red-600 text-4xl md:text-5xl font-bold">
              3:10 m
            </p>

            <p className="text-lg md:text-2xl text-red-600">
              Acima da média
            </p>
          </div>

          <Car className="h-14 w-14 md:h-20 md:w-20 bg-red-500 rounded-full p-2" />
        </div>
      </div>

      <div className="grid grid-rows-2 border-2 bg-white px-6 py-6 gap-10 w-full max-w-md">
        <div className="flex items-center">
            <Thermometer className="h-14 w-14"/>
            <p className="text-xl md:text-2xl">
                Clima hoje
            </p>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-35">
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-bold">
              24 ºC
            </p>

            <p className="text-lg md:text-2xl">
              12% Chuva
            </p>
          </div>

          <Cloud className="h-14 w-14 md:h-20 md:w-20 bg-blue-300 rounded-full p-2" />
        </div>
      </div>

      <div className="grid grid-rows-2 border-2 bg-white px-6 py-6 gap-10 w-full max-w-md">
        <div className="flex items-center gap-2">
            <MapPin className="h-14 w-14"/>
            <p className="text-xl md:text-2xl">
                Localização atual
            </p>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-30">
          <div className="flex flex-col">
            <p>Estado de São Paulo,</p>
            <p className="text-xl md:text-2xl font-bold">
              Taubaté
            </p>
          </div>

          <Flag className="h-14 w-14 md:h-20 md:w-20 bg-green-600 rounded-full p-4" />
        </div>
      </div>
    </div>
        </>
    )
}