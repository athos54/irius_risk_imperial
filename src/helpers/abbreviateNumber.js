var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];

export function abbreviateNumber(_number) {
  let number;
  if (typeof _number === "string") {
    number = _number.replace(/,/g, "");
  } else {
    number = _number;
  }
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}
