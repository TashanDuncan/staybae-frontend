import Axios from "src/api/Axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Places {
  name: string
}

const NearbyPlaces = () => {
  const [data, setData] = useState<Places[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();


  useEffect(() => {
    Axios.get(`/properties/${id}/places`)
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results)
        setLoading(false);
      })
      .catch(err => {
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
      <h1 className="text-xl md:text-2xl font-semibold mb-4">20 Nearby Restaurants</h1>
      <div className="grid grid-cols-2 gap-4">
        {data.map((place, index) => (
          <div key={index} className="mb-2">{place.name}</div>
        ))}
      </div>
    </div>

  );
};

export default NearbyPlaces;


