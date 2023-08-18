import axios from 'axios';

interface Place {
  place_id: string;
  name: string;
  // Add more properties as needed
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const getNearbyPlaces = async (location: { lat: number; lng: number }, radius: number, type: string): Promise<Place[]> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        location: `${location.lat},${location.lng}`,
        radius: radius,
        type: type,
        key: API_KEY,
      },
      headers: {
        "Access-Control-Allow-Origin": true
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching nearby places:', error);
    return [];
  }
};

export default getNearbyPlaces;
