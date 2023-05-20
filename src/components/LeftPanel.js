import React from 'react';
import Headings from '../data/headings.json';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

export default function LeftPanel({ channel }) {
  return channel === 'hot' ? (
    <>
      <div
        id="headings"
        className="flex flex-col gap-6 h-sourLeftHeight overflow-auto pr-2 pb-5"
      >
        <div>
          <h1 className="text-sourMute text-xl">{channel}</h1>
        </div>
        {Headings.map((heading) => {
          return (
            <Link to={'/' + heading.name} key={uniqid()}>
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-xs w-52 text-sourText">{heading.name}</h3>
                <p className="text-xs text-sourMute">{heading.entryCount}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <>
      <div>
        <h1 className="text-sourMute text-xl pb-3">{channel}</h1>
      </div>
      <div
        id="headings"
        className="flex flex-col gap-6 h-5/6 overflow-auto pr-2 pb-5"
      >
        {Headings.map((heading) => {
          return heading.channel === channel ? (
            <Link to={'/' + heading.name} key={uniqid()}>
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-sm w-52 text-sourText">{heading.name}</h3>
                <p className="text-sm text-sourMute">{heading.entryCount}</p>
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </>
  );
}
