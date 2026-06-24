import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Mapa(){
    return(
        <>
        <div className="flex items-center justify-center xl:mt-3 h-150 mr-1 xl:h-159 xl:w-350 rounded-md border">
            <MapContainer center={[-23.0264, -45.5553]} zoom={13} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
        </>
    )
}