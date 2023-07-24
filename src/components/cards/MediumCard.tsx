import PropertyType from "src/interfaces/Property";
import { HeartIcon as Favourited } from "@heroicons/react/24/solid";
import { HeartIcon as NotFavourited } from "@heroicons/react/24/outline";

export interface MediumCardProps {
  property: PropertyType;
}

const MediumCard = ({ property }: MediumCardProps) => {
  return (
    <div className="flex flex-col h-flex-col h-[450px] items-center m-2 mt-5 cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out rounded-b-lg">
      <div className="overflow-hidden rounded-t-lg w-full">
        <img
          className="relative h60 w-full object-cover"
          src={property.heroImg}
          alt={`${property.city} - ${property.country}`}
        />
        {property.favourited ? (
          <Favourited
            className="text-red-600 h-8 absolute top-4 right-6 cursor-pointer hover:scale-110"
            title="Saved as favourite"
          />
        ) : (
          <NotFavourited
            className="text-red-600 h-8 absolute top-4 right-6 cursor-pointer hover:scale-110"
            title="Not saved as favourite"
          />
        )}
      </div>
    </div>
  );
};

export default MediumCard;
