import React from 'react';
import Headings from '../data/headings.json';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

export default function LeftPanel({ channel }) {
  return (
    <>
      <div>
        <h1 className="text-sourMute text-xl">{channel}</h1>
      </div>
      {Headings.map((heading) => {
        return channel === 'hot' && heading.hot === true ? (
          <Link to={'/' + heading.name} key={uniqid()}>
            <div className="flex justify-between items-center gap-3 w-60">
              <h3 className="text-sm w-48 text-sourText">{heading.name}</h3>
              <p className="text-sm text-sourMute">{heading.entryCount}</p>
            </div>
          </Link>
        ) : heading.channel === channel ? (
          <Link to={'/' + heading.name} key={uniqid()}>
            <div className="flex justify-between items-center gap-3">
              <h3 className="text-sm w-48 text-sourText">{heading.name}</h3>
              <p className="text-sm text-sourMute">{heading.entryCount}</p>
            </div>
          </Link>
        ) : null;
      })}
      {channel === 'hot' ? (
        <div className="flex justify-end items-center text-sm text-sourText">
          more...
        </div>
      ) : null}
    </>
  );
}
