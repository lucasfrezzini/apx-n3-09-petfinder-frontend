import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useMemo } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

import MapInfoCard from "../../../ui/MapInfoCard";
import MapPin from "../../../ui/MapPin";
import PETS from "../../../petsMap.json";

const TOKEN =
  "pk.eyJ1IjoidGFub2RldmVsb3BlciIsImEiOiJjbTYzdXoxY3YxZzFzMmxvdW9oN3EwZ3p6In0.5rPl_irsXaZzKAt1lMg-iw";

export default function LostPetsMap() {
  const [popupInfo, setPopupInfo] = useState<{
    lat: string;
    lng: string;
    name: string;
    size: string;
    type_pet: string;
    status: string;
    imageURL: string;
  } | null>(null);

  const pins = useMemo(
    () =>
      PETS.map((pet, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={parseFloat(pet.lng)}
          latitude={parseFloat(pet.lat)}
          anchor="bottom"
          onClick={(e: any) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(pet);
          }}
        >
          <MapPin src={pet.imageURL} />
        </Marker>
      )),
    []
  );

  return (
    <main className="w-full mt-[64px]">
      <Map
        initialViewState={{
          latitude: -34.6277,
          longitude: -58.4477,
          zoom: 14,
          bearing: 0,
          pitch: 0,
        }}
        style={{ width: "100%", height: "700px" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={TOKEN}
        scrollZoom={false}
      >
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <GeolocateControl position="top-left" />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            maxWidth="260px"
            longitude={Number(popupInfo.lng)}
            latitude={Number(popupInfo.lat)}
            onClose={() => setPopupInfo(null)}
          >
            <MapInfoCard
              name={popupInfo.name}
              size={popupInfo.size}
              type={popupInfo.type_pet}
            />
          </Popup>
        )}
      </Map>
    </main>
  );
}
