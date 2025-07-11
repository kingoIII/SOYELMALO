import React from 'react';
import FeaturedItemCard from '../components/home/FeaturedItemCard'; // Import the new card component

// Placeholder MagnifyingGlassIcon (can be moved to a shared icon file later)
const MagnifyingGlassIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
  </svg>
);

const HomePage: React.FC = () => {
  const featuredItems = [
    {
      title: "The Sound of Tomorrow",
      description: "Explore the latest sounds shaping the future of music.",
      // imageUrl: "https://example.com/image1.jpg" // Placeholder image URL if you have one
    },
    {
      title: "Future Beats",
      description: "Dive into the world of future beats with cutting-edge samples.",
      // imageUrl: "https://example.com/image2.jpg"
    },
    {
      title: "Electronic Explorations",
      description: "Discover innovative sounds in the realm of electronic music.",
      // imageUrl: "https://example.com/image3.jpg"
    }
  ];

  return (
    <div className="px-5 md:px-10 lg:px-40 py-5 flex-1 justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">

        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#9cabba] flex border-none bg-[#283039] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <MagnifyingGlassIcon />
              </div>
              <input
                placeholder="Search for sounds, instruments, genres..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#283039] focus:border-none h-full placeholder:text-[#9cabba] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              />
            </div>
          </label>
        </div>

        <section className="mt-5 px-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Featured</h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              {featuredItems.map((item, index) => (
                <FeaturedItemCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  // imageUrl={item.imageUrl} // Pass if you have image URLs
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5 px-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">New Releases</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-[#283039]">
                </div>
                <p className="text-white text-base font-medium leading-normal">New Release {item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 px-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Recommended for You</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[1, 2, 3].map(item => (
              <div key={item} className="flex flex-col gap-3 pb-3">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-[#283039]">
                </div>
                <p className="text-white text-base font-medium leading-normal">Recommended {item}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
