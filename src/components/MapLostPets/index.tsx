import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

import MapInfoCard from "../../ui/MapInfoCard";
import MapPin from "../../ui/MapPin";
import { Pet } from "../../utils/types";

interface LostPetsMapProps {
  pets: Pet[];
  coords?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const TOKEN =
  "pk.eyJ1IjoidGFub2RldmVsb3BlciIsImEiOiJjbTYzdXoxY3YxZzFzMmxvdW9oN3EwZ3p6In0.5rPl_irsXaZzKAt1lMg-iw";

export default function MapLostPets({
  pets,
  coords = { lat: -34.6277, lng: -58.4477 },
  zoom = 8,
}: LostPetsMapProps) {
  const [popupInfo, setPopupInfo] = useState<Pet | null>(null);

  const pins = pets.map((pet, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={Number(pet.lng)}
      latitude={Number(pet.lat)}
      anchor="bottom"
      onClick={(e: any) => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setPopupInfo(pet);
      }}
    >
      <MapPin variant src={pet.images[0].url} />
    </Marker>
  ));

  return (
    <main className="w-full mt-[64px]">
      <Map
        initialViewState={{
          latitude: coords.lat,
          longitude: coords.lng,
          zoom: zoom,
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
              id={popupInfo.id}
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
