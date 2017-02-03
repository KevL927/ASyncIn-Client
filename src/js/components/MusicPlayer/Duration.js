import React from 'react';

Number.prototype.toHHMMSS = function () {
  let seconds = Math.floor(this),
      hours = Math.floor(seconds / 3600);
  seconds -= hours*3600;
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes*60;

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
};

const format = seconds => {
  return seconds.toHHMMSS();
};

export default ({ className, seconds }) => {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </time>
  );
};