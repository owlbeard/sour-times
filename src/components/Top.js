import React from 'react';
import Entries from '../data/entries.json';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import Icon from '../assets/water.svg';

export default function Top() {
  const sortedEntries = Entries.sort((a, b) => b.fav - a.fav);
  return (
    <>
      <div>
        <h1 className="text-sourMute text-xl">top</h1>
      </div>
      {sortedEntries.map((entry) => {
        return (
          <Link to={'/entry/' + entry.entry_no} key={uniqid()}>
            <div className="flex justify-between items-center gap-3 w-60">
              <h3 className="text-sm w-48 text-sourText">{entry.heading}</h3>
              <p className="text-sm text-sourMute">{entry.fav}</p>
              <img id="icon" className="h-4" src={Icon} alt="fav count" />
            </div>
          </Link>
        );
      })}
    </>
  );
}
