import mapa from "@/assets/mapa.png"

export default function Mapa(){


    return(
        <>
        <div className="flex items-center justify-center bg-green-600 xl:mt-6 xl:ml-6 h-150 ml-1 mr-1 xl:h-159 xl:w-360 hover:scale-105 duration-200 rounded-md border-2">
            <img src={mapa} className="w-full h-full"></img>
        </div>
        </>
    )
}