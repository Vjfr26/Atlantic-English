import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

export const ACADEMY_POSITION = [38.7198, -9.1445] // Av. da Liberdade, Lisboa

const pinIcon = L.divIcon({
  className: 'map-pin',
  iconSize: [44, 54],
  iconAnchor: [22, 52],
  popupAnchor: [0, -48],
  html: `
    <svg width="44" height="54" viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2C11.5 2 3 10.5 3 21c0 13.5 19 31 19 31s19-17.5 19-31C41 10.5 32.5 2 22 2z"
        fill="#101c38" stroke="#ffb020" stroke-width="2.5"/>
      <text x="22" y="28" text-anchor="middle" font-family="Sora, sans-serif" font-size="17"
        font-weight="800" fill="#ffb020">A</text>
    </svg>`,
})

export default function MapView({ className = 'h-[420px]' }) {
  return (
    <div className={`overflow-hidden rounded-3xl shadow-lg ${className}`}>
      <MapContainer center={ACADEMY_POSITION} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ACADEMY_POSITION} icon={pinIcon}>
          <Popup>
            <strong>Atlantic English Academy</strong>
            <br />
            Av. da Liberdade 110, 2.º
            <br />
            1250-146 Lisboa
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
