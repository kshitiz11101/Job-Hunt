import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { popularSearch } from "../utils/data";
import { HeroImage } from "../assets";

const SearchInput = ({ placeholder, icon, value, setValue, styles }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = () => setValue("");

  return (
    <div className={`flex w-full md:w-1/3 items-center ${styles}`}>
      {icon}

      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type='text'
        className='w-full md:w-64 p-2 outline-none bg-transparent text-base'
        placeholder={placeholder}
      />

      <AiOutlineCloseCircle
        className='hidden md:flex text-gray-600 text-xl cursor-pointer'
        onClick={clearInput}
      />
    </div>
  );
};

const Header = ({
  title,
  type,
  handleClick,
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}) => {
  return (
    <div className='bg-[#f7fdfd]'>
      <div
        className={`container mx-auto px-5 ${
          type ? "h-[500px]" : "h-[350px]"
        } flex items-center relative text-center`}
      >
        <div className='w-full z-10'>
          <div className='mb-8'>
            <p className='text-slate-700 font-bold text-4xl'>{title}</p>
          </div>

          <div className='w-full flex items-center justify-around bg-white px-2 md:px-5 py-2.5 md:py-6 shadow-2xl rounded-full'>
            <SearchInput
              placeholder='Job Title or Keywords'
              icon={<AiOutlineSearch className='text-gray-600 text-xl' />}
              value={searchQuery}
              setValue={setSearchQuery}
            />
            <SearchInput
              placeholder='Add Country or City'
              icon={<CiLocationOn className='text-gray-600 text-xl' />}
              value={location}
              setValue={setLocation}
              styles={"hidden md:flex"}
            />

            <div>
              <CustomButton
                onClick={handleClick}
                title='Search'
                containerStyles={
                  "text-white py-2 md:py3 px-3 md:px-10 focus:outline-none bg-blue-600 rounded-full md:rounded-md text-sm md:text-base"
                }
              />
            </div>
          </div>

          {type && (
            <div className='w-full lg:1/2 flex flex-wrap gap-3 md:gap-6 py-10 md:py-14'>
              {popularSearch.map((search, index) => (
                <span
                  key={index}
                  className='text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600 cursor-pointer'
                >
                  {search}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* <div className='w-1/4 h-full absolute top-24 md:-top-6 lg:-top-14 right-16 2xl:right-[18rem]'>
          <img src={HeroImage} className='object-contain' />
        </div> */}
      </div>
    </div>
  );
};

export default Header;