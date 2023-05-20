import React from 'react';
import Navbar from './Navbar';
import Icon from '../assets/water.svg';
import Arrow from '../assets/menu-down.svg';
import Magnify from '../assets/magnify.svg';

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between flex-grow" id="upper">
        <div className="flex justify-start items-center gap-40 flex-grow ">
          <div className="flex items-center">
            <img className="h-7" id="icon" src={Icon} alt="sourtimes" />
            <h1 className="text-2xl font-bold">sour</h1>
            <h1 className="text-sour text-2xl font-bold">times</h1>
          </div>
          <div
            className="flex items-center justify-between border
             border-sour bg-white rounded-md w-96"
          >
            <input
              type="search"
              className="rounded-md h-6 text-black focus:outline-none appearance-none"
              placeholder="caption, #entry, @writer"
            />
            <div className="flex">
              <button className="p-0.5">
                <img
                  id="downArrow"
                  className="h-4"
                  src={Arrow}
                  alt="down arrow"
                />
              </button>
              <button className="bg-sour rounded-r-md p-0.5">
                <img
                  id="magnify"
                  className="h-6"
                  src={Magnify}
                  alt="magnifying glass"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <button id="login" className="text-gray-400">
            login
          </button>
          <button id="register" className="text-gray-400">
            register
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
