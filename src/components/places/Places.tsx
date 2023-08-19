import Axios from "src/api/Axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zhCN } from "date-fns/locale";
import Rating from "../rating/Rating";

interface Place {
  place_id: string;
  name: string;
  rating: number
  // Add more properties as needed
}

const NearbyPlaces = () => {
  const [data, setData] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`/properties/${id}/places`)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4">Error: {error.message}</div>;
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        20 Nearby Restaurants
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((place, index) => (
          <div>
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
            target="_blank"
            key={index}
            className="mb-2 text-orange-500 hover:text-blue-700  visited:text-orange-800"
          >
            {place.name}

          </a>
          <Rating
                id={place.name}
                ratingScore={place.rating}
                doSingle={true}
                propertyRating={place.rating}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
