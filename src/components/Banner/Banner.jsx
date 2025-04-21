import React, { useState } from "react";
import Button from "../UI/Button";

const Banner = ({handleSearch}) => {
  const [searchText, setSearchText] = useState('')
  return (
    <div>
      <img
        className="w-full mx-auto md:max-w-md"
        src="https://i.ibb.co.com/cc9t1Wwd/banner.png"
        alt=""
      />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-black">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view, details and purchse of top
          flagship phones <br /> of the current time - Gadget Duar
        </p>
        <form onSubmit={(e) => {
          handleSearch(e, searchText);
          // reset input state
          setSearchText('');
        }} className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24">
          <input value={searchText} onChange={e => setSearchText(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg shadow-md w-2/4 h-13 px-4 mb-3 md:mb-0 focus:outline-none focus:shadow-outline md:mr-2"
            type="text"
            placeholder="Search Phone by Name"
          />
         <Button type='submit' label='Search'></Button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
