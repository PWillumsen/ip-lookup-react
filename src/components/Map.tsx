import { MapContainer, TileLayer, Marker } from 'react-leaflet'

interface MapProps {
    lat: number,
    lon: number,
}

function Map({ lat, lon }: MapProps) {

    return (
        <MapContainer key={JSON.stringify({ lat, lon })} className='h-screen w-screen z-10' center={[lat, lon]} zoom={15} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]}>
            </Marker>
        </MapContainer>
    );
}

export default Map;