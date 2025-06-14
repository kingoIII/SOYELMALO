import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

// Placeholder SVGs for icons - you can replace these with actual icons or an icon library later
const MagnifyingGlassIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
  </svg>
);

const HeartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
  </svg>
);

const ShoppingCartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
  </svg>
);

const AppLogoIcon: React.FC = () => ( // Copied from your mockup
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
  </svg>
);


const Header: React.FC = () => {
  // Placeholder user image URL
  const userProfileImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAdbOL-CB5REv_NkIcEDcVg4r4abPI8bcvez1ulJR97PFoAVxTF-08ESorxYnOrLKgye6uYFRTSJzC9gFe20NLBNRVfboH8BoD7me0dWB93aBHSO6v1xLbmpMBLGkwWkjg4kDbDiuYCAObwMO8MPOnomDvaihpX7PNbazYeIqunvYDJJGbmk7fVf9Sd2J7sIvUt1ySC7NlK9akssfaFtmC26pdC1shs11guOEZMI_bksvSKrrfjmc-Lvs90xCRCqR_cwcIErDGoMf0";

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283039] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <AppLogoIcon />
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Sound Library</h2>
        </div>
        <nav className="flex items-center gap-9">
          <Link to="/sounds" className="text-white text-sm font-medium leading-normal">Sounds</Link>
          <Link to="/skills" className="text-white text-sm font-medium leading-normal">Skills</Link>
          <Link to="/community" className="text-white text-sm font-medium leading-normal">Community</Link>
          <Link to="/studio" className="text-white text-sm font-medium leading-normal">Studio</Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end items-center gap-8"> {/* Added items-center */}
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#9cabba] flex border-none bg-[#283039] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <MagnifyingGlassIcon />
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#283039] focus:border-none h-full placeholder:text-[#9cabba] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              // value="" // Controlled input needs onChange
            />
          </div>
        </label>
        <div className="flex items-center gap-2"> {/* Added items-center */}
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#283039] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-white">
              <HeartIcon />
            </div>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#283039] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-white">
              <ShoppingCartIcon />
            </div>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: `url("${userProfileImageUrl}")` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
