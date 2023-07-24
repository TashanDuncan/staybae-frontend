import StayBaeLogo from "../../assets/images/staybae.png";
import { MagnifyingGlassIcon, HeartIcon } from "@heroicons/react/20/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 grid-cols-3 bg-white shadow-md p-5">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <img
          src={StayBaeLogo}
          alt="alt"
          title="StayBae"
          height={50}
          width={50}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-md">
        <div
          className="ml-4 rounded-lg text-gray-700 text-sm cursor-pointer"
          title="Find a property by region"
        >
          Anywhere
        </div>

        <input
          type="text"
          name="search"
          id="searchID"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer md:mx-2" />
      </div>

      <div className="flex space-x-4 items-center justify-end">
        <div className="flex sm:space-x-2 cursor-pointer border-2 rounded-full p-4 hover:shadow-md">
          <p className="text-sm hidden md:inline-block">Favourites</p>
          <HeartIcon className="h-6" color="red" />
        </div>
      </div>
    </header>
  );
};

export default Header;
