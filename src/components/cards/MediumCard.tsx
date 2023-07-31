import PropertyType from "src/interfaces/Property";
import { HeartIcon as Favourited } from "@heroicons/react/24/solid";
import { HeartIcon as NotFavourited } from "@heroicons/react/24/outline";
import Rating from "../rating/Rating";
import { format } from "date-fns";
import useFavourite from "src/hooks/useFavourite";
import { Link } from "react-router-dom";

export interface MediumCardProps {
  property: PropertyType;
}

const MediumCard = ({ property }: MediumCardProps) => {
  const formattedStartDate = format(new Date(property.dateFrom), "d");
  const formattedEndDate = format(new Date(property.dateTo), "d MMM");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const { isFavourite, addFavourites, removeFavourite } = useFavourite();
  const propertyIsSaved = isFavourite(property._id!);

  const toggleSave = () => {
    if (propertyIsSaved) {
      removeFavourite(property._id!);
    } else {
      addFavourites(property);
    }
  };
  return (
    <div className="flex flex-col h-flex-col h-[450px] items-center m-2 mt-5 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out rounded-b-lg">
      <div className="overflow-hidden rounded-t-lg w-full">
        <Link to={`/property/${property._id}`}>
          <img
            className="relative h-60 w-full object-cover"
            src={property.heroImg}
            alt={`${property.city} - ${property.country}`}
          />
        </Link>
        {propertyIsSaved ? (
          <div onClick={toggleSave} title="Click to unsave">
            <Favourited
              className="text-red-600 h-8 absolute top-4 right-6 cursor-pointer hover:scale-110"
              title="Saved as favourite"
            />
          </div>
        ) : (
          <div onClick={toggleSave} title="Click to save">
            <NotFavourited
              className="text-red-600 h-8 absolute top-4 right-6 cursor-pointer hover:scale-110"
              title="Not saved as favourite"
            />
          </div>
        )}

        {/* Property Details */}
        <Link to={`/property/${property._id}`}>
          <div className="flex flex-col p-6 w-full space-y-2">
            <div className="flex flex-row space-x-3 items-center">
              <span className="text-sm">{property.numBeds} BEDS</span>
              <span>&bull;</span>
              <span className="text-sm">{property.numRooms} Rooms</span>
              <span>&bull;</span>
              <span className="text-sm">{property.numToilets} Toilets</span>
            </div>

            <div className="flex flex-row justify-between">
              <span className="font-bold text-md">
                {property.city}, {property.country}
              </span>
              <Rating
                id={property._id!}
                ratingScore={property.rating}
                doSingle={true}
                propertyRating={property.rating}
              />
            </div>
            <span className="text-sm text-gray-500">{property.caption}</span>
            <span className="text-sm">{range}</span>
            <div className="flex flex-row">
              <span className="font-semibold">
                &pound;{property.totalPrice}
              </span>
              <span>&nbsp;total</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MediumCard;
