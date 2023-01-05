import {
  GoogleMap, InfoWindowF, Marker, useLoadScript
} from "@react-google-maps/api";
import { Dispatch, SetStateAction } from "react";
import { FaSpinner } from "react-icons/fa";
import { SchoolType } from "../types/interfaces";

const greenMarker = 'https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png'
const redMarker = 'https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-b.png'

const containerStyle = {
  width: '100%',
  height: '100%'
};
// const containerStyle = {
//   width: '600px',
//   height: '600px'
// };
const center = {
  lat: 52.126,
  lng: 21.092
};

const Map = ({
  schoolsCombined, 
  selectedSchool, 
  setSelectedSchool
}: {
  schoolsCombined: Array<SchoolType>, 
  selectedSchool: SchoolType | null, 
  setSelectedSchool: Dispatch<SetStateAction<SchoolType | null>>
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_MAPS_API_KEY)
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* <Marker position={center} /> */}
      {schoolsCombined.map(school => (
        <Marker
          key={school.id}
          position={school.position}
          onClick={() => school.id !== selectedSchool?.id && setSelectedSchool(school)}
          icon={school.type === 'school' ? greenMarker : redMarker}
        >
          {selectedSchool?.id === school.id ? (
            <InfoWindowF position={school.position} onCloseClick={() => setSelectedSchool(null)}>
              <div>
                <div className="font-semibold">{school.name}</div>
                <div className="my-1">{school.short}</div>
                <div className="text-gray-400">{school.address}</div>
              </div>
            </InfoWindowF>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : <FaSpinner />
}

export default Map;