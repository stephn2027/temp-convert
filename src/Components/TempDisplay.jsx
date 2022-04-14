import React from 'react';

export default function TempDisplay({ tempDisplay, scale, temp }) {
  let tempSign = scale ? '℉' : '℃';
  let tempSignR = scale ? '℃' : '℉';
  return (
    <div>
      <div className="display__group">
        <div className="display__text">
          <h1>
            {temp} {tempSign} = {tempDisplay} {tempSignR}
          </h1>
        </div>
      </div>
    </div>
  );
}
