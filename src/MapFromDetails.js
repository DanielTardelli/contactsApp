import React from 'react'

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {fromLonLat, transform} from 'ol/proj';
import { Point } from 'ol/geom';
import { Icon } from 'ol/style';
import { Style } from 'ol/style';
import { Vector as V1 } from 'ol/source';
import { Vector as V2 } from 'ol/layer';
import { Feature } from 'ol'


import MapPinIcon from './map-pin-icon.png'


const MapFromDetails = ({lng, lat, id, mode}) => {
    const idMap = `map${id}${mode}`;
    
    React.useEffect(() => {
        const iconFeature = new Feature({
            geometry: new Point(fromLonLat([lng, lat])),
            name: 'Location',
          });

        const map = new Map({
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
              new V2({
                source: new V1({
                    features:[iconFeature]
                }),
                style: new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        anchorXUnits: 'fracton',
                        anchorYUnits: 'fraction',
                        src: "https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png"
                    })
                })
              })
            ],
            target: idMap,
            view: new View({
              center: fromLonLat([lng, lat]),
              zoom: 3,
            }),
            controls:[]
          });
        
          return () => {
            map.setTarget(null)
          }
    },[])

    return (
        <>
            <div id={idMap} className={idMap} style={{height:'100%', width:'100%'}}/>
        </>
    )
}

export default MapFromDetails