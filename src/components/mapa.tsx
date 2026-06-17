import mapa from "@/assets/mapa.png"

export default function Mapa(){


    return(
        <>
        <div className="flex items-center justify-center bg-green-600 xl:mt-3 xl:ml-6 h-150 ml-1 mr-1 xl:h-159 xl:w-350 hover:scale-101 duration-200 transition-all rounded-md border">
            <img src={mapa} className="w-full h-full"></img>
        </div>
        </>
    )
}