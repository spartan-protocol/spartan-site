/**
 * Format using globalFormatting
 * @param {string || Number} unitString
 * @param {unit} formatDecimals
 * @returns {string} units
 */
export const formatFromUnits = (unitString, formatDecimals = 0) => {
  let decimals = formatDecimals;
  const isNeg = unitString < 0; // Check if we are dealing with a negative number
  let units = Math.abs(unitString); // Make sure we only apply rounding logic to a non-negative number
  if (units < 0.1 && decimals < 3) {
    decimals = 3;
  }
  if (units < 0.01 && decimals < 4) {
    decimals = 4;
  }
  if (units < 0.001 && decimals < 5) {
    decimals = 5;
  }
  if (units < 0.0001 && decimals < 6) {
    decimals = 6;
  }
  if (units <= 0) {
    decimals = 2;
  }
  if (isNeg) {
    units = units * -1; // Re-apply the negative value (if applicable) before handing back
  }
  const formatUnits = parseInt(units, 10).toLocaleString("en-US", { minimumFractionDigits: decimals });
  return formatUnits;
};
