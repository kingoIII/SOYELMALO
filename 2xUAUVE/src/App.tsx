import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import WelcomeAnimation from './components/WelcomeAnimation';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const ProfilePage = () => (
    <div className="px-4 @[480px]:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{ backgroundImage: 'url("https://picsum.photos/200")' }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Nombre del Usuario</p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">Descripción del usuario</p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">Joined 2021</p>
              </div>
            </div>
            <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#283039] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
            >
              <span className="truncate">Edit Profile</span>
            </button>
          </div>
        </div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Uploaded Samples</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Sample 1</p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Sample 2</p>
          </div>
        </div>
      </div>
    </div>
  );

  const SearchPage = () => (
    <div className="px-4 @[480px]:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-1 flex-col gap-2">
            <label className="text-white text-base font-medium leading-normal">Search</label>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2 bg-[#283039] text-[#9cabba]">
              <svg className="text-[#9cabba]" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15.8033 15.8033M15.8033 15.8033C17.9929 13.6137 17.9929 10.0863 15.8033 7.8967C13.6137 5.70711 10.0863 5.70711 7.8967 7.8967C5.70711 10.0863 5.70711 13.6137 7.8967 15.8033C10.0863 17.9929 13.6137 17.9929 15.8033 15.8033Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                placeholder="Search sounds, samples..."
                className="w-full bg-transparent focus:outline-none text-white"
              />
            </div>
          </div>
        </div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Results</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Result 1</p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Result 2</p>
          </div>
        </div>
      </div>
    </div>
  );

  const LibraryPage = () => (
    <div className="px-4 @[480px]:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Featured 1</p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Featured 2</p>
          </div>
        </div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">New Releases</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Release 1</p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://picsum.photos/158")' }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Release 2</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeAnimation />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
