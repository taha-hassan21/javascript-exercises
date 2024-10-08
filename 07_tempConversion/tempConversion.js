const convertToCelsius = function(fan) {
  let x=(fan-32)*5/9;
  x=Math.round(x*10)/10;
  return x;
};

const convertToFahrenheit = function(cel) {
  let y=cel*9/5+32
  y=Math.round(y*10)/10;
  return y;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
