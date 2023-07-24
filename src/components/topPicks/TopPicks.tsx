import React, { useEffect, useState } from "react";
import Axios from "src/api/Axios";
import Skeleton from "../skeleton/Skeleton";
import { Link } from "react-router-dom";
import PropertyType from "src/interfaces/Property";
import MediumCard from "../cards/MediumCard";

const TopPicks = () => {
  const [topPicks, setTopPicks] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopPicks = async () => {
      try {
        const response = await Axios.get(`/properties`);
        console.log("TopPicks response", response);

        if (response.status === 200) {
          setTopPicks(response.data);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopPicks();
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
      {!loading &&
        topPicks.map((topPickProperty, tpId) => {
          return (
            <Link
              to={`/property/${topPickProperty._id}`}
              key={`top-pick-${tpId}`}
            >
              <MediumCard property={topPickProperty} />
            </Link>
          );
        })}
    </div>
  );
};

export default TopPicks;
