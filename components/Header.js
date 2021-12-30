import Image from "next/image";
import {
  GlobeAltIcon,
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/*left - logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="AirbnbLogo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle - search section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-lg duration-300">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        ></input>
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <div className="hover:bg-gray-100 rounded-full p-3">
          <p className="hidden md:inline">Become a host</p>
        </div>
        <div className="hover:bg-gray-100 rounded-full p-3">
          <GlobeAltIcon className="h-6 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-lg duration-300">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
