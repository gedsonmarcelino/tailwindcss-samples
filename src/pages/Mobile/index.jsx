import React from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';

import {
  FaRegBell,
  FaSearch,
  FaBookmark,
  FaHome,
  FaRegCompass,
  FaPlus,
} from 'react-icons/fa';

export const Mobile = () => {
  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="max-w-sm flex justify-center bg-white">
        <div className="container p-6 pb-12 max-w-sm">
          <header className="flex flex-row items-center place-content-between mb-5">
            <Link to="/">
              <h1 className="text-3xl font-medium ">RoomClub</h1>
            </Link>
            <img className="rounded" src="https://picsum.photos/id/237/50/50" />
          </header>
          <div className="flex flex-row place-content-between items-center mb-10 gap-2">
            <div className="flex flex-row items-center rounded-2xl bg-gray-50 px-4 py-3">
              <FaSearch className="mr-4 text-gray-400" size="1.25em" />
              <input
                className="bg-gray-50 text-gray-400 focus:outline-none w-full"
                placeholder="Search random room"
              />
            </div>
            <span className="flex-1">
              <FaRegBell size={28} />
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-4">Join Chatroom</h2>
            <ScrollContainer className="flex flex-row gap-3 overflow-hidden mb-10">
              {['Lifestyle', 'Food', 'Love', 'Music', 'Dream'].map((text) => (
                <span className="rounded-md bg-gray-50 shadow py-3 px-4 items-center flex gap-2">
                  <span className="inline-block w-6 h-6 bg-gray-400 rounded"></span>
                  {text}
                </span>
              ))}
            </ScrollContainer>
            {[1, 2, 3, 4].map((item) => (
              <div
                className="relative flex flex-col justify-end bg-no-repeat w-full h-80 bg-center rounded-2xl mb-10"
                style={{
                  backgroundImage: `url(https://picsum.photos/336/320?random=${item})`,
                }}
              >
                <span className="absolute right-3 top-3 bg-white p-3 rounded-2xl">
                  <FaBookmark size={28} />
                </span>

                <div className="bg-white mx-5 mb-4 p-5 rounded-2xl">
                  <h3 className="text-1xl font-medium">Life n' Chill</h3>
                  <div className="text-sm text-gray-400 mb-3">
                    <span className="font-medium">Hosted By:</span> Leo Carder
                  </div>

                  <div className="flex flex-row place-content-between">
                    <div className="flex flex-row gap-1">
                      {[64, 65, 237, 342].map((val) => (
                        <span
                          className="bg-no-repeat bg-center w-8 h-8 inline-block rounded"
                          style={{
                            backgroundImage: `url(https://picsum.photos/id/${val}/50/50)`,
                          }}
                        ></span>
                      ))}
                      <span className="bg-no-repeat bg-center w-8 h-8 inline-block bg-gray-300 rounded flex justify-center items-center text-xs">
                        +16
                      </span>
                    </div>
                    <button className="text-white bg-purple-700 px-5 rounded">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <nav className="fixed bottom-0 flex flex-row items-center place-content-between bg-white w-full py-4 px-6 max-w-sm">
          <FaHome className="text-purple-800" size={36} />
          <FaRegCompass className="text-purple-700" size={36} />
          <button className="flex flex-row items-center text-md bg-purple-700 text-white px-7 py-1 rounded-xl">
            <span className="mr-4 text-3xl font-light">+</span>
            Start Room
          </button>
        </nav>
      </div>
    </div>
  );
};
