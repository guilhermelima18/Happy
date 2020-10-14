import React from 'react';
import '../styles/global.css';
import '../styles/pages/orphanagesMap.css';
import MapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
                center={[13.6571599,-69.718235]}
                zoom={5}
                style={{width: "70%", height: "100%"}}
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {/* <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                    /> */}
            </Map>

            <Link to="" className="create-orphanage"><i className="fas fa-plus"></i></Link>
        </div>
    )
}

export default OrphanagesMap;