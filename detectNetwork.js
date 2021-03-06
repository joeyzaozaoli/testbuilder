// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var firstDigit = cardNumber.slice(0,1);
  var firstTwoDigits = cardNumber.slice(0,2);
  var firstThreeDigits = cardNumber.slice(0,3);
  var firstFourDigits = cardNumber.slice(0,4);
  var firstSixDigits = cardNumber.slice(0,6);
  if (cardNumber.length === 14 && (firstTwoDigits === "38" || firstTwoDigits === "39")) {
    return "Diner's Club";
  } else if (cardNumber.length === 15 && (firstTwoDigits === "34" || firstTwoDigits === "37")) {
	  return "American Express";
  } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (firstSixDigits === "564182" || firstSixDigits === "633110" || firstFourDigits === "6333" || firstFourDigits === "6759" || firstFourDigits === "4903" || firstFourDigits === "4905" || firstFourDigits === "4911" || firstFourDigits === "4936")) {
    return "Switch";
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && firstDigit === "4") {
    return "Visa";
  } else if (cardNumber.length === 16 && (firstTwoDigits === "51" || firstTwoDigits === "52" || firstTwoDigits === "53" || firstTwoDigits === "54" || firstTwoDigits === "55")) {
	  return "MasterCard";
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (firstFourDigits === "6011" || firstTwoDigits === "65" || (parseInt(firstThreeDigits) >= 644 && parseInt(firstThreeDigits) <= 649))) {
    return "Discover";
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (firstFourDigits === "5018" || firstFourDigits === "5020" || firstFourDigits === "5038" || firstFourDigits === "6304")) {
    return "Maestro";
  } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && ((parseInt(firstSixDigits) >= 622126 && parseInt(firstSixDigits) <= 622925) || (parseInt(firstThreeDigits) >= 624 && parseInt(firstThreeDigits) <= 626) || (parseInt(firstFourDigits) >= 6282 && parseInt(firstFourDigits) <= 6288))) {
    return "China UnionPay";
  } 
};