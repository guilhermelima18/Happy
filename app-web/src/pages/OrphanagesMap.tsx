import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/pages/orphanagesMap.css';
import MapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import api from '../services/api';

const mapIcon = Leaflet.icon({
    iconUrl: MapMarkerImg,
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [-10, -70],
})

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

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
                zoom={15}
                style={{ width: "70%", height: "100%" }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={200} maxWidth={250} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}><i className="fas fa-arrow-right"></i></Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage"><i className="fas fa-plus"></i></Link>
        </div>
    )
}

export default OrphanagesMap;