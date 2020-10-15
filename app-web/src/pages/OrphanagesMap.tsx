import React from 'react';
import '../styles/global.css';
import '../styles/pages/orphanagesMap.css';
import MapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: MapMarkerImg,
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [-10, -70],
})

function OrphanagesMap() {
    return (
        <div className="page-map">
            <aside>
                <img src={MapMarkerImg} alt="Logo Happy" />
                <h1>Escolha um orfanato no mapa</h1>
                <p>Muitas crianças estão esperando a sua visita :)</p>
                <footer>
                    <p>Jaú, São Paulo</p>
                </footer>
            </aside>

            <Map
                center={[-22.2934931, -48.56993]}
                zoom={17}
                style={{ width: "70%", height: "100%" }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                    /> */}

                <Marker
                    icon={mapIcon}
                    position={[-22.2934931, -48.56993]}
                >
                    <Popup closeButton={false} minWidth={200} maxWidth={250} className="map-popup">
                        Lar das meninas
                            <Link to=""><i className="fas fa-arrow-right"></i></Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="" className="create-orphanage"><i className="fas fa-plus"></i></Link>
        </div>
    )
}

export default OrphanagesMap;