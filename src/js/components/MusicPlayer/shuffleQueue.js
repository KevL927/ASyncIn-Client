//The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
//See https://github.com/coolaj86/knuth-shuffle

export default array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
};