import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Example icons for testing
const defaultIcon = L.icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const pointerIcon = L.icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/marker-icon.png", // URL to your pointer icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const icons = {
  cafe: defaultIcon,
  restaurant: defaultIcon,
  tourist: defaultIcon,
  hotel: defaultIcon,
  park: defaultIcon,
  museum: defaultIcon,
  cinema: defaultIcon,
  bakery: defaultIcon,
  library: defaultIcon,
  gym: defaultIcon,
  shoppingMall: defaultIcon,
  beach: defaultIcon,
  zoo: defaultIcon,
  monument: defaultIcon,
  church: defaultIcon,
  hospital: defaultIcon,
  school: defaultIcon,
  pharmacy: defaultIcon,
  airport: defaultIcon,
  busStation: defaultIcon,
  trainStation: defaultIcon,
  petrolStation: defaultIcon,
  postOffice: defaultIcon,
  policeStation: defaultIcon,
  fireStation: defaultIcon,
  supermarket: defaultIcon,
  sportsComplex: defaultIcon,
  theater: defaultIcon,
  artGallery: defaultIcon,
  spa: defaultIcon,
  nightclub: defaultIcon,
  bar: defaultIcon,
  fastFood: defaultIcon,
  placeType: pointerIcon,
};

function MapViewUpdater({ latitude, longitude, markerRef }) {
  const map = useMap();

  useEffect(() => {
    if (latitude && longitude) {
      map.flyTo([latitude, longitude], 13, { duration: 2, animate: true });
    }
  }, [latitude, longitude, map]);

  useMapEvents({
    moveend: () => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    },
  });

  return null;
}

function MapComponent({ ipDatas }) {
  const markerRef = useRef(null);
  const placeType = ipDatas?.type || "cafe";

  return (
    <MapContainer center={[ipDatas?.latitude, ipDatas?.longitude]} zoom={13}>
      <TileLayer
        attribution="Riwaz Thapa"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[ipDatas?.latitude, ipDatas?.longitude]}
        icon={icons[placeType] || defaultIcon}
        ref={markerRef}
      >
        <Popup>
          <div>
            <h4>{ipDatas?.locationName}</h4>
            <div className="flex gap-1 items-center">
              <p className="font-medium">{ipDatas?.country_name}</p>,
              <p>{ipDatas?.city}</p>
            </div>
            <p>
              {ipDatas?.latitude} {ipDatas?.longitude}
            </p>
          </div>
        </Popup>
      </Marker>
      <MapViewUpdater
        latitude={ipDatas?.latitude}
        longitude={ipDatas?.longitude}
        markerRef={markerRef}
      />
    </MapContainer>
  );
}

export default MapComponent;
