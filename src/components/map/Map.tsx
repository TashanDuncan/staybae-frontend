import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React, { useMemo } from "react";
import PropertyType from "src/interfaces/Property";
import { Region, getCoordinatesByRegion } from "src/utils/Regions";

type MapProps = {
  searchResults: PropertyType[];
  region: Region;
  searchLocation: string;
};

const Map = ({ searchResults, region }: MapProps) => {
  const centerMap = useMemo(() => {
    if (!!region) {
      return getCoordinatesByRegion(region);
    }
  }, [region]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
  });
  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  if (!searchResults) {
    return null;
  }
  return (
    <GoogleMap
      zoom={region === Region.Worldwide ? 2.5 : 5}
      center={centerMap}
      mapContainerClassName="ml-5"
      mapContainerStyle={{ width: "50vw", height: "100vh" }}
    >
      {searchResults.map((searchResult, sId) => (
        <MarkerF
          key={sId}
          position={{ lat: searchResult.lat, lng: searchResult.lon }}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
